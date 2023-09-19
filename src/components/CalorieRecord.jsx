import "./CalorieRecord.css";
import CalorieRecordDate from "./CalorieRecordDate";

function CalorieRecord(props) {
  return (
    <ul className="record">
      <li>
        <CalorieRecordDate date={props.date}> </CalorieRecordDate>{" "}
      </li>{" "}
      <li> {props.meal} </li> <li> {props.content} </li>{" "}
      <li className="record-calories"> {props.calories} </li>{" "}
    </ul>
  );
}

export default CalorieRecord;
