import React, { useState } from 'react';

function CreateUser({ username, email, onChange, onCreate }) {

    return (
        <>
            <input type="text" name="username" placeholder="계정명" onChange={onChange} value={username} />
            <input type="text" name="email" placeholder="이메일" onChange={onChange} value={email} />
            <button type="button" className="btnDefault" onClick={onCreate}>입력</button>
        </>
    )
}

export default CreateUser;