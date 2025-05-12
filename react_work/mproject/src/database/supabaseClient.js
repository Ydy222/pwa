// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL; // 너의 Supabase 프로젝트 URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY; // Supabase에서 발급한 익명 키

export const supabase = createClient(supabaseUrl, supabaseKey);