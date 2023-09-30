import React from 'react';
import styles from './loader.module.css';

interface LoaderProps {
  width: number;
  height: number;
}

const Loader = ({ width, height }: LoaderProps) => {
  return (
    <div
      className={styles.loaderWrapper}
      style={{ width, height }}>
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
