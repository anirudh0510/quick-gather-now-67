import { createClient, SupabaseClient, AuthError } from '@supabase/supabase-js';

// Get environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create a client or a placeholder based on available credentials
let supabase: SupabaseClient;

// Helper function to create an AuthError
const createAuthError = (message: string): AuthError => {
  const error = new Error(message) as AuthError;
  error.code = 'not_configured';
  error.status = 400;
  // Using AuthError properties safely
  Object.defineProperty(error, '__isAuthError', {
    value: true,
    enumerable: true
  });
  return error;
};

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  console.error('Supabase URL and/or anon key are missing. Authentication and database features will not work.');
  // Create a placeholder client with methods that do nothing but don't throw errors
  // @ts-ignore - We're creating a partial implementation deliberately
  supabase = {
    auth: {
      getSession: () => Promise.resolve({ data: { session: null }, error: null }),
      onAuthStateChange: () => ({ 
        data: { 
          subscription: { 
            id: 'mock-id', 
            callback: () => {}, 
            unsubscribe: () => {} 
          } 
        } 
      }),
      signUp: () => Promise.resolve({ 
        data: { user: null, session: null }, 
        error: createAuthError('Supabase not configured') 
      }),
      signInWithPassword: () => Promise.resolve({ 
        data: { user: null, session: null, weakPassword: null }, 
        error: createAuthError('Supabase not configured') 
      }),
      signOut: () => Promise.resolve({ error: null }),
      // Add minimal implementation of other required properties
      storageKey: "sb-session",
      autoRefreshToken: {
        value: false,
        setTo: () => {}
      },
      // Add other required methods as empty implementations
      getUser: () => Promise.resolve({ data: { user: null }, error: null }),
      refreshSession: () => Promise.resolve({ data: { session: null, user: null }, error: null }),
      setSession: () => Promise.resolve({ data: { session: null, user: null }, error: null }),
      // Mock admin and mfa objects
      admin: {},
      mfa: {},
      // Other required properties
      url: undefined,
      headers: {},
      detectSessionInUrl: () => ({ data: { session: null }, error: null }),
    },
    from: () => ({
      select: () => {
        const builder: any = { 
          data: null, 
          error: new Error('Supabase not configured'),
          eq: () => builder,
          neq: () => builder,
          gt: () => builder,
          gte: () => builder,
          lt: () => builder,
          lte: () => builder,
          range: () => builder,
          like: () => builder,
          ilike: () => builder,
          is: () => builder,
          in: () => builder,
          contains: () => builder,
          containedBy: () => builder,
          filter: () => builder,
          not: () => builder,
          or: () => builder,
          and: () => builder,
          order: () => builder,
          limit: () => builder,
          offset: () => builder,
          single: () => Promise.resolve({ data: null, error: new Error('Supabase not configured') }),
          maybeSingle: () => Promise.resolve({ data: null, error: new Error('Supabase not configured') })
        };
        return builder;
      },
      insert: () => {
        const builder: any = { 
          data: null, 
          error: new Error('Supabase not configured'),
          select: () => builder,
          single: () => Promise.resolve({ data: null, error: new Error('Supabase not configured') })
        };
        return builder;
      },
      update: () => {
        const builder: any = { 
          data: null, 
          error: new Error('Supabase not configured'),
          eq: () => builder,
          neq: () => builder,
          gt: () => builder,
          gte: () => builder,
          lt: () => builder,
          lte: () => builder,
          select: () => builder,
          single: () => Promise.resolve({ data: null, error: new Error('Supabase not configured') })
        };
        return builder;
      },
      delete: () => {
        const builder: any = { 
          data: null, 
          error: new Error('Supabase not configured'),
          eq: () => builder,
          neq: () => builder,
          gt: () => builder,
          match: () => builder,
          gte: () => builder,
          lt: () => builder,
          lte: () => builder,
          select: () => builder,
          single: () => Promise.resolve({ data: null, error: new Error('Supabase not configured') })
        };
        return builder;
      },
      // Adding missing properties with correct types
      url: new URL('https://example.com'),
      headers: {},
      upsert: () => {
        const builder: any = { 
          data: null, 
          error: new Error('Supabase not configured'),
          select: () => builder,
          single: () => Promise.resolve({ data: null, error: new Error('Supabase not configured') })
        };
        return builder;
      }
    })
  };
}

export { supabase };
