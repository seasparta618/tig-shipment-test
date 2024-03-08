import { Box } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import { Shipment } from '~/types/shipment';
import { ShipmentList } from './shipmentList/ShipmentList';
import styles from './shipment-page.module.css';
import { ZeroContentState } from '~/components/common/contentStates/ZeroContentState';
import { ShipmentDetailPage } from './shipmentDetail/ShipmentDetail';
import { GET_SHIPMENTS } from '~/graphql/shipment';
import { useQuery } from '@apollo/client';
import { LoadingContentState } from '~/components/common/contentStates/LoadingContentState';
import { ErrorContentState } from '~/components/common/contentStates/ErrorContentState';

export const ShipmentPage: FC = () => {
  const { data, loading, error } = useQuery(GET_SHIPMENTS);

  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [selectedShipment, setSelectedShipment] = useState<Shipment | null>(
    null
  );
  const [isDetailPageShown, setIsDetailPageShown] = useState<boolean>(false);
  const [shipmentsUpdated, setShipmentsUpdated] = useState<boolean>(false);

  useEffect(() => {
    if (data?.shipments) {
      const sortedShipments = [...data.shipments].sort((a, b) => {
        const dateA = new Date(a.lastUpdate);
        const dateB = new Date(b.lastUpdate);
        // meet requirement, sorted by last update, in case the server returned unordered data
        return dateA.getTime() - dateB.getTime();
      });
      setShipments(sortedShipments);
      setShipmentsUpdated(true);
    }
  }, [data]);

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
      {loading && <LoadingContentState />}
      {error && <ErrorContentState />}
      {!loading && !error && shipmentsUpdated && (
        <>
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
        </>
      )}
    </div>
  );
};
