import { Component } from "react";

class MovieCard extends Component {
  render() {
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg" alt="poster" />
          </div>

          <div className="right">
            <div className="title">The Avengers</div>
            <div className="plot">Supernatural powers show in the movie.</div>
            <div className="price">Rs 199</div>

            <div className="footer">
              <div className="rating">8.9</div>
              <div className="star-dis">
                <img
                alt="decrease"
                src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"
                className="str-btn"
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
                />
                <span>0</span>
              </div>
              <button className="favourite-btn">Favourite</button>
              <button className="cart-btn">Add to cart</button>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default MovieCard;
