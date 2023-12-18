import React from "react";

function HeaderBottom() {
  return (
    <div className="w-full px-0 lg:px-4 h-[36px] bg-amazon_blue text-white flex justify-start items-center">
      <ul className="flex justify-between items-center gap-4 text-[10px] lg:text-sm tracking-wide cursor-pointer  ">
        <li>All</li>
        <li>Today's Deals</li>
        <li>Customer Service</li>
        <li>Gift Cards</li>
        <li>Registry</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default HeaderBottom;
