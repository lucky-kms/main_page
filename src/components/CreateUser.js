import React, { useState } from 'react';
import styled from 'styled-components';

const BtnSubmitArea = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;
    padding:2rem 1rem 1rem;

    input[type='text'] {
        appearance: none;
        width:20rem;
        height:3rem;
        padding:0 1rem;
        background-color:#F5F5F5;
        border:1px solid #F5F5F5;
        border-color:#F5F5F5 !important;
        border-radius:.475rem;
        transition:background-color .15s ease;
    }

    input[type='text']::placeholder {
        color:#333;
    }

    input[type='text']:focus {
        background-color:#e1e1e1;
    }

    input[type='text'] + input {
        margin-left:1rem;
    }

    button {
        margin-left:auto;
    }
`

function CreateUser({ username, email, onChange, onCreate }) {

    return (
        <BtnSubmitArea>
            <input type="text" name="username" placeholder="계정명" onChange={onChange} value={username} />
            <input type="text" name="email" placeholder="이메일" onChange={onChange} value={email} />
            <button type="button" className="btnDefault" onClick={onCreate}>입력</button>
        </BtnSubmitArea>
    )
}

export default CreateUser;