// SHA-256 해시
async function hashpw(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
    return hashHex.toUpperCase(); }

// 로그인 서버 통신
document.addEventListener("DOMContentLoaded", () => {
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
            if (response.ok) {
                return response.json(); 
            } else {
                throw new Error("로그인 실패");
            }
        })
        .then(data => {
            alert("로그인 성공");
        })
        .catch(error => {
            console.error("에러 발생:", error);
            alert(error.message);
        });
    });
});
