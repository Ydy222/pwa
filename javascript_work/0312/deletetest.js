import { createClient } from "@supabase/supabase-js";

var dbUrl = 'https://fsvilhpktvuyimkzgflu.supabase.co';
var dbPassword = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzdmlsaHBrdHZ1eWlta3pnZmx1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0MjUwODgsImV4cCI6MjA1NTAwMTA4OH0.LU7A0fgqUj2eia-xunOWZYDuvfSvuM-a1_4V3TffXrI';
const supabase = createClient(dbUrl, dbPassword);

const res = await supabase.auth.admin.deleteUser('3c64d1ba-7b24-46a9-8488-0b2a0161d32c');
console.log(res);