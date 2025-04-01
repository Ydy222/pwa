const supabaseUrl = "https://fsvilhpktvuyimkzgflu.supabase.co";
const supabasePassword = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzdmlsaHBrdHZ1eWlta3pnZmx1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0MjUwODgsImV4cCI6MjA1NTAwMTA4OH0.LU7A0fgqUj2eia-xunOWZYDuvfSvuM-a1_4V3TffXrI";

const supabase = window.supabase.createClient(supabaseUrl, supabasePassword);

async function signInWithKakao() {
    const { error } = await supabase.auth.signInWithOAuth({
        provider: 'kakao',
    });

    if (error) {
        console.error("카카오 로그인 실패:", error.message);
    }
}

async function checkLoginStatus() {
    const { data, error } = await supabase.auth.getUser();

    if (error) {
        console.log("로그인되지 않음");
        return;
    }

    console.log("로그인된 사용자:", data);
}

async function logout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
        console.error("로그아웃 실패:", error.message);
    } else {
        console.log("로그아웃 성공");
    }
}

async function user_select() {
    const res = await supabase.from('users').select();
    console.log(res);
}
async function test_select() {
    const res = await supabase.from('test').select();
    console.log(res);
}
async function user_insert(name, email) {
    const res = await supabase
        .from('users')
        .insert([{ name, email }]);
    console.log(res);
}
async function user_update(name, email) {
    const res = await supabase
                .from('users')
                .update({ name })
                .eq('email', email);
    console.log(res);
}
async function user_delete(email) {
    const res = await supabase
                .from('users')
                .delete()
                .eq('email', email);
    console.log(res);
}