import React, { useState } from 'react';
import Card from '../ui/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const dateFormat = {
    month: 'long', day: '2-digit', year: 'numeric',
    hours: '2-digit', minute: '2-digit', second: '2-digit'
};

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    console.log('ExpenseItem evaluated by React');

    const clickHandler = () => {
        console.log('Title update triggered!');

        const currentTime = new Date(Date.now()).toLocaleString('en-US', dateFormat);
        setTitle('New Title@' + currentTime);
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;