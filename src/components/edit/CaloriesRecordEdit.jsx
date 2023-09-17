import { useState } from "react";
import "./CaloriesRecordForm.css";

function CalorieRecordEdit() {
  const [mealObject, setMealObj] = useState({});
  const dateHandler = (event) => {
    setMealObj({
      ...mealObject,
      date: event.target.value,
    });
  };
  const mealHandler = (event) => {
    setMealObj({
      ...mealObject,
      meal: event.target.value,
    });
  };
  const contentHandler = (event) => {
    setMealObj({
      ...mealObject,
      content: event.target.value,
    });
  };
  const caloriesHandler = (event) => {
    setMealObj({
      ...mealObject,
      calories: event.target.value,
    });
  };
  const formHandler = (event) => {
    event.preventDefault();
    console.log(mealObject);
  };

  return (
    <form onSubmit={formHandler}>
      <label htmlFor="date">Date:</label>
      <input type="date" name="date" id="date" onChange={dateHandler} />

      <label htmlFor="meal">Meal:</label>
      <select name="meal" id="meal" onChange={mealHandler}>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
      </select>

      <label htmlFor="content">Content:</label>
      <input
        type="text"
        name="content"
        id="content"
        onChange={contentHandler}
      />

      <label htmlFor="calories"></label>
      <input
        type="number"
        name="calories"
        id="calories"
        onChange={caloriesHandler}
      />
      <div className="footer">
        <button>Add</button>
      </div>
    </form>
  );
}

export default CalorieRecordEdit;
