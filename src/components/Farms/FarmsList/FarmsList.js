import React from 'react';
import classes from './FarmsList.module.css';
import Farm from '../Farm/Farm';

const FarmsList = ({ farms }) => {
  if (farms.length === 0) {
    return <div>No farms avaliable!</div>;
  }

  return (
    <div className={classes['farm__container-list']}>
      <div className={classes['farm__container-list-grid']}>
        {farms.map((farm) => {
          return (
            <div className={classes['card__farm-list']}>
              <Farm
                key={farm.id}
                farmId={farm.id}
                imageSrc={farm.imageSrc}
                farmName={farm.farmName}
                farmDescription={farm.farmDescription}
                farmLocation={farm.farmLocation}
                openingDay={farm.openingDay}
                openingTime={farm.openingTime}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FarmsList;
