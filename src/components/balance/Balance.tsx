const Balance = (props: any) => {
  type dataElement = {
    day: string;
    amount: number;
  };
  let balance: number = props.balance;
  props.data.forEach((e: dataElement) => {
    console.log(e);
    balance -= e.amount;
  });
  return <div>your balance is {balance}$</div>;
};

export default Balance;
