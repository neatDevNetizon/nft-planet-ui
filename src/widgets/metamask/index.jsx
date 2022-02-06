// import { useEffect } from "react";
// import { useState } from "react";
import { useMetamask }         from "use-metamask";
// import { ethers }              from "ethers";
import Web3                    from "web3";

// import Info                    from "./Info";
import { Button }              from '@chakra-ui/react'
import { Text }                from '@chakra-ui/react'

function Metamask() {
  const { connect, metaState } = useMetamask();
  // const [ web3interface, setWeb3Interface ] = useState("ethers");

  // useEffect(() => {
  //   if (metaState.isAvailable && !metaState.isConnected) {
  //     (async () => {
  //       try {
  //         if (web3interface === "ethers")
  //           await connect(ethers.providers.Web3Provider, "any");
  //         else if (web3interface === "web3")
  //           await connect(Web3);
  //         else 
  //           throw Error(`Unknown web3 interface: ${web3interface}`);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     })();
  //   }
  // }, [metaState.isAvailable, metaState.isConnected, web3interface]);

  // const handleWeb3Selector = (event) => setWeb3Interface(event.target.value);

  const connectMetaMask = () => {
    if (metaState.isAvailable && !metaState.isConnected) {
      (async () => {
        try {
          await connect(Web3);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }

  return (
    <div>
      {
        metaState.isAvailable
        ? <Button
            height='55px'
            width='250px'
            background='rgba(0, 0, 0, 0.6)'
            border='3px solid #FFFFFF'
            borderRadius='20px'
            onClick={connectMetaMask}
          ><Text
              fontSize='19px'
              margin='0px 5.5px 0px 0px' 
              color='#FFFFFF'
              fontFamily='"arial black",arial-w01-black,arial-w02-black,"arial-w10 black",sans-serif'
              >{metaState.isConnected
                  ? String(metaState.account[0]).substr(0, 7)+ "..."+ String(metaState.account[0]).substr(-7)
                  : "CONNECT WALLET"}
            </Text>
          </Button>
        : <div>
          <Text color='white'>You don't have Metamask installed</Text>
          <Text color='lightblue' as='u'>
            <code>
              <a href="https://metamask.io/">https://metamask.io</a>
            </code>
          </Text>
        </div>
      }      
    </div>
  );
}

export default Metamask;
