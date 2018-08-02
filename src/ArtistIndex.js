import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import sortBy from "lodash/sortBy";
import styled from 'styled-components';
import AddArtistForm from "./components/AddArtistForm";

// This is an example of a simple component
const StyledLink = styled(Link)`
  color: red;
`; 

class ArtistIndex extends Component {

  render() {
    const { artists, onAddArtist, onDeleteArtist } = this.props; // Destructuring

    return (
      <div className="App">
        <AddArtistForm onSubmit={onAddArtist} />
        <ul className="App-intro">
          {artists
            ? sortBy(artists, artist => artist.artist_name.toUpperCase()).map(artist => (
                <li key={artist.id}>
                  <StyledLink  to={`/artists/${artist.id}`} replace>
                    {artist.artist_name}
                  </StyledLink>
                  <button onClick={() => onDeleteArtist(artist.id)} className="btn btn-default">
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
