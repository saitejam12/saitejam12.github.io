import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">How To Demo --- Welp!`</header>
      <div className="links">
        <div className="App-Link">
          <Router>
            <Link to="/howdoiplay" style={{outline: 'none'}}>
              <img src={require('./tsunami.jpg')} alt="tsunami" />
              HOW DO I Play - >>Tsunami643
            </Link>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
