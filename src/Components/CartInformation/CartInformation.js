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
    
    totalIncome = totalIncome.toFixed(2)
    return (
        <div className="information">
            <div>
                <h2>This Is Information</h2>
                <p><code><small>Total Added: {user.length}</small></code></p>
                <p><code><small>{user.length} Peoples Total Yearly Income ${totalIncome}</small></code></p>
            </div>
        </div>
    );
};

export default CartInformation;