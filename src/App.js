import { Component } from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import { movies } from "./movieData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies,
      cartCount: 0,
    };
  }

  handleIncStar = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    if (movies[mid].stars >= 5) {
      return;
    }
    movies[mid].stars += 0.5;
    this.setState({
      movies,
    });
  };

  handleDecStar = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    if (movies[mid].stars <= 0) {
      return;
    }
    movies[mid].stars -= 0.5;
    this.setState({
      movies,
    });
  };

  handleToggleCart = (movie) => {
    let { movies, cartCount } = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].isIncart = !movies[mid].isIncart;
    if(movies[mid].isIncart){
      cartCount += 1;
    }else{
       cartCount -= 1;
    }
    this.setState({
      movies,
      cartCount
    });
  };

  handleToggleFAv = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].fav = !movies[mid].fav;
    this.setState({
      movies,
    });
  };
  render() {
    return (
      <>
        <Navbar cartCount={this.state.cartCount}/>
        <MovieList
          movies={this.state.movies}
          handleIncStar={this.handleIncStar}
          handleDecStar={this.handleDecStar}
          handleToggleCart={this.handleToggleCart}
          handleToggleFAv={this.handleToggleFAv}
        />
      </>
    );
  }
}

export default App;
