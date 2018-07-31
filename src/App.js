import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { getArtists, addArtist } from "./repo";

class App extends Component {
  state = { artists: null, artist_name: "" }; // Initial state

  componentDidMount() {
    getArtists().then(artists => {
      this.setState({ artists: artists });
    });
  }

  handleChange = event => {
    this.setState({ artist_name: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    addArtist({ artist_name: this.state.artist_name }).then(artist => {
      this.setState({ artists: this.state.artists.concat(artist) });
    });
  };

  render() {
    const { artists, artist_name } = this.state; // Destructuring

    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>Artist Name</label>
          <input
            type="text"
            name="artist_name"
            placeholder="Artist Name"
            value={artist_name}
            onChange={this.handleChange}
          />
        </form>
        <ul className="App-intro">
          {artists
            ? artists.map(artist => (
                <li key={artist.id}> {artist.artist_name} </li>
              ))
            : "Loading"}
        </ul>
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
