import React, { Component } from "react";

class Counter extends Component {
  state = { count: 0, snapshots: [] };

  incrementCounter = () => {
    const { count } = this.state;

    this.setState({ count: count + 1 });
  };

  decrementCounter = () => {
    const { count } = this.state;

    if (count === 0) return;

    this.setState({ count: count - 1 });
  };

  takeSnapshot = () => {
    const { count, snapshots } = this.state;

    this.setState({ snapshots: snapshots.concat(count) });
  };

  clearSnapshots = () => {
    this.setState({ snapshots: [] })
  }

  // foo = () => {
  //   return;
  // };

  render() {
    const { count, snapshots } = this.state;

    console.log("state", this.state);

    // console.log("return value of foo", this.foo());

    return (
      <div>
        <div>{count}</div>
        <div>
          <button onClick={this.incrementCounter}>Increment</button>
          <button onClick={this.decrementCounter}>Decrement</button>
          <button onClick={this.takeSnapshot}>Snapshot</button>
          <button onClick={this.clearSnapshots} >Clear Snapshots</button>
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
