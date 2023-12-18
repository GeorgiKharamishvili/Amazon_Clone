import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/amazonSlice";

const LatestProducts = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch latest products data from the API
    axios
      .get(
        "https://ngglobalwebapi20231210182820.azurewebsites.net/api/product/latestproducts"
      )
      .then((result) => setData(result.data));
  }, []);

  const handleAddToCart = (item) => {
    // Dispatch action to add item to the cart

    dispatch(addToCart({ ...item, quantity: 1 }));
  };

  const sliderSettings = {
    className: "firstline",
    dots: true,
    infinite: true,
    slidesToShow: 4,
    swipeToslide: true,
    afterChange: (index) => {},
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-2 mx-5 mb-6 relative top-[-12rem] pb-10">
      <div>
        <h1 className="text-xl font-bold">Latest Products</h1>
        <div>
          <Slider {...sliderSettings}>
            {data.map((item) => (
              <div
                key={item.id}
                className="m-auto max-w-[224px] max-h-[284px] cover object-center"
              >
                <Link to={`/product/${item.id}`}>
                  <img
                    className="m-auto max-w-[224px] max-h-[184px] cover object-center"
                    src={item.image}
                    alt={item.name}
                  />
                </Link>
                <p className="font-bold text-lg">
                  <span className="text-lg font-bold">$</span>
                  {item.price}
                </p>
                <p className="line-clamp-1 text-xs">{item.name}</p>
                <Link to="/cart">
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="w-full py-0.5 rounded-md mt-2 font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-100 border border-yellow-500 hover:border-yellow-700 hover:from-yellow-300 to hover:to-yellow-400 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200"
                  >
                    Add to Cart
                  </button>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default LatestProducts;
