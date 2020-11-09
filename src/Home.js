import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://2.bp.blogspot.com/-r3IhqBL5Oo8/W3-bq0GlWSI/AAAAAAAAAkw/JV1e1fopyD8_KFDdxD5eaJ82ilTbOgbqwCLcBGAs/s1600/happy-diwali-animated-gif-218-images.gif"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="Fire works (shots )"
            price={11.96}
            rating={5}
            image="https://huronshoresalpena.files.wordpress.com/2019/01/img_2380.gif"
          />
        </div>

        <div className="home__row">
          <Product
            id="12321341"
            title="Flower candle"
            price={11.96}
            rating={5}
            image="https://thumbs.gfycat.com/AmusingSaneFugu-size_restricted.gif"
          />
          <Product
            id="49538094"
            title="Men traditional wear kurthas"
            price={29.9}
            rating={4}
            image="https://m.media-amazon.com/images/G/31/img2020/fashion/MA2020/Diwali/Phase4/SBC/ethnic/up/1._CB416286673_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
