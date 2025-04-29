document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const username = document.getElementById('id').value;
    const pw = document.getElementById('pw').value; //id가 아닌 username값, pw값 받아오기기
    const hashedPw = (await sha256(pw)).toUpperCase();  // 해시함수 호출하고 대문자로 변환

    const response = await fetch('http://localhost:8080/api/login', {//서버주소 제대로 확인하자...
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: hashedPw
        })
    });

    const result = await response.json();
    console.log('서버 응답:', result);  // 서버 응답 디버깅

    if (result.message === '로그인 성공') {  // message 기준 무턱대고 success ㄴㄴㄴ
        alert('로그인 성공');
    } else {
        alert('로그인 실패');
    }
});

async function sha256(input) {       //sha 256 해싱 함수
    const encoder = new TextEncoder();
    const data = encoder.encode(input);//함수를 받는게 input이니까 pw가 아닌 input
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}
