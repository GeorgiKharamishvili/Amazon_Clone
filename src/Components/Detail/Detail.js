import React, { useEffect, useState } from "react";
import { Link, json, useParams } from "react-router-dom";
import rating from "../../assets/rating.png";
import added from "../../assets/added.png";

import { useDispatch } from "react-redux";

import { addToCart } from "../../redux/amazonSlice";
const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState("");

  const [reviews, setReviews] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(
          `https://ngglobalwebapi20231210182820.azurewebsites.net/api/product/products/${id}`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch product data for ID ${id}`);
        }

        const data = await response.json();

        // Check if the response data is not empty
        if (!data) {
          throw new Error(`Empty response for ID ${id}`);
        }

        setProduct(data);
      } catch (error) {
           console.error(error.message);
           const offerData = JSON.parse(localStorage.getItem("offerData"))

           const offerDataFilter = offerData.filter(item=> item.id == id)
           
        setProduct(offerDataFilter[0]);
        console.log(JSON.parse(localStorage.getItem("offerData")));
      }
    };

    const randomNumber = Math.floor(Math.random() * 81) + 20;
    setReviews(randomNumber);

    getProducts();
  }, [id]);

  const handleAddToCart = (item) => {
    dispatch(addToCart({ ...item, quantity: 1 }));
  };

  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const getDescriptionText = () => {
    const description = product?.description || "";
    if (description.length <= 400 || showFullText) {
      return description;
    }
    return description.slice(0, 400) + "...";
  };

  return (
    <div>
      <div className="bg-[#f6f5f5] flex flex-col lg:flex-row justify-center items-start py-16 gap-5 lg:gap-10 px-2 md:px-6 lg:px-11 xl:px-20">
        <div className="bg-white p-14 rounded-lg">
          <img
            src={
              Array.isArray(product?.images)
                ? product?.images[0]
                : product?.image
            }
            className="max-w-[350px] w-[100%] max-h-[460px]"
            alt=""
          />
        </div>
        <div className="flex-1 max-w-[550px] w-full mt-10 lg:mt-0">
          <h1 className="text-xl font-bold">{product?.name}</h1>
          <p className="py-2">Brand: {product?.brand}</p>
          <div>
            <p className="py-6 text-justify text-base">
              {getDescriptionText()}{" "}
              <span className="inline-block">
                {product?.description && product.description.length > 200 && (
                  <button
                    className="underline font-semibold"
                    onClick={toggleText}
                  >
                    {showFullText ? "Less" : "More"}
                  </button>
                )}
              </span>
            </p>
          </div>

          <div className="flex gap-1 items-center py-6">
            <img className="max-w-[20px] w-full h-5" src={rating} alt="" />
            <img className="max-w-[20px] w-full h-5" src={rating} alt="" />
            <img className="max-w-[20px] w-full h-5" src={rating} alt="" />
            <img className="max-w-[20px] w-full h-5" src={rating} alt="" />
            <img className="max-w-[20px] w-full h-5" src={rating} alt="" />
            (57)
          </div>

          <div className="border-b-2 my-5"></div>

       
          <div>
            <p className="text-xl font-semibold">
              Price:${product?.price ? product.price : product.newPrice}{" "}
             
            </p>
          </div>

          <div className="py-5 flex items-center gap-4">
            <Link
              to={
                "https://payment.b2pay.io/pay.php?invoice=150e7d30-6c17-11ee-91bf-bae3ba88c9f5"
              }
            >
              <button className="h-[50px] bg-[#ff9500] border-none rounded-lg flex justify-center items-center px-3 text-white font-medium hover:bg-[#c48f46]">
                Buy Now
              </button>
            </Link>

            <Link to="/cart">
              <button
                onClick={() => handleAddToCart(product)}
                className="h-[50px] bg-black border-none rounded-lg flex justify-center items-center px-3 text-white font-medium gap-2"
              >
                <img className="max-w-[30px] w-full" src={added} alt="" />
                Add
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
