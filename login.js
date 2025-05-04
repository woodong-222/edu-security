// SHA-256 해시시
async function hashpw(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
    return hashHex;
}

// 로그인 서버 통신신
document.getElementById("loginForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const rawPassword = document.getElementById("password").value;

    const hashedPassword = await hashpw(rawPassword);

    fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: hashedPassword
        })
    })
    .then(response => {
        if (!response.ok) throw new Error("서버 오류");
        return response.json();
    })
    .then(data => {
        if (data.success) {
            alert("로그인 성공");
        } else {
            alert("로그인 실패");
        }
    })
    .catch(error => {
        console.error("에러 발생:", error);
        alert("서버 오류가 발생했습니다");
    });
});
