import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'My Blog', path: '/blogs' }, 
    { name: 'Books', path: '/books' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className='flex justify-between py-4 bg-white'>
        <h1 className='ml-40 text-3xl font-semibold'>Nwanyiocha</h1>
        <ul className='flex mr-60 font-semibold'>
          {navLinks.map((link) => (
            <li key={link.name} className='mr-8 hover:text-pink-700'>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
