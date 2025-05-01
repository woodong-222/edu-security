# Security_강민구

## 4주차

### login page
변경사항: 서버와 함께 움직일 수 있는 login js 코드 작성.
-> 서버를 실행하고 MySQL DB에 ID와 해쉬 암호화 된 password가 저장돼있고, DB를 기준으로 login form 에서 ID와 password를 submit 하면 js 코드 파일에서 password를 해쉬 암호화 하고 서버로 부터 DB에 저장돼있는 해쉬 암호와 비교 후 로그인 성공 or 실패 return

## 3주차

### / page
기능: html 파일에 <a> 태그로 다른 html 파일의 상대경로를 링크시켜 클릭 시 링크한 파일을 웹 페이지로 띄움
- 현재 인덱스 목록
  - /login page

### /login page
기능: 로그인 기능 구현
- ID, PW를 input box에 입력
- 로그인 버튼을 눌러 실제 로그인을 하는 기능은 아직 구현하지 않음
