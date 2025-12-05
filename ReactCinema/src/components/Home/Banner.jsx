import titanic_movie from "../../assets/videos/titanic.mp4";
import background from "../../assets/background.jpg";

const Banner = () => {
  return (
    <div className="header__banner">
      <div>
        <p>REACT CINEMA</p>
        <p>
          Subheading that sets up context, shares more info about the website,
          or generally gets people psyched to keep scrolling.{" "}
        </p>
        <div>
          <a href="#movies">Movies</a>
          <button>Favorites</button>
        </div>
      </div>
      <video autoPlay muted loop>
        <source src={titanic_movie} type="video/mp4" />
      </video>
      <img src={background} alt="" />
    </div>
  );
};

export default Banner;
