import React, { useState } from "react";
// >yarn add query-string 입력(설치) 후에 사용할 수 있다.
import qs from 'query-string';

const App10_Ajax6=()=>{
    //상태값
    const [formData, setFormData]=useState({
        id:'', 
        pw:'',
        loginID:null}
        );

    const changed=(e)=>{
        //이벤트가 일어난 input 요소의 name 속성의 값(id or pwd) 읽어오기
        let name=e.target.name;
        
        //이벤트가 일어난 input 요소에 입력한 value
        let value=e.target.value;

        setFormData({
            ...formData, //formData 내용을 Object에 값을 나열 후 
            [name]:value //[name]이라는 방 이름으로 값을 오버라이드
            //[e.target.name]:e.target.value 와 같은 형식으로 작성한다.
        });
    };

    //form의 submit버튼을 클릭하면
    //(form에 submit이벤트 발생->) const submit로 실행순서가 들어온다.
    const submit=(e)=>{

        //폼 전송 막기
        e.preventDfault();

        fetch("http://localhost:8888/spring05/users/ajax_login.do", {
            method:"POST",
            headers:{"Content-Type":"application/x-www-form-urlencoded"},
            body:qs.stringify(formData) //form에 입력한 (Object)data를 쿼리 문자열로 변경해서 보낸다.
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.isSuccess){
                setFormData({
                    ...formData,
                    loginId:data.id
                });
            }else{
                alert("아이디 혹은 비밀번호가 틀려요!");
            }        
        })
        .catch(err=>{
            console.log(err);
        });
    };

    const logout=()=>{
       //ajax 로 로그아웃 요청을 한다.
       fetch("http://localhost:8888/spring05/users/ajax_logout.do")
       .then(res=>res.json())
       .then(data=>{
           if(data.isSuccess){
               setFormData({
                   ...formData,
                   loginId:null
               });
               alert("로그 아웃 되었습니다.");
           }
       });
   };

    return (
        <div>
            { formData.loginID && <p><strong>{formData.loginID}</strong>님 로그인 중</p>}
            <h1>로그인 폼 입니다.</h1>
            <form onSubmit={submit}>
                <input onChange={changed} name="id" type="text" placeholder="아이디" />
                <input onChange={changed} name="pwd" type="password" placeholder="비밀번호" />
                <button type="submit">로그인</button>
            </form>
            <p>{JSON.stringify(formData)}</p>
            <p>{qs.stringify(formData)}</p>
            <button onClick={logout}>로그아웃</button>
        </div>
    );
};

export default App10_Ajax6;