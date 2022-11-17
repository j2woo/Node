// 노드에서는 다른 모듈을 가져올 때 require를 사용
const express = require('express');

// 웹 서버를 생성할 수 있는 인스턴스를 생성
const app =express();

// 포트 설정(1024번까지는 예약된 포트)
// 80번은 http의 기본 포트, 443번은 https의 기본 포트
app.set('port',3489);

// 사용자의 요청 처리
let num=1;
app.get("/session",(req,res)=>{

    // 내용을 화면에 출력
   // res.send("num:"+ num);
   // num=num+1;
    // 세션을 사용하기 위한 모듈 가져오기
    const session = require('express-session');
    // 세션을 사용하기 위한 미들웨어  설정
    //세션은 클라이언트 키를 만들어서 매핑을 합니다.
    // 이 때 key의 값을 알아보기 어렵게 하기 위해서 연산을 수행할
    // 값을 주게되는데 이 값이 secret입니다.
    app.use(session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true
    }));

})
// 서버를 실행시켜서 사용자의 요청을 처리
app.listen(app.get('port'),()=>{
    console.log("서버 대기 중");
});