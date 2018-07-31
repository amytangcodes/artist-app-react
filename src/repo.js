import "whatwg-fetch";

export const getArtists = () =>
  fetch("http://localhost:3000/artists").then(response => response.json());

export const addArtist = artist =>
  fetch("http://localhost:3000/artists", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(artist)
  }).then(response => response.json());

//  const foo = input => {
//    // other stuff
//    return { bar: "baz" };
//  };

//  // If it is only an object:
//  const foo = input => ({bar: "baz"});
