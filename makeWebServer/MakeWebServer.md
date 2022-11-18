# node를 이용한 웹 서버 만들기 
>실제로는 대부분 이 방법을 사용하지 않고 express 모듈을 이용하는 경우가 많음

## 1. 최근의 Web
- web3.0
>Semantic Web 개념 등장: 로봇이 정보 자원의 뜻을 이해하고 논리적 추론까지 가능, 명확한 의미 전달이 중요, Rest API 속도의 변화  
인공지능  
자신만의 컨텐츠나 정보를 구성할 수 있도록 하는 사용자의 권한이 증가  
블록체인

- WOA(Web Oriented Architecture)
>사용자의 요구 사항 변경- 여러 디바이스를 사용하고 디바이스끼리 끊어짐이 없는 서비스 요구가 증대되면서 이를 구현하기 위한 방법으로 웹 기술이 각광받음

> 기술의 변화 - 인프라 측면에서는 클라우드나 가상화 기술이 각광을 받고 있고 소프트웨어 측면에서는 WOA(전체 시스템 아키텍처를 웹을 중심으로 설계)

- Framework를 이용한 애플리케이션 개발

## 2. 웹 서비스 구축 방식
### 1) 정적 웹 서비스 
- 요청이 오면 요청에 해당하는 HTML 패키지를 찾아서 출력하는 방식 

### 2) CGI(Common Gateway Interface)
- 클라이언트의 요청이 오면 서버가 작업을 수행해서 결과를 전송하거나 화면을 전송하는 방식
- 이 방식은 사용자의 요청을 별도의 프로세스로 만들어서 처리  
하나의 요청을 전부 처리하기 전까지는 다른 요청을 처리할 수 없음
- Perl이나 ASP가 이런 형태로 동작

### 3) Application Server 방식
- 사용자의 요청을 Thread를 만들어서 처리
- 여러 사용자의 요청을 한꺼번에 처리하는 것처럼 처리  
Java -> Server(JSP) -> Spring Framework  
C# -> asp.net  
JavaScript -> node.js Framework  
PHP -> laravel Framework  
Python -> Flask나 Django Framework  
Ruby -> Rails  

### 4) 웹 프로그래밍의 구조  
웹브라우저 <-> 웹 서버 <-> 애플리케이션 서버(Controller, Service, Repository) <-> 데이터 저장소  

- 언어나 프레임워크는 애플리케이션 서버를 만들기 위한 기술

- Serverless는 서버가 없는 것이 아니고 서버를 직접 구현할 필요가 없는 것  

- 웹 브라우저에서 서버에게 요청하는 것을 ***request***라고 하고 서버가 웹 브라우저에게 대답을 하는 것을 ***response***라고 합니다.

## 3. http 모듈
- 내장 모듈이므로 별도로 설치할 필요없음
### 1) 서버 생성 
http 모듈.createServer((request, response)=>{
    내용
});

### 2) 서버 실행
서버객체.listen(포트번호, IP주소); // IP주소는 현재 컴퓨터에 여러 개의 IP가 존재하는 경우 작성

### 3) 서버 종료
서버 객체.close();

### 4) 서버에 발생하는 이벤트
- request: 클라이언트의 요청이 있을 때
- connection: 클라이언트가 접속했을때
- clientError: 클라이언트 오류가 발생했을 때

### 5) request 객체
- url: 요청한 url
- method: 요청 방식(GET, POST, PUT, PATCH, DELETE, OPTION 등)

