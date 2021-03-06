
import { ApolloClient, InMemoryCache } from '@apollo/client';

// Initialize Apollo Client
const client = new ApolloClient({
    uri: 'https://graphqlzero.almansi.me/api',
    cache: new InMemoryCache()
});

export default client
