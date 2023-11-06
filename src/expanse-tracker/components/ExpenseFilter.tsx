import React from 'react'

interface Props {
  onSelectedCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectedCategory }: Props) => {
  return (
    <select name="" id="" className="form-select" onChange={(event) => onSelectedCategory(event.target.value)}>
      <option value="All">All</option>
      <option value="Groceries">Groceries</option>
      <option value="Utilities">Utilities</option>
      <option value="Entertaiment">Entertaiment</option>
    </select>
  );
};

export default ExpenseFilter