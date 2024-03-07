import { render, screen } from '@testing-library/react';
import { TrackingHistory } from './TrackingHistory';
import {
  mockInTransicRecord,
  mockDeliveredRecords,
  mockUnknownRecord,
} from '~/mock/shipment';
import '@testing-library/jest-dom';
import { formatDate } from '~/utils/date';

describe('TrackingHistory Component', () => {
  test('renders tracking history with in-transit records', () => {
    // This mock only returns 1 element
    const trackingEvents = mockInTransicRecord('SHP-12345');
    render(<TrackingHistory trackingEvents={trackingEvents} />);

    // Check if the status is rendered correctly
    expect(screen.getAllByTestId('trackingevent-status')[0]).toHaveTextContent(
      'Picked Up'
    );

    // Check if the location is rendered correctly
    expect(
      screen.getAllByTestId('trackingevent-location')[0]
    ).toHaveTextContent('Unknown');
  });

  test('renders tracking history with delivered records', () => {
    const trackingEvents = mockDeliveredRecords('SHP-54321');
    render(<TrackingHistory trackingEvents={trackingEvents} />);

    // Check if the status of the last record is rendered correctly
    expect(screen.getAllByTestId('trackingevent-status')).toHaveLength(
      trackingEvents.length
    );
    expect(screen.getAllByTestId('trackingevent-status')[2]).toHaveTextContent(
      'Delivered'
    );
    expect(screen.getAllByTestId('trackingevent-date')[2]).toHaveTextContent(
      formatDate(trackingEvents[2].timestamp, 'dd MMM yy')
    );

    // Check if the location of the last record is rendered correctly
    expect(screen.getAllByTestId('trackingevent-location')).toHaveLength(
      trackingEvents.length
    );
    expect(
      screen.getAllByTestId('trackingevent-location')[2]
    ).toHaveTextContent('Washington, DC');
    expect(screen.getAllByTestId('trackingevent-time')[2]).toHaveTextContent(
      formatDate(trackingEvents[2].timestamp, 'HH:mm aaa')
    );
  });

  test('renders tracking history with unknown scan records', () => {
    const trackingEvents = mockUnknownRecord('SHP-11111');
    render(<TrackingHistory trackingEvents={trackingEvents} />);

    // Check if the status is rendered correctly
    expect(screen.getByTestId('trackingevent-status')).toHaveTextContent(
      'Unknown Scan'
    );

    // Check if the location is rendered correctly
    expect(screen.getByTestId('trackingevent-location')).toHaveTextContent(
      'Unknown'
    );
  });
});
