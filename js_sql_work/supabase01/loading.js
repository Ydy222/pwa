async function handleAuthRedirect() {
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = hashParams.get("access_token");
    const refreshToken = hashParams.get("refresh_token");

    if (accessToken && refreshToken) {
        // Supabase 세션 설정
        const { data, error } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken,
        });

        if (error) {
            console.error("세션 설정 오류:", error.message);
        } else {
            console.log("로그인 성공:", data);
            window.history.replaceState({}, document.title, window.location.pathname); // URL 정리
        }
    }
}

// 페이지 로드 시 실행
handleAuthRedirect();
