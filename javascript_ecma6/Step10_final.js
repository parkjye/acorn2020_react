/**
 * React를 위한 ECMA6 전체 정리
 */

 // 1. let
 let myName="김구라";

 // 2. const 값이 할당되면 재 할당이 불가한 상수를 정의할 때
const pi = 3.14158;

// 3. Template Literal (back tick을 이용)
function getGreet(){
    return "좋은 아침";
}

let result = `Hello ${myName}! ${getGreet()}`;
console.log(result);

//4. Default Parameter
function printInfo(num=0, name="이름"){
    console.log(`번호:${num} 이름:${name}`);
}

//5. Arrow Function
funcion sum(num1, num2){
    return num1+num2;
}

const sum2=(num1, num2) =>{return num1+num2;}
const sum3=(num1, num2) =>num1+num2;

//6. Destructurin 구조분해 / Destructuring Assignment 구조화 할당
const nums=[10, 20, 30];
const [x, y, z]=nums;
const [,,last]=name; //앞에 두 개의 값은 무시

const mem={num:1, name:"김구라", isMan:true};
//const num=mem.num;
// const name=mem.name;
// const addr=mem.mem.isMan;

//위의 3줄을 대체하는 표현식 (객체 구조 분해)
const {num, name, addr} = mem;

// 7. 개선된 객체 리터럴
const brand ="Hyundai";
const color="silver";
const drive=function(){
    console.log("달려요!");
};

const myCar = {brand, color, dirve};

// 8. Spread Operator
const names=["김구라", "해골", "원숭이"];
const nums=["안녕", "나야나", "어쩌구"];
const result2=[...names, ...msgs];

const print(...args){
    //args는 배열
    console.log(args);
}

//함수를 호출하면서 인자의 갯수를 동적으로 전달 할 수 있다.
print("하나", "두울", "세엣");

// 9. class
class Car{
    //생성자
    constructor(name){
        this._name=name;
    }
    //class 메소드
    drive(){
        console.log(this._name+"이 달려요");
    }
}

class SuperCar extends Car{
    driveFast(){
        console.log("빨리 달려요");
    }
}
const car1=new Car();
const car2=new SuperCar();
car1.drive();
car2.drive();
car2.driverFast();


// static(정적) 메소드, 필드
class MyUtil{
    static version="1.0";
    static write(){
        console.log("필기를 해요");
    }
}

console.log(MyUtil.version); //static 필드 참조
MyUtil.write(); //static 메소드 호출

console.log("End!");