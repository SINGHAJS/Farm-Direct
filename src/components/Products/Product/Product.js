import classes from './Product.module.css';
import { Link } from 'react-router-dom';

const Product = ({
  pid,
  farmId,
  name,
  price,
  imageSrc,
  farmName,
  farmLocation,
  openingDay,
  openingTime,
}) => {
  return (
    <div className={classes['product__container-outer']}>
      <Link to={`/farms/${farmId}/${pid}`}>
        <div className={classes['product__container-inner']}>
          <div className={classes['product__image-container']}>
            <img
              src={imageSrc}
              alt={name}
              className={classes['product__image']}
            />
          </div>
          <div className={classes['product__content-container']}>
            <h1 className={classes['product__item-name']}>{name}</h1>
            <p className={classes['product__item-price']}>{price}</p>
            <p className={classes['product__item-farmname']}>{farmName}</p>
            <p className={classes['product__item-farmLocation']}>
              {farmLocation}
            </p>
            <p className={classes['product__item-openingday']}>{openingDay}</p>
            <p className={classes['product__item-openingtime']}>
              {openingTime}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
