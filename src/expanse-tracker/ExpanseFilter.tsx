import React from 'react'
import { categories } from '../App'

interface Props { 
    onSelectCatergory: (category: string) => void
}

const ExpanseFilter = ({ onSelectCatergory }: Props) => {
  return (
    <select name="" id="" className="form-select" onChange={(event) => onSelectCatergory(event.target.value)}>
      <option value="">All categories</option>
      {categories.map(category => <option value={category} key={category}>{category}</option>)}
    </select>
  );
}

export default ExpanseFilter