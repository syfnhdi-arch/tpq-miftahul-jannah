import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useAuth, useDatabase } from '@/composables/useSupabase'

const { getCurrentUser, onAuthStateChange } = useAuth()
const { getProfile } = useDatabase()

export const useAuthStore = defineStore('auth', () => {
  const user = ref<any>(null)
  const profile = ref<any>(null)
  const loading = ref(true)

  // Initialize auth state
  const init = async () => {
    try {
      loading.value = true
      console.log('🔄 [AUTH STORE] Initializing auth store...')
      
      const currentUser = await getCurrentUser()
      user.value = currentUser
      
      console.log('👤 [AUTH STORE] Current user:', currentUser)
      
      if (currentUser) {
        console.log('🔍 [AUTH STORE] Getting profile for user ID:', currentUser.id)
        
        // Get user profile from database
        const { data, error } = await getProfile(currentUser.id)
        
        console.log('📊 [AUTH STORE] Profile data:', data)
        console.log('❌ [AUTH STORE] Profile error:', error)
        
        if (error) {
          console.error('🚫 [AUTH STORE] Error getting profile:', error)
          // Create default profile if not exists
          console.log('🆕 [AUTH STORE] Creating default profile...')
          profile.value = {
            id: currentUser.id,
            username: 'user' + Date.now(),
            role: 'orangtua',
            full_name: 'User',
            email: currentUser.email
          }
        } else {
          profile.value = data
          console.log('✅ [AUTH STORE] Profile set successfully:', profile.value)
        }
      } else {
        console.log('🚫 [AUTH STORE] No user logged in')
        profile.value = null
      }
    } catch (error) {
      console.error('💥 [AUTH STORE] Auth init error:', error)
    } finally {
      loading.value = false
      console.log('🏁 [AUTH STORE] Auth init completed')
    }
  }

  // Listen to auth state changes
  onAuthStateChange((event: string, session: any) => {
    console.log('🔄 [AUTH STORE] Auth state changed:', event, session)
    user.value = session?.user ?? null
    
    if (session?.user) {
      console.log('✅ [AUTH STORE] User signed in:', session.user.email)
      // Refresh profile when user changes
      init()
    } else {
      console.log('🚫 [AUTH STORE] User signed out')
      profile.value = null
    }
  })

  // Check if user has specific role
  const hasRole = (role: string) => {
    const has = profile.value?.role === role
    console.log(`🎯 [AUTH STORE] Check role ${role}:`, has)
    return has
  }

  // Get user role
  const getUserRole = () => {
    const role = profile.value?.role || null
    console.log('🎭 [AUTH STORE] Get user role:', role)
    return role
  }

  // Check if user is authenticated
  const isAuthenticated = () => {
    const authenticated = !!user.value
    console.log('🔐 [AUTH STORE] Is authenticated:', authenticated)
    return authenticated
  }

  // Get user email
  const getUserEmail = () => {
    const email = user.value?.email || ''
    console.log('📧 [AUTH STORE] Get user email:', email)
    return email
  }

  // Get user full name
  const getUserFullName = () => {
    const fullName = profile.value?.full_name || user.value?.email || 'User'
    console.log('👤 [AUTH STORE] Get user full name:', fullName)
    return fullName
  }

  // Get username
  const getUsername = () => {
    const username = profile.value?.username || ''
    console.log('👤 [AUTH STORE] Get username:', username)
    return username
  }

  // Get complete user info
  const getUserInfo = () => {
    const info = {
      user: user.value,
      profile: profile.value,
      fullName: getUserFullName(),
      role: getUserRole(),
      username: getUsername(),
      email: getUserEmail()
    }
    console.log('📋 [AUTH STORE] Get user info:', info)
    return info
  }

  return {
    // State
    user,
    profile,
    loading,
    
    // Actions
    init,
    hasRole,
    getUserRole,
    isAuthenticated,
    getUserEmail,
    getUserFullName,
    getUsername,
    getUserInfo,
  }
})