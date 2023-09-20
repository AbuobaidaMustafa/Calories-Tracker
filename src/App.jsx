import "./App.css";
import RecordList from "./components/RecordList";
import CalorieRecordEdit from "./components/edit/CaloriesRecordEdit";
import { useState } from "react";
function App() {
  const INTIAL_VALUE = [
    {
      id: 1,
      date: new Date(2023, 9, 2),
      meal: "Breakfast",
      content: "Egg",
      calories: 30,
    },
    {
      id: 2,
      date: new Date(2023, 9, 3),
      meal: "Lunch",
      content: "Milk",
      calories: 40,
    },
    {
      id: 3,
      date: new Date(2023, 9, 4),
      meal: "Dinner",
      content: "Bread",
      calories: 50,
    },
  ];
  const [records, setRecords] = useState(INTIAL_VALUE);
  const [nextId, setNextId] = useState(4);
  const handleSubmitForm = (record) => {
    const formatedRecord = {
      ...record,
      date: new Date(record.date),
      id: nextId,
    };
    setNextId((perviousVal) => (perviousVal += 1));
    setRecords((perviousRecords) => [formatedRecord, ...perviousRecords]);
  };
  return (
    <div className="App">
      <CalorieRecordEdit onFormSubmit={handleSubmitForm} />
      <RecordList records={records} />{" "}
    </div>
  );
}
export default App;
