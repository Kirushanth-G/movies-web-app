import "./Hero.css";
import { Paper } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // required CSS
import { Carousel } from "react-responsive-carousel";

const Hero = ({ movies }) => {
  return (
    <div>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={5000}
        transitionTime={600}
        emulateTouch
      >
        {movies?.map((movie, index) => (
          <Paper key={index}>
            <div className="movie-card-container">
              <div
                className="movie-card"
                style={{ "--img": `url(${movie.backdrops[0]})` }}
              >
                <div className="movie-detail">
                  <div className="movie-poster">
                    <img src={movie.poster} alt={movie.title} />
                  </div>
                  <div className="movie-title">
                    <h4>{movie.title}</h4>
                  </div>
                </div>
              </div>
            </div>
          </Paper>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
