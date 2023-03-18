import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

function NewExpense(props) {
    // const [isButtonOpen,setIsButtonOpen] = useState(true);
    // const [isFormOpen,setIsFormOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const onSaveExpenseDataHandler = (enteredData) => {
        const expenseData = {
            ...enteredData,
            id: Math.random().toString()
        }
        props.addExpense(expenseData);
    }
    const startEditingHandler = () => {
        setIsEditing(true);
    }
    const stopEditingHandler = () => {
        setIsEditing(false);
    }
    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={onSaveExpenseDataHandler} />}
        </div>
    );
}

export default NewExpense;