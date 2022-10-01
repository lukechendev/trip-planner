import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);

        setIsEditing(false);
        props.onAddExpense(expenseData);
    };

    const enterNewExpenseHandler = () => {
        setIsEditing(true);
    }

    const cancelNewExpenseHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className='new-expense'>
            {isEditing && <ExpenseForm
                onSaveExpenseData={saveExpenseDataHandler}
                onCancelled={cancelNewExpenseHandler} />}

            {!isEditing && <button type='button'
                onClick={enterNewExpenseHandler}>Add New Expense</button>}
        </div>
    );
}

export default NewExpense;