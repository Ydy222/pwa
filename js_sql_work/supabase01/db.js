import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fsvilhpktvuyimkzgflu.supabase.co";
const supabasePassword = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzdmlsaHBrdHZ1eWlta3pnZmx1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0MjUwODgsImV4cCI6MjA1NTAwMTA4OH0.LU7A0fgqUj2eia-xunOWZYDuvfSvuM-a1_4V3TffXrI";

const supabase = createClient(supabaseUrl, supabasePassword);

export async function user_select() {
    const res = await supabase.from('users').select();
    console.log(res);
}
export async function user_insert(name, email) {
    const res = await supabase
        .from('users')
        .insert([{ name, email }]);
    console.log(res);
}
export async function user_update(name, email) {
    const res = await supabase
                .from('users')
                .update({ name })
                .eq('email', email);
    console.log(res);
}
export async function user_delete(email) {
    const res = await supabase
                .from('users')
                .delete()
                .eq('email', email);
    console.log(res);
}