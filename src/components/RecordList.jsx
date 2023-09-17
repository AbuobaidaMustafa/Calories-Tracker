import CalorieRecord from "./CalorieRecord";
import "./RecordList.css";

function RecordList(props) {
  return (
    <ul className="record-list">
      <li>
        {" "}
        <CalorieRecord
          date={props.records[0].date}
          meal={props.records[0].meal}
          content={props.records[0].content}
          calories={props.records[0].calories}
        />{" "}
      </li>{" "}
      <li>
        {" "}
        <CalorieRecord
          date={props.records[1].date}
          meal={props.records[1].meal}
          content={props.records[1].content}
          calories={props.records[1].calories}
        />{" "}
      </li>{" "}
      <li>
        {" "}
        <CalorieRecord
          date={props.records[2].date}
          meal={props.records[2].meal}
          content={props.records[2].content}
          calories={props.records[2].calories}
        />{" "}
      </li>{" "}
    </ul>
  );
}

export default RecordList;
