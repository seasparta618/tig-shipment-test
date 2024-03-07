import { FC } from 'react';
import { Table, Thead, Tbody, Tr, Th, Box, Text } from '@chakra-ui/react';
import { Shipment } from '~/types/shipment';
import styles from './shipment.module.css';
import { ShipmentItem } from './ShipmentItem';
import { DoubleArrowSortIcon } from '~/components/common/icons/icon';

interface ShipmentListProps {
  shipmentItems: Shipment[];
  onShipmentItemClick: (shipmentItem: Shipment) => void;
  selectedShipmentId: string;
}

export const ShipmentList: FC<ShipmentListProps> = ({
  shipmentItems = [],
  onShipmentItemClick,
  selectedShipmentId,
}) => {
  return (
    <Table variant="strict" className={styles.table}>
      <Thead>
        <Tr>
          <Th>
            <Box className={styles.tableTitleBox}>
              <Text>Shipment</Text>
              <DoubleArrowSortIcon />
            </Box>
          </Th>
          <Th>
            <Box className={styles.tableTitleBox}>
              <Text>Status</Text>
              <DoubleArrowSortIcon />
            </Box>
          </Th>
        </Tr>
      </Thead>
      <Tbody data-testid="shipmentlist-body">
        {shipmentItems.map((item, index) => (
          <ShipmentItem
            key={index}
            onClick={onShipmentItemClick}
            shipmentItem={item}
            isSelected={item.id === selectedShipmentId}
          />
        ))}
      </Tbody>
    </Table>
  );
};
