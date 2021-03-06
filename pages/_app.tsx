import Head from "next/head";
import 'styles/globals.scss';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import Layout from 'components/Layouts/Layout/Layout';
import { store } from 'controller/redux/store/configureStore';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import RouteGuard from 'components/RouteGuard/RouteGuard';
import { useEffect } from "react";
import { createTransactionQuery, getTransactionQuery } from "./queries";
const client = new ApolloClient({
  uri: 'http://localhost:3032/graphql',
  cache: new InMemoryCache()
});
import OneSignal from 'react-onesignal';

function MyApp({ Component, pageProps }: AppProps) {

  // const initOneSignalNotification = () => {
  //   if (window.Onesignal) return false;
  //   var OneSignal = window.OneSignal || [];
  //   OneSignal.push(function () {
  //     OneSignal.init({
  //       appId: "06d4fe7b-b54d-4ce2-8abc-09b5f29350bf",
  //       safari_web_id: "web.onesignal.auto.0c986762-0fae-40b1-a5f6-ee95f7275a97",
  //     });
  //   });
  // };




  useEffect(() => {
    // initOneSignalNotification();
    // client.query({
    //   query: getTransactionQuery,
    //   variables:{
    //     userId: '6197903ddd7f7527143f0448'
    //   }
    // }),
    // client.mutate({
    //   mutation: createTransactionQuery,
    //   variables:{
    //     amount: 2000.0,
    //     title: 'Chuyen tien qua link',
    //     message: 'hello'
    //   }
    // })
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
          <script
            src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
            async=""
          ></script>
          <link rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css" />
          <link rel="stylesheet"
            href="https://unpkg.com/boxicons@latest/css/boxicons.min.css" />
        </Head>
        <RouteGuard>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RouteGuard>
      </Provider>
    </ApolloProvider>
  );
}

export default MyApp