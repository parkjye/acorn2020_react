//MyComponent.js 입니다.
import React, { Component } from 'react';

/*
    부모 컴포넌트로부터 전달된 값(properties)은
    this.props.속성명
    형식으로 render() 메소드 안에서 참조할 수있다.
    수정은 불가능하고 읽기 전용.
*/
class MyComponent extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <p>전달 된 num-100 = {this.props.num-100}</p>
            </div>
        );
    }
}

export default MyComponent;