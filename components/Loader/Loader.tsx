import React from 'react';
import styles from './loader.module.css';

interface LoaderProps {}

const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.ldsRing}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loader;
