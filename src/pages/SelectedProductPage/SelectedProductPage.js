import { useParams } from 'react-router-dom';
import {
  HiLocationMarker,
  HiCurrencyDollar,
  HiCalendar,
  HiClock,
} from 'react-icons/hi';
import classes from './SelectedProductPage.module.css';
import PRODUCTS_DATA from '../../data/products/ProductsData';

export default function SelectedProductPage() {
  const params = useParams();

  const selectedProductData = PRODUCTS_DATA.filter(
    (product) => product.id === params.pid
  );

  return (
    <div className={classes['selected-product-pg__outer-container']}>
      <div
        className={classes['selected-product-pg__header-container']}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${selectedProductData[0].imageSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className={classes['selected-product-pg__header-title']}>
          {selectedProductData[0].name}
        </h1>
      </div>
      <div className={classes['selected-product-pg__products-list-container']}>
        <p className={classes['selected-product-pg__products-list-element']}>
          This product is avaliable at {selectedProductData[0].farmName} with
          the price of {selectedProductData[0].price}. It is located at{' '}
          {selectedProductData[0].farmLocation} and it is open from{' '}
          {selectedProductData[0].openingDay}. You can come by and purchase this
          product between the operating times of{' '}
          {selectedProductData[0].openingTime}.
        </p>
        <br />
        <br />
        <p className={classes['selected-product-pg__products-list-element']}>
          <HiLocationMarker
            className={classes['selected-product-pg__products-list-icon']}
          />{' '}
          {selectedProductData[0].farmLocation}
        </p>
        <p className={classes['selected-product-pg__products-list-element']}>
          <HiCurrencyDollar
            className={classes['selected-product-pg__products-list-icon']}
          />{' '}
          {selectedProductData[0].price}
        </p>
        <p className={classes['selected-product-pg__products-list-element']}>
          <HiCalendar
            className={classes['selected-product-pg__products-list-icon']}
          />{' '}
          {selectedProductData[0].openingDay}
        </p>
        <p className={classes['selected-product-pg__products-list-element']}>
          <HiClock
            className={classes['selected-product-pg__products-list-icon']}
          />{' '}
          {selectedProductData[0].openingTime}
        </p>
      </div>
    </div>
  );
}
