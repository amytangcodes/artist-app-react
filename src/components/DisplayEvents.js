import React from 'react';
import Event from "./Event";

const DisplayEvents = ({ events, toggleEditing }) => (
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
);
 
export default DisplayEvents;