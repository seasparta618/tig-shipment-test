/**
 * @jest-environment jsdom
 */

import { render, screen, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { ShipmentPage } from './ShipmentPage';
import { GET_SHIPMENTS } from '~/graphql/shipment';
import { mockShipmentData } from '~/mock/shipment';
import '@testing-library/jest-dom';

const mocks = [
  {
    request: {
      query: GET_SHIPMENTS,
    },
    result: {
      data: {
        shipments: mockShipmentData(),
      },
    },
  },
];

describe('ShipmentPage', () => {
  it('renders loading state initially', () => {
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <ShipmentPage />
      </MockedProvider>
    );
    expect(screen.getByTestId('loading-content')).toBeDefined();
  });

  it('renders shipment list after loading', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ShipmentPage />
      </MockedProvider>
    );
    await waitFor(() => {
      const shipmentListBody = screen.getByTestId('shipmentlist-body');
      expect(shipmentListBody).toBeInTheDocument();
      expect(shipmentListBody.childNodes).toBeDefined();
      expect(shipmentListBody.childNodes.length).toBe(
        mockShipmentData().length
      );
    });
  });

  it('renders error state', async () => {
    const errorMocks = [
      {
        request: {
          query: GET_SHIPMENTS,
        },
        error: new Error('An error occurred'),
      },
    ];

    render(
      <MockedProvider mocks={errorMocks} addTypename={false}>
        <ShipmentPage />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('error-content')).toBeInTheDocument();
    });
  });

  it('renders zero state', async () => {
    const zeroMocks = [
      {
        request: {
          query: GET_SHIPMENTS,
        },
        result: {
          data: {
            shipments: [],
          },
        },
      },
    ];

    render(
      <MockedProvider mocks={zeroMocks} addTypename={false}>
        <ShipmentPage />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('zero-content')).toBeInTheDocument();
    });
  });
});
