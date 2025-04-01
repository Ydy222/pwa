const supabaseUrl = "https://fsvilhpktvuyimkzgflu.supabase.co";
const supabasePassword = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzdmlsaHBrdHZ1eWlta3pnZmx1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0MjUwODgsImV4cCI6MjA1NTAwMTA4OH0.LU7A0fgqUj2eia-xunOWZYDuvfSvuM-a1_4V3TffXrI";

const supabase = window.supabase.createClient(supabaseUrl, supabasePassword);

async function uploadImage() {
    const file = document.querySelector('input').files[0];
    const fileExt = file.name.split(".").pop(); // 확장자 추출
    const safeFileName = sanitizeFileName(file.name); // 안전한 파일 이름 변환
    const fileName = `${Date.now()}_${safeFileName}.${fileExt}`; // 고유한 파일명 생성
    const { data, error } = await supabase.storage
        .from("pmh") // 버킷 이름
        .upload(fileName, file);

    if (error) {
        console.error("업로드 실패:", error.message);
        return null;
    }

    console.log("업로드 성공:", data);
    return data;
}

function sanitizeFileName(fileName) {
    return fileName
      .replace(/\s+/g, "_") // 공백을 언더스코어(_)로 변경
      .replace(/[^\w.-]/g, "") // 한글 및 특수 문자 제거
      .toLowerCase(); // 소문자로 변환 (권장)
  }
  