import React, { Component } from "react";
import TourIndex from "./TourIndex";
import DisplayProfile from "./DisplayProfile";
import EditProfile from "./EditProfile";

class ArtistPage extends Component {
  state = {
    isEditing: false
  };

  handleEditing = () => {
    const { isEditing } = this.state;
    this.setState({ isEditing: !isEditing });
  };

  onEditProfile = ({ values, artist }) => {
    console.log("Values look like this", values);
    this.setState({
      artist: this.state.artist,
      isEditing: false
    });
    console.log(artist);
  };

  render() {
    const { artist, tours } = this.props;
    const { isEditing } = this.state;

    return (
      <div className="main-content">
        <div className="page-header">
          <h1>{artist.artist_name}</h1>
        </div>

        {isEditing === false ? (
          <DisplayProfile artist={artist} handleEditing={this.handleEditing} />
        ) : (
          <EditProfile
            artist={artist}
            handleEditing={this.handleEditing}
            onSubmit={this.onEditProfile.bind(this)}
          />
        )}

        <div className="row">
          <div className="col-xs-12">
            <h3>Upcoming Tours</h3>
            <TourIndex tours={tours} />
          </div>
        </div>
      </div>
    );
  }
}

export default ArtistPage;
