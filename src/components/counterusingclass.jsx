import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  btn = () => {
    this.setState(States => ({
      counter: States.counter + 1
    }));
  };

  render() {
    return (
      <div>
        <h1>Counter</h1>
        {this.state.counter} <br></br>
        <button onClick={this.btn}>Increment</button>
      </div>
    );
  }
}

export default App;
     
				
					
				
				
			
	



