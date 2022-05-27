import "./App.css";
import Balance from "./components/balance/Balance";
import Charts from "./components/charts/Charts";

function App() {
  const initialBalance: number = 1000;
  const data: dataElement[] = require("./assets/data/data.json");
  type dataElement = {
    day: string;
    amount: number;
  };
  return (
    <div className="App">
      <Balance balance={initialBalance} data={data} />
      <Charts />
    </div>
  );
}

export default App;
