import { AccordionButton, AccordionIcon, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';

interface ShipmentAccordionButtonProps {
  text: string;
}

// reusable button
export const ShipmentAccordionButton: FC<ShipmentAccordionButtonProps> = ({
  text,
}) => {
  return (
    <AccordionButton>
      <Flex justify="space-between" align="center" width="100%">
        <Text
          fontSize="12px"
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
