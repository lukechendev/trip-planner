import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
    const [yearToFilter, setYearToFilter] = useState('2020');

    const filteringHandler = (selectedYear) => {
        console.log("Selected year " + selectedYear);
        setYearToFilter(selectedYear);
    };

    const filteredExpenses =
        props.expenses.filter(expense => expense.date.getFullYear().toString() === yearToFilter);

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={yearToFilter} onSelected={filteringHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList expenses={filteredExpenses} />
        </Card>
    );
}

export default Expenses;