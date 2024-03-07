import { Heading } from '@chakra-ui/react';

import styles from './header.module.css';

export const Header = () => {
  return (
    <header className={styles.root}>
      <Heading>COMPANY CO.</Heading>
    </header>
  );
};
