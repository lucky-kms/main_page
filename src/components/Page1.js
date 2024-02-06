import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import './main.scss';
import UserList from './UsersList';
import CreateUser from './CreateUser';
import TitleBox from './TitleBox2';


const prdCardArea = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`;

const Section = styled.div`
    /* display:flex;
    align-items:flex-start;
    justify-content:flex-start; */

    .article {
       
    }

    .article:nth-child(even) {
        background-color:#222;
    }
`

function Page1(){
    
    const [inputs, setInputs] = useState({
        username:'',
        email:''
    });

    const {username, email} = inputs;

    const onChange = e => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }


    const [users, setUsers] = useState([
            {
                id:1,
                username:'minsoo',
                email:'kmpluto83@gmail.com',
                active: true
            },
            {
                id:2,
                username:'minsoo',
                email:'kmpluto83@naver.com',
                active: false
            },
            {
                id:3,
                username:'minsoo',
                email:'kmpluto83@hanmail.net',
                active: false
            }
        ]);
    
    const nextId = useRef(4);

    const onCreate = () => {
        const user = {
            id:nextId.current,
            username,
            email,
        }
        /** 배열 합치기 : sprred 연산자, concat 사용 */
        setUsers([...users, user]);
        // setUsers(users.concat(user));

        // console.log(nextId.current);
        setInputs({
            username:'',
            email:''
        });

        nextId.current += 1;
    }
    
    const onRemove = id => {
        // console.log('e : ', e);      
        const user = users.filter(data => data.id != id);
        setUsers(user);
    }

    const ontoggle = id => {
       setUsers(users.map(user => user.id == id ? 
        {...user, active: !user.active} : user 
        ))
      
    }

    return (
        <Section className="section section1">
            <article className="article">
                <h2 id="" className="ft2">가입</h2>
                <div className="itemGroup">
                    <TitleBox>사용 : REST API : fetch API</TitleBox>
                    <UserList users={users}  onRemove={onRemove} ontoggle={ontoggle} />
                    <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
                </div> 
            </article>
            <article className="article">상품 페이지</article>
            <article className="article">상품 페이지</article>
            <article className="article">상품 페이지</article>
            <article className="article">상품 페이지</article>
            <article className="article">상품 페이지</article>
        </Section>
    )
}

export default Page1;