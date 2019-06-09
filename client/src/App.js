import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import  Rockets from './Rocket'
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});
function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <header className="App-header">
        <p>
         List Of Mission Name
        </p>
         <Rockets />
      </header>
    </div>
    </ApolloProvider>
  );
}

export default App;
