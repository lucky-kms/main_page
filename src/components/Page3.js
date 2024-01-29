import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './main.scss';

const prdCardArea = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`;


const Prdwrap = styled.ul`
    display:flex;
    align-items:flex-start;
    justify-content:center;
    flex-direction:column;
    width:100%;
`

const Prdlist = styled.li`
    font-size:1.5rem;
    list-style: none;
    color:#555;
    border-bottom:1px solid #d8d8d8;
    // element 개별 attribute 설정
    color:${(prop) => (prop.listcolor)};
  

    &:first-child{
        margin-top:2rem;
        background-color:#ddd;
        
        span:first-child {
            padding-left:1rem;
        }
    }

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

    useEffect(() => {
        const fecthData = async() => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users');
            
            return res.data;
        }
        
        fecthData().then(res => setData(res));

    },[]);

    return (
        <section className="section section3">
            <article className="article">
                <h2 className="ft2">메인3 page </h2>
                <p className="ft1_5">REST API : Axios API</p>

                <Prdwrap>
                    <Prdlist listcolor="blue"><span>이름</span><span>회원</span></Prdlist>
                    
                    {
                        data.map(d => (
                            <Prdlist key={d.id}><span>{d.name}</span> <span>{d.name}</span></Prdlist>
                        ))
                    }
                 </Prdwrap>

            </article>
        </section>
    )
}

export default Page1;