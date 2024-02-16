import React from 'react';
import Gnb from './components/Gnb';
import Contents from './components/Contents';
// import logo from './logo.svg';
// import './App.css';

function App() {

  return (
    <div className="wrap">
      <div className="mainInner">
        <Gnb />
        <Contents />
      </div>
    </div>
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
