import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fsvilhpktvuyimkzgflu.supabase.co";
const supabasePassword = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzdmlsaHBrdHZ1eWlta3pnZmx1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0MjUwODgsImV4cCI6MjA1NTAwMTA4OH0.LU7A0fgqUj2eia-xunOWZYDuvfSvuM-a1_4V3TffXrI";

const supabase = createClient(supabaseUrl, supabasePassword);

export async function usersMInsert() {
    const res = await supabase.from('users').insert(
        [{ name: 'qqq', email: 'qqq@naver.com' },
        { name: 'www', email: 'www@naver.com' },
        { name: 'ooo', email: 'ooo@naver.com' }]
    ).select();
    console.log(res);
}

export async function usersSelectByEmail(email) {
    const res = await supabase.from('users')
        .select()
        .eq('email', email);
    console.log(res.data[0].id);
    return res.data[0].id;
}

export async function ordersMInsert(userid) {
    console.log(userid);
    const res = await supabase.from('orders')
        .insert([
            { user_id:userid, product_name: '노트북', price: 150000 },
            { user_id:userid, product_name: '아이패드프로11인m4', price: 900000 },
        ])
        .select();
    console.log(res);
}