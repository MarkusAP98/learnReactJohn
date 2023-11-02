import { useState } from "react";
import ExpanseList from "./expanse-tracker/ExpanseList";
import ExpanseFilter from "./expanse-tracker/ExpanseFilter";
import ExpanseForm from "./expanse-tracker/ExpanseForm";


export const categories = ["Groceries", "Utilities", "Entertaiment"];

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
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

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div className="">
      <div className="m-5">
        <ExpanseForm />
      </div>
      <div className="mb-3">
        <ExpanseFilter
          onSelectCatergory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpanseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
