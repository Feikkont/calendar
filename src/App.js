import logo from './logo.svg';
import './App.css';
import {DayBlock} from './components/calendar/ui/dayBlock'
import BasicTable from "./components/calendar/ui/tableDayBlock";

function App() {
  return (
    <div className="App">
      <DayBlock />
        <BasicTable />
    </div>
  );
}

export default App;