### 6) 웹 서버 만들고 직접 응답을 생성하기
- js 파일을 추가한 후 작성하고 실행
> server.js
``` js
// 모듈 가져오기
const http=require('http');

// 서버 생성
// 포트번호는 일반적으로 1024번까지는 예약되어 있으므로 사용하지 않음
// 1521, 3306, 27017번은 데이터베이스가 사용
// 8080은 톰캣같은 WebContainer가 사용
// 80을 사용하게 되면 http의 경우 포트번호 생략 가능
// 443을 사용하게 되면 https의 경우 포트번호 생략 가능
http.createServer((request,response)=>{
    // 응답 생성
    response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    response.write('<h1>처음 만든 웹 서버</h1>');
    response.end('<p>http 모듈 사용</p>');
}).listen(8000,()=>{
    console.log('8000번 포트에서 서버 대기중')
});
```
- 서버 실행: node server.js를 터미널에 입력  
8000번 포트에서 서버 대기 중 메세지가 출력되는지 확인
- 클라이언트에서 접속  
브라우저를 실행하고 url을 입력  
- 자기 컴퓨터의 경우는 http://localhost:8000번 또는 http://127.0.0.1:8000  
다른 컴퓨터의 경우는 http://서버컴퓨터의 IP:8000(서버 컴퓨터의 방화벽이 해제되어 있어야 합니다.)

- 서버 중지는 터미널에서 ctrl+c인데 안되면 메세지 확인

### 7) 서버에서 html 파일을 읽어서 출력
- 프로젝트에 출력할 html 파일을 만들고 작성 - index.html

``` js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Server</title>
</head>
<body>
    <h1>HTML 파일을 읽어서 출력</h1>
    <p>직접 출력을 만드는 것은 너무 번거롭기 때문에 HTML 파일을
        만들어서 출력합니다.
    </p>
</body>
</html>
```

- server.js 파일의 내용을 수정합니다.
``` js
//모듈 가져오기
const { fstat } = require('fs');
const http = require('http');

//서버 생성
//포트번호는 일반적으로 1024번까지는 예약되어 있으므로 사용하지 않음
//1521, 3306, 27017 번은 데이터베이스가 사용
//8080은 톰캣 같은 WebContainer 가 사용
//80을 사용하게 되면 http 의 경우 포트번호 생략 가능
//443을 사용하게 되면 https 의 경우 포트번호 생략 가능
const fs = require('fs').promises; 
http.createServer(async(request, response) => {
    try{
        //파일의 내용을 읽어서 data에 저장
        //다음 명령은 이 명령이 끝나고 나면 수행
        const data = await fs.readFile('./index.html');
        //200이면 성공
        response.writeHead(200, 
            {'Content-Type':'text/html; charset=utf-8'});
        response.end(data);
    }catch(error){
        response.writeHead(500, 
            {'Content-Type':'text/html; charset=utf-8'});
        response.end(error.message);
    }
    
}).listen(8000, ()=>{
    console.log('8000 번 포트에서 서버 대기 중');
});
```
### 8) request 객체
- url: 클라이언트의 요청 경로  
요청 경로를 만들 때는 이해하기 쉬운 경로를 만들어주어야하고 _ 사용은 하지 않는 것을 권장  

- method: 요청 방식  
GET: 서버 자원을 가져올 때 사용(조회- READ)  
POST: 서버에 자원을 등록하고자 할 때 사용(삽입- CREATE)  
PUT: 서버의 자원을 수정하고자 할 때 사용(수정 -UPDATE)  
PATCH: 서버의 자원의 일부분만 수정하고자 할 때 사용(수정 -UPDATE 권장하지 않음)  
DELETE: 서버 자원을 삭제하고자 할 때 사용(삭제 - DELETE)  
OPTIONS: 요청을 하기 전에 통신 옵션을 설명하기 위해서

### 9) REST(Representational State Trasfer) API
- 서버의 자원을 정의하고 자원에 대한 URL을 지정하는 방법
- URL과 Method만으로 작업을 예측할 수 있도록 하는 것  
URL은 /member이고 Method는 POST라면 회원 가입

- 클라이언트의 종류에 상관없이 동일한 작업은 동일한 URL로 처리  
클라이언트 애플리케이션을 서버 애플리케이션과 분리해서 구현하고 서버는 클라이언트의 뷰를 만들지 않고 데이터를 전송합니다.  
클라이언트 애플리케이션과 서버 애플리케이션을 하나의 프로젝트로 구현하면 모바일 기기의 Native Application과 Web Browser의 요청에 응답하는 부분을 동일한 URL로 처리할 수 없음  

