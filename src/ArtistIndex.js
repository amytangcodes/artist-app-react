import React, { Component } from "react";
import "./App.css";
import { getArtists, addArtist, deleteArtist } from "./repo";
import { Link } from "react-router-dom";
import AddArtistForm from "./components/AddArtistForm";

class ArtistIndex extends Component {
  state = { artists: null }; // Initial state

  componentDidMount() {
    const artists = getArtists();
    console.log({ artists });
    getArtists().then(artists => {
      this.setState({ artists: artists });
    });
  }

  // values and onSuccess are keys from an object
  handleSubmit = ({ values, onSuccess, onError }) => {
    addArtist(values).then(artist => {
      if (artist.id) {
        this.setState({ artists: this.state.artists.concat(artist) });
        onSuccess(); // This second arg will call: () => this.setState({artist_name: ""}));
      } else {
        onError(artist.message);
      }
      console.log(artist);
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
    const { artists } = this.state; // Destructuring

    return (
      <div className="App">
        <AddArtistForm onSubmit={this.handleSubmit} />
        <ul className="App-intro">
          {artists
            ? artists.map(artist => (
                <li key={artist.id}>
                  <Link to={`/artists/${artist.id}`} replace>
                    {artist.artist_name}
                  </Link>
                  <button onClick={() => this.deleteEvent(artist.id)} className="btn btn-default">
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
