# 폴더(디렉토리) 만들기
mkdir json-server 
# 경로 이동
cd json-server

# npm init 개발자 이거 이렇게 할꺼냐 물어보고 y
# npm init -y 모든것을 y 로 하겠다
package.json 파일 생성 및 node.js 실행환경설정

# 라이브러리 json-server 설치
npm install json-server 

# 서버실행 명령어
# 포트는 5000번으로 내 컴퓨터에서 서버실행 하겠다
npx json-server --watch db.json --port 5000
