/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent } from '@testing-library/react';
import { ShipmentItem } from './ShipmentItem';
import { mockShipmentData } from '~/mock/shipment';
import { Table, Tbody } from '@chakra-ui/react';

describe('ShipmentItem Component', () => {
  const mockOnClick = jest.fn();
  const firstShipment = mockShipmentData()[0];

  test('renders shipment item', () => {
    render(
        <Table>
        <Tbody>
        <ShipmentItem
          shipmentItem={firstShipment}
          onClick={mockOnClick}
          isSelected={false}
        />
        </Tbody>
      </Table>
    );
    const trackingId = screen.getByText(firstShipment.trackingId);
    expect(trackingId).toBeDefined();
    const statusTag = screen.getByText(firstShipment.status);
    expect(statusTag).toBeDefined();
  });

  test('calls onClick when shipment item is clicked', () => {
    render(
      <Table>
        <Tbody>
        <ShipmentItem
          shipmentItem={firstShipment}
          onClick={mockOnClick}
          isSelected={false}
        />
        </Tbody>
      </Table>
    );
    const shipmentItemRow = screen.getByRole('row');
    fireEvent.click(shipmentItemRow);
    expect(mockOnClick).toHaveBeenCalledWith(firstShipment);
  });
});
