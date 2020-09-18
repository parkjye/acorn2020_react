import React, { Component } from 'react';

//이미지 경로를 import해서 사용한다.
import logo from './logo.svg';
import kim from './images/kim1.png'

//css파일을 import만 해도 css가 자동 적용된다.
import './css/bootstrap.css';
import './App.css';

//class 표현식으로 App 구성
class App extends Component {
  render(){
    const myName="김구라";
    const isMan=true; //true, false
    
    //요소에 적용할 인라인 css를 object로 정의하고 적용할 수 있다.
    const boxStyle={
      width:"100px",
      height:"100px",
      margin:"10px",
      border:"1px solid red",
      backgroundColor:"lightYellow" //여러 단어로 구성된 속성은 camel case를 사용한다.
    }


    //<div id=root> 요소 안에 동적으로 만들어져서 브라우저에 해석된다.  
    return(
      // React에서 class는 예약어이기 때문에 html요소에 class명을 줄 때는 'className'을 사용해서 명시한다.
      <div className="container">
        <h1>Hello React!</h1>
        <p>내 이름은 <strong>{myName}</strong></p>
        <img src={logo} alt="react js 로고 입니다."/>
        <img src={kim} alt="김구라 이미지"/> 
        <p>당신은 {isMan ? "남자" : "여자"} 입니다.</p> {/* if else */}
        <p>{isMan && "당신은 남자 입니다."}</p> {/* 단일 if문. false이면 화면 노출 안된다. */}

        {/*
          [ 이벤트 처리 ]

          onEventName={ 화살표 함수 }

          처럼 on 다음에 이벤트 명을 camel case로 작성한다.
          화살표 함수는 해당 이벤트가 발생하면 자동으로 호출된다.
          ex) onClick, onMouseOver, onChange, onInput, onKeyDown, onFocus ...
        */}
        <button className="btn btn-outline-primary" onClick={()=>{
          alert("버튼을 클릭했습니다.");
        }}>
          클릭하세요.
        </button>
        <div style={boxStyle}>box</div>
      </div> 
    ); 
  }
}

export default App;