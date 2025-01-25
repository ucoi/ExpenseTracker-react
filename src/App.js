import Header from "./Component/Header";
import Balance from "./Component/Balance";
import IncomeExpense from "./Component/IncomeExpense";
import TransactionList from "./Component/TransactionList";
import AddTransaction from "./Component/AddTransaction";
import './App.css';
function App() {
  return (
    <div>
    <Header/>
    <div className="container">
    <Balance/>
    <IncomeExpense/>
    <TransactionList/>
    <AddTransaction/>
    
    </div>
    </div>
  );
}

export default App;
