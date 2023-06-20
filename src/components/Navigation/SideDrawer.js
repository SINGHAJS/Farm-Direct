import React from 'react';
import { CSSTransition } from 'react-transition-group';
import classes from './SideDrawer.module.css';

const SideDrawer = ({ children, setIsMenuOpen, isMenuOpen }) => {
  const onCloseMenuHandler = () => {
    setIsMenuOpen(false);
  };

  return (
    <aside className={classes['side-drawer']}>
      <span
        className={classes['side-drawer__close']}
        onClick={onCloseMenuHandler}
      >
        x
      </span>
      <div className={classes['side-drawer__children']}>{children}</div>
    </aside>
  );
};

export default SideDrawer;
