import "./column.css";
const Column = (props: any) => {
  return (
    <div className="column">
      <div
        // className={Math.floor(props.amount).toString()}
        className="amount"
        title={props.amount}
        style={{
          height: `${Math.ceil((props.amount * 100) / props.max) * 0.5}%`,
        }}
        // style={{ height: `${props.amount * 6}px` }}
      />
      {/* {props.amount} */}
      <div className="day">{props.day}</div>
      <div className="day">{Math.ceil((props.amount * 100) / props.max)}%</div>
    </div>
  );
};

export default Column;
