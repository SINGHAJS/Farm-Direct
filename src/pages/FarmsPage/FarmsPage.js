import classes from './FarmsPage.module.css';
import FarmsList from '../../components/Farms/FarmsList/FarmsList';
import FARMS_DATA from '../../data/farms/FarmsData';

export default function FarmsPage() {
  return (
    <div className={classes['farm-page__container']}>
      <FarmsList farms={FARMS_DATA} />
    </div>
  );
}
