import { theme } from '@chakra-ui/react';
import { ShipmentStatus, TrackingEventStatus } from '~/types/shipment';

// the util function to assign the tag theme color for status
export const getShipmentStatusColor = (status: ShipmentStatus): string => {
  switch (status) {
    case 'In-Transit':
    case 'Manifested':
      return 'yellow';
    case 'Unknown':
      return 'red';
    case 'Delivered':
    default:
      return 'green';
  }
};

// the util function to assign the color fo the tracking status
export const getTrackingStatusColor = (status: TrackingEventStatus): string => {
  switch (status) {
    case 'Picked Up':
    case 'Arrived at Facility':
    case 'Processed Through Facility':
    case 'Departed Facility':
    case 'On Board for Delivery':
    case 'Delivered':
      return theme.colors.green[500];
    case 'Unknown Scan':
      return theme.colors.red[500];
    case 'Return to Sender':
    case 'Package Handling':
    default:
      return theme.colors.yellow[500];
  }
};
