// require() => commonjs BackEnd
// import from => module.js FrontEnd
import { createInterface } from "readline/promises";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fsvilhpktvuyimkzgflu.supabase.co";
const supabasePassword = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzdmlsaHBrdHZ1eWlta3pnZmx1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0MjUwODgsImV4cCI6MjA1NTAwMTA4OH0.LU7A0fgqUj2eia-xunOWZYDuvfSvuM-a1_4V3TffXrI";

const supabase = createClient(supabaseUrl, supabasePassword);

const res = await supabase.from('users').select();
console.log(res);

// const res = await supabase
//                   .from('users')
//                   .insert([{ name: 'aaa', email: 'aaa@naver.com' }]);
// console.log(res);

// const {status, statusText} = res;
// console.log(status);
// console.log(statusText);

// console.log(supabase);

// const rl = createInterface({
//     input : process.stdin,
//     output : process.stdout
// });

// const name = await rl.question('이름 뭐야?');
// console.log(`name ${name}`);

// rl.close();

