//배열의 다양한 기능
let nums=[1,2,3,4,5];

//nums배열을 처음부터 탐색하면서 가장 첫번째 짝수를 찾아 리턴한다.
let result=nums.find((x)=>{
    console.log(x);
    //return true;
    return x%2==0;
});

//console.log("result:"+result);

let result2=nums.find((x)=>x%2==0);

console.log("result:"+result);
console.log("result2:"+result2);

//nums배열을 처음부터 탐색하면서 짝수만 찾아서 배열에 담아서 리턴한다.
let result3=nums.filter((x)=>x%2==0);
console.log(result3);

//nums배열에 새로운 아이템을 추가해서 새로운 배열의 참조값 리턴
let result4=nums.concat(6);
let result5=nums.concat([6,7,8,9,10]);
console.log(result4);
console.log(result5);

let names=["김구라"];
let names2=["김구라"];
names.push("원숭이");
let result6=names.concat("원숭이");

console.log(names);
console.log(names2);