// hw03_Login.js

// SHA-256 해시 함수 정의 (Web Crypto API 사용)
async function sha256(password) {
  const encoder = new TextEncoder();                    // 문자열 → 바이트 변환
  const data = encoder.encode(password);                // 비밀번호 인코딩
  const hashBuffer = await crypto.subtle.digest("SHA-256", data); // 해시 계산
  const hashArray = Array.from(new Uint8Array(hashBuffer));       // byte 배열 변환
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // 16진수 문자열
  return hashHex;
}

// 폼 제출 처리
document.getElementById("login-form").addEventListener("submit", async function (e) {
  e.preventDefault(); // 기본 폼 제출 방지

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const hashedPassword = await sha256(password); // 비밀번호 해시 처리

  // 서버로 로그인 정보 POST 요청
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: username,
      password: hashedPassword
    })
  })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        alert("로그인 성공");
        // 이후 페이지 이동 등 필요 시 여기에 추가
      } else {
        alert("로그인 실패");
      }
    })
    .catch(error => {
      console.error("에러 발생:", error);
      alert("서버 연결 실패");
    });
});
