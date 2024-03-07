import { ShipmentStatus } from '~/types/shipment';

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
