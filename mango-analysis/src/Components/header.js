import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './aboutUs.js';

function Header() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    // Navigate to the home page when "Identification of consumable mango" is clicked
    navigate('/');
  };

  const handleAboutUsClick = () => {
    // Navigate to the about us page when "About Us" is clicked
    navigate('/aboutUs');
  };

  return (
    <div>
      <div className='flex grid-rows-1 py-8 space-x-2 bg-green-400'>
        <div>
          {/* Use the Link component to make the text clickable */}
          <Link to="/" onClick={handleHomeClick}>
            <h2 className='px-5 py-2 text-4xl font-bold text-left '>Identification of consumable mango</h2>
          </Link>
        </div>
        <div className='flex-grow text-center '>
          {/* You can add a Link for the middle section if needed */}
          <h2 className='px-5 py-3 text-2xl font-bold'></h2>
        </div>
        <div className='flex-grow text-center '>
          {/* Use the Link component to make the text clickable */}
          <Link to="/aboutUs" onClick={handleAboutUsClick}>
            <h2 className='px-5 py-3 text-2xl font-bold'>About Us</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
