document.getElementById('loginForm').addEventListener('submit',async function(e){e.preventDefault()
    
    const id = document.getElementById('id').value;
    const pw = document.getElementById('pw').value;
    const hashedPw = await sha256(pw);

    const response = await fetch('http://localhost:8080/login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id,
            password: hashedPw
        })
    });

    const result = await response.json();
    if (result.success) {
        alert('로그인 성공');
    }
    else {
        alert('로그인 실패');
    }
});

async function sha256(input) {          //sha 256 해싱 함수
    const encoder = new TextEncoder();
    const data = encoder.encode(input); //함수를 받는게 input이니까 pw가 아닌 input
    const hashBuffer = await crypto.subtle.digest('SHA-256',data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2,'0')).join('');
}
