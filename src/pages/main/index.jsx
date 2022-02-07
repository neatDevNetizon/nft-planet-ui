// import { useEffect, useState }                                            from "react";
import React                                                              from 'react';
import { useMetamask }                                                    from "use-metamask";
import { Link }                                                           from "react-router-dom";
import { IoIosArrowDropdownCircle }                                       from "react-icons/io";
import Popup                                                              from 'reactjs-popup';
import { Web3 }                                                           from "web3";
import { ethers }                                                         from "ethers";
import { Image, Grid, GridItem, Center, HStack, Link as ChakraLink }      from "@chakra-ui/react";
import { Btn }                                                            from "../../components/btn";
import Txt                                                                from "../../components/txt";
import Collection                                                         from "./collection";
import Mint                                                               from "./mint";

function Main() {

  const ref = React.createRef();

  const { connect, metaState } = useMetamask();

  // const [ web3interface, setWeb3Interface ] = useState("ethers");
  const web3interface = "ethers"

  const connectMetaMask = () => {
    if (metaState.isAvailable && !metaState.isConnected) {
      (async () => {
        try {
          if (web3interface === "ethers")
            await connect(ethers.providers.Web3Provider, "any");
          else if (web3interface === "web3")
            await connect(Web3);
          else 
            throw Error(`Unknown web3 interface: ${web3interface}`);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }

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
            {
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
            }
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
