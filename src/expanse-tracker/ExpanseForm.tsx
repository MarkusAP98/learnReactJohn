import React from "react";
import { categories } from "../App";

const ExpanseForm = () => {
  return (
    <form action="">
      <div className="md-3">
        <div className="form-label">Description</div>
        <input id="description" type="text" className="form-control" />
      </div>
      <div className="md-3">
        <label htmlFor="amount" className="form-label">
          amount
        </label>
        <input id="amount" type="number" className="form-control" />
      </div>
      <div className="md-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select name="" id="category" className="form-select">
          <option value=""></option>
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <br></br>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ExpanseForm;
