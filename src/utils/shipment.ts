import { theme } from '@chakra-ui/react';
import {
  Shipment,
  ShipmentStatus,
  TrackingEventStatus,
} from '~/types/shipment';

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

export const sortShipmentsByLatestUpdate = (
  shipments: Shipment[],
  isDesc = true
) => {
  return shipments.sort((a, b) => {
    const dateTimeA = new Date(a.lastUpdate).getTime();
    const dateTimeB = new Date(b.lastUpdate).getTime();
    return isDesc ? dateTimeB - dateTimeA : dateTimeA - dateTimeB;
  });
};

export const sortShipmentsByStatus = (shipments: Shipment[], isDesc = true) => {
  const statusPriority: { [key in ShipmentStatus]: number } = {
    Delivered: 1,
    'In-Transit': 2,
    Manifested: 3,
    Unknown: 4,
  };

  return shipments.sort((a, b) => {
    const priorityA = statusPriority[a.status];
    const priorityB = statusPriority[b.status];

    return isDesc ? priorityB - priorityA : priorityA - priorityB;
  });
};
