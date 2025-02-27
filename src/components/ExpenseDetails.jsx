import React, { useState } from 'react'
import "./ExpenseDetails.css"

const ExpenseDetails = ({ title, price, date }) => {
    //const{title,price}=props
    //console.log(props)
    const year = date.getFullYear();
    const month = date.toLocaleString("en-US", { month: "long" });
    const day = date.toLocaleString("en-US", { month: "2-digit" });
    const [newTitle, setNewTitle] = useState(title);
    //partie logique avant le rendering (plan avant construction)

    //let newTitle = title;
    // les variables classiques n'ont pas le pouvoir de faire la pre evaluation 

   /* const ChangeTitle = () => {
        console.log(newTitle);
        setNewTitle("Test!!!");
        console.log(newTitle);
    };*/



    return (
        <div className='expense-item'>
            <div className='expense-date'>
                <div className='expense-date__month'>{month}</div>
                <div className='expense-date__year'>{year}</div>
                <div className='expense-date__day'>{day}</div>


            </div>
            <div className='expense-item__description'>
                <h2>{newTitle}</h2>
                <div className='expense-item__price'>${price}</div>
            </div>
            {/* <button onClick={ChangeTitle /* pointeur de resource (valeur)   avec les parenthéses execution lors de rendering  *>Button</button>*/}
        </div>
    )
}

export default ExpenseDetails