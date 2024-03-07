import { AccordionButton, AccordionIcon, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';

interface SectionAccordionButtonProps {
  text: string;
}

// reusable button
export const SectionAccordionButton: FC<SectionAccordionButtonProps> = ({
  text,
}) => {
  return (
    <AccordionButton>
      <Flex justify="space-between" align="center" width="100%">
        <Text
          fontSize="md"
          fontWeight="600"
          lineHeight="16px"
          color={'gray.500'}
        >
          {text}
        </Text>
        <AccordionIcon color={'gray.500'} />
      </Flex>
    </AccordionButton>
  );
};
