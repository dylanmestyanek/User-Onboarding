import React from "react"

const UserCard = ({ user, index }) => {
    return( 
        <div key={index}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.password}</p>
        </div>
    );
};

export default UserCard;