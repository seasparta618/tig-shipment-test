import {
  Box,
  Text,
  Step,
  StepIndicator,
  Stepper,
  StepSeparator,
} from '@chakra-ui/react';
import { FC } from 'react';
import styles from './shipment-detail.module.css';
import { formatDate } from '~/utils/date';
import {
  CheckedIconSolid,
  MinusIconSolid,
  ErrorIconSolid,
} from '~/components/common/icons/icon';
import { getTrackingStatusColor } from '~/utils/shipment';
import { TrackingEvent, TrackingEventStatus } from '~/types/shipment';

interface TrackingHistoryProps {
  trackingEvents: TrackingEvent[];
}

export const TrackingHistory: FC<TrackingHistoryProps> = ({
  trackingEvents,
}) => {
  const getIconByStatus = (status: TrackingEventStatus): React.ReactNode => {
    const colorTheme = {
      size: 24,
      fill: getTrackingStatusColor(status),
      stroke: '#fff',
    };
    switch (status) {
      case 'Picked Up':
      case 'Arrived at Facility':
      case 'Processed Through Facility':
      case 'Departed Facility':
      case 'On Board for Delivery':
      case 'Delivered':
        return CheckedIconSolid(colorTheme);
      case 'Unknown Scan':
        return ErrorIconSolid(colorTheme);

      case 'Return to Sender':
      case 'Package Handling':
        return MinusIconSolid(colorTheme);
      default:
        return CheckedIconSolid(colorTheme);
    }
  };

  return (
    <Stepper orientation="vertical" index={0} gap="0">
      {trackingEvents.map((trackingEvent, index) => (
        <Step key={index} className={styles.stepper}>
          <StepIndicator border={'none'}>
            {getIconByStatus(trackingEvent.status)}
          </StepIndicator>
          <Box className={styles.infoBox}>
            <Box textAlign={'left'}>
              <Text
                fontSize="sm"
                fontWeight={600}
                data-testid="trackingevent-status"
              >
                {trackingEvent.status}
              </Text>
              <Text fontSize="sm" data-testid="trackingevent-location">
                {trackingEvent.location}
              </Text>
            </Box>
            <Box textAlign={'right'}>
              <Text
                fontSize="sm"
                fontWeight={600}
                data-testid="trackingevent-date"
              >
                {formatDate(trackingEvent.timestamp, 'dd MMM yy')}
              </Text>
              <Text fontSize="sm" data-testid="trackingevent-time">
                {formatDate(trackingEvent.timestamp, 'HH:mm aaa')}
              </Text>
            </Box>
          </Box>
          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
};
