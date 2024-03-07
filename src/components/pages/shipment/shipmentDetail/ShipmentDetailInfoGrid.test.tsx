/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { ShipmentDetailInfoGrid } from './ShipmentDetailInfoGrid';
import { mockShipmentData } from '~/mock/shipment';
import { formatDate } from 'date-fns/format';
import '@testing-library/jest-dom';

/* eslint-disable testing-library/no-node-access, testing-library/no-container */
describe('ShipmentDetailInfoGrid Component', () => {
  const firstShipment = mockShipmentData()[0];

  test('renders shipment detail information', () => {
    render(<ShipmentDetailInfoGrid shipment={firstShipment} />);

    // Check if all the labels are rendered
    expect(screen.getByText('Status')).toBeDefined();
    expect(screen.getByText('Delivered time')).toBeDefined();
    expect(screen.getByText('Delivery address')).toBeDefined();
    expect(screen.getByText('Last updated')).toBeDefined();
    expect(screen.getByText('Total transit time')).toBeDefined();

    // Check if the values are rendered correctly using data-testid
    expect(screen.getByTestId('detail-status')).toHaveTextContent(
      firstShipment.status
    );
    expect(screen.getByTestId('detail-deliveryAddress')).toHaveTextContent(
      firstShipment.deliveryAddress
    );
    expect(screen.getByTestId('detail-totalTime')).toHaveTextContent(
      firstShipment.totalTransit
    );

    // Check if the formatted dates are rendered correctly
    const deliveredTime = firstShipment.deliveredTime
      ? formatDate(firstShipment.deliveredTime, 'dd MMM yy hh:mm aaaa')
      : 'N/A';
    expect(screen.getByTestId('detail-deliveredTime')).toHaveTextContent(
      deliveredTime
    );

    const lastUpdate = firstShipment.lastUpdate
      ? formatDate(firstShipment.lastUpdate, 'dd MMM yy hh:mm aaaa')
      : 'N/A';
    expect(screen.getByTestId('detail-lastUpdated')).toHaveTextContent(
      lastUpdate
    );
  });
});
