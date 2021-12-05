import Head from "next/head";
import '../styles/globals.scss';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import Layout from '../components/Layouts/Layout/Layout';
import { store } from '../controller/redux/store/configureStore';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import RouteGuard from '../components/RouteGuard/RouteGuard';
import { useEffect } from "react";
import { createTransactionQuery, getTransactionQuery } from "./queries";

const client = new ApolloClient({
  uri: 'http://localhost:3032/graphql',
  cache: new InMemoryCache()
});
function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    // client.query({
    //   query: getTransactionQuery,
    //   variables:{
    //     userId: '6197903ddd7f7527143f0448'
    //   }
    // }),
    client.mutate({
      mutation: createTransactionQuery,
      variables:{
        amount: 2000.0,
        title: 'Chuyen tien qua link',
        message: 'hello'
      }
    })
  }, [])

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Head>
          <meta
            httpEquiv="Cache-Control"
            content="no-cache, no-store, must-revalidate"
          />
          <meta httpEquiv="Pragma" content="no-cache" />
          <meta httpEquiv="Expires" content="0" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"
          />
          {/* <link rel="icon" href={images.favicon} /> */}
        </Head>
        <Layout>
          <RouteGuard>
            <Component {...pageProps} />
          </RouteGuard>
        </Layout>
      </Provider>
    </ApolloProvider>
  );
}

export default MyApp