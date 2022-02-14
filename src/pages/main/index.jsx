import React                                 from 'react';
import Popup                                 from 'reactjs-popup';
import { useEffect, useState }               from "react";
import { useMetamask }                       from "use-metamask";
import { Link }                              from "react-router-dom";
import { IoIosArrowDropdownCircle }          from "react-icons/io";
import { ethers }                            from "ethers";
import { Image, 
         Grid, 
         GridItem, 
         Center, 
         HStack, 
         Link as ChakraLink }                from "@chakra-ui/react";
import { Btn }                               from "../../components/btn";
import Collection                            from "./collection";
import Mint                                  from "./mint";
import { btnBorderRadius, 
         btnTextSize,
         linkIconHeight,
         btnHeight,
         btnIconSize,
         mainLogoWidth,
         mainLogoTextWidth }                 from "../../components/componentSize";

function Main() {

  const chainId = process.env.REACT_APP_CHAIN_ID;

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

    if (metaState.isConnected && metaState.chain.id!==chainId)
        alert("Wrong chain selected! Please select Rinkeby network");
  }

  useEffect(() => {
    if (metaState.isAvailable && !metaState.isConnected && metaState.chain.id===chainId) {
      (async () => {
        try {
            await connect(ethers.providers.Web3Provider, "any");
        } catch (error) {
          console.log(error);
        }
      })();
    }

    if (metaState.isAvailable && metaState.isConnected && metaState.chain.id===chainId) {
      setBtnTitle(String(metaState.account[0]).substr(0, 7)+ "..."+ String(metaState.account[0]).substr(-7));
    } else {
      setBtnTitle("CONNECT WALLET");
    }
  }, [metaState.isAvailable, metaState.isConnected, metaState.chain, metaState.account, connect, chainId]);

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
                <Image src="./images/Bild6.webp" alt='logo' w={mainLogoWidth} />
                <Image src="./images/Bild6_text.webp" alt='logo_text' w={mainLogoTextWidth} />
              </HStack>
            </Link>
          </Center>
        </GridItem>
        <GridItem rowSpan={2} colSpan={1}>
          <Center h="100%" w="100%">
            <Popup modal 
                   trigger={
                      <Btn text=" MINT " 
                           rightIcon={<IoIosArrowDropdownCircle fill="#FFFFFF" size={btnIconSize}/>}
                           height={btnHeight}
                           textSize={btnTextSize}
                           borderRadius={btnBorderRadius}
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
                           rightIcon={<IoIosArrowDropdownCircle fill="#FFFFFF" size={btnIconSize}/>}
                           height={btnHeight}
                           textSize={btnTextSize}
                           borderRadius={btnBorderRadius}
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
            <Btn onClick={connectMetaMask} 
                 text={btnTitle}
                 height={btnHeight}
                 textSize={btnTextSize}
                 borderRadius={btnBorderRadius}
            />
          </Center>
        </GridItem>
        <GridItem rowSpan={8} colSpan={4} />
        <GridItem rowSpan={2} colSpan={4}>
          <Center h="50%">
            <ChakraLink href="https://discord.com/">
              <Image src="./images/discord.webp" margin="10px" h={linkIconHeight} />
            </ChakraLink>
            <ChakraLink href="https://twitter.com/">
              <Image src="./images/twitter.webp" margin="10px" h={linkIconHeight} />
            </ChakraLink>
            <ChakraLink href="https://telegram.org/">
              <Image src="./images/telegram.webp" margin="10px" h={linkIconHeight} />
            </ChakraLink>
          </Center>
        </GridItem>
      </Grid>
    </>
  );

}

export default Main;
