import React from 'react'

export interface Expense {
    id: string
    description: string
    amount: number
    category: string
}

interface Props {
    expenses: Expense[];
    onDelete: (id: string) => void;
}

// with interface we can define the type of the props that we are going to receive on this component and other components can use this component and pass the props to it. its like a variable that we can use in other components.

const ExpanseList = ({expenses, onDelete}: Props) => {
  return (
    <table className="table table-bordered">
        <thead>
            <tr>
                <th>Description</th>
                <th>Amount</th>
                <th>Category</th>
                <th></th>
            </tr>
        </thead>
        {/* we are mapping expenses into <tr>  */}
        <tbody>
            {expenses.map(expenses => <tr key={expenses.id}>
                <td>{expenses.description}</td>
                <td>{expenses.amount}</td>
                <td>{expenses.category}</td>
                <td><button className="btn btn-outline-danger" onClick={() => onDelete(expenses.id)}>Delete</button></td>
            </tr>)}
        </tbody>
        <tfoot>
            <tr>
                <td>Total</td>
                <td>{expenses.reduce((acc, expense) => expense.amount + acc, 0).toFixed(2)}</td>
                <td></td>
                <td></td>
            </tr>
        </tfoot>
    </table>
  )
}

export default ExpanseList