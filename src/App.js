import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    window.googletag.cmd.push(function() {
      window.googletag.display('div-1');
    });
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div id="div-1"/>
    </div>
  );
}

export default App;
