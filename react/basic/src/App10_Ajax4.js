import React, { useEffect, useState } from 'react';
import './css/bootstrap.css';

const App10_Ajax4=()=>{
    
    //초기값 전달 [초기값, 초기값을 바꿀 함수]
    //React.useState([]); 보다 useState를 import해서 사용하는 것이 좋다.
    const [cafeList, setList] = useState([]);

    //componentDidMount() 대신 사용하는 useEffect() 함수
    //아래에 전달한 화살표 함수는 컴포넌트가 마운트 된 직후에 호출된다.
    useEffect(()=>{
        fetch("http://localhost:8888/spring05/cafe/ajax_list.do")
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            const result=data.list.map((item)=>{
                return (
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
    }, []);

    const request=()=>{};

    return(
        <div className="container">
            <h1>ajax 요청 테스트</h1>
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

export default App10_Ajax4;