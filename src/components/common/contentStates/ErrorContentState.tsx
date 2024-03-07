import { Box, Text } from '@chakra-ui/react';
import styles from './content.module.css';
export const ErrorContentState = () => {
  return (
    <Box className={styles.contentBox}>
      <Text color="red" fontSize="4xl">
        Unexpected error happened, please try again later...
      </Text>
    </Box>
  );
};
