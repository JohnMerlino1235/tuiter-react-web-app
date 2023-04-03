import logo from './logo.svg';
import './App.css';

function App() {
  const API_BASE = process.env.REACT_APP_API_BASE;
  const TUITS_API = `${API_BASE}/tuits`;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          Tuits: {TUITS_API}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
