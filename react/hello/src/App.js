// rcc + 탭하면 기본 form 생성
import React, { Component } from 'react';

class App extends Component {
    //생성자
    constructor(props){
        super(props);

        //상태값 정의하기
        this.state={
            count:0
        }
    }

    render() { //jsx
        return (
            <div>
                <h1>react js 테스트 입니다.</h1>
                <button onClick={
                    ()=>{
                        //alert("클릭?");
                        //상태값 변경할 때 setState 사용
                        this.setState({count:this.state.count+1});
                    }}>{this.state.count}</button>
            </div>
        );
    }
}

export default App;