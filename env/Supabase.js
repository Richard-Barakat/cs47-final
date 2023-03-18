import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto'

const supabaseURL = 'https://ouyvqktxomxnxayoincl.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im91eXZxa3R4b214bnhheW9pbmNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg5OTY4MDcsImV4cCI6MTk5NDU3MjgwN30.tuPz4VDYo-SJSLPVXtcbjFvF1jAbEsosbqfe8aN5nmM';

export const supabase = createClient(supabaseURL, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    }
});