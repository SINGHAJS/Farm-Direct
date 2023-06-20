import classes from './ProductsPage.module.css';
import PRODUCTS from '../../data/products/ProductsData';
import ProductsList from '../../components/Products/ProductList/ProductList';

export default function ProductsPage() {
  return (
    <div className={classes['products-page__container']}>
      <ProductsList products={PRODUCTS} />
    </div>
  );
}
