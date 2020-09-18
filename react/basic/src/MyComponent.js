//MyComponent.js 파일입니다.
import React, { Component } from 'react';
import PropTypes from 'prop-type';

/**
 * 부모 컴포넌트로부터 전달된 값(properties)은 
 * this.props.속성명
 * 형식으로 render() 메소드 안에서 참조할 수 있다.
 * 수정은 불가하고 읽기 전용이다.
 */
class MyComponent extends Component {
    //properties의 Default 값 정하기
    //반드시 static을 붙히고 defaultProps에 object를 넣어준다.
    static defultProps={
        title:"제목입니다.",
        num:0
    };

    //properties의 type 강제 하기
    static PropTypes={
        title:PropTypes.string,
        num:PropTypes.number
    };

    //상태값 정의하기
    state={
        count:0
    };

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <p>전달된 num-100={this.props.num=-100}</p>
                <button onClick={()=>{
                    //setState()를 호출해서 상태값을 바꿀 수 있다. (새로운 object를 넣어주는 방식)
                    //상태값의 변화가 생기면 UI가 자동으로 update 된다.
                    //변화가 생긴다는 것은 참조값이 바뀌어야 된다는 뜻이다.
                    this.setState({
                        count: this.state.count+1
                    });
                }}>
                    클릭하세요
                </button>
                {/* 상태값 출력하기 */}
                <p>{this.state.count}</p>
            </div>
        );
    }
}

export default MyComponent;