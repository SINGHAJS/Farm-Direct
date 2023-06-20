import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Farm.module.css';

const Farm = ({
  farmId,
  imageSrc,
  farmName,
  farmDescription,
  farmLocation,
  openingDay,
  openingTime,
  onClickHandler,
}) => {
  return (
    <div onClick={onClickHandler} className={classes['farm-item__item']}>
      <Link to={`/farms/${farmId}`}>
        <div className={classes['farm-item__content']}>
          <div className={classes['farm-item__image-section']}>
            <img src={imageSrc} alt={farmName} />
          </div>
          <div className={classes['farm-item__farm-details']}>
            <h1>{farmName}</h1>
            <p>{farmDescription}</p>
            <p>
              <span>Location:</span> {farmLocation}
            </p>
            <p>
              <span>Days:</span> {openingDay}
            </p>
            <p>
              <span>Time:</span> {openingTime}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Farm;
