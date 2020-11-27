import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <img className="home__image" src="home__image2.jpg" alt="" />
      <div className="home__row">
        <Product
          id={123324341}
          title="The Lean StartUp: How Constant Innovation Creates"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51HUrtezH3L._AC_SY400_FMwebp_.jpg"
        />
        <Product
          id={123324341}
          title="The Lean StartUp: How Constant Innovation Creates"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51HUrtezH3L._AC_SY400_FMwebp_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={123324341}
          title="The Lean StartUp: How Constant Innovation Creates"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51HUrtezH3L._AC_SY400_FMwebp_.jpg"
        />
        <Product
          id={123324341}
          title="The Lean StartUp: How Constant Innovation Creates"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51HUrtezH3L._AC_SY400_FMwebp_.jpg"
        />
        <Product
          id={123324341}
          title="The Lean StartUp: How Constant Innovation Creates"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51HUrtezH3L._AC_SY400_FMwebp_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={123324341}
          title="The Lean StartUp: How Constant Innovation Creates"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51HUrtezH3L._AC_SY400_FMwebp_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
