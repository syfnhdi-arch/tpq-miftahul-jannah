<template>
  <div class="admin-page">
    <div class="page-header">
      <h1>👥 Manajemen User</h1>
      <p>Kelola role dan status user</p>
    </div>

    <!-- Stats -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon">👨‍🎓</div>
        <div class="stat-info">
          <h3>Total User</h3>
          <p class="stat-number">{{ users.length }}</p>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">👨‍🏫</div>
        <div class="stat-info">
          <h3>Guru</h3>
          <p class="stat-number">{{ guruCount }}</p>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">👑</div>
        <div class="stat-info">
          <h3>Admin</h3>
          <p class="stat-number">{{ adminCount }}</p>
        </div>
      </div>
    </div>

    <!-- Users Table -->
    <div class="users-table">
      <div class="table-header">
        <h3>Daftar User</h3>
        <div class="table-actions">
          <input 
            v-model="searchQuery"
            type="text" 
            placeholder="Cari user..."
            class="search-input"
          >
        </div>
      </div>

      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Nama</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Tanggal Daftar</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in filteredUsers" :key="user.id">
              <td>
                <div class="user-info">
                  <strong>{{ user.full_name }}</strong>
                  <small>@{{ user.username }}</small>
                </div>
              </td>
              <td>{{ user.email }}</td>
              <td>
                <select 
                  v-model="user.role" 
                  @change="updateUserRole(user.id, user.role)"
                  :disabled="user.id === currentUserId"
                  class="role-select"
                >
                  <option value="orangtua">Orang Tua</option>
                  <option value="pengajar">Guru</option>
                  <option value="super_admin">Admin</option>
                </select>
              </td>
              <td>
                <span class="status-badge" :class="user.status">
                  {{ user.status === 'approved' ? 'Aktif' : 'Pending' }}
                </span>
              </td>
              <td>{{ formatDate(user.created_at) }}</td>
              <td>
                <div class="action-buttons">
                  <button 
                    v-if="user.status === 'pending'"
                    @click="approveUser(user.id)"
                    class="btn-approve"
                  >
                    ✅ Approve
                  </button>
                  <button 
                    v-if="user.id !== currentUserId"
                    @click="deleteUser(user.id)"
                    class="btn-delete"
                  >
                    🗑️ Hapus
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div v-if="filteredUsers.length === 0" class="empty-state">
          <p>😴 Tidak ada user yang ditemukan</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useDatabase } from '@/composables/useSupabase'
import { useAuthStore } from '@/stores/auth'
import { supabase } from '@/composables/useSupabase'

const { getAllUsers } = useDatabase()
const authStore = useAuthStore()

const users = ref<any[]>([])
const searchQuery = ref('')
const loading = ref(false)

const currentUserId = computed(() => authStore.user?.id)

// Computed properties untuk stats
const guruCount = computed(() => 
  users.value.filter(user => user.role === 'pengajar').length
)

const adminCount = computed(() => 
  users.value.filter(user => user.role === 'super_admin').length
)

const filteredUsers = computed(() => {
  if (!searchQuery.value) return users.value
  
  const query = searchQuery.value.toLowerCase()
  return users.value.filter(user => 
    user.full_name?.toLowerCase().includes(query) ||
    user.email?.toLowerCase().includes(query) ||
    user.username?.toLowerCase().includes(query)
  )
})

const loadUsers = async () => {
  try {
    loading.value = true
    const { data, error } = await getAllUsers()
    
    if (error) throw error
    users.value = data || []
    
  } catch (error) {
    console.error('Error loading users:', error)
    alert('Gagal memuat data user')
  } finally {
    loading.value = false
  }
}

const updateUserRole = async (userId: string, newRole: string) => {
  try {
    const { error } = await supabase
      .from('users')
      .update({ role: newRole })
      .eq('id', userId)

    if (error) throw error
    
    alert('Role user berhasil diubah!')
  } catch (error) {
    console.error('Error updating role:', error)
    alert('Gagal mengubah role user')
    // Reload data untuk revert changes
    await loadUsers()
  }
}

const approveUser = async (userId: string) => {
  if (!confirm('Approve user ini?')) return
  
  try {
    const { error } = await supabase
      .from('users')
      .update({ 
        status: 'approved',
        approved_by: currentUserId.value,
        approved_at: new Date()
      })
      .eq('id', userId)

    if (error) throw error
    
    alert('User berhasil diapprove!')
    await loadUsers()
  } catch (error) {
    console.error('Error approving user:', error)
    alert('Gagal approve user')
  }
}

const deleteUser = async (userId: string) => {
  if (!confirm('Hapus user ini? Tindakan ini tidak dapat dibatalkan.')) return
  
  try {
    const { error } = await supabase
      .from('users')
      .delete()
      .eq('id', userId)

    if (error) throw error
    
    alert('User berhasil dihapus!')
    await loadUsers()
  } catch (error) {
    console.error('Error deleting user:', error)
    alert('Gagal menghapus user')
  }
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('id-ID', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
}

onMounted(() => {
  loadUsers()
})
</script>

<style scoped>
.admin-page {
  padding: 2rem;
}

.page-header {
  margin-bottom: 2rem;
}

.page-header h1 {
  font-size: 2rem;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.page-header p {
  color: #6b7280;
  font-size: 1.1rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  gap: 1rem;
}

.stat-icon {
  font-size: 2rem;
}

.stat-info h3 {
  color: #6b7280;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.stat-number {
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f2937;
  margin: 0;
}

.users-table {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  overflow: hidden;
}

.table-header {
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.table-header h3 {
  margin: 0;
  color: #1f2937;
}

.search-input {
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  width: 250px;
}

.table-container {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #e5e7eb;
}

th {
  background: #f9fafb;
  font-weight: 600;
  color: #374151;
}

.user-info strong {
  display: block;
  color: #1f2937;
}

.user-info small {
  color: #6b7280;
  font-size: 0.8rem;
}

.role-select {
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  background: white;
}

.role-select:disabled {
  background: #f3f4f6;
  color: #6b7280;
}

.status-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.status-badge.approved {
  background: #d1fae5;
  color: #065f46;
}

.status-badge.pending {
  background: #fef3c7;
  color: #92400e;
}

.action-buttons {
  display: flex;
  gap: 0.5rem;
}

.btn-approve, .btn-delete {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 500;
}

.btn-approve {
  background: #10b981;
  color: white;
}

.btn-approve:hover {
  background: #059669;
}

.btn-delete {
  background: #ef4444;
  color: white;
}

.btn-delete:hover {
  background: #dc2626;
}

.empty-state {
  padding: 3rem;
  text-align: center;
  color: #6b7280;
}

.empty-state p {
  margin: 0;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .admin-page {
    padding: 1rem;
  }
  
  .table-header {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }
  
  .search-input {
    width: 100%;
  }
  
  .action-buttons {
    flex-direction: column;
  }
}
</style>