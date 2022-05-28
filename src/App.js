import React, { useState } from 'react';
import './App.css';
import Circles from './components/Circles/Circles'
import CircleSelector from './components/CircleSelector/CircleSelector'

function App (props) {
  const [isC1Active, setC1] = useState(false);
  const [isC2Active, setC2] = useState(false);
  const [isC3Active, setC3] = useState(false);
  const [isC4Active, setC4] = useState(false);

    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector 
            isC1Active={isC1Active} 
            isC2Active={isC2Active} 
            isC3Active={isC3Active} 
            isC4Active={isC4Active}
            setC1={setC1}
            setC2={setC2}
            setC3={setC3}
            setC4={setC4}
          />
          <Circles
            isC1Active={isC1Active} 
            isC2Active={isC2Active} 
            isC3Active={isC3Active} 
            isC4Active={isC4Active}
            setC1={setC1}
            setC2={setC2}
            setC3={setC3}
            setC4={setC4}
          />
        </main>
      </div>
    );
  
}

export default App;