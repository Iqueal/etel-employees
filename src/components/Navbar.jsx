import React from 'react';
import { Link } from 'react-router-dom';

const styl = {
  main: {
    background: '#e0e0e0',
    height: '50px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  link: {
    textDecoration: 'none',
  },
  h2: {
    margin: '0px auto',
    padding: '5px 0px',
  },
};

const Navbar = () => {
  return (
    <div style={styl.main}>
      <Link to="/" style={styl.link}>
        <h2 style={styl.h2}>Home</h2>
      </Link>
      <Link to="/employees" style={styl.link}>
        <h2 style={styl.h2}>Employees</h2>
      </Link>
    </div>
  );
};

export default Navbar;
