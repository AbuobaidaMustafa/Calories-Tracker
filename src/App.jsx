import "./App.css";
import RecordList from "./components/RecordList";
import CalorieRecordEdit from "./components/edit/CaloriesRecordEdit";
function App() {
  const records = [
    {
      date: new Date(2023, 9, 2),
      meal: "Breakfast",
      content: "Egg",
      calories: 30,
    },
    {
      date: new Date(2023, 9, 3),
      meal: "Lunch",
      content: "Milk",
      calories: 40,
    },
    {
      date: new Date(2023, 9, 4),
      meal: "Dinner",
      content: "Bread",
      calories: 50,
    },
  ];

  const handleSubmitForm = (records) => {
    console.log(records);
  };
  return (
    <div className="App">
      <CalorieRecordEdit onFormSubmit={handleSubmitForm} />
      <RecordList records={records} />{" "}
    </div>
  );
}
export default App;
