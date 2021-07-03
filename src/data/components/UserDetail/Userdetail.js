import React from 'react';
import './Userdetail.css'

const Userdetail = (props) => {
    
    const people = props.people;
    const {profilePic, fullName, email, phoneNo, income, gender} = people;
    console.log(props);

    return (
        <div className = "mainContainer">
            <img src= {profilePic} alt="" />
            <h3>{fullName}</h3>
            <p>{gender}</p>
            <p>{email}</p>
            <p>{phoneNo}</p>
            <p>{income}</p>
            <button onClick = {()=> props.handleclickmanage(people)}>Add Friend</button>
        </div>
    );
};

export default Userdetail;