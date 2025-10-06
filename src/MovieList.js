import { Component } from "react";
import MovieCard from "./Moviecard";

class MovieList extends Component {
    constructor() {
    super();
    this.state = {
      title: "The Avengers!",
      plot: "Supernatural powers show in the movie.",
      price: 199,
      rating: 8.9,
      stars: 0,
      fav: false,
      isIncart:false
    };
    // this.addStars = this.addStars.bind(this)
  }
  render() {
    const {title, plot, price, rating, stars, fav, isIncart} = this.state
    return (
      <>
        <MovieCard 
          // title={title}
          // plot={plot}
          // price={price}
          // rating={rating}
          // stars={stars}
          // fav={fav}
          // isIncart={isIncart}
          movies={this.state}
        />
       
      </>
    );
  }
}

export default MovieList;