-> 아이폰에서 회원가입이 URL은 /member이고 Method는 POST라면 안드로이드에서 동일해야 하고 Web Browser에서도 동일한 URL로 처리되어야 합니다.

-> 이렇게 만들어진 서버를 RESTful하다라고 함

### 10) axious 라이브러리
- 브라우저나 Node.js에서 Promise API를 이용해서 HTTP 비동기 통신을 할 수 있도록 해주는 API
- 자바스크립트의 fetch api를 사용하기 쉽도록 해주는 라이브러리  
```
axious 라이브러리 여기 메모장 보기
```                
> 메모장 보기

- XSRF(Cross-Sit Request Forgery): 쿠키만으로 인증하는 서비스의 취약점을 이용해서 사용자가 모르게 서비스에 특정 명령을 요청하는 것  
브라우저에서 삽입하겠다고 요청을 하기 위해서 폼을 조회했는데 이 폼의 URL을 복사해서 다른 기기에서 데이터를 삽입하는 작업을 수행하는 것이 대표적

- Promise를 이용한 사용  
```
const axios = require('axios);
axios.요청메서드(url).then((response)=>{
    //가져오는데 성공했을 때 수행할 내용
    // response는 가져온 데이터를 파싱한 결과
}).catch((error)=>{
    //에러가 발생했을 때 수행할 내용
    // error는 에러에 대한 내용을 저장한 객체
}).then(()=>{
    //성공과 실패 여부에 상관없이 수행할 내용
});
```

### 11) Cookie와 Session
- HTTP나 HTTPS는 상태가 없음  
클라이언트 서버에게 요청을 할 때 일시적으로 연결이 된 후 서버가 응답을 하고 나면 연결이 해제되버리기 때문에 다음 연결이 될 때는 이전에 어떤 상태였는지 알 수 없음  
클라이언트와 서버가 이전에 어떤 상태였는지 알 수 있도록 하기 위해서 Cookie와 Session의 개념을 사용

