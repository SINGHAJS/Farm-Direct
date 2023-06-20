import React, { Children } from 'react';
import classes from './Card.module.css';
import classNames from 'classnames';

const Card = ({ children, className, style }) => {
  return (
    <div
      className={classNames(classes['card__container'], className)}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;
