import classes from './HomePage.module.css';
import appbg from '../../assets/images/app-bg.jpg';

export default function HomePage() {
  return (
    <>
      <div className={classes['homepage__outer-container']}>
        <img
          src={appbg}
          alt={'app hompage image'}
          className={classes['homepage__bg-img']}
        />
        <div className={classes['homepage__inner-container']}>
          <h1 className={classes['homepage__header-title']}>
            Welcome to{' '}
            <span className={classes['homepage__header-title-logo']}>
              FarmDirect
            </span>
          </h1>
          <p className={classes['homepage__app-description']}>
            Welcome to FarmDirect, the ultimate online marketplace connecting
            farmers and customers for the best organic food experience at
            unbeatable prices. FarmDirect is a revolutionary platform designed
            to empower farmers and promote the consumption of healthy, organic
            produce. We understand the importance of supporting local farmers
            and their dedication to sustainable agricultural practices. With
            FarmDirect, we bring the farm-to-table concept directly to your
            fingertips, ensuring that you have access to fresh, organic food
            while supporting local agriculture.
          </p>
        </div>
      </div>
    </>
  );
}
