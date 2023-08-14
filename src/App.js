import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MyContext from './Context/MyContext';
import NewTransaction from './Components/NewTransaction';
import TransactionHistory from './Components/TransactionHistory';
import BalanceExpense from './Components/BalanceExpense';
import ExpenseChart from './Components/ExpenseChart';

function App() {
  return (
    <div className="App">
    <MyContext>
    <div className='left'>
      <BalanceExpense/>
      <NewTransaction/>
    </div>
    <div className='right'>
      <TransactionHistory/>
    </div>
    <div className='rchart'>
      <ExpenseChart/>
      <h1>EXPENSE ANALYSIS CHART</h1>
    </div>
    </MyContext>
    </div>
  );
}

export default App;
