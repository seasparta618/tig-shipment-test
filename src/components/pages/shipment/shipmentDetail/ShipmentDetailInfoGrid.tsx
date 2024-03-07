import { Grid, GridItem, Tag, Text } from '@chakra-ui/react';
import { FC, Fragment } from 'react';
import { Shipment } from '~/types/shipment';
import { formatDate } from '~/utils/date';
import { getShipmentStatusColor } from '~/utils/shipment';

interface ShipmentDetailInfoGridProps {
  shipment: Shipment;
}

export const ShipmentDetailInfoGrid: FC<ShipmentDetailInfoGridProps> = ({
  shipment,
}) => {
  const dateFormatStr = 'dd MMM yy hh:mm aaaa';

  const infoMap = [
    { label: 'Status', value: shipment.status, dataTestid: 'detail-status' },
    {
      label: 'Delivered time',
      value: shipment.deliveredTime?.length
        ? formatDate(shipment.deliveredTime, dateFormatStr)
        : 'N/A',
      dataTestid: 'detail-deliveredTime',
    },
    {
      label: 'Delivery address',
      value: shipment.deliveryAddress,
      dataTestid: 'detail-deliveryAddress',
    },
    {
      label: 'Last updated',
      value: shipment.lastUpdate?.length
        ? formatDate(shipment.lastUpdate, dateFormatStr)
        : 'N/A',
      dataTestid: 'detail-lastUpdated',
    },
    {
      label: 'Total transit time',
      value: shipment.totalTransit,
      dataTestid: 'detail-totalTime',
    },
  ];

  return (
    <Grid templateColumns="40% 60%" columnGap="20px" rowGap="20px">
      {infoMap.map((item, index) => (
        <Fragment key={index}>
          <GridItem>
            <Text size="xs" color="gray.400">
              {item.label}
            </Text>
          </GridItem>
          <GridItem>
            {item.label === 'Status' ? (
              <Tag
                data-testid={item.dataTestid}
                size="sm"
                variant="outline"
                colorScheme={getShipmentStatusColor(shipment.status)}
              >
                {item.value}
              </Tag>
            ) : (
              <Text size="xs" fontWeight="600" data-testid={item.dataTestid}>
                {item.value}
              </Text>
            )}
          </GridItem>
        </Fragment>
      ))}
    </Grid>
  );
};
