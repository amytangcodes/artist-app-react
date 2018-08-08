import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import sortBy from "lodash/sortBy";
import styled from "styled-components";

// This is an example of a simple component
const StyledLink = styled(Link)`
  color: red;
`;
const ButtonContainer = styled.span`
  margin: 0 15px;
  position: absolute;
  right: 10px;
  bottom: 12px;
`;

class ArtistIndex extends Component {
  render() {
    const { artists, onDeleteArtist } = this.props; // Destructuring

    return (
      <div className="App">
        <ul className="App-intro list-group">
          {artists
            ? sortBy(artists, artist => artist.artist_name.toUpperCase()).map(
                artist => (
                  <li key={artist.id} className="list-group-item">
                    <StyledLink to={`/artists/${artist.id}`} replace>
                      {artist.artist_name}
                    </StyledLink>
                    <ButtonContainer>
                      <button
                        onClick={() => onDeleteArtist(artist.id)}
                        className="btn btn-default"
                      >
                        Delete
                      </button>
                    </ButtonContainer>
                  </li>
                )
              )
            : "Loading"}
        </ul>
      </div>
    );
  }
}

export default ArtistIndex;
