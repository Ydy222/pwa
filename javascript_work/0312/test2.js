import { createClient } from "@supabase/supabase-js";

var dbUrl = 'https://fsvilhpktvuyimkzgflu.supabase.co';
var dbPassword = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzdmlsaHBrdHZ1eWlta3pnZmx1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0MjUwODgsImV4cCI6MjA1NTAwMTA4OH0.LU7A0fgqUj2eia-xunOWZYDuvfSvuM-a1_4V3TffXrI';

const supabase = createClient(dbUrl, dbPassword);
async function signUpNewUser() {
    const { data, error } = await supabase.auth.signUp({
        email: 'dron512@naver.com',
        password: 'example-password',
        options: {
            emailRedirectTo: 'https://example.com/welcome',
        },
    })
    console.log(data);
console.log(error);
}
signUpNewUser();
