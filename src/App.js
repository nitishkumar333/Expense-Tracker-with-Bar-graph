import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Colour Papers',
    amount: 200,
    date: new Date(2020,1, 14),
  },
  { id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2020, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294,
    date: new Date(2023, 4, 28),
  },
  {
    id: 'e4',
    title: 'New Desk',
    amount: 450,
    date: new Date(2022, 6, 17),
  },
  {
    id: 'e5',
    title: 'Painting Colour',
    amount: 223,
    date: new Date(2023, 7, 21),
  },
  {
    id: 'e6',
    title: 'Laptop Service',
    amount: 119,
    date: new Date(2023, 9, 9),
  },
  {
    id: 'e7',
    title: 'Bike Service',
    amount: 330,
    date: new Date(2022, 10, 11),
  },
  {
    id: 'e8',
    title: 'Kids Fun',
    amount: 400,
    date: new Date(2022, 11, 10),
  },
  { id: 'e9',
    title: 'Personal Care',
    amount: 599,
    date: new Date(2022, 1, 17),
  },
  {
    id: 'e10',
    title: 'Projects',
    amount: 76,
    date: new Date(2022, 3, 8),
  },
  {
    id: 'e11',
    title: 'Vacation',
    amount: 100,
    date: new Date(2021, 6, 12),
  },
  {
    id: 'e12',
    title: 'Painting Colour',
    amount: 225,
    date: new Date(2021, 7, 4),
  },
  {
    id: 'e13',
    title: 'Grocery',
    amount: 120,
    date: new Date(2021, 4, 1),
  },
  {
    id: 'e14',
    title: 'Servicing',
    amount: 330,
    date: new Date(2021, 5, 19),
  },
]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((preExpenses) => {
      return [expense, ...DUMMY_EXPENSES];
    });
  }

  return (
    <div>
      <NewExpense addExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
