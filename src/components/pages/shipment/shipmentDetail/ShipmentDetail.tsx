import {
    Accordion,
    AccordionItem,
    AccordionPanel,
    Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  ModalCloseButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FC, useState } from 'react';
import { mockDeliveredRecords } from '~/mock/shipment';
import { Shipment, TrackingEvent } from '~/types/shipment';
import styles from './shipment-detail.module.css';
import { SectionAccordionButton } from './SectionAccordionButton';
import { ShipmentDetailInfoGrid } from './ShipmentDetailInfoGrid';

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
        <ShipmentDetailPageBody
            trackingEvents={trackingEvents}
            shipment={shipment}
          />
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

interface ShipmentDetailBodyProps {
    trackingEvents: TrackingEvent[];
    shipment: Shipment;
  }
  
  const ShipmentDetailPageBody: FC<ShipmentDetailBodyProps> = ({
    trackingEvents,
    shipment,
  }) => {
    return (
      <DrawerBody padding="20px">
        <Accordion defaultIndex={[0, 1]} allowMultiple>
          <AccordionItem borderTop="0px">
            <h2>
              <SectionAccordionButton text={'SHIPMENT'} />
            </h2>
            <AccordionPanel>
              <ShipmentDetailInfoGrid shipment={shipment} />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </DrawerBody>
    );
  };
  