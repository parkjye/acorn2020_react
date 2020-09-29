import React from 'react';
import './css/bootstrap.css';

const App10_Ajax=()=>{
    
    //초기값 전달 [초기값, 초기값을 바꿀 함수]
    const [cafeList, setList] = React.useState([]);

    const request=()=>{
        /*
        fetch("http://localhost:8888/spring05/cafe/ajax_list.do")
        .then(function(res){ //성공
            //console.log(res.json());
            return res.json(); //결과 Promise 객체를 리턴해준다.
        })
        .then(function(data){
            console.log(data);
        })
        .catch(function(res){ //실패
            console.log(res);
        });*/

        //Promise 객체 기반
        fetch("http://localhost:8888/spring05/cafe/ajax_list.do")
        // 받은 결과 text를 json으로 바꿔서 .then(data=>{}) 함수에 Object로 전달한다.
        // (반드시)첫번째 then에서 json으로 호출해야 한다.
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            const result=data.list.map((item)=>{
                return ( //table row가 들어있는 jsx
                    ////primary key값을 사용한다.
                    <tr key={item.num}> 
                        <td>{item.num}</td>
                        <td>{item.title}</td>
                        <td>{item.writer}</td>
                    </tr>
                );
            });
            setList(result);
        })
        .catch(err=>{
            console.log(err);
        });
    };

    return(
        <div className="container">
            <h1>ajax 요청 테스트</h1>
            <button onClick={request}>요청하기</button>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>글번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {cafeList}
                </tbody>
            </table>

        </div>
    );
};

export default App10_Ajax;