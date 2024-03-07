import { Shipment, TrackingEvent } from '~/types/shipment';

// mock function to generate bunch of shipment data
export const mockShipmentData = (): Shipment[] => {
  return [
    {
      id: '0eaf9c36-07c7-4d65-8dbf-8e5f2a83de38',
      trackingId: 'SHP-12345',
      status: 'Delivered',
      statusSeverity: 'Success',
      deliveredTime: '2023-10-20T14:30:00Z',
      lastUpdate: '2023-10-20T14:30:00Z',
      deliveryAddress: '123 Main Street, Sydney, NSW, 2000, Australia',
      totalTransit: '2 days',
    },
    {
      id: '5c8b2405-ef59-4651-bfef-33c0469a5029',
      trackingId: 'SHP-98765',
      status: 'In-Transit',
      statusSeverity: 'Info',
      deliveredTime: null,
      lastUpdate: '2023-10-25T08:45:00Z',
      deliveryAddress: '456 Elm Street, Melbourne, VIC, 3000, Australia',
      totalTransit: '15 days',
    },
    {
      id: '17b6d21f-75e7-4d0e-b4a6-78a746cdf080',
      trackingId: 'SHP-54321',
      status: 'Manifested',
      statusSeverity: 'Info',
      deliveredTime: null,
      lastUpdate: '2023-10-22T12:15:00Z',
      deliveryAddress: '789 Oak Street, Brisbane, QLD, 4000, Australia',
      totalTransit: '8 hours',
    },
    {
      id: 'af6c0f6c-bfe9-4ca9-8f7b-3b5b1d15c6e1',
      trackingId: 'SHP-11111',
      status: 'Unknown',
      statusSeverity: 'Warning',
      deliveredTime: null,
      lastUpdate: '2023-10-24T20:20:00Z',
      deliveryAddress: '101 Cedar Street, Perth, WA, 6000, Australia',
      totalTransit: '2 days',
    },
    {
      id: 'f3c22084-cc3d-4be0-8e03-5d2d309b947f',
      trackingId: 'SHP-77777',
      status: 'In-Transit',
      statusSeverity: 'Info',
      deliveredTime: null,
      lastUpdate: '2023-10-23T16:55:00Z',
      deliveryAddress: '234 Birch Street, Adelaide, SA, 5000, Australia',
      totalTransit: '5 days',
    },
    {
      id: 'a791237b-164c-4d8d-8755-3c91d0abf5d2',
      trackingId: 'SHP-54333',
      status: 'Delivered',
      statusSeverity: 'Success',
      deliveredTime: '2023-10-21T15:30:00Z',
      lastUpdate: '2023-10-21T15:30:00Z',
      deliveryAddress: '789 Elm Street, Brisbane, QLD, 4000, Australia',
      totalTransit: '3 days',
    },
    {
      id: 'b49123d2-0cd4-4e4d-9aae-2c3ef9bbf5d1',
      trackingId: 'SHP-98778',
      status: 'In-Transit',
      statusSeverity: 'Info',
      deliveredTime: null,
      lastUpdate: '2023-10-25T10:45:00Z',
      deliveryAddress: '456 Maple Street, Melbourne, VIC, 3000, Australia',
      totalTransit: '12 days',
    },
    {
      id: 'c591f23e-974c-4f8d-8b33-1c4af5cbf7d1',
      trackingId: 'SHP-55555',
      status: 'Manifested',
      statusSeverity: 'Info',
      deliveredTime: null,
      lastUpdate: '2023-10-26T12:15:00Z',
      deliveryAddress: '123 Oak Street, Sydney, NSW, 2000, Australia',
      totalTransit: '6 hours',
    },
    {
      id: 'd6f59123-743c-4d1d-8a7f-6c4fa4bd8f11',
      trackingId: 'SHP-11112',
      status: 'Delivered',
      statusSeverity: 'Success',
      deliveredTime: '2023-10-22T16:30:00Z',
      lastUpdate: '2023-10-22T16:30:00Z',
      deliveryAddress: '567 Cedar Street, Perth, WA, 6000, Australia',
      totalTransit: '4 days',
    },
    {
      id: 'e4f8a1f4-2c94-4a9d-9c3a-0b3ae6f9bfc5',
      trackingId: 'SHP-33333',
      status: 'In-Transit',
      statusSeverity: 'Info',
      deliveredTime: null,
      lastUpdate: '2023-10-23T08:30:00Z',
      deliveryAddress: '101 Birch Street, Adelaide, SA, 5000, Australia',
      totalTransit: '7 days',
    },
    {
      id: 'f3c291b3-0cf4-4c3d-8b1c-0d3ae9fbbcf1',
      trackingId: 'SHP-77776',
      status: 'Delivered',
      statusSeverity: 'Success',
      deliveredTime: '2023-10-24T14:15:00Z',
      lastUpdate: '2023-10-24T14:15:00Z',
      deliveryAddress: '789 Cedar Street, Brisbane, QLD, 4000, Australia',
      totalTransit: '5 days',
    },
    {
      id: 'g4d291b3-0cf4-4c3d-8b1c-0d3ae9fbbcf1',
      trackingId: 'SHP-54322',
      status: 'In-Transit',
      statusSeverity: 'Info',
      deliveredTime: null,
      lastUpdate: '2023-10-23T12:30:00Z',
      deliveryAddress: '234 Maple Street, Melbourne, VIC, 3000, Australia',
      totalTransit: '10 days',
    },
    {
      id: 'h4e4912b-4cc4-4f2d-8c3f-2b3cf9bbf5c1',
      trackingId: 'SHP-99999',
      status: 'Manifested',
      statusSeverity: 'Info',
      deliveredTime: null,
      lastUpdate: '2023-10-27T10:15:00Z',
      deliveryAddress: '567 Elm Street, Sydney, NSW, 2000, Australia',
      totalTransit: '3 hours',
    },
    {
      id: 'i3f56123-743c-4d1d-8a7f-6c4fa4bd8f11',
      trackingId: 'SHP-88888',
      status: 'Delivered',
      statusSeverity: 'Success',
      deliveredTime: '2023-10-26T15:45:00Z',
      lastUpdate: '2023-10-26T15:45:00Z',
      deliveryAddress: '123 Oak Street, Perth, WA, 6000, Australia',
      totalTransit: '6 days',
    },
    {
      id: 'j3f59123-743c-4d1d-8a7f-6c4fa4bd8f11',
      trackingId: 'SHP-66666',
      status: 'In-Transit',
      statusSeverity: 'Info',
      deliveredTime: null,
      lastUpdate: '2023-10-25T08:15:00Z',
      deliveryAddress: '101 Birch Street, Adelaide, SA, 5000, Australia',
      totalTransit: '9 days',
    },
  ] as Shipment[];
};

