import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props); 

    this.state = {counter:"0"};
  
  }

  onChange = (event) => {
    this.setState({counter:event.target.value.length})
}

  render() {
    return (
      <div className="container">
        <textarea rows="3"  
        onChange={this.onChange}>          
        </textarea>
        <div className="counter" >{this.state.counter}</div>
      </div>
    )
  }
  } 

export default App;
