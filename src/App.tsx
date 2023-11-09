import { useState } from "react";
import ExpanseList from "./components/expanse-tracker/component/ExpanseList";
import ExpenseFilter from "./components/expanse-tracker/component/ExpenseFilter";
import ExpenseForm from "./components/expanse-tracker/component/ExpenseForm";
import categories from "./components/expanse-tracker/component/categories";

function App({}) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, SetExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 15, category: "Utilities" },
    { id: 3, description: "ccc", amount: 5, category: "Utilities" },
    { id: 4, description: "ddd", amount: 20, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm onSubmit={expense=> SetExpenses([...expenses, {...expense, id: expenses.length + 1 }])} />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpanseList
        expenses={visibleExpenses}
        onDelete={(id) =>
          SetExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </div>
  );
}

export default App;
