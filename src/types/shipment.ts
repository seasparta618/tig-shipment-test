export type ShipmentStatus =
  | 'Delivered'
  | 'In-Transit'
  | 'Manifested'
  | 'Unknown';

export type TrackingEventStatus =
  | 'Picked Up'
  | 'Arrived at Facility'
  | 'Processed Through Facility'
  | 'Departed Facility'
  | 'On Board for Delivery'
  | 'Delivered'
  | 'Unknown Scan'
  | 'Return to Sender'
  | 'Package Handling';

export type ShipmentStatusSeverity = 'Success' | 'Info' | 'Warning';

export type Shipment = {
  id: string;
  trackingId: string;
  status: ShipmentStatus;
  statusSeverity: ShipmentStatusSeverity;
  deliveredTime: string;
  lastUpdate: string;
  deliveryAddress: string;
  totalTransit: string;
};

export type TrackingEvent = {
  id: string;
  trakingId: string;
  status: TrackingEventStatus;
  statusSeverity: ShipmentStatusSeverity;
  timestamp: string;
  location: string;
};
