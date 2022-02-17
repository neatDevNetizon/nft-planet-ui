import React                      from 'react';
import ReactDOM                   from 'react-dom';
import { MetaMaskProvider }       from "metamask-react";
import { ChakraProvider }         from  '@chakra-ui/react'
import reportWebVitals            from './reportWebVitals';
import App                        from './App';

ReactDOM.render(
  <React.StrictMode>
    <MetaMaskProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </MetaMaskProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
