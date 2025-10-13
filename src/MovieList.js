import { Component } from "react";
import MovieCard from "./Moviecard";

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          title: "The Avengers!",
          plot: "Supernatural powers show in the movie.",
          price: 199,
          rating: 8.9,
          stars: 0,
          fav: false,
          isIncart: false,
        },
        {
          title: "Inception",
          plot: "A thief who steals corporate secrets through dream-sharing technology.",
          price: 249,
          rating: 9.0,
          stars: 0,
          fav: false,
          isIncart: false,
        },
        {
          title: "The Dark Knight",
          plot: "Batman faces the Joker in a battle for Gotham’s soul.",
          price: 299,
          rating: 9.1,
          stars: 0,
          fav: false,
          isIncart: false,
        },
        {
          title: "Interstellar",
          plot: "A team of explorers travel through a wormhole to ensure humanity’s survival.",
          price: 279,
          rating: 8.7,
          stars: 0,
          fav: false,
          isIncart: false,
        },
        {
          title: "Iron Man",
          plot: "A genius billionaire builds a high-tech suit to fight evil.",
          price: 199,
          rating: 8.5,
          stars: 0,
          fav: false,
          isIncart: false,
        },
        {
          title: "Spider-Man: No Way Home",
          plot: "Spider-Man seeks help from Doctor Strange after his identity is revealed.",
          price: 259,
          rating: 8.4,
          stars: 0,
          fav: false,
          isIncart: false,
        },
      ],
    };
  }
  render() {
    const { movies } = this.state;
    return (
      <>
        {movies.map((movie, indx) => (
          <MovieCard movies={movie} key={indx} />
        ))}
      </>
    );
  }
}

export default MovieList;
