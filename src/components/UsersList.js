import React, { useEffect } from 'react';
import styled from 'styled-components';


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
            width:60%;
        }
        &:nth-child(3){
            width:30%;
            text-align:right;
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

function UserText({data, onRemove, ontoggle}) {
    const {id, username, email, active} = data;

    return (
        <Prdlist key={data}>
            <td style={{
            color: data.active? 'green':'black',
            cursor:'pointer',
            fontWeight:'bold',
        }}
            onClick={() => ontoggle(id)}>{username}</td> (<td>{email}</td>)
            <td>
                <button className="btn small" onClick={() => onRemove(id)}>삭제</button>
            </td>
        </Prdlist>
    )
}

function UserList({users, onRemove, ontoggle}) {
    
   
    useEffect(() => {
        console.log(users);
     }, [])
 

    return (
        <Prdwrap>  
            {
                users.map(data => (
                    <UserText data={data} onRemove={onRemove} ontoggle={ontoggle} />
                ))
            }
        </Prdwrap>
    )
}

export default UserList;