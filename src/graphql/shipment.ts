import { gql } from '@apollo/client';

export const GET_SHIPMENTS = gql`
  query Shipments {
    shipments {
      id
      trackingId
      status
      statusSeverity
      deliveredTime
      lastUpdate
      deliveryAddress
      totalTransit
    }
  }
`;

export const GET_TRACKING_EVENTS_QUERY = gql`
  query TrackingEvents($trackingId: String!) {
    trackingEvents(trackingId: $trackingId) {
      id
      trackingId
      status
      statusSeverity
      timestamp
      location
    }
  }
`;
