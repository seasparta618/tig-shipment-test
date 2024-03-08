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
  Text,
  ModalCloseButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import { Shipment, TrackingEvent } from '~/types/shipment';
import styles from './shipment-detail.module.css';
import { SectionAccordionButton } from './SectionAccordionButton';
import { ShipmentDetailInfoGrid } from './ShipmentDetailInfoGrid';
import { TrackingHistory } from './TrackingHistory';
import { GET_TRACKING_EVENTS_QUERY } from '~/graphql/shipment';
import { useQuery } from '@apollo/client';
import { LoadingContentState } from '~/components/common/contentStates/LoadingContentState';
import { ErrorContentState } from '~/components/common/contentStates/ErrorContentState';

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
  const { loading, error, data } = useQuery(GET_TRACKING_EVENTS_QUERY, {
    variables: { trackingId: shipment?.trackingId || '' },
  });
  const [trackingEvents, setTrackingEvents] = useState<TrackingEvent[]>([]);

  useEffect(() => {
    if (data?.trackingEvents && data.trackingEvents.length) {
      setTrackingEvents(data.trackingEvents);
    }
  }, [data]);

  const drawerSize = useBreakpointValue({ base: 'full', md: 'lg' });

  return (
    <>
      <Drawer
        isOpen={isModalShown}
        placement="right"
        size={drawerSize}
        onClose={onClose}
      >
        {loading && <LoadingContentState />}
        {error && <ErrorContentState />}

        {!loading && !error && (
          <>
            <DrawerOverlay />
            <DrawerContent>
              <ShipmentDetailPageHeader trackingId={shipment.trackingId} />
              <ShipmentDetailPageBody
                trackingEvents={trackingEvents}
                shipment={shipment}
              />
            </DrawerContent>
          </>
        )}
      </Drawer>
    </>
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
      <Accordion defaultIndex={[0, 1]} allowMultiple>
        <AccordionItem borderTop="0px">
          <h2>
            <SectionAccordionButton text={'TRACKING HISTORY'} />
          </h2>
          <AccordionPanel>
            {trackingEvents.length ? (
              <Box className={styles.trackingHistoryContainer}>
                <TrackingHistory trackingEvents={trackingEvents} />
              </Box>
            ) : (
              <Flex>
                <Text>No Tracking History Available...</Text>
              </Flex>
            )}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </DrawerBody>
  );
};
