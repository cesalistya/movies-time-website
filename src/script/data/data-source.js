// my api key from TMDB
const api_key = "api_key=e1286cf774d52f51715275c0fe9eb5b1";
// base url
const base_url = "https://api.themoviedb.org/3";
// img url
const img_url = "https://image.tmdb.org/t/p/original";

// request for movies data
// const request = {
//   fetchPopular: `${base_url}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&${api}`,
//   fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
//   fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
//   fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
//   fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
//   fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
//   fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
//   fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=27`,
// };

class DataSource extends HTMLElement {
  static bannerMovies(keyword) {
    return fetch(`${base_url}/${keyword}/all/week?${api_key}&language=en-US`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        console.log(responseJson.results);
        if (responseJson.results) {
          // every refresh the movies wil change
          return Promise.resolve(
            responseJson.results[
              Math.floor(Math.random() * responseJson.results.length - 1)
            ]
          );
        } else {
          return Promise.reject(`Error : ${results}`);
        }
      });
  }
}

export default DataSource;
