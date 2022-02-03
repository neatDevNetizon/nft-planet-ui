import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button variant ="secondary">
          <img src="images/metamask.svg" alt="MetaMask" width="50" height="50" /> Connect to MetaMask
        </Button>
        <div className="mt-2 mb-2">
          Connected Account:
        </div>
        <Button variant="danger">
          Disconnect MetaMask<img src="images/noun_waving_3666509.svg" width="50" height="50" />
        </Button>
      </header>
    </div>
  );
}

export default App;
