import { getVariable } from "../../css/variables";
import "./balance.css";
const Balance = (props: any) => {
  type dataElement = {
    day: string;
    amount: number;
  };
  let balance: number = props.balance;
  props.data.forEach((e: dataElement) => {
    balance -= e.amount;
  });
  return (
    <div
      className="balance-container"
      style={{
        backgroundColor: getVariable("red"),
        borderRadius: getVariable("border-radius"),
      }}
    >
      <div className="balance">
        <div className="balance-title">My Balance</div>
        <div className="balance-value">${balance}</div>
      </div>
      <div className="balance-circle">
        <div className="circle circle-white"></div>
        <div
          className="circle circle-brown"
          style={{ backgroundColor: getVariable("dark-brown") }}
        ></div>
      </div>
    </div>
  );
};

export default Balance;
