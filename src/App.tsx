import { ApolloProvider } from '@apollo/client';
import { client } from '~/graphql/client';
import { Header } from '~/components/common/header/Header';

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
    </ApolloProvider>
  );
}

export default App;
