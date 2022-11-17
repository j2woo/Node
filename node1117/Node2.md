# Node
## 1. NPM(Node Package Manager)
- 노드에서의 패키지 매니저인데 지금은 거의 모든 자바스크립트 라이브러리들이 저장소에 있기 때문에 자바스크립트 라이브러리들은 거의 모두 NPM을 이용해서 사용

### 1) package.json
- 노드에서 패키지 관리를 위한 설정 파일
- java에서의 build.gradle이나 pom.xml의 역할을 수행
- 패키지를 설치하게 되면 패키지에 대한 정보가 전부 작성됩니다.  
패키지를 설치하게 되면 package-lock.json 파일이 생성되는데 package.json에는 직접 설치한 패키지에 대한 정보만 기재되어 있지만 package-lock.json에는 의존 관계(패키지를 사용하기 위해서 필요한 패키지)가 있는 모든 패키지에 대한 정보가 기재되어있습니다.

### 2) 패키지 설치
npm install 패키지 이름 나열(나열할 때는 공백으로 구분)
- 개발 과정에서만 사용하고 배포할 때는 제외하고자 하는 경우에는 패키지 이름 앞에 --save-dev를 추가하면 됩니다.
-모든 프로젝트에서 사용할 수 있도록 하기 위해서는 global 모드로 설치하는데 패키지 이름 앞에 -g를 추가하면 되는데 지금은 경고가 발생하면서 --location=global 로 설정하기를 권장합니다.  
Mac이나 Linux에서 global로 설치할 때는 맨 앞에 관리자 모드를 의미하는 sudo를 추가해야 합니다.  
sudo npm install --location=global 패키지 이름의 형태로 설치해야 합니다.  
처음 한 번은 관리자 비밀번호를 입력해야합니다.  
<br/>
- 설치된 패키지는 프로젝트 내의 node_module라는 디렉터리에 저장됩니다.  
전역으로 설치했는데 패키지가 잘 불러지지 않으면 로컬로 설치해서 사용하면 됩니다.  
전역으로 설치했는데 패키지가 잘 불러지지 않는 경우에 하나는 node 명령에 대한 path 설정이 안되었거나 node를 2개 이상 설치한 경우입니다.

### 3) 패키지 설치
- 프로젝트 생성- package.json이 만들어졌는지 확인

- express 패키지 설치: express는 웹 애플리케이션 서버를 만들어주는 패키지  
***nps install express***

- moran, cookie-parser, express-session 패키지 설치  
npm install morgan cookie-parser express-session

- nodemon 패키지 설치: nodemon 패키지는 소스 코드를 수정하면 자동을 재실행되게 해주는 패키지로 개발 과정에서만 사용  
npm install --save-dev nodemon

- rimraf 패키지 설치: rimraf 패키지는 윈도우에서 터미널에서 rm 명령을 사용하기 위해서 설치  
전역 설치   
npm install --loaction=global rimraf  
--loaction=global 대신에 -g라고 입력해도 됩니다.  
mac이나 linux에서는 앞에 sudo를 추가해야 합니다.  

### 4) 패키지 재설치
- 모든 패키지는 node_modules에 다운로드 받아서 저장하게 되는 배포를 하거나 코드를 가지고 갈 때 node_modules를 포함시키면 크기가 너무 커지는데 이런 경우에는 node_modules는 복사하지 않고 package.json만 가져간 후 새로운 곳에서 npm init 명령만 다시 수행하면 패키지들이 전부 설치됩니다.

### 5) 패키지 버전
- 3자리 구성
Major Version, Minor Version, Patch  
<br/>
Major Version이 변경되는 경우에는 하위 버전과 호환이 안될 수 있음  
Minor Version은 기능이 변경된 경우  
Patch는 오류를 수정했을 때 변경

- 버전 이름에 alpha나 beta가 포함되면 테스트 버전입니다.(알파는 개발자의 환경에서 사용자가 테스트하는거고 베타는 사용자의 환경에서 사용자가 테스트하는 것)

### 6) npm관련 명령어
- npm ininstall 패키지이름: 패키지 삭제
- npm search 검색어: 패키지 검색
- npm publish: 패키지 배포
- npm unpublish: 배포 취소- 배포한 후 24시간 이내에 해야함

--> 이런 명령어들은 https://docs.npmjs.com에서 확인 가능(공부까지 안해도 돼!)
