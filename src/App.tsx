import { ApolloProvider } from '@apollo/client';
import { client } from '~/graphql/client';
import { Header } from '~/components/common/header/Header';
import { ShipmentPage } from '~/components/pages/shipment/ShipmentPage';

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <ShipmentPage />
    </ApolloProvider>
  );
}

export default App;
