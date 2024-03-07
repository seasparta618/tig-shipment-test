import { Box, Text } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import { NoContentLineIcon } from '~/components/common/icons/icon';
import styles from './content.module.css';

interface ZeroContentStateProps {
  text?: string;
  customizedContent?: ReactNode;
}

export const ZeroContentState: FC<ZeroContentStateProps> = ({
  text = 'There is no content to display here.',
  customizedContent,
}) => {
  return (
    <Box className={styles.stateContentBox}>
      {customizedContent ?? (
        <>
          <NoContentLineIcon />
          <Text fontSize="2xl" color="gray.900">
            {text}
          </Text>
        </>
      )}
    </Box>
  );
};

export default ZeroContentState;
