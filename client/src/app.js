
import React from "react"
import { ApolloProvider } from '@apollo/client/react';
import { BrowserRouter as Router } from "react-router-dom";

import client from "./graph"
import AppRoutes from "./routes"

const App = () => {
  return(
    <Router>
      <ApolloProvider client={client}>
        <AppRoutes />
      </ApolloProvider>
    </Router>
)
}

export default App