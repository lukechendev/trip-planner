import React, { useState } from 'react';
import Card from '../ui/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const [yearToFilter, setYearToFilter] = useState('2020');

    const filteringHandler = (selectedYear) => {
        console.log("Selected year " + selectedYear);
        setYearToFilter(selectedYear);
    };

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={yearToFilter} onSelected={filteringHandler} />
            <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date} />
            <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date} />
            <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date} />
            <ExpenseItem title={props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date} />
        </Card>
    );
}

export default Expenses;