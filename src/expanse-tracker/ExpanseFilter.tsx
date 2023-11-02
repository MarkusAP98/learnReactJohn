import React from 'react'

interface Props { 
    onSelectCatergory: (category: string) => void
}

const ExpanseFilter = ({ onSelectCatergory }: Props) => {
  return (
    <select name="" id="" className="form-select" onChange={(event) => onSelectCatergory(event.target.value)}>
      <option value="">All categories</option>
      <option value="Groceries">Groceries</option>
      <option value="Utilities">Utilities</option>
      <option value="Entertaiment">Entertaiment</option>
    </select>
  );
}

export default ExpanseFilter