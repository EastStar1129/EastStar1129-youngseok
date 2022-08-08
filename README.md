## 홈페이지 중요 디렉터리
``` text
project
 - frontend
 - src
  - main
  - test
 - readme.md
 - gradlew
```

### STEP 1
#### 초기프로젝트 구성
- frontend vue 프로젝트 생성
- vue 프로젝트 연동
  - 테스트 컨트롤러 생성
  - vue.config.js 수정

- react로 수정
- 프로젝트 삭제
```cmd
npm install create-react-app
npx create-react-app frontend --template=typescript
cd frontend
npm install --save react-router-dom
npm install --save-dev @types/react-router-dom
```

- react proxy 설정
```cmd
npm install http-proxy-middleware
```

