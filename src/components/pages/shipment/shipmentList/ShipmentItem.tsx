import { FC } from 'react';
import { Shipment } from '~/types/shipment';
import styles from './shipment.module.css';
import { Tag, Td, Tr, Text, useColorModeValue } from '@chakra-ui/react';
import { getShipmentStatusColor } from '~/utils/shipment';

interface ShipmentItemProps {
  shipmentItem: Shipment;
  onClick: (item: Shipment) => void;
  isSelected: boolean;
}

export const ShipmentItem: FC<ShipmentItemProps> = ({
  shipmentItem,
  onClick,
  isSelected = false,
}) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  // setting up hover state, let the user know more clear what they are hovering on
  const hoverBg = useColorModeValue('gray.100', 'gray.700');
  const selectedBg = useColorModeValue('blue.100', 'blue.700');

  return (
    <Tr
      onClick={() => onClick(shipmentItem)}
      _hover={{ bg: hoverBg }}
      bg={isSelected ? selectedBg : 'transparent'}
    >
      <Td maxWidth={{ base: 'auto', md: '300px' }} className={styles.textBox}>
        <Text fontSize={'sm'} fontWeight={600}>
          {shipmentItem.trackingId}
        </Text>
        <Text fontSize="xs">
          Created: {formatDate(shipmentItem.lastUpdate)}
        </Text>
      </Td>
      <Td width={{ base: 'auto', md: '75%' }}>
        <Tag
          size={{ lg: 'lg', md: 'lg', sm: 'lg', base: 'sm' }}
          variant="outline"
          colorScheme={getShipmentStatusColor(shipmentItem.status)}
        >
          {shipmentItem.status}
        </Tag>
      </Td>
    </Tr>
  );
};
