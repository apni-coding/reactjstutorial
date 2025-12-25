import { Component } from "react";
import MovieCard from "./Moviecard";
class MovieList extends Component {
  render() {
    const {
      movies,
      handleIncStar,
      handleDecStar,
      handleToggleFAv,
      handleToggleCart,
    } = this.props;

    return (
      <>
        {movies.map((movie, indx) => (
          <MovieCard
            movies={movie}
            key={indx}
            addStars={handleIncStar}
            decStars={handleDecStar}
            toggleFav={handleToggleFAv}
            toggleCart={handleToggleCart}
          />
        ))}
      </>
    );
  }
}

export default MovieList;
