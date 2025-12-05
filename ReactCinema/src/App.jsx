import "./App.css";

// components
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
// components Home
import Banner from "./components/Home/Banner";
import Filter from "./components/Home/Filter";
import MoviesList from "./components/Movies/MoviesList";

import Home from "../src/Pages/Home";

function App() {
  return (
    <>
      <Header />

      <Banner />

      <div className="container">
        <Filter />

        <MoviesList />

        <div className="movies__scroll">
          <button>
            <i className="fa-solid fa-arrow-down"></i>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
