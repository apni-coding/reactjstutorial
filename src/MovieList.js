import MovieCard from "./Moviecard";

function MovieList(props){
    const {
      movies,
      handleIncStar,
      handleDecStar,
      handleToggleFAv,
      handleToggleCart,
    } = props;

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

export default MovieList;
