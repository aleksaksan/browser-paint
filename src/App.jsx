import React from 'react';
import { Canvas } from './components/Canvas/Canvas';
import { Settingsbar } from './components/Settingsbar/Settingsbar';
import { Toolbar } from './components/Toolbar/Toolbar';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Settingsbar />
      <Canvas />
    </div>
  );
}

export default App;
