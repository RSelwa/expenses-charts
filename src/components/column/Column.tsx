import "./column.css";
import "./../../css/variables";
import cssVariables from "./../../css/variables";
import { useState } from "react";

const Column = (props: any) => {
  const [bgColor, setBgColor] = useState(
    cssVariables.filter((e) => {
      return e.name == "red";
    })[0].value
  );
  return (
    <div className="column">
      <div
        className="amount"
        title={props.amount + "€"}
        onMouseEnter={() => {
          setBgColor(
            cssVariables.filter((e) => {
              return e.name == "cyan";
            })[0].value
          );
        }}
        onMouseLeave={() => {
          setBgColor(
            cssVariables.filter((e) => {
              return e.name == "red";
            })[0].value
          );
        }}
        style={{
          height: `${Math.ceil((props.amount * 100) / props.max) * 0.5}%`,
          backgroundColor: bgColor,
        }}
      />
      <div className="day">{props.day}</div>
      <div className="day">{Math.ceil((props.amount * 100) / props.max)}%</div>
    </div>
  );
};

export default Column;
