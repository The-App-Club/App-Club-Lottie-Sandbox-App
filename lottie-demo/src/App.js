import React from 'react';
import UncontrolledLottie from './components/UncontrolledLottie';
import ControlledLottie from './components/ControlledLottie';

function App() {
  const lotties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const App = {
    padding: '80px',
  };

  return (
    <div style={App}>
      <h1>REACT LOTTIES</h1>
      <div style={lotties}>
        <UncontrolledLottie />
        <ControlledLottie />
      </div>
    </div>
  );
}

export default App;
