import React from 'react';
import styles from './main.module.css';

interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <main
      id='main'
      className={styles.container}>
      {children}
    </main>
  );
};

export default Main;
