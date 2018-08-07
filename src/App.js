import React, { Component } from "react";
import ArtistIndex from "./ArtistIndex";
import ArtistPage from "./components/ArtistPage";
import { Link } from "react-router-dom";
import { getArtists, addArtist, deleteArtist } from "./repo";
import { Route } from "react-router-dom";
import ReactModal from "react-modal";
import AddArtistForm from "./components/AddArtistForm";

class App extends Component {
  state = { artists: null, showModal: false };

  componentDidMount() {
    getArtists().then(artists => {
      this.setState({ artists: artists });
    });
  }

  // values and onSuccess are keys from an object, hence the {}
  handleAddArtist = ({ values, onSuccess, onError }) => {
    // Alternative is destructuring:
    // handleSubmit = () => {
    //  const { values, onSuccess, onError } = this.state;

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

  handleDeleteArtist = deleteId => {
    deleteArtist({ id: deleteId }).then(() => {
      this.setState({
        artists: this.state.artists.filter(artist => artist.id !== deleteId)
      });
    });
  };

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };
  render() {
    const { artists } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <Route
              path="/"
              render={() => (
                <ArtistIndex
                  artists={artists}
                  onAddArtist={this.handleAddArtist}
                  onDeleteArtist={this.handleDeleteArtist}
                />
              )}
            />
          </div>
          <div className="col-sm-6">
            <Route
              exact
              path="/artists/:artistId"
              render={props => {
                const artistId = parseInt(props.match.params.artistId, 10);
                // If artists is not null then run second part
                const artist =
                  artists && artists.find(artist => artist.id === artistId);
                // Only render ArtistPage if artist exists
                return artist && <ArtistPage artist={artist} />;
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
