

function MovieCard(props) {
 
    const { movies, addStars, decStars, toggleFav, toggleCart } = props;
    const { title, plot, price, rating, stars, fav, isIncart } =
      props.movies;
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
                  onClick={() => {
                    decStars(movies);
                  }}
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
                  onClick={() => addStars(movies)}
                />
                <span>{stars}</span>
              </div>
              {/* {
                fav ? <button className="unfavourite-btn" onClick={this.handleFav}>Un-Favourite</button> :
                <button className="favourite-btn" onClick={this.handleFav}>Favourite</button>
              } */}
              <button
                className={fav ? "unfavourite-btn" : "favourite-btn"}
                onClick={() => toggleFav(movies)}
              >
                {fav ? "Un-Favourite" : "Favourite"}
              </button>

              <button
                className={isIncart ? "unfavourite-btn" : "cart-btn"}
                onClick={() => toggleCart(movies)}
              >
                {isIncart ? "Remove from Cart" : "Add to cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  
}

export default MovieCard;
