import "./column.css";
const Column = (props: any) => {
  return (
    <div className="column">
      <div
        // className={Math.floor(props.amount).toString()}
        className="amount"
        title={props.amount}
        style={{ height: `${props.amount * 6}px` }}
      />
      {/* {props.amount} */}
      <div className="day">{props.day}</div>
    </div>
  );
};

export default Column;
