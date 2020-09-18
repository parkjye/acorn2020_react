//MyComponent.js 입니다.
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*
    부모 컴포넌트로부터 전달된 값(properties)은
    this.props.속성명
    형식으로 render() 메소드 안에서 참조할 수있다.
    수정은 불가능하고 읽기 전용.
*/
class MyComponent extends Component {
    //properties의 default값 정의하기
    //반드시 static을 붙이고 defaultProps에 object를 넣어준다.
    static defaultProps={
        title:"제목입니다.",
        num:0
    };

    //properties의 type 강제하기
    static propTypes={
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
                <p>전달 된 num-100 = {this.props.num-100}</p>
                <button className="btn btn-outline-success"onClick={()=>{
                    //setState()를 이용해서 상태값을 바꿀 수 있다. (새로운 object를 넣어주는 방식)
                    //상태값의 변화가 생기면 UI가 자동으로 update된다.
                    //변화가 생긴다는 것은 참조값이 바뀌어야 된다는 것이다.
                    this.setState({
                        count: this.state.count+1
                    });
                }}>
                    버튼을 클릭하세요.
                </button>

                {/**상태값 출력하기 */}
                <p>{this.state.count}</p>
            </div>
        );
    }
}

export default MyComponent;