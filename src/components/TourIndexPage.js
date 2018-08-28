import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import sortBy from "lodash/sortBy";

const StyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

class TourIndexPage extends Component {
  render() {
    const { tours } = this.props;

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4>All Tours /</h4>
        </div>
        <div className="panel-body">
          <StyledList>
            {tours
              ? sortBy(tours, tour => tour.name.toUpperCase()).map(tour => (
                  <li key={tour.id}>
                    <Link to={`/tours/${tour.id}`}>     
                      {tour.name}
                    </Link>
                  </li>
                ))
              : "Loading"}
          </StyledList>
        </div>
      </div>
    );
  }
}

export default TourIndexPage;


