import React from "react";

const Event = ({ event }) => (
  <tr>
    <td>{event.event_date}</td>
    <td>{event.event_name}</td>
    <td>{event.venue}</td>
    <td>{event.location}</td>
  </tr>
);

export default Event;
