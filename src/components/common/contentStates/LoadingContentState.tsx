import { Box, Spinner } from '@chakra-ui/react';
import styles from './content.module.css';
export const LoadingContentState = () => {
  return (
    <Box className={styles.contentBox} data-testid="loading-content">
      <Spinner size="2xl" />
    </Box>
  );
};
