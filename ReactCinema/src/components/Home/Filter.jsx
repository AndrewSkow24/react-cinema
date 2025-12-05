import { useState } from "react";

const Filter = () => {
  const filterCategories = ["Popular", "Novelty", "Featured", "Short films"];

  const [currentCategory, changeCurrentCategory] = useState("Popular");

  return (
    <div className="filter">
      <div id="categoryes" className="filter__categoryes anchor">
        <div class="filter__categoryes-flex">
          {filterCategories.map((category, index) => (
            <div
              onClick={() => changeCurrentCategory(category)}
              className={`filter__categoryes-item ${
                category === currentCategory ? `active-category` : ""
              }`}
              key={index}
            >
              <p>{category}</p>
              <span></span>
            </div>
          ))}

          {/* category */}

          {/* end category */}
        </div>
        <span></span>
      </div>

      <div className="filter__buttons">
        <button>Movies</button>
        <button>Cinema</button>
        <button>Adventure</button>
        <button>Comedy</button>
        <button>Fantasy</button>
        <button>History</button>
        <button>Cartoon</button>
        <button>Detective</button>
        <button>Mysticism</button>
        <button>Drama</button>
      </div>
      <div className="filter__search">
        <input type="text" placeholder="Search..." />
        <button>
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default Filter;
