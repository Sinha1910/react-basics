import React from 'react';
// import logo from './logo.svg';
// import './App.css';

class InputBox extends React.Component {
  render() {
  return (
    <div className="inputBoc">
        <input type="text" value={this.props.textValue}/>
    </div>
  );
  }
}

export default InputBox;
