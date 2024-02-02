import React from 'react';

function UserText({data, onRemove, ontoggle}) {

    return (
        <div key={data.id} style={{
            color: data.active? 'green':'black',
            cursor:'pointer',
            fontWeight:'bold',
        }}
            onClick={() => ontoggle(data.id)}
        >
            <span>{data.username}</span> (<span>{data.email}</span>)
            <button className="btn small" onClick={() => onRemove(data.id)}>삭제</button>
        </div>
    )
}

function UserList({users, onRemove, ontoggle}) {
    

    return (
        <>  
            {
                users.map(data => (
                    <UserText data={data} onRemove={onRemove} ontoggle={ontoggle} />
                ))
            }
        </>
    )
}

export default UserList;