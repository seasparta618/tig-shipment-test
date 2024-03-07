import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  ModalCloseButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FC, useState } from 'react';
import { mockDeliveredRecords } from '~/mock/shipment';
import { Shipment, TrackingEvent } from '~/types/shipment';
import styles from './shipment-detail.module.css';

interface ShipmentDetailPageProps {
  isModalShown: boolean;
  onClose: () => void;
  shipment: Shipment;
}

export const ShipmentDetailPage: FC<ShipmentDetailPageProps> = ({
  isModalShown = false,
  onClose,
  shipment,
}) => {
  const [trackingEvents, setTrackingEvents] = useState<TrackingEvent[]>(
    mockDeliveredRecords(shipment.trackingId)
  );

  const drawerSize = useBreakpointValue({ base: 'full', md: 'lg' });

  return (
    <Drawer
      isOpen={isModalShown}
      placement="right"
      size={drawerSize}
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent>
        <ShipmentDetailPageHeader trackingId={shipment.trackingId} />
      </DrawerContent>
    </Drawer>
  );
};

interface ShipmentDetailHeaderProps {
  trackingId: string;
}

const ShipmentDetailPageHeader: FC<ShipmentDetailHeaderProps> = ({
  trackingId,
}) => {
  return (
    <DrawerHeader className={styles.header}>
      <Heading size={{ md: 'lg', base: 'md' }}>{trackingId}</Heading>
      <ModalCloseButton
        className={styles.modalCloseButton}
        position="inherit"
        size={{ md: 'md', base: 'sm' }}
      />
    </DrawerHeader>
  );
};
