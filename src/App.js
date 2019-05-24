import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputBox from './input-box/input.component';

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <InputBox textValue="Sourabh"/>
    </div>
  );
  }
}

export default App;
