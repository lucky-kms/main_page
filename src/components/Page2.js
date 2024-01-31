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

    // table data title
    const dataIdx = [
        {
            id:0,
            name:'kms',
            title:'tbl뽀개기',
        },
        {
            id:1,
            name:'mms',
            title:'tbl 두번째',
        }
    ];

    
    const  nametest = Object.keys(dataIdx[0]);
    console.log(nametest);
   
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
            .then(res => setData(res));
        }catch(e) {
            console.log('error : ', e);
        }
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
                            {
                                nametest.map((dd, index) => (
                                    <th>{dd}</th>
                                ))
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