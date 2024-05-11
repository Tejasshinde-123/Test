
import React from 'react';

class Child extends React.Component {
  render() {
    return (
      <div>
        <h2>Child Component</h2>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

export default Child;
