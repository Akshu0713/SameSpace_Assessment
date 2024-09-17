import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/global.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://cms.samespace.com/graphql', // Replace with your GraphQL server endpoint
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
       <App />
    </ApolloProvider>
  </React.StrictMode>
);


reportWebVitals();
