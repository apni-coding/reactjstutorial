import { Component } from "react";

class MovieCard extends Component {

  addStars = () => {
    if (this.state.stars >= 5) {
      return;
    }
    this.setState((prevState) => {
      return {
        stars: prevState.stars + 0.5,
      };
    });
  };
  desStars = () => {
    if (this.state.stars <= 0) {
      return;
    }
    this.setState(
      {
        stars: this.state.stars - 0.5,
      },
      () => console.log("stars inside callback:", this.state.stars)
    );
    console.log("stars:", this.state.stars);
  };

  handleFav = () => {
    this.setState({
      fav: !this.state.fav,
    });
  };

handleAddToCart = () => {
    this.setState({
      isIncart: !this.state.isIncart,
    });
  };
  render() {
    const { title, plot, price, rating, stars, fav, isIncart } = this.props.movies;
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img
              src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
              alt="poster"
            />
          </div>

          <div className="right">
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">Rs {price}</div>

            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                <img
                  alt="decrease"
                  src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"
                  className="str-btn"
                  onClick={this.desStars}
                />

                <img
                  alt="star"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                  className="stars"
                />

                <img
                  alt="increase"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png"
                  className="str-btn"
                  onClick={()=>this.props.addStars(this.props.movies)}
                />
                <span>{stars}</span>
              </div>
              {/* {
                fav ? <button className="unfavourite-btn" onClick={this.handleFav}>Un-Favourite</button> :
                <button className="favourite-btn" onClick={this.handleFav}>Favourite</button>
              } */}
              <button
                className={fav ? "unfavourite-btn" : "favourite-btn"}
                onClick={this.handleFav}
              >
                {fav ? "Un-Favourite" : "Favourite"}
              </button>

              <button
                className={isIncart ? "unfavourite-btn" : "cart-btn"}
                onClick={this.handleAddToCart}
              >
                {isIncart ? "Remove from Cart" : "Add to cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
