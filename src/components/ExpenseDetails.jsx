import React from 'react'
import "./ExpenseDetails.css"

const ExpenseDetails = ({title,price,date}) => {
    //const{title,price}=props
    //console.log(props)
    const year=date.getFullYear();
    const month=date.toLocaleString("en-US",{month:"long"});
    const day=date.toLocaleString("en-US",{month:"2-digit"});
    console.log("test")
    return (
        <div className='expense-item'>
            <div className='expense-date'>
                <div className='expense-date__month'>{month}</div>
                <div className='expense-date__year'>{year}</div>
                <div className='expense-date__day'>{day}</div>
                

            </div>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{price}</div>
            </div>
        </div>
    )
}

export default ExpenseDetails