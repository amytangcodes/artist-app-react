import "whatwg-fetch";

export const getArtists = () =>
  fetch("http://localhost:3000/artists").then(response => response.json());

export const addArtist = artist =>
  fetch("http://localhost:3000/artists", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(artist)
  }).then(response => response.json());

export const deleteArtist = artist =>
  fetch(`http://localhost:3000/artists/${artist.id}`, {
    method: "DELETE"
  }).then(response => response.json());

export const getTours = () => 
  fetch("http://localhost:3000/tours").then(response => response.json());

export const getEvents = () =>
  fetch("http://localhost:3000/events").then(response => response.json());
