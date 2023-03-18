import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
import { useTransition,animated } from '@react-spring/web';

const ExpensesList = ({items}) => {
    const transition = useTransition(items,{
        from: { opacity: 0, scale:0.7 },
        enter: { opacity: 1, scale:1 },
        trail:150,
    }); 

    let expensesContent = <p>No items found.</p>;
    if (items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no items.</h2>
    }
    return <ul className="expenses-list">{
        transition(( style, item ) => (
        <animated.div style={style}>
            <ExpenseItem
                key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
            />
        </animated.div>
        ))
        }
    </ul>
}
export default ExpensesList


// import React from 'react';

// import ExpenseItem from './ExpenseItem';
// import './ExpensesList.css';

// const ExpensesList = (props) => {
//   if (props.items.length === 0) {
//     return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
//   }

//   return (
//     <ul className='expenses-list'>
//       {props.items.map((expense) => (
//         <ExpenseItem 
//           key={expense.id}
//           title={expense.title}
//           amount={expense.amount}
//           date={expense.date}
//         />
//       ))}
//     </ul>
//   );
// };

// export default ExpensesList;