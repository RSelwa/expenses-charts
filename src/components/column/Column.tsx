import "./column.css";
import "./../../css/variables";
import { cssVariables, getVariable } from "./../../css/variables";
import { useState } from "react";

const Column = (props: any) => {
  const [bgColor, setBgColor] = useState(getVariable("red"));
  const ratio: number = 0.6;
  return (
    <div className="column">
      <div
        className="amount"
        title={props.amount + "€"}
        onMouseEnter={() => {
          setBgColor(getVariable("cyan"));
        }}
        onMouseLeave={() => {
          setBgColor(getVariable("red"));
        }}
        style={{
          height: `${Math.ceil((props.amount * 100) / props.max) * ratio}%`,
          backgroundColor: bgColor,
        }}
      />
      <div className="day" style={{ color: getVariable("brown") }}>
        {props.day}
      </div>
    </div>
  );
};

export default Column;