- Cookie  
클라이언트에 저장해서 클라이언트가 서버에게 요청할 때마다 전송되는 객체    
쿠키는 http나 https 요청의 헤더에 저장하고 이름과 값의 구조  
node외 http 모듈에서 response.writeHead(코드, {'Set-Cookie':'쿠키이름-값"})의 형태로 작성  
쿠키가 여러개이면 ;하고 추가  
쿠키의 옵션으로는 이름, Expires(만료시간- 날짜), Max-age(만료시간- 초), Domain(도메인), Path(URL), Secure(HTTPS인 경우만 전송), HttpOnly(자바스크립트에서 수정을 못하도록 하는 경우 사용)

- Session  
클라이언트의 정보를 서버에 저장하는 기술  
클라이언트에 저장하게 되면 노출이되고 이를 수정할 수 있기 때문에 보안에 취약  
노출이 되면 안되는 데이터를 서버에 저장을 하고 클라이언트에서는 이 정보를 구별할 수 있는 세션 키만 저장  
클라이언트와 서버가 동일한 도메인인 경우만 가능한데 쿠키를 이용하면 클라이언트와 서버의 도메인이 달라도 가능  
주로 로그인 정보를 저장하는데 많이 이용을 했는데 최근에 JWT(Json Web Token)를 이용하는 것을 권장하면서 사용 빈도는 줄어들었습니다.  

- Cookie 대안  
Web Storage, Web SQL. Indexed DB 같은 HTML5 API를 이용하기도 합니다. 

### 12) https 모듈
- http 서버를 https로 변경하기 위한 모듈
- https는 암호화를 위한 인증서가 필요 - 무료나 유료로 인증서를 발급받아야 이 모듈을 사용하는 것이 가능  
https는 데이터가 암호화돼서 전송되기 때문에 중간에 가로채도 변경을 할 수 없습니다.  
https를 사용하면 데이터 전송 간에는 암호화를 할 필요가 없는데 개발자들은 혹시 모르니 해야한다고 합니다.
- 스마트폰에서는 http에 접속하려면 별도의 설정을 추가해야 합니다.  
- https 모듈의 속도를 개선한 http2 모듈도 있음

### 13) cluster
- CPU 코어를 전부 사용할 수 있도록 해주는 모듈
- 여러 개의 연산을 동시에 수행할 수 있도록 해주는 모듈
- 직접 서버 설정을 한다면 사용을 하지만 최근처럼 Cloud를 사용하는 경우는 직접 설정하지 않음

----------------------
# express 모듈을 이용한 웹 서버 생성 및 실행

## 1. express 모듈
- 내장 모듈이 아님 - 설치가 필요
- http 모듈을 가지고 웹 서버를 만들 수 있는데 가독성이 떨어지고 확장성이 떨어짐
- http 모듈 보다는 코드 관리가 용이하고 편의성이 높은 모듈
- 이 모듈을 제외하고 웹 서버를 생성해주는 모듈은 여러가지가 있고 최근에도 추가되고 있음
-현재 가장 많이 사용되는 노드의 웹 서버 모듈

## 2. 패키지 설치
- express(웹 서버 제작을 위한 모듈), nodemon(소스 코드를 수정하면 자동으로 재시작되도록 해주는 모듈)  
npm install express   
npm install --save-dev nodemon

## 3. package.json 파일의 설정을 수정
- main 속성에 시작 파일의 이름을 설정: app.js
- scripts 속성에  "start":"nodemon app" 이라는 태그 추가  
npm start라는 명령을 실행하면 nodemon app이라는 명령을 수행

## 4. express web server의 기본 틀
```const express =require("express"); // 모듈 가져오기  
const app= express(): //웹서버 인스턴스 생성  

app.set('port',포트번호); // 포트 설정
```

## 5. 사용자의 요청을 처리하는 함수
### 1) 종류- 요청 방식에 맞는 함수를 적용
- app.get
- app.post
- app.delete
- app.put
- app.patch
- app.options

### 2) 함수의 매개변수
- 첫번째 url
- 두번쨰는 2개의 매개변수를 갖는 콜백 함수로 이 함수가 url 요청이 왔을 때 호출됩니다.  
콜백 함수의 첫번쨰 매개변수는 사용자의 요청 객체(request)이고 두번째 매개변수는 사용자에게 응답을 하기위한 객체(response)

### 3) 사용자에게 응답
- 직접 작성: response.send(문자열)
- html 파일 출력: response.sendFile(html 파일 경로)

## 6. 웹 서버 만들기
### 1) 출력할 html 파일을 1개 생성
> main.html

### 2) package.json 파일에 entroy point(시작 포인트)로 설정한 파일을 생성하고 웹 서버를 구동시키는 코드를 작성

### 3) 구동
npm start  또는 node 작성한 스크립트 파일명  
-> 특별한 경우가 아니면 npm start로 실행

### 4) 정상적으로 구동되었으면 브라우저에서 확인
-> https://localhost:3000

## 7. 요청 객체: 일반적으로 request 객체라고 합니다.
- 클라이언트의 요청 정보를 저장하고 있는 객체  
request.app: app 객체에 접근  
<br/>
request.body: body-parser 미들웨어가 만드는 요청의 본문을 해석한 객체 - post나 put 요청이 왔을 때 파라미터 읽기  
request.cookies: 쿠키 정보를 가지는 객체  
request.ip: 요청을 전송한 클라이언트의 ip정보- ip를 알면 접속한 국가를 알 수 있습니다.  
request.params: 라우트 매개변수에 담긴 정보  
request.query: query string - get 이나 delete 요청에서 파라미터 읽기  
request.get(헤더이름): 헤더의 값 가져오기, 인증에서 많이 사용, 최근에는 API 사용 권한을 토큰을 이용해서 발급하고 토큰의 값을 헤더에 저장해서 전송하도록 만드는 경우가 많습니다.   
<br/>
request.signedCookies: 서명된 쿠키 정보  
request.sessions: 세션 객체

## 8. 응답 객체 - response 객체
- response.cookie(키, 값, 옵션): 쿠키 생성
- response.clearCookie(키, 값, 옵션): 쿠키 삭제
- response.end(): 데이터 없이 응답을 보냄
- response.json(JSON 문자열): JSON 형식으로 응답
- response.redirect(URL): 리다이렉트할 URL
- response.render(뷰이름, 데이터): 템플릿 엔진을 이용해서 서버의 데이터를 html에 출력하고자 할 때 사용. 이를 서버 랜더링이라고 합니다.
- response.send(메세지): 메세지를 화면에 출력
- response.sendFile(파일 경로): 파일을 읽어서 화면에 출력
- response.set(헤더이름, 값): 헤더를 설정
- response.status(코드): 응답 코드 설정

## 9. dotenv
- .env 파일을 읽어서 process.env로 생성해주는 패키지  
.env 파일에 작성한 내용을 소스코드에서 process.env 객체를 이용해서 사용 가능하도록 하는 패키지  

- 환경의 변화(개발 환경, 운영 환경, 테스트 환경) 때문에 변경되는 설정을 별도의 텍스트 파일에 만들어두면 환경이 변경될 때 텍스트 파일의 내용만 변경하면 되기 때문에 컴파일이나 빌드를 다시 할 필요가 없어집니다.   
<br/>
이러한 정보의 대표적인 것이 데이터베이스 접속 위치와 API 키 입니다.

## 10. Middle Ware- Filter, Aop
- 클라이언트의 요청이 발생하고 서버가 요청을 처리하고 응답을 전송하는 시스템에서 요청을 처리하기 전이나 후에 동작할 내용을 수행하는 객체
- 요청을 처리하기 전에 수행하는 일은 필터링이고 요청을 처리한 후 수행하는 일은 변환입니다.  
필터링을 할 때는 유효성 검사 작업과 로그인 확인 작업이 대표적입니다.
- node에서는 app.use(미들웨어) 형태로 장착  
app.use(미들웨어): 모든 요청에서 미들웨어가 동작  
app.use(url, 미들웨어): url에서만 미들웨어가 동작

- 현재 미들웨어에서 다음 미들웨어로 넘어가는 함수: next()

### 1) morgan
- 로그를 기록해주는 미들웨어
- morgan(format, options)으로 사용
```
format
    dev: 개발용, 배포를 할 때는 모두 삭제
    tiny
    short
    common
    combined

options
    immediate: response에 기록하는 것이 아니고 request에서 기록(에러가 발생해도 기록됨)
    skip: 로깅을 스킵하기 위한 조건을 설정
    stream: 기본적으로 로그는 화면에 출력되지만 파일에 출력하고자 할 때 사용 

```
- 로그 파일을 생성해주는 패키지: npm install file-stream-rotator  
이 패키지를 이용하면 주기적으로 파일을 생성해서 로그를 기록하는 것이 가능
- 로그 형식 
HTTP요청방식 요쳥URL 상태코드 응답속도 트래픽
- 조금 더 자세한 로그를 원하는 경우에는 winston 패키지를 사용

### 2) 날짜 별로 로그 파일에 로그를 기록
- 패키지 설치: morgan, file-stream-rotator  
npm install morgan file-stream-rotator
- 서버를 다시 실행하고 log 디렉터리와 오늘 날짜로 된 파일이 생성되는지 확인해보고 브라우저에 접속한 후 로그 파일을 확인


### 3) static(정적- 내용이 변하지 않는)
- 정적인 파일의 경로를 설정하는 미들웨어
- 사용하는 방식  
app.use(url, express.static(실제 경로));  
url 요청이 오면 실제 경로에 있는 파일을 출력

- 예  
app.use('/',express.static(path.join(__dirname,'public')));  
// index라고 요청을 하면 프로젝트 안에 있는 public 디렉터리의 index라는 파일을 출력합니다.

### 4) body-parser
- 요청의 본문을 해석해주는 미들웨어로 별도로 설치할 필요는 없음  
express를 설치하면 자동으로 설치가 됩니다.  
- 클라이언트에서 post 방식이나 put(patch) 방식으로 데이터를 전송할 때 그 데이터를 읽기 위한 미들웨어
- 설정  
```
app.use(express.json());
app.use(express.urlencoded(extended:false));

```

-> 파일을 전송하는 경우에는 다른 미들웨어를 사용해야 합니다.

### 5) compression
- 데이터를 압축해서 전송하기 위한 미들웨어  
클라이어트에게 결과를 전송할 때 압축을 해서 전송하기 때문에 트래픽이 줄어듭니다.

- 외부 모듈이라서 설치해야 합니다  
npm install compression

- 설정  
const compression = require("compression");
app.use(compression());

### 6) 쿠키를 해석할 수 있도록 해주는 미들웨어
- 쿠키 중요
- app.use(cookieParser(키)); 를 작성하면 서버에서 쿠키를 읽을 수 있습니다.  
request객체.cookies 하게 되면 모든 쿠키가 넘어오게 됩니다.

### 7) express-session
- 세션(사용자의 정보를 서버에 저장) 관리를 위한 미들웨어
- 클라이언트 측에서 이전 작업에 이어서 다른 작업을 하고자 할 때 세션을 이용합니다.
- 세션은 서버의 메모리를 사용하기 때문에 세션이 너무 크거나 많아지면 서버의 성능이 저하됩니다.  
이런 경우에는 세션을 파일이나 데이터베이스에 유지하는 것이 좋습니다.

### 8) 세션을 사용하는 예제: 새로 고침을 하면 이전 내용에 +1을 해서 출력하기
- 세션을 사용하기 위해서는 express-session 패키지 이용
- 세션은 접속한 브라우저 별로 따로 생성됩니다.
- nodeserver.js 파일을 만들고 작성
//노드에서는 다른 모듈을 가져올 때 require를 사용
``` js
const express = require('express');

//웹 서버를 생성할 수 있는 인스턴스를 생성
const app = express();

//포트 설정(1024번까지는 예약된 포트)
//80번은 http 의 기본 포트, 443번은 https의 기본 포트
app.set('port', 4000);

//요청을 처리하는 함수 외부에 만든 변수는
//모든 사용자가 공유합니다.
let num = 1;
//세션을 사용하기 위한 모듈 가져오기
const session = require('express-session');
//세션을 사용하기 위한 미들웨어 설정
//세션은 클라이언트에 키를 만들어서 매핑을 합니다.
//이 때 key의 값을 알아보기 어렵게 하기 위해서 연산을 수행할 
//값을 주게되는데 이 값이 secret 입니다.
app.use(session({
    secret:"keyboard cat",
    resave:false,
    saveUninitialized:true
}))

//사용자의 요청 처리
app.get("/session", (req, res) => {
    //세션에 num의 값이 없으면 1로 초기화 하고 있으면 1 증가
    if(!req.session.num){
        req.session.num = 1;
    }else{
        req.session.num += 1;
    }
    //내용을 화면에 출력
    res.send("num:" + num + "<br/>" +
         "session의 num:" + req.session.num);
    num = num + 1;
})

//서버를 실행시켜서 사용자의 요청을 처리
app.listen(app.get('port'), ()=>{
    console.log("서버 대기 중");
});
```

=>브라우저에서 접속을 하고 새로 고침을 한 후 다른 브라우저에서 동일한 URL로 접속해서 num 과 req.session.num을 비교

