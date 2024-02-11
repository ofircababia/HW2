import logo from './logo.svg';
import './App.css';
import CCColors from './ClassComps/CCColors';
import CCPsych from './ClassComps/CCPsych';
import CCTable from './ClassComps/CCTable';

function App() {
  return (
    <div className="App">
      <header >
        <h1>HW2</h1>
      </header>
        <body>
        <CCColors/>
        <br/>
        <CCPsych/>
        <br/>
      <CCTable/>
      </body>
    </div>
  );
}

export default App;
