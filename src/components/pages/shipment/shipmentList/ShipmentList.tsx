import { FC, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Box, Text, Flex } from '@chakra-ui/react';
import { Shipment } from '~/types/shipment';
import styles from './shipment.module.css';
import { ShipmentItem } from './ShipmentItem';
import { DoubleArrowSortIcon } from '~/components/common/icons/icon';
import {
  sortShipmentsByLatestUpdate,
  sortShipmentsByStatus,
} from '~/utils/shipment';

interface ShipmentListProps {
  shipmentItems: Shipment[];
  onShipmentItemClick: (shipmentItem: Shipment) => void;
  selectedShipmentId: string;
  setShipments: (shipments: Shipment[]) => void;
}

export const ShipmentList: FC<ShipmentListProps> = ({
  shipmentItems = [],
  onShipmentItemClick,
  selectedShipmentId,
  setShipments,
}) => {
  const [isLatestUpdateSortingDesc, setIsLatestUpdateSortingDesc] =
    useState<boolean>(true);
  const [isStatusSortingDesc, setIsStatusSortingDesc] = useState<boolean>(true);

  const onLatestUpdateSortClick = () => {
    const newSortingStatus = !isLatestUpdateSortingDesc;
    setShipments(sortShipmentsByLatestUpdate(shipmentItems, newSortingStatus));
    setIsLatestUpdateSortingDesc(newSortingStatus);
  };

  const onStatusSortClick = () => {
    const newSortingStatus = !isStatusSortingDesc;
    setShipments(sortShipmentsByStatus(shipmentItems, newSortingStatus));
    setIsStatusSortingDesc(newSortingStatus);
  };

  return (
    <Table variant="strict" className={styles.table}>
      <Thead>
        <Tr>
          <Th>
            <Box className={styles.tableTitleBox}>
              <Text>Shipment</Text>
              <Flex onClick={onLatestUpdateSortClick}>
                <DoubleArrowSortIcon isSortedDesc={isLatestUpdateSortingDesc} />
              </Flex>
            </Box>
          </Th>
          <Th>
            <Box className={styles.tableTitleBox}>
              <Text>Status</Text>
              <Flex onClick={onStatusSortClick}>
                <DoubleArrowSortIcon isSortedDesc={isStatusSortingDesc} />
              </Flex>
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
