import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props); 

    this.state = {counter: 0};

  
    this.updateValue = this.updateValue.bind(this);
    
  }
  
  render() {
    return (
      <div className="container">
        <textarea rows="3" 
        ></textarea>
        <div  className="counter" onKeyPress={this.updateValue} >{this.state.counter}  </div>
      </div>
    )
  }
 
  updateValue = () => {
    this.setState({ 
      counter: this.state.counter + 1
    });
  } 
}

export default App;
