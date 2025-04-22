// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sdwjsoltnjtshyeguera.supabase.co'; // 너의 Supabase 프로젝트 URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkd2pzb2x0bmp0c2h5ZWd1ZXJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIyNzM3MzEsImV4cCI6MjA1Nzg0OTczMX0.VzpGkteOGzs0_Y8C40ovNx5IF-Mph6L2yVGBY5ZhWVs'; // Supabase에서 발급한 익명 키

export const supabase = createClient(supabaseUrl, supabaseKey);