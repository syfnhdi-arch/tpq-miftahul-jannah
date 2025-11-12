import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)

// Auth composable
export function useAuth() {
  const signIn = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim().toLowerCase(),
        password,
      })
      
      if (error) {
        // Better error messages
        if (error.message.includes('Invalid login credentials')) {
          return { 
            data: null, 
            error: new Error('Email atau password salah') 
          }
        } else if (error.message.includes('Email not confirmed')) {
          return { 
            data: null, 
            error: new Error('Email belum dikonfirmasi') 
          }
        }
        
        return { data: null, error }
      }

      return { data, error: null }

    } catch (err) {
      return { data: null, error: err }
    }
  }

  const signUp = async (email: string, password: string, fullName: string, phone?: string) => {
    try {
      // 1. Daftar ke Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: email.trim().toLowerCase(),
        password,
        options: {
          data: {
            full_name: fullName,
            phone: phone || ''
          }
        }
      })
      
      if (authError) {
        return { data: null, error: authError }
      }

      if (!authData.user) {
        return { data: null, error: new Error('Gagal membuat akun') }
      }

      // 2. Auto-create profile di table users
      const username = email.split('@')[0] + '_' + Date.now().toString().slice(-4)
      
      const { data: profileData, error: profileError } = await supabase
        .from('users')
        .insert({
          id: authData.user.id,
          email: email,
          username: username,
          full_name: fullName,
          phone: phone || '',
          role: 'orangtua',
          status: 'pending'
        })
        .select()
        .single()

      if (profileError) {
        return { data: null, error: profileError }
      }

      return { 
        data: { 
          user: authData.user, 
          profile: profileData 
        }, 
        error: null 
      }

    } catch (err) {
      return { data: null, error: err }
    }
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    return { error }
  }

  const getCurrentUser = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    return user
  }

  const onAuthStateChange = (callback: any) => {
    return supabase.auth.onAuthStateChange(callback)
  }

  return {
    signIn,
    signUp,
    signOut,
    getCurrentUser,
    onAuthStateChange,
  }
}

// Database composable untuk users
export function useDatabase() {
  const getProfile = async (userId: string) => {
    let { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', userId)
      .single()

    // Jika profile tidak ada, buat default
    if (error?.code === 'PGRST116') {
      // Dapatkan user data dari auth
      const { data: userData } = await supabase.auth.getUser()
      
      if (!userData.user) {
        return { data: null, error: new Error('User tidak ditemukan') }
      }

      const username = userData.user.email?.split('@')[0] + '_' + Date.now().toString().slice(-4)
      
      const { data: newProfile, error: createError } = await supabase
        .from('users')
        .insert({
          id: userData.user.id,
          username: username,
          role: 'orangtua',
          full_name: userData.user.user_metadata?.full_name || userData.user.email?.split('@')[0] || 'User',
          email: userData.user.email || '',
          phone: userData.user.user_metadata?.phone || '',
          status: 'pending'
        })
        .select()
        .single()
      
      return { data: newProfile, error: createError }
    }

    return { data, error }
  }

  const createProfile = async (profile: any) => {
    const { data, error } = await supabase
      .from('users')
      .insert(profile)
      .select()
      .single()
    return { data, error }
  }

  const getAllUsers = async () => {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .order('created_at', { ascending: false })
    return { data, error }
  }

  const updateUserRole = async (userId: string, newRole: string) => {
    const { data, error } = await supabase
      .from('users')
      .update({ role: newRole })
      .eq('id', userId)
      .select()
      .single()
    return { data, error }
  }

  const approveUser = async (userId: string, approvedBy: string) => {
    const { data, error } = await supabase
      .from('users')
      .update({ 
        status: 'approved',
        approved_by: approvedBy,
        approved_at: new Date()
      })
      .eq('id', userId)
      .select()
      .single()
    return { data, error }
  }

  const deleteUser = async (userId: string) => {
    const { error } = await supabase
      .from('users')
      .delete()
      .eq('id', userId)
    return { error }
  }

  return {
    getProfile,
    createProfile,
    getAllUsers,
    updateUserRole,
    approveUser,
    deleteUser,
  }
}