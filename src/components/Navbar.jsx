import { BsPerson } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { useState } from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaInstagram,
} from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <div className="flex justify-between items-center h-20 px-4 absolute z-10 text-white w-full top-0 backdrop-filter backdrop-blur-md">
    <div>
      <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>
        BEACHES.
      </h1>
    </div>
    <ul className="hidden md:flex space-x-4">
      <li className="cursor-pointer">Home</li>
      <li className="cursor-pointer">Destinatons</li>
      <li className="cursor-pointer">Travel</li>
      <li className="cursor-pointer">View</li>
      <li className="cursor-pointer">Book</li>
    </ul>
    <div className="hidden md:flex space-x-2">
      <BiSearch className="cursor-pointer" size={20} />
      <BsPerson size={20} className="cursor-pointer" />
    </div>
  
    {/* Hamburger */}
    <div onClick={handleNav} className="md:hidden">
      {nav ? (
        <AiOutlineClose className="text-black cursor-pointer" size={20} />
      ) : (
        <HiOutlineMenuAlt4 size={20} className="cursor-pointer" />
      )}
    </div>
  
    {/* Mobile menu dropdown */}
    <div
      onClick={handleNav}
      className={
        nav
          ? 'absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col'
          : 'absolute left-[-100%]'
      }
    >
      <ul>
        <h1>BEACHES.</h1>
        <li className="border-b cursor-pointer">Home</li>
        <li className="border-b cursor-pointer">Destinatons</li>
        <li className="border-b cursor-pointer">Travel</li>
        <li className="border-b cursor-pointer">View</li>
        <li className="border-b cursor-pointer">Book</li>
      </ul>
      <div className="flex flex-col">
        <button className="my-6 cursor-pointer">Search</button>
        <button className="cursor-pointer">Account</button>
      </div>
      <div className="flex justify-between my-6">
        <FaFacebook className="icon cursor-pointer" />
        <FaTwitter className="icon cursor-pointer" />
        <FaYoutube className="icon cursor-pointer" />
        <FaPinterest className="icon cursor-pointer" />
        <FaInstagram className="icon cursor-pointer" />
      </div>
    </div>
  </div>
  
  );
};

export default Navbar;