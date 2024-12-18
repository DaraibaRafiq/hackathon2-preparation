

import React from 'react';
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import Link from 'next/link';

const TopHeader = () => {
  return (
    <div className="bg-black text-white py-2">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4">
        <p className="text-sm text-center font-poppins mb-2 sm:mb-0">
          Summer Sale for All Swim Suits And Free Express Delivery - Off 50%
          <span className="ml-2 font-semibold underline cursor-pointer">
            Shop Now
          </span>
        </p>
        <select
          name="language"
          id="language-select"
          className="bg-black text-white border border-gray-700 text-sm py-1 px-2"
        >
          <option value="English">English</option>
        </select>
      </div>
    </div>
  );
};

export default TopHeader;

export const Header = () => {
  return (
    <div className="border-b border-gray-200">
      <div className="container mx-auto flex flex-wrap items-center justify-between py-4 px-4">
        {/* Logo */}
        <h2 className="text-2xl font-bold text-black">Exclusive</h2>

        {/* Navigation Links */}
        <ul className="flex flex-wrap gap-4 mt-4 md:mt-0">
          {["Home", "Contact", "About", "SignUp"].map((item) => (
            <li key={item} className="text-sm font-poppins font-normal">
              <Link href={`/${item.toLowerCase()}`}>
                <span className="cursor-pointer hover:text-gray-500">
                  {item}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Action Icons */}
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          {/* Search Bar */}
          <div className="flex items-center border rounded-md bg-gray-100 px-2 py-1 w-full sm:w-auto">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent text-xs flex-grow focus:outline-none"
              aria-label="Search"
            />
            <IoSearch className="text-gray-500" />
          </div>
          {/* Icons */}
          <FaRegHeart
            className="text-xl cursor-pointer hover:text-gray-500"
            aria-label="Wishlist"
          />
          <IoMdCart
            className="text-xl cursor-pointer hover:text-gray-500"
            aria-label="Cart"
          />
          <FaRegUserCircle
            className="text-xl cursor-pointer hover:text-gray-500"
            aria-label="User Profile"
          />
        </div>
      </div>
    </div>
  );
};
