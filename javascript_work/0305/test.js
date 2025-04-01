import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fsvilhpktvuyimkzgflu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzdmlsaHBrdHZ1eWlta3pnZmx1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0MjUwODgsImV4cCI6MjA1NTAwMTA4OH0.LU7A0fgqUj2eia-xunOWZYDuvfSvuM-a1_4V3TffXrI';

const supabase = createClient(supabaseUrl, supabaseKey);
// console.log(supabase);

const res = await supabase.rpc('get_user_info', { user_id: '158876d0-a707-45fd-952f-83a373037b69' });
console.log(res);

// if (error) {
//     console.error('RPC 호출 실패:', error);
// } else {
//     console.log('사용자 이름:', data);
// }
