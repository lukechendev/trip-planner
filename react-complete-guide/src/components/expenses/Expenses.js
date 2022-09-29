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

    const filteredExpenses =
        props.expenses.filter(expense => expense.date.getFullYear().toString() === yearToFilter);

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={yearToFilter} onSelected={filteringHandler} />
            {filteredExpenses.map(expense => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date} />
            ))}
        </Card>
    );
}

export default Expenses;