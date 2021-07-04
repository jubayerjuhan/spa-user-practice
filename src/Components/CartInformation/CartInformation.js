import React from 'react';
import "./CartInformation.css"

const CartInformation = (props) => {
    const user = props.user;
    console.log(user.length)

    let totalIncome = 0;
    for (let i = 0; i < user.length; i++) {
        const people = user[i];
        totalIncome = totalIncome + people.income ;
        
    }
    return (
        <div>
            <h3>This Is Information</h3>
            <p>Total Added: {user.length}</p>
            <p>{user.length} Peoples Total Yearly Income {totalIncome}</p>
        </div>
    );
};

export default CartInformation;