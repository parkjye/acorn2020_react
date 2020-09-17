//여러 개 import할 때는 정확한 이름 기재
import {writingLetter, writeMemo} from "./writing_util.mjs";

//한 개의 모듈만 import할 때는 이름 마음대로 써도 됨
import mem from "./my_tuil.mjs"; 

console.log("Step08_import.js 시작");

writingLetter();
writeMemo();

console.log(mem.num);
console.log(mem.name);
mem.sayHello();

console.log("Step08_import.js 끝");