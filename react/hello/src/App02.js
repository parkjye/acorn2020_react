import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
    //화면이 렌더링 될 때 호출되는 메소드
    render(){
        const msg="안녕하세요. 이제 React js를 시작합니다."

        // index.html의 <div id="root"></div> 내에 들어간다.
        return (
            <div>
                {/* JSX에서의 주석입니다. */ }
                
                <h1>{msg}</h1>
                <img src={logo}
                //한 줄 주석은 self-close된 곳에서만 사용 가능
                />
            </div>
        );
    };

}//App

export default App;