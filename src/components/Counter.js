import React, { Component } from "react";

class Counter extends Component {
  state = { count: 0 };

  incrementCounter = () => {
    const { count } = this.state;

    this.setState({ count: count + 1 });
  };

  decrementCounter = () => {
    const { count } = this.state;

    if (count == 0) return;

    this.setState({ count: count - 1 });
  };

  // foo = () => {
  //   return;
  // };

  render() {
    const { count } = this.state;
    const { snapshots, onSnapshot, onClearSnapshots } = this.props;

    console.log("state", this.state);
    console.log("props", this.props);

    // console.log("return value of foo", this.foo());

    return (
      <div>
        <div>{count}</div>
        <div>
          <button onClick={this.incrementCounter}>Increment</button>
          <button onClick={this.decrementCounter}>Decrement</button>
          <button onClick={() => onSnapshot(count)}>Snapshot</button>
          <button onClick={onClearSnapshots} >Clear Snapshots</button>
        </div>
        <div>
          <h2>Snapshots</h2>
          <ul>{snapshots.map((snapshot, i) => <li key={i}>{snapshot}</li>)}</ul>
        </div>
      </div>
    );
  }
}

export default Counter;
