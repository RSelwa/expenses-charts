import Column from "../column/Column";
import "./charts.css";

const Charts = (props: any) => {
  const data = require("../../assets/data/data.json");
  type dataElement = {
    day: string;
    amount: number;
  };

  const max: number = Math.max(
    ...data.map((e: dataElement) => {
      return e.amount;
    })
  );
  return (
    <div className="charts-container">
      <div className="charts-title">Spending from 7 days</div>
      <div className="column-container">
        {data.map((element: dataElement) => {
          return <Column max={max} day={element.day} amount={element.amount} />;
        })}
      </div>
    </div>
  );
};

export default Charts;
