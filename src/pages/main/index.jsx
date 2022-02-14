import { useEffect, useState }                                            from "react";
import React                                                              from 'react';
import { useMetamask }                                                    from "use-metamask";
import { Link }                                                           from "react-router-dom";
import { IoIosArrowDropdownCircle }                                       from "react-icons/io";
import Popup                                                              from 'reactjs-popup';
// import { Web3 }                                                           from "web3";
import { ethers }                                                         from "ethers";
import { Image, Grid, GridItem, Center, HStack, Link as ChakraLink }      from "@chakra-ui/react";
import { Btn }                                                            from "../../components/btn";
// import Txt                                                                from "../../components/txt";
import Collection                                                         from "./collection";
import Mint                                                               from "./mint";

function Main() {

  const ref = React.createRef();

  const { connect, metaState } = useMetamask();

  const [ btnTitle, setBtnTitle ] = useState("CONNECT WALLET");

  const connectMetaMask = () => {
    if (metaState.isAvailable && !metaState.isConnected) {
      (async () => {
        try {
            await connect(ethers.providers.Web3Provider, "any");
        } catch (error) {
          console.log(error);
        }
      })();
    } else if (!metaState.isAvailable)
        alert("You don't have Metamask installed! https://metamask.io");

    if (metaState.isConnected && metaState.chain.id!=='4')
        alert("Wrong chain selected! Please select Rinkeby network");
  }

  useEffect(() => {
    if (metaState.isAvailable && !metaState.isConnected && metaState.chain.id==='4') {
      (async () => {
        try {
            await connect(ethers.providers.Web3Provider, "any");
        } catch (error) {
          console.log(error);
        }
      })();
    }

    if (metaState.isAvailable && metaState.isConnected && metaState.chain.id==="4") {
      setBtnTitle(String(metaState.account[0]).substr(0, 7)+ "..."+ String(metaState.account[0]).substr(-7));
    } else {
      setBtnTitle("CONNECT WALLET");
    }
  }, [metaState.isAvailable, metaState.isConnected, metaState.chain, metaState.account, connect]);

  // const [walletAddress, setWalletAddress] = useState();
  // const [btnTitle, setBtnTitle] = useState("CONNECT WALLET");
  // const [blockChainId, setBlockChainId] = useState();

  // const connectWallet = async () => {

  //   if(window.ethereum) {
  //     const accounts = await window.ethereum.request({ method: 'eth_accounts'});
  //     const chainId = await window.ethereum.request({ method: 'eth_chainId'});
  //     const isUnlocked = await window.ethereum._metamask.isUnlocked();
  //     if(!isUnlocked) {
  //       setBtnTitle("CONNECT WALLET");
  //       alert("Please unlock your wallet!");
  //     } else if(chainId != '0x4') {
  //       setBtnTitle("CONNECT WALLET");
  //       alert("Please connect to Rinkeby!");
  //     } else {
  //       setBtnTitle(String(accounts[0]).substr(0, 7)+ "..."+ String(accounts[0]).substr(-7));
  //       setWalletAddress(accounts[0]);
  //     }
  //   } else {
  //     alert("Please install MetaMask!");
  //   }
  // }

  // useEffect(() => {
  //   if(window.ethereum) {
  //     window.ethereum.on('chainChanged', () => {
  //       (async() => {
  //         connectWallet();
  //       })();
  //     })
  //     window.ethereum.on('accountsChanged', () => {
  //       (async() => {
  //         const accounts = await window.ethereum.request({ method: 'eth_accounts' });
  //         setBtnTitle(String(accounts[0]).substr(0, 7)+ "..."+ String(accounts[0]).substr(-7));
  //       })();
  //     })
  //     window.ethereum.on('unlockStateChanged', () => {
  //       (async() => {
  //         const isUnlocked = await window.ethereum._metamask.isUnlocked();
  //         if(!isUnlocked){ setBtnTitle("CONNECT WALLET"); }
  //       })();
  //     })
  //     // window.ethereum.on('connect', () => {
  //     //   setBtnTitle(String(walletAddress).substr(0, 7)+ "..."+ String(walletAddress).substr(-7));
  //     // })
  //   }
  // }, []);

  return (
    <>
      <Grid
        h={window.innerHeight}
        templateRows='repeat(12, 1fr)'
        templateColumns='repeat(4, 1fr)'
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1}>
          <Center h="100%">
            <Link to="/">
              <HStack spacing='0px'>
                <Image src="./images/Bild6.webp" alt='logo'/>
                <Image src="./images/Bild6_text.webp" alt='logo_text'/>
              </HStack>
            </Link>
          </Center>
        </GridItem>
        <GridItem rowSpan={2} colSpan={1}>
          <Center h="100%" w="100%">
            <Popup modal 
                   trigger={
                      <Btn text=" MINT " 
                           rightIcon={<IoIosArrowDropdownCircle fill="#FFFFFF" size="30px"/>}
                           ref={ref}
                      />
                   }
            >
              {close => <Mint close={close} />}
            </Popup>
          </Center>
        </GridItem>
        <GridItem rowSpan={2} colSpan={1}>
          <Center h="100%" w="100%">
            <Popup modal 
                   trigger={
                      <Btn text=" YOUR COLLECTION " 
                           rightIcon={<IoIosArrowDropdownCircle fill="#FFFFFF" size="30px"/>}
                           ref={ref}
                      />
                   }
            >
              {close => <Collection close={close} />}
            </Popup>
          </Center>
        </GridItem>
        <GridItem rowSpan={2} colSpan={1}>
          <Center h="100%">
{/*            {
              metaState.isAvailable
              ? <Btn 
                  onClick={connectMetaMask}
                  text={metaState.isConnected
                    ? String(metaState.account[0]).substr(0, 7)+ "..."+ String(metaState.account[0]).substr(-7)
                    : "CONNECT WALLET"}
                />
              : <div>
                <Txt text="You don't have Metamask installed" />
                <ChakraLink href="https://metamask.io" >
                  <Txt color='lightblue' isUnderline='true' text="https://metamask.io" />
                </ChakraLink>
              </div>
            }*/}
            <Btn onClick={connectMetaMask} text={btnTitle}/>
          </Center>
        </GridItem>
        <GridItem rowSpan={8} colSpan={4} />
        <GridItem rowSpan={2} colSpan={4}>
          <Center h="50%">
            <ChakraLink href="https://discord.com/">
              <Image src="./images/discord.webp" margin="10px"/>
            </ChakraLink>
            <ChakraLink href="https://twitter.com/">
              <Image src="./images/twitter.webp" margin="10px"/>
            </ChakraLink>
            <ChakraLink href="https://telegram.org/">
              <Image src="./images/telegram.webp" margin="10px"/>
            </ChakraLink>
          </Center>
        </GridItem>
      </Grid>
    </>
  );

}

export default Main;
