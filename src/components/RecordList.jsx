import CalorieRecord from "./CalorieRecord";
import "./RecordList.css";

function RecordList(props) {
  return (
    <ul className="record-list">
      {props.records.map((record) => (
        <li>
          <CalorieRecord
            date={record.date}
            meal={record.meal}
            content={record.content}
            calories={record.calories}
          />
        </li>
      ))}
    </ul>
  );
}

export default RecordList;
