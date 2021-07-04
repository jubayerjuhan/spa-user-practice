import React from 'react';
import "./ShowAllUsers.css"

const ShowAllUsers = (props) => {
    const users = props.users;
    return (
        <div>
            {
                users.map((user) => 
                <div className ="mainContainer" key = {user.id}>
                    <img src={user.profilePic} alt="One men portrait" />
                    <div className="info">
                        <h3>{user.fullName}</h3>
                        <p>Email: {user.email}</p>
                        <p>Phone No: {user.phoneNo}</p>
                        <p>Income: ${user.income}</p>
                        <button className="glow-on-hover" type="button" onClick = {()=> props.handleClick(user)}>Add Me</button>
                    </div>
                </div>
            
            )}
        </div>
    );
};

export default ShowAllUsers;