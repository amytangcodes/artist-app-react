import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  cursor: pointer;
`;

class TourIndex extends Component {
  render() {
    const { tours } = this.props;

    return (
      <div className="list-group">
        {tours.map(
          tour => (
            <li key={tour.id} className="list-group-item">
              <StyledLink to={`/tours/${tour.id}`}>
                {tour.name}
              </StyledLink>
            </li>
        ))}
      </div>
    );
  }
}

export default TourIndex;
