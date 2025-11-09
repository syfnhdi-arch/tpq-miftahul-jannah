import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

console.log('🔧 [SUPABASE] URL:', supabaseUrl)
console.log('🔑 [SUPABASE] Key exists:', !!supabaseKey)

export const supabase = createClient(supabaseUrl, supabaseKey)

// Auth composable
export function useAuth() {
  const signIn = async (username: string, password: string) => {
    console.log('🔍 [AUTH] Mencari username:', username)
    
    try {
      // Test connection dulu
      console.log('🌐 [AUTH] Testing Supabase connection...')
      const { data: testData, error: testError } = await supabase
        .from('users')
        .select('count')
        .limit(1)
      
      console.log('📡 [AUTH] Connection test:', testData, testError)

      if (testError) {
        console.log('💥 [AUTH] Connection failed:', testError)
        return { data: null, error: testError }
      }

      // Cari user by username
      console.log('🔎 [AUTH] Executing query untuk username:', username)
      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('*')
        .eq('username', username)
        .single()

      console.log('📦 [AUTH] Query result:', userData)
      console.log('❌ [AUTH] Query error:', userError)
      console.log('🔧 [AUTH] Error code:', userError?.code)
      console.log('📝 [AUTH] Error message:', userError?.message)

      if (userError) {
        if (userError.code === 'PGRST116') {
          console.log('🚫 [AUTH] No rows returned - username tidak ada di database')
        } else {
          console.log('💀 [AUTH] Other database error:', userError)
        }
        return { data: null, error: new Error('Username tidak ditemukan') }
      }

      if (!userData) {
        console.log('🚫 [AUTH] User data is null')
        return { data: null, error: new Error('Username tidak ditemukan') }
      }

      console.log('✅ [AUTH] User ditemukan:', userData)
      console.log('📧 [AUTH] Email user:', userData.email)

      // Login dengan email
      console.log('🔑 [AUTH] Attempting login dengan email:', userData.email)
      const { data, error } = await supabase.auth.signInWithPassword({
        email: userData.email,
        password,
      })
      
      console.log('🎯 [AUTH] Login result - data:', data)
      console.log('💥 [AUTH] Login result - error:', error)
      
      if (error) {
        console.log('🚫 [AUTH] Login failed:', error.message)
        return { data: null, error }
      }

      console.log('🎉 [AUTH] Login successful!')
      return { data, error: null }

    } catch (err) {
      console.log('💀 [AUTH] Catch error:', err)
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
    signOut,
    getCurrentUser,
    onAuthStateChange,
  }
}

// Database composable untuk users
export function useDatabase() {
  const getProfile = async (userId: string) => {
    console.log('👤 [DB] Getting profile for user:', userId)
    
    let { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', userId)
      .single()

    console.log('📊 [DB] Profile result:', data)
    console.log('❌ [DB] Profile error:', error)

    // Jika profile tidak ada, buat default
    if (error?.code === 'PGRST116') {
      console.log('🆕 [DB] Profile not found, creating default...')
      const { data: newProfile, error: createError } = await supabase
        .from('users')
        .insert({
          id: userId,
          username: 'user' + Date.now(),
          role: 'orangtua',
          full_name: 'User',
          email: 'user@example.com'
        })
        .select()
        .single()
      
      console.log('✅ [DB] New profile created:', newProfile)
      console.log('❌ [DB] Create error:', createError)
      
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
    return { data, error }
  }

  return {
    getProfile,
    createProfile,
    getAllUsers,
  }
}