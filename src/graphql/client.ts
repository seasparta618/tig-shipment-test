import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const HEADER_TOKEN = 'fe-test-2023';

const graphqlURI = 'https://fe-coding-test-o6yezgstiq-km.a.run.app/graphql';

export const client = new ApolloClient({
  link: new HttpLink({
    uri: graphqlURI,
    headers: {
      'x-token': HEADER_TOKEN,
    },
  }),
  cache: new InMemoryCache(),
});
