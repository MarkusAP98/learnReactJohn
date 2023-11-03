import { useState } from "react";
import ExpanseList from "./expanse-tracker/components/ExpanseList";

export const categories = ["Groceries", "Utilities", "Entertaiment"];

function App() {
  const expenses = [
    { id: 1, description: "AAAA", amount: 10, category: "Utilities" },
    { id: 2, description: "BBBB", amount: 10, category: "Utilities" },
    { id: 3, description: "CCCC", amount: 10, category: "Utilities" },
    { id: 4, description: "DDDD", amount: 10, category: "Utilities" }
  ];

  return (
    <div className="">
      <ExpanseList expenses={expenses} onDelete={(id) => console.log('delete', id)}/>
    </div>
  );
}

export default App;
