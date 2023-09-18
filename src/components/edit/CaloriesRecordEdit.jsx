import { useState } from "react";
import "./CaloriesRecordForm.css";
// import ClickCounter from "./ClickCounter";
function CalorieRecordEdit(props) {
  const DEFAULT_VALUE = {
    date: "",
    meal: "",
    content: "",
    calories: 0,
  };
  const [mealObject, setMealObj] = useState(DEFAULT_VALUE);
  // const [clickCounter, setClickCounter] = useState(0);
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
    console.log(event.target.value);
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
    props.onFormSubmit(mealObject);
    setMealObj(DEFAULT_VALUE);
  };

  return (
    <form onSubmit={formHandler}>
      <div>{/* <h4>Click Number : {clickCounter}</h4> */}</div>
      <label htmlFor="date">Date:</label>
      <input
        type="date"
        name="date"
        id="date"
        value={mealObject.date}
        onChange={dateHandler}
      />

      <label htmlFor="meal">Meal:</label>
      <select
        name="meal"
        id="meal"
        value={mealObject.meal}
        onChange={mealHandler}
      >
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
      </select>

      <label htmlFor="content">Content:</label>
      <input
        type="text"
        name="content"
        id="content"
        value={mealObject.content}
        onChange={contentHandler}
      />

      <label htmlFor="calories"></label>
      <input
        type="number"
        name="calories"
        id="calories"
        value={mealObject.calories}
        onChange={caloriesHandler}
      />
      <div className="footer">
        <button>Add</button>
        {/* <ClickCounter setClickCounter={setClickCounter} />  */}
      </div>
    </form>
  );
}

export default CalorieRecordEdit;
