import React from "react";

const Backtop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      onClick={scrollToTop}
      className="text-center cursor-pointer text-m p-4  max-w-full text-white bg-[#37475A] hover:bg-[#485769]"
    >
      Back to top
    </div>
  );
};

export default Backtop;
