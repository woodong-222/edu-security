# edu-security
Security_박준한
===============
4주차
---------------
# /index
3주차 그대로 가져와서 약간의 css만 수정

# /login page
3주차 그대로 가져와서 약간의 css 수정 
html에서 피드백 받은대로 login 클릭시 login 페이지로 넘어가게 수정 
피드백 받은대로 비밀번호 *처리 수정
자바스크립트와 연동하기 위해 id class type 지정해주고 script 연결

# login.js
256 해시를 위한 함수 작성
:함수 이름을 hashpw로 정함
사용자가 입력한 비밀번호 문자열을 바이트 배열로 인코딩.
크립토를 사용해 인코딩된 결과를 해싱.
해싱된 값을 바이트 단위 배열로 변환후 각 바이트를 16진수로 변환한뒤 최종 해시 문자열 생성.
최종 해시값은 hashHex;로 반환.

서버와 통신하기 위한 코드 작성
:submit과 매칭된 이벤트 발생시 실행.
각 id username, password에 연결된 값들을 username rawPassword로 각각 저장.
위에서 선언한 함수 hashpw를 통해 비밀번호 해시값 생성.
POST 방식으로 서버에 요청보냄 body JSON형식으로 지정.
저장된 아이디와 해시 비밀번호 값을 JSON으로 변환하여 요청 body에 추가.
