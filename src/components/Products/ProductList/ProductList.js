import classes from './ProductList.module.css';
import Message from '../../../shared/Components/Message/Message';
import Product from '../Product/Product';

const ProductsList = ({ products }) => {
  if (products.length === 0) {
    return <Message msg={'No Products Found :( '} />;
  }

  return (
    <div className={classes['product__container-list']}>
      <div className={classes['product__container-list-flex']}>
        {products.map((product) => {
          return (
            <div key={product.id} className={classes['card__product-list']}>
              <Product
                key={product.id}
                pid={product.id}
                farmId={product.farmId}
                name={product.name}
                price={product.price}
                imageSrc={product.imageSrc}
                farmName={product.farmName}
                farmLocation={product.farmLocation}
                openingDay={product.openingDay}
                openingTime={product.openingTime}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsList;
