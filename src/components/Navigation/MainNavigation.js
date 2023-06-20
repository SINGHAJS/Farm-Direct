import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';

const MainNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onOpenMenuHandler = () => {
    setIsMenuOpen(true);
  };

  return (
    <React.Fragment>
      {isMenuOpen && (
        <SideDrawer setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}>
          <nav>
            <NavLinks
              setMenuHandler={setIsMenuOpen}
              isMenuOpenState={isMenuOpen}
            />
          </nav>
        </SideDrawer>
      )}
      <MainHeader>
        <button
          className={classes['main-navigation__menu-btn']}
          onClick={onOpenMenuHandler}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <h1 className={classes['main-navigation__header-title']}>
          <Link to="/">FARM DIRECT</Link>
        </h1>
        <nav className={classes['main-navigation__navbar']}>
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
