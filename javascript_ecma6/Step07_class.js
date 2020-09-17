/**
 * JAVA처럼 class를 정의할 수 있다.
 * 
 */

class Car{
    //생성자
    constructor(name){
        //생성자의 인자로 전달된 내용을 _name이라는 '필드'에 저장
        this._name=name;

        console.log("생성자 호출");
    }

    //static 메소드
    static showInfo(){
        console.log("Car 클래스의 Start 메소드 입니다.");
    }

    //class 메소드
    drive(){
        console.log(this._name+"가(이) 달려요");
    }
}

let c1 = new Car("소나타");

//일반(class) 메소드 호출
c1.drive();

//static 메소드 호출
Car.showInfo();
console.log("c1_.name: "+c1._name);