// mock function to generate bunch of tracking event data to test
export const generateUnknownRecord = (trackingId: string): TrackingEvent[] => {
  return [
    {
      id: '1',
      trakingId: trackingId,
      status: 'Unknown Scan',
      statusSeverity: 'Warning',
      timestamp: '2024-03-07T20:00:00Z',
      location: 'Unknown',
    },
  ];
};

export const generateInTransicRecord = (
  trackingId: string
): TrackingEvent[] => {
  return [
    {
      id: '1',
      trakingId: trackingId,
      status: 'Picked Up',
      statusSeverity: 'Info',
      timestamp: '2024-03-07T20:00:00Z',
      location: 'Unknown',
    },
    {
      id: '2',
      trakingId: trackingId,
      status: 'Arrived at Facility',
      statusSeverity: 'Info',
      timestamp: '2024-03-07T20:00:00Z',
      location: 'Unknown',
    },
  ];
};

export const generateDeliveredRecords = (
  trackingId: string
): TrackingEvent[] => {
  return [
    {
      id: '1',
      trakingId: trackingId,
      status: 'Picked Up',
      statusSeverity: 'Info',
      timestamp: '2024-03-07T14:00:00Z',
      location: 'New York, NY',
    },
    {
      id: '2',
      trakingId: trackingId,
      status: 'Processed Through Facility',
      statusSeverity: 'Info',
      timestamp: '2024-03-07T16:00:00Z',
      location: 'Philadelphia, PA',
    },
    {
      id: '3',
      trakingId: trackingId,
      status: 'Delivered',
      statusSeverity: 'Success',
      timestamp: '2024-03-07T20:00:00Z',
      location: 'Washington, DC',
    },
  ];
};

export const generateReturnRecords = (trackingId: string): TrackingEvent[] => {
  return [
    {
      id: '1',
      trakingId: trackingId,
      status: 'Picked Up',
      statusSeverity: 'Info',
      timestamp: '2024-03-07T14:00:00Z',
      location: 'Los Angeles, CA',
    },
    {
      id: '2',
      trakingId: trackingId,
      status: 'Arrived at Facility',
      statusSeverity: 'Info',
      timestamp: '2024-03-07T16:00:00Z',
      location: 'Las Vegas, NV',
    },
    {
      id: '3',
      trakingId: trackingId,
      status: 'Processed Through Facility',
      statusSeverity: 'Info',
      timestamp: '2024-03-07T18:00:00Z',
      location: 'Philadelphia, PA',
    },
    {
      id: '4',
      trakingId: trackingId,
      status: 'Departed Facility',
      statusSeverity: 'Info',
      timestamp: '2024-03-07T20:00:00Z',
      location: 'Baltimore, MD',
    },
    {
      id: '5',
      trakingId: trackingId,
      status: 'On Board for Delivery',
      statusSeverity: 'Warning',
      timestamp: '2024-03-07T22:00:00Z',
      location: 'Washington, DC',
    },
    {
      id: '6',
      trakingId: trackingId,
      status: 'Delivered',
      statusSeverity: 'Success',
      timestamp: '2024-03-08T00:00:00Z',
      location: 'Arlington, VA',
    },
    {
      id: '7',
      trakingId: trackingId,
      status: 'Return to Sender',
      statusSeverity: 'Warning',
      timestamp: '2024-03-09T22:00:00Z',
      location: 'Los Angeles, CA',
    },
  ];
};
