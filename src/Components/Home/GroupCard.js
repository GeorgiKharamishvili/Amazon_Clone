import React from "react";
import chair from "../../assets/chair.jpg";
import keyboard from "../../assets/keyboard.jpg";
import mouse from "../../assets/mouse.jpg";
import hadeset from "../../assets/hadeset.jpg";
import fuji_Desktop_1 from "../../assets/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg";
import fuji_Desktop_2 from "../../assets/Fuji_Desktop_Single_image_EBF_1x_v1._SY304_CB573698005_.jpg";
import fuji_Desktop_3 from "../../assets/Fuji_Desktop_Single_image_EBF_1x_v6._SY304_CB573698005_.jpg";
import fuji_Desktop_4 from "../../assets/Fuji_Desktop_Single_image_EBF_1x_v5._SY304_CB573698005_.jpg";
import fuji_Desktop_5 from "../../assets/Fuji_Holiday_Gift_guide_Desktop_Card_1x_379x304_EN._SY304_CB576347904_.jpg";
import DQC_APR_1 from "../../assets/DQC_APR_TBYB_W_BOTTOMS_1x._SY116_CB624172947_.jpg";
import DQC_APR_2 from "../../assets/DQC_APR_TBYB_W_DRESSES_1x._SY116_CB623353881_.jpg";
import DQC_APR_3 from "../../assets/DQC_APR_TBYB_W_SHOES_1x._SY116_CB624172947_.jpg";
import DQC_APR_4 from "../../assets/DQC_APR_TBYB_W_TOPS_1x._SY116_CB623353881_.jpg";
import LSS23_SPRING_1 from "../../assets/LSS23_SPRING_DT_CAT_CARD_1_x1._SY116_CB595261253_.jpg";
import LSS23_SPRING_2 from "../../assets/LSS23_SPRING_DT_CAT_CARD_2_x1._SY116_CB595261253_.jpg";
import LSS23_SPRING_3 from "../../assets/LSS23_SPRING_DT_CAT_CARD_3_x1._SY116_CB595261253_.jpg";
import LSS23_SPRING_4 from "../../assets/LSS23_SPRING_DT_CAT_CARD_4_x1._SY116_CB595261253_.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useProductFilter } from "../../context/ProductFilterContext";
const GroupCard = () => {
  const navigate = useNavigate();
  const { filterState, setFilterState, handleFilter } = useProductFilter();
  const { categories } =
    filterState;
 

  const c1 = categories[0];
  const c2 = categories[1];
  const c3 = categories[2];
  const c4 = categories[4];
  const c5 = categories[5];
  const c6 = categories[6];
  const c7 = categories[7];
  const c8 = categories[8];
  const c9 = categories[9];
  const c10 = categories[10];
  const c11 = categories[11];
  const handleCategoryClick = (categoryId) => {
    navigate(`/filtered/by?categoryId=${categoryId}`);
    setFilterState({ ...filterState, selectedCategory: categoryId });

    handleFilter();
 

 
  };
  return (
    <div className="relative top-[-17rem] z-10">
      <div className="mx-10 flex flex-col lg:flex-row justify-center items-stretch gap-6">
        <div
   
          onClick={() => handleCategoryClick(c1.id)}
          className="max-w-full lg:max-w-[330px] w-full h-full border-none bg-white p-3 cursor-pointer"
        >
          <p className="text-xl font-medium pb-2">Gaming accessories</p>

          <div className="flex flex-wrap">
            <div className="w-[50%]">
              <img className=" w-full " src={hadeset} alt=""   />
              <p className="text-xs py-2">Headsets</p>
            </div>
            <div className="w-[50%]">
              <img className=" w-full " src={keyboard} alt=""   />
              <p className="text-xs py-2">Keyboards</p>
            </div>
            <div className="w-[50%]">
              <img className=" w-full " src={mouse} alt=""   />
              <p className="text-xs py-2">Computer mice</p>
            </div>
            <div className="w-[50%]">
              <img className=" w-full " src={chair} alt=""   />
              <p className="text-xs py-2">Chairs</p>
            </div>
          </div>
          <div className="text-[#007185] text-xs pt-6 block">See More</div>
        </div>
        <div
          onClick={() => handleCategoryClick(c2.id)}
          className="cursor-pointer max-w-full lg:max-w-[330px] w-full  border-none bg-white p-3"
        >
          <p className="text-xl font-medium pb-2">Toys under $25</p>
          <img className=" w-full " src={fuji_Desktop_1} alt=""   />

          <Link to="/" className="text-[#007185] text-xs pt-6 block">
            See More
          </Link>
        </div>
        <div
          onClick={() => handleCategoryClick(c3.id)}
          className="cursor-pointer max-w-full lg:max-w-[330px] w-full  border-none bg-white p-3"
        >
          <p className="text-xl font-medium pb-2">Deals in PCs</p>

          <img className=" w-full " src={fuji_Desktop_2} alt=""   />
          <Link to="/" className="text-[#007185] text-xs pt-6 block">
            See More
          </Link>
        </div>
        <div
          onClick={() => handleCategoryClick(c4.id)}
          className="cursor-pointer max-w-full lg:max-w-[330px] w-full  border-none bg-white p-3"
        >
          <p className="text-xl font-medium pb-2">Shop deals in Fashion</p>

          <div className="flex flex-wrap gap-4">
            <Link to="/" className="w-[45%]">
              <img className=" w-full " src={DQC_APR_1} alt=""   />
              <p className="text-xs py-2">Jeans under $50</p>
            </Link>
            <Link to="/" className="w-[45%]">
              <img className=" w-full " src={DQC_APR_2} alt=""   />
              <p className="text-xs py-2">Tops under $25</p>
            </Link>
            <Link to="/" className="w-[45%]">
              <img className=" w-full " src={DQC_APR_3} alt=""   />
              <p className="text-xs py-2">Dresses under $30</p>
            </Link>
            <Link to="/" className="w-[45%]">
              <img className=" w-full " src={DQC_APR_4} alt=""   />
              <p className="text-xs py-2">Shoes under $50</p>
            </Link>
          </div>
          <Link to="/" className="text-[#007185] text-xs pt-6 block">
            See More
          </Link>
        </div>
      </div>
      <div className=" mx-10 flex flex-col lg:flex-row justify-center items-stretch gap-6 my-8">
        <div
          onClick={() => handleCategoryClick(c5.id)}
          className="cursor-pointer max-w-full lg:max-w-[330px] w-full  border-none bg-white p-3"
        >
          <p className="text-xl font-medium pb-2">Fashion trends you like</p>

          <div className="flex flex-wrap gap-4">
            <Link to="/" className="w-[45%]">
              <img className=" w-full " src={LSS23_SPRING_1} alt=""   />
              <p className="text-xs py-2">Dresses</p>
            </Link>
            <Link to="/" className="w-[45%]">
              <img className=" w-full " src={LSS23_SPRING_2} alt=""   />
              <p className="text-xs py-2">Knits</p>
            </Link>
            <Link to="/" className="w-[45%]">
              <img className=" w-full " src={LSS23_SPRING_3} alt=""   />
              <p className="text-xs py-2">Jackets</p>
            </Link>
            <Link to="/" className="w-[45%]">
              <img className=" w-full " src={LSS23_SPRING_4} alt=""   />
              <p className="text-xs py-2">Jewelry</p>
            </Link>
          </div>
          <Link to="/" className="text-[#007185] text-xs pt-6 block">
            See More
          </Link>
        </div>
        <div
          onClick={() => handleCategoryClick(c6.id)}
          className="cursor-pointer max-w-full lg:max-w-[330px] w-full  border-none bg-white p-3"
        >
          <p className="text-xl font-medium pb-2">Home décor under $50</p>
          <img className=" w-full " src={fuji_Desktop_3} alt=""   />

          <Link to="/" className="text-[#007185] text-xs pt-6 block">
            See More
          </Link>
        </div>
        <div
          onClick={() => handleCategoryClick(c7.id)}
          className="cursor-pointer max-w-full lg:max-w-[330px] w-full  border-none bg-white p-3"
        >
          <p className="text-xl font-medium pb-2">Beauty steals under $25</p>

          <img className=" w-full " src={fuji_Desktop_4} alt=""   />
          <Link to="/" className="text-[#007185] text-xs pt-6 block">
            See More
          </Link>
        </div>

        <div
          onClick={() => handleCategoryClick(c8.id)}
          className="cursor-pointer max-w-full lg:max-w-[330px] w-full  h-full border-none bg-white p-3"
        >
          <p className="text-xl font-medium pb-2">Shop holiday gift guides</p>

          <img className=" w-full " src={fuji_Desktop_5} alt=""   />
          <Link to="/" className="text-[#007185] text-xs pt-6 block">
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
