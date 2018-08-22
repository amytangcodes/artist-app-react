import React, { Component } from "react";
import PropTypes from "prop-types";
import TourIndex from "./TourIndex";
import DisplayProfile from "./DisplayProfile";
import EditProfile from "./EditProfile";
import styled from "styled-components";

const TourRow = styled.div`
  // border: 1px dashed violet;
`

class ArtistPage extends Component {
  static propTypes = {
    artist: PropTypes.object.isRequired,
    tours: PropTypes.array.isRequired,
    isEditing: PropTypes.bool.isRequired,
    onEditProfile: PropTypes.func.isRequired,
    toggleEditing: PropTypes.func.isRequired
  };

  render() {
    const { artist, tours, isEditing, onEditProfile, toggleEditing } = this.props;

    return (
      <div className="main-content">
        <div className="page-header">
          <h1>{artist.artist_name}</h1>
        </div>

        {isEditing === false ? (
          <DisplayProfile 
            artist={artist} 
            toggleEditing={toggleEditing} 
            onSubmit={onEditProfile}
          />
        ) : (
          <EditProfile
            artist={artist}
            toggleEditing={toggleEditing}
            onSubmit={onEditProfile}
            // onSubmit={(args) => { console.log("args when I save", args) }}
          />
        )}

        <TourRow>
          <div className="row">
            <div className="col-xs-12">
              <h3>Upcoming Tours</h3>
              <TourIndex tours={tours} />
            </div>
          </div>
        </TourRow>  
      </div>
    );
  }
}

export default ArtistPage;
