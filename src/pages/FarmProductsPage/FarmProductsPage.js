import { useParams } from 'react-router-dom';
import classes from './FarmProductsPage.module.css';
import PRODUCTS_DATA from '../../data/products/ProductsData';
import FARMS_DATA from '../../data/farms/FarmsData';
import ProductsList from '../../components/Products/ProductList/ProductList';

export default function FarmProductsPage() {
  const params = useParams();

  const selectedProductData = PRODUCTS_DATA.filter(
    (product) => product.farmId === params.id
  );

  const selectedFarmData = FARMS_DATA.filter((farm) => farm.id === params.id);

  return (
    <div className={classes['farm-product-pg__outer-container']}>
      <div
        className={classes['farm-product-pg__header-container']}
        style={{
          backgroundImage: `url(${selectedFarmData[0].imageSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className={classes['farm-product-pg__headaer-tile']}>
          {selectedFarmData[0].farmName}
        </h1>
      </div>
      <div className={classes['farm-product-pg__products-list-container']}>
        <ProductsList products={selectedProductData} />
      </div>
    </div>
  );
}
