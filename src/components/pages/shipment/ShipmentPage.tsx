import { Box } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { mockShipmentData } from '~/mock/shipment';
import { Shipment } from '~/types/shipment';
import { ShipmentList } from './shipmentList/ShipmentList';
import styles from './shipment-page.module.css';
import { ZeroContentState } from '~/components/common/contentStates/ZeroContentState';
import { ShipmentDetailPage } from './shipmentDetail/ShipmentDetail';

export const ShipmentPage: FC = () => {
  // this part should be replaced later by useQuery & useEffect to graphQuery from api
  // in order to isolate, use mock date first
  const shipmentMockDate = mockShipmentData();

  const [shipments, setShipments] = useState<Shipment[]>(shipmentMockDate);
  const [selectedShipment, setSelectedShipment] = useState<Shipment | null>(
    null
  );
  const [isDetailPageShown, setIsDetailPageShown] = useState<boolean>(false);

  const onShipmentItemClick = (shipmentItem: Shipment) => {
    setIsDetailPageShown(true);
    setSelectedShipment(shipmentItem);
  };

  const onShipmentDetailModalClose = () => {
    setIsDetailPageShown(false);
    setSelectedShipment(null);
  };

  return (
    <div className={styles.root}>
      <Box overflowX="auto" className={styles.listContainer}>
        {shipments.length ? (
          <ShipmentList
            shipmentItems={shipments}
            onShipmentItemClick={onShipmentItemClick}
            selectedShipmentId={selectedShipment ? selectedShipment.id : ''}
          />
        ) : (
          <ZeroContentState />
        )}
      </Box>
      {selectedShipment ? (
        <ShipmentDetailPage
          isModalShown={isDetailPageShown}
          onClose={onShipmentDetailModalClose}
          shipment={selectedShipment}
        />
      ) : null}
    </div>
  );
};
