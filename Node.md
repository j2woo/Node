# Node.js
## 1. 개요
- 애플리케이션을 개발할 수 있는 자바스크립트 환경  
원래 자바스크립트는 브라우저 내에서 동적인 작업을 처리하기 위한 언어  
실제 내부 코드는 C++로 되어 있음

### 1) 장점
- 자바스크립트 엔진을 사용하기 때문에 접근이 쉬움 -Learning Curve가 짧다.
- 비동기 방식이므로 리소스 사용량이 적음
- 다양한 라이브러리가 제공

### 2) 단점
- Native 언어로 만든 서버 환경보다는 느릴 수 있음
- 짧은 시간에 대량의 클라이언트 요청을 대응하는 웹 애플리케이션 개발에 적합하고 대량의 데이터를 조회하고 긴 처리 시간을 요구하는 작업에는 부적합
- 대용량 연산 작업을 할 때는 직접 구현하지 않고 AWS의 Lambda나 Google Cloud Functions 같은 서비스를 이용하기도 합니다.

### 3) 웹 서버 이외의 노드
- SPA(Single Page Application): Angular, React, Vue 등
- 모바일 웹 프레임웨크: React Native
- 데스크 톱 애플리케이션: Eletron(Atom, slack, VSCode, 블록 체인 애플리케이션 등)

### 4) 외부 라이브러리 활용
- npm이라는 프로그램 이용
- npm을 이용하면 기능을 확장한 수많은 모듈을 쉽게 다운로드하고 설치할 수 있음  
최근에는 npm 대신에 yam을 사용하는 경우도 있음

## 2. Node 설치
### 1) 버전
- LTS: 안정화된 버전으로 짝수
- Current: 현재 개발 중인 버전

### 2) 설치
- Windows는 https://nodejs.org에서 다운로드 받이서 설치
- Mac은 다운로드 받아서 설치하거나 brew install node로 설치 가능(후자 추천)
- 환경 변수: 설정된 디렉토리의 프로그램은 이름만으로  실행할 수 있도록 해줍니다.

### 3) 설치 확인
- 터미널(Mac에서는 응용 프로그램 > 유틸리티 > 터미널)에    
node -v: 노드 버전 확인
npm -v: nps 버전 확인

### 4) IDE 설치
- VSCode 사용

## 3. Node 프로젝트 만들기
- 빈 디렉토리에서 npm init이라는 명령어로 생성하고 옵션을 설정

>윈도우즈에서 이 명령어가 잘 안되는 경우에는 터미널에서 npm  intit을 해도 되고, VSCODE의 터미널이 PowerShell 이어서 안되는 경우도 있으므로 이 경우에는 [File]-[Preferences] - [Settings] 에 가서 default profile windows를 검색한 후 command prompt로 변경하고 VSCode를 종료했다가 다시 시작하면 됩니다.
- 옵션 설정  
package name: 패캐지를 배포할 때 사용할 이름인데 디렉토리 이름과 같으면 안됨  
version: 버전  
description: 앱에 대한 설명  
entry point:시작하는 파일 이름(앱의 출발점을 index.js 나 App.js를 많이 사용)  
test commandL 앱을 테스트 할 때 사용할 URL  
keywords: 패키지가 배포된 경우 사용할 검색어  
author: 제작자
license: ISC나 MIT를 사용하는데 오픈 소스라는 의미  

- 프로젝트 실행  
npm start 하게 되면 entry point로 지정한 파일이 실행  
<br/>
node 파일명을 하게되면 파일이 실행됨  
<br/>
- 제대로 만들어지면 package.json이 생성됩니다.
- cd는 디렉토리로 변경하는 명령어  
cd 디렉토리 이름을 입력하면 디렉토리로 프롬프트를 이동  
cd .. 을 입력하면 상위 디렉토리로 이동

