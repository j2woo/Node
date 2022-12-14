// { }로 묶어서 내보낸 것은 이름을 맞추어서 받아야 합니다.
const {odd, even}=require('./var');
// 하나를 내보냈을 때는 이름을 바꿔서 받을 수 있습니다.
// func의 내용을 가져와서 checkNumber라는 이름을 붙이는 것입니다.
const checkNumber= require('./func');

console.log(checkNumber(5));

const path=require('path');
const { url } = require('inspector');
// 현재 디렉토리 확인
console.log(__dirname);
// 현재 디렉토리 내의 public 디렉토리의 경로
console.log(path.join(__dirname,"public"));


const url2=require('url');
const addr="https://www.naver.com/login?id=kjk04021";
// url 분해
const p=url2.parse(addr);
// pathname에는 서버 URL을 제외한 경로를 저장하고 있고
// query는 query string 을 저장하고 있습니다.

console.log(p);

//   addr에서 파라미터 부부만 가져오기
// searchParams 속성을 호출하면 파라미터 부분에 해당하는 객체를 리턴
const address =new URL("https://www.naver.com/login?id=kjk04021");
console.log(address.searchParams);
//id의 값 추출하기
console.log(address.searchParams.get("id"));
