import React, { Component } from 'react';
//이미지 경로를 import해서 사용한다.
import logo from './logo.svg';
//css파일을 import만 해도 css가 자동 적용된다.
import './App.css';

//class 표현식으로 App 구성
class App extends Component {
  render(){
    const myName="김구라";
    
    //<div id=root> 요소 안에 동적으로 만들어져서 브라우저에 해석된다.  
    return(
      <div>
        <h1>Hello React!</h1>
        <p>내 이름은 <strong>{myName}</strong></p>
        <img src={logo} alt="react js 로고 입니다."/>
      </div> 
    ); 
  }
}

export default App;