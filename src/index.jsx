import React                      from 'react';
import ReactDOM                   from 'react-dom';
import { MetamaskStateProvider }  from "use-metamask";
import { ChakraProvider }         from  '@chakra-ui/react'
import reportWebVitals            from './reportWebVitals';
import App                        from './App';

ReactDOM.render(
  <React.StrictMode>
    <MetamaskStateProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </MetamaskStateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
