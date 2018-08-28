import React, { Component } from "react";
import ArtistIndex from "./ArtistIndex";
import ArtistPage from "./components/ArtistPage";
import TourIndexPage from "./components/TourIndexPage";
import TourPage from "./components/TourPage";
import Nav from "./components/Nav";
import {
  getArtists,
  addArtist,
  deleteArtist,
  getTours,
  addTours,
  getEvents,
  updateArtist
} from "./repo";
import { Route } from "react-router-dom";
import FormModal from "./components/FormModal";
import styled from "styled-components";

const Overlay = styled.div`
  background: rgba(218, 85, 186, 0.1);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
`
const RightColumn = styled.div`
  position: relative;
  z-index: 10;
`

class App extends Component {
  state = {
    artists: null,
    showModal: false,
    artistTours: null,
    tours: null,
    events: null,
    isEditing: false,
    displayOverlay: false
  };

  componentDidMount() {
    getArtists().then(artists => {
      this.setState({ artists: artists });
    });
    getTours().then(tours => {
      this.setState({ tours: tours });
    });
    getEvents().then(events => {
      this.setState({ events: events });
    });
  }

  // values and onSuccess are keys from an object, hence the {}
  handleAddArtist = ({ values, onSuccess, onError }) => {
    // Alternative is destructuring:
    // handleSubmit = () => {
    //  const { values, onSuccess, onError } = this.state;

    addArtist(values).then(artist => {
      console.log("in app this is what values is: ", values);
      if (artist.id) {
        onSuccess(); // This arg will call: () => this.setState({artist_name: ""}));
        this.setState({
          artists: this.state.artists.concat(artist),
          showModal: false
        });
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

  toggleEditing = () => {
    const { isEditing, displayOverlay } = this.state;
    this.setState({ 
      isEditing: !isEditing,
      displayOverlay: !displayOverlay
    });
  };

  handleEditProfile = ({ values, onError }) => {
    // console.log(updateArtist(values));
    updateArtist(values).then(resp => {
      if (resp.id) {
        this.setState({
          artists: this.state.artists
            .filter(({ id }) => id !== resp.id)
            .concat(resp),
          // ...this.state.artists.filter(({ id }) => id !== resp.id), resp
          isEditing: false,
          displayOverlay: false
        });
      } else {
        onError(resp.message);
      }
    });
  };

  render() {
    const { artists, showModal, tours, events, isEditing, displayOverlay } = this.state;

    return (
      <main>
        <Nav handleOpenModal={this.handleOpenModal} />
        <div className="container">
          <div className="row">
            <div className="col-sm-5">
              <Route
                path="/"
                render={() => (
                  <ArtistIndex
                    artists={artists}
                    onDeleteArtist={this.handleDeleteArtist}
                  />
                )}
              />
            </div>

            <RightColumn className="col-sm-7">
              <Route
                exact
                path="/artists/:artistId"
                render={props => {
                  const artistId = parseInt(props.match.params.artistId, 10);
                  // If artists is not null then run second part
                  const artist =
                    artists && artists.find(artist => artist.id === artistId);
                  const toursForArtist =
                    tours &&
                    tours.filter(tour =>
                      tour.artists.some(artist => artist.id === artistId)
                    );
                  // Only render ArtistPage if artist exists
                  return (
                    artist &&
                    tours && (
                      <ArtistPage
                        artist={artist}
                        tours={toursForArtist}
                        isEditing={isEditing}
                        onEditProfile={this.handleEditProfile}
                        toggleEditing={this.toggleEditing}
                      />
                    )
                  );
                }}
              />
              <Route
                exact
                path="/tours/:tourId"
                render={props => {
                  const tourId = parseInt(props.match.params.tourId, 10);
                  const tour = tours && tours.find(tour => tour.id === tourId);
                  const eventsForTour =
                    events && events.filter(event => event.tour_id === tourId);
                  return (
                    tour &&
                    events && <TourPage tour={tour} events={eventsForTour} />
                  );
                }}
              />

              <Route
                path="/tours"
                render={() => (
                  <TourIndexPage
                    tours={tours}
                  />
                )}
              />
            </RightColumn>
          </div>
          
          { displayOverlay ? <Overlay /> : null }
          
          <FormModal
            showModal={showModal}
            onCloseModal={this.handleCloseModal}
            onAddArtist={this.handleAddArtist}
          />
        </div>
      </main>
    );
  }
}

export default App;
