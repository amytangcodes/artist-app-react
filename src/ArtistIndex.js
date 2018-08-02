import React, { Component } from "react";
import "./App.css";
import { getArtists, addArtist, deleteArtist } from "./repo";
import { Link } from "react-router-dom";

class ArtistIndex extends Component {
  state = { artists: null, artist_name: "" }; // Initial state

  componentDidMount() {
    const artists = getArtists();
    console.log({ artists });
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

  deleteEvent = deleteId => {
    deleteArtist({ id: deleteId }).then(() => {
      this.setState({
        artists: this.state.artists.filter(artist => artist.id !== deleteId)
      });
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
                <li key={artist.id}>
                  <Link to={`/artists/${artist.id}`}>{artist.artist_name}</Link>
                  <button onClick={() => this.deleteEvent(artist.id)}>
                    Delete
                  </button>
                </li>
              ))
            : "Loading"}
        </ul>
      </div>
    );
  }
}

export default ArtistIndex;
