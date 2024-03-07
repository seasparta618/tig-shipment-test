/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent } from '@testing-library/react';
import { ShipmentList } from './ShipmentList';
import { mockShipmentData } from '~/mock/shipment'; // Assuming your mock data is in a file called mockData

describe('ShipmentList Component', () => {
  const mockOnShipmentItemClick = jest.fn();
  test('renders shipment list', () => {
    render(
      <ShipmentList
        shipmentItems={mockShipmentData()}
        onShipmentItemClick={mockOnShipmentItemClick}
        selectedShipmentId="0eaf9c36-07c7-4d65-8dbf-8e5f2a83de38"
      />
    );
    const shipmentList = screen.getByTestId('shipmentlist-body');
    expect(shipmentList).toBeDefined();
    expect(shipmentList.children).toHaveLength(mockShipmentData().length);
  });

  test('calls onShipmentItemClick when a shipment item is clicked', () => {
    render(
      <ShipmentList
        shipmentItems={mockShipmentData()}
        onShipmentItemClick={mockOnShipmentItemClick}
        selectedShipmentId="0eaf9c36-07c7-4d65-8dbf-8e5f2a83de38"
      />
    );
    const firstShipmentItem = screen.getAllByRole('row')[1];
    fireEvent.click(firstShipmentItem);
    expect(mockOnShipmentItemClick).toHaveBeenCalledWith(mockShipmentData()[0]);
  });
});
