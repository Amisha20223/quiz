import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
<nav className="w-full h-auto flex items-center justify-center md:mr-20">
  <div className="flex items-center justify-between w-full max-w-[500px] h-auto border border-[#f4f6f761] bg-[#1d94a65e]
   px-[20px] py-[10px] rounded-full text-gray-200">
   
    <Link to="/personality-test" className="text-white">Personality Test</Link>
    <Link to="/skill-test" className="text-white">Skill Test</Link>
    <Link to="/career-test" className="text-white">Career Test</Link>
    
  </div>
</nav>

  );
};

export default Navbar;
