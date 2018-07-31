import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getArtists } from "./repo";

class App extends Component {
  state = { artists: null };

  componentDidMount() {
    getArtists().then(artists => {
      this.setState({ artists });
    }); // returns a promise
  }

  render() {
    console.log(this.state);
    const { artists } = this.state; // Destructuring

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          {artists
            ? artists.map(artist => (
                <div key={artist.id}> {artist.artist_name} </div>
              ))
            : "Loading"}
        </div>
      </div>
    );
  }
}

export default App;

// Destructuring
// const obj = { a: 1, b: 1 };

// const a = obj.a;
// const b = obj.b;

// const { a, b } = obj;

// const a = obj.a;
// const bee = obj.b;

// const { a, b: bee } = obj;
