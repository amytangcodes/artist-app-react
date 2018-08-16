import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Event from "./Event";

const StyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const TourPage = ({ tour, events }) => (
  <section className="tour-page">
    <div className="page-header">
      <h2>{tour.name} Tour Series</h2>
      {console.log({ events })}
    </div>

    <div className="panel panel-default">
      <div className="panel-heading">
        <h4>Artist Line-up /</h4>
      </div>
      <div className="panel-body">
        <StyledList>
          {tour.artists.map(artist => (
            <li key={artist.id}>
              <Link to={`/artists/${artist.id}`} replace>
                {artist.artist_name}
              </Link>
            </li>
          ))}
        </StyledList>
      </div>
    </div>

    <div className="panel panel-default">
      <div className="panel-heading">
        <h4>Upcoming Events /</h4>
      </div>
      <div className="panel-body">
        <table className="table">
          <thead>
            <tr>
              <th>Dates</th>
              <th>Tour Leg</th>
              <th>Venue</th>
              <th>Location(s)</th>
            </tr>
          </thead>
          <tbody>
            {events.map(event => (
              <Event event={event} key={event.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default TourPage;
