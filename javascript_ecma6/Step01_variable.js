
//변수를 선언하는 방법 1 (함수 scope)
var myName="김구라"; 

//변수를 선언하는 방법 2 (brace scope)
let yourName=("원숭이"); //정리 필요

if(true){
    var num1=10;
    let num2=20;
}

console.log(num1);
//console.log(num2); //참조 불가

for(var i=0; i<5; i++){
    console.log(i);
}

console.log(i);

for(let j=0; j<5; j++){
    console.log(j);
}

console.log(j); //참조불가