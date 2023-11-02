import { useState } from "react";
import ExpanseList from "./expanse-tracker/ExpanseList";
// import Shopping from "./components/Shopping";
// import Form from "./components/Form";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "aaa",
      amount: 10,
      category: "Utilities",
    },
    {
      id: 2,
      description: "bbbb",
      amount: 10,
      category: "Utilities",
    },
    {
      id: 3,
      description: "cccc",
      amount: 10,
      category: "Utilities",
    },
    {
      id: 41,
      description: "DDdd",
      amount: 10,
      category: "Utilities",
    },
  ]);

  return (
    <div className="">
      {/* <Shopping /> */}
      {/* <Form /> */}
      <ExpanseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
