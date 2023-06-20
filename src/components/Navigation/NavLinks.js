import React from 'react';
import { Link } from 'react-router-dom';

import classes from './NavLinks.module.css';

const NavLinks = ({ setMenuHandler, isMenuOpenState }) => {
  const setMenuState = () => {
    if (isMenuOpenState === true) {
      setMenuHandler(false);
    }
  };

  return (
    <ul className={classes['nav-links']}>
      <li>
        <Link onClick={setMenuState} to="/">
          HOME
        </Link>
      </li>
      <li>
        <Link onClick={setMenuState} to="/farms">
          FARMS
        </Link>
      </li>
      <li>
        <Link onClick={setMenuState} to="/products">
          PRODUCTS
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
