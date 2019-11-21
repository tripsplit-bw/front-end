import React from 'react';



const UserList = () => {
    return (
        <div></div>
    )
}

    {users.map(users => (
        <div key={users.id}>
        <h3>{users.username}</h3>
        <li>password: {users.password}</li>
        <li>email: {users.email}</li>
        </div>
    ))}