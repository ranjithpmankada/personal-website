import React from 'react';
import './App.scss';
import ScrollContainer from './components/ScrollContainer/ScrollContainer';
import Home from './components/Home/Home';
import About from './components/About/About';
import WaitingScreen from './components/WaitingScreen/WaitingScreen';

function App() {
  return (
    <div className="App">
      <ScrollContainer>
        <Home />
      </ScrollContainer>
      {/* <WaitingScreen/> */}
    </div>
  );
}

export default App;
