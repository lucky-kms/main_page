import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BtnArea from './BtnArea';
import styled from 'styled-components';
import './main.scss';
import TitleBox from './TitleBox2';

/**
 * method : useState() : 함수 안에서 즉시 사용.
 * layout : table
 * style : scss 공통 + styled-components : 개별 스타일
 * component 끼리 이벤트 props 전달
 */

const PrdCardArea = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`;


const Prdwrap = styled.table`
    /* display:flex;
    align-items:flex-start;
    justify-content:center;
    flex-direction:column; */
    width:100%;
    background-color:#fff;


    caption {
        font-size:0;
    }

    thead, tbody {
        width:100%;
    }

    tr td {
        background-color:inherit;
    }

    tr:nth-child(even) td {
        background-color:inherit;
    }

    th, td {
        font-size:1.25rem;
        padding: 0.5rem;
        border-bottom:1px solid #E8E8E8;
       
        
        &:nth-child(1){
            width:10%;
        }
        &:nth-child(2){
            width:30%;
        }
        &:nth-child(3){
            width:60%;
        }
    }

    th {
        font-size:1.3rem;
        font-weight:bold;
        color:#495057;
        border-bottom:1px solid #dee2e6;
        background-color:inherit;
    }
    
`

const Prdlist = styled.tr`
    font-size:1.25rem;
    list-style: none;
    color:#555;
    border-bottom:1px solid #d8d8d8;
    // element 개별 attribute 설정
    color:${(prop) => (prop.listcolor)};
  

    /* &:first-child{
        margin-top:2rem;
        background-color:#ddd;
        
        span:first-child {
            padding-left:1rem;
        }
    } */

    &:last-child{
        margin-bottom:2rem;
        border-bottom:0;
    }

    span {
        display:inline-block;
        padding:.25rem 1rem;
        position:relative;
    }

    span:first-child {
        padding-left:0;
    }

    span ~ span:before {
        content:'';
        display:block;
        width:1px;
        height:20px;
        background-color:#000;
        position:absolute;
        top:50%;
        left:0;
        transform:translateY(-50%);
    }
`

function Page1(){
    const [data, setData] = useState([]);

    // const dataObj = data;
    // const objTitle = Object.keys(dataObj[0]);
    
    // console.log('objTitle : ', objTitle);

    const apiCallback = () => {
        try {
            const fetchData = async () => {
                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                const result = res.json();
                console.log('출력 확인');

                return result;
            }
    
            fetchData()
            .then(res => {setData(res)});
        }catch(e) {
            console.log('error : ', e);
        }

        
       // valedationTest();
    }

    useEffect(() => {
        apiCallback();
    },[]);


    return (
        <section className="section section2">
            <article className="article">
                <h2 className="ft2">회원목록</h2>
                <p className="ft1_5 mb30">REST API : fetch API</p>
                
                <div className="itemGroup">
                    <TitleBox>사용 : REST API : fetch API</TitleBox>
                    <Prdwrap>
                        <caption>JSON USER : TABLE</caption>
                        <colgroup>
                            <col/>
                            <col/>
                            <col/>
                        </colgroup>
                        <thead>
                            <tr>
                                {/* 
                                    - cannot convert undefined or null to object 에러 -
                                    1. const ex = null 인 경우 Object.keys(ex) 접근이 불가하다.
                                    2. 1에 대한 예외 처리가 필요.

                                    -React map 함수, if문 사용 -
                                    map 함수는 값을 다시 계산(function 적용) 해서 되돌려주는 함수이다.
                                    그러므로 map함수 안에서 
                                    if문을 사용하는 것은 적절하지 않다.

                                    특정한 값을 찾아서 코드를 적용시키고 싶다면 for문 혹은 filter 함수를 사용하게 나은 방법이다.
                                    ex) 배열.filter(조건~ ).map()
                                    
                                    어떤 데이터 중에 원하는 데이터만을 뽑아내고 싶다면? 특정 조건을 만족하는 값만 반환
                                    받기를 원할때 filter 사용
                                    
                                    ex)
                                    let array = [3,5,11,0,9,'string'];
                                    let result = array.filter((value) => value < 10)
                                    console.log(result);

                                   -리액트 조건문 종류-
                                   if/else  = jsx return 문 안에서 사용 할 수 없다.

                                   삼항연산자, && 리액트연산자 , switch case, enum
                                
                                */}
                            {
                                (data == '' || data == null || data == undefined)? '' : 
                                    Object.keys(data[0]).filter((val ,index) => index < 3).map((tt , index) => {
                                           return  <th>{tt}</th>
                                    }
                                )
                                        
                            }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((d, index) => (
                                    <tr key={d.id}><td>{d.id}</td> <td>{d.name}</td> <td>{d.username}</td></tr>
                                ))
                            }
                        </tbody>
                    </Prdwrap>
                </div>

                {/* <Prdwrap>
                    <Prdlist listcolor="blue"><span>이름</span><span>회원</span></Prdlist>
                    
                    {
                        data.map(d => (
                            <Prdlist key={d.id}><span>{d.name}</span> <span>{d.name}</span></Prdlist>
                        ))
                    }
                </Prdwrap> */}
                <BtnArea btnEvent={apiCallback}>새로고침</BtnArea>

            </article>
        </section>
    )
}

export default Page1;