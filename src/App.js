import React, { Component } from "react";
import ArtistIndex from "./ArtistIndex";
import ArtistPage from "./components/ArtistPage";
import TourPage from "./components/TourPage";
import Nav from "./components/Nav";
import {
  getArtists,
  addArtist,
  deleteArtist,
  getTours,
  getEvents
} from "./repo";
import { Route } from "react-router-dom";
import FormModal from "./components/FormModal";
import styled from "styled-components";

const Main = styled.main`
  background: #f5f8fa;
`;

class App extends Component {
  state = {
    artists: null,
    showModal: false,
    artistTours: null,
    tours: null,
    events: null
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
      console.log("This is what values is: ", values);
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

  render() {
    const { artists, showModal, tours, events } = this.state;

    return (
      <Main>
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
            
            <div className="col-sm-7">
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
                      <ArtistPage artist={artist} tours={toursForArtist} />
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
            </div>
          </div>
          <FormModal
            showModal={showModal}
            onCloseModal={this.handleCloseModal}
            onAddArtist={this.handleAddArtist}
          />
        </div>
      </Main>
    );
  }
}

export default App;
