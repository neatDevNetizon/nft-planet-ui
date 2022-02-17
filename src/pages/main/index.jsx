import React                                 from 'react';
import { useEffect, useState }               from "react";
import { useMetaMask}                        from "metamask-react";
import { Link }                              from "react-router-dom";
import { IoIosArrowDropdownCircle }          from "react-icons/io";
import { AiOutlineLogout, AiOutlineLogin }   from "react-icons/ai";
import { ethers }                            from "ethers";
import { Image,
         Box, 
         Wrap, 
         WrapItem, 
         Center, 
         HStack }                            from "@chakra-ui/react";
import { Btn }                               from "../../components/btn";
import Mint                                  from "./mint";
import Collection                            from "./collection";
import { btnIconSize }                       from "../../components/componentSize";
import { LinkIconGrop }                      from "../land"
import { SetIsConnected }                    from "../../utils/useIsConnected"

function Main() {

  const supportedChainId = process.env.REACT_APP_CHAIN_ID;

  const supportedChainName = process.env.REACT_APP_CHAIN_NAME;

  const [ btnTitle, setBtnTitle ] = useState();

  const [ btnBg, setBtnBg ] = useState();

  const [ mainRoute, setMainRoute ] = useState("")

  const [ isConnected, setIsConnected ] = useState(false);

  const { status, connect, account, chainId } = useMetaMask();

  const connectMetaMask = () => {
    if (status === "initializing")
      alert("Wallet Initializing...");
    else if(status === "unavailable")
      alert("Please install Metamask. https://metamask.io");
    else if(status === "connecting")
      alert("Wallet Connecting...");
    else if(chainId !== supportedChainId) 
      alert("Wrong chain! Please select "+supportedChainName+" chain in your metamask.");
    else {
      if (!isConnected) {
        if (status === "notConnected") {
          (async () => {
            try {
                await connect(ethers.providers.Web3Provider, "any");
            } catch (error) {
              console.log(error);
            }
          })();
        }
        setIsConnected(true);
        SetIsConnected(true);
      } else {
        setIsConnected(false);
        SetIsConnected(false);
      }
    }
  }

  useEffect(() => {
    if (status === "initializing") {
      setBtnTitle("WALLET ONGOING...");
      setBtnBg("rgba(0, 0, 0, 0.2)");
    }
    if (status === "unavailable") {
      setBtnTitle("NOT INSTALLED");
      setBtnBg("rgba(255, 0, 0, 0.6)");
    }
    if (status === "connecting") {
      setBtnTitle("CONNECTING...");
      setBtnBg("rgba(0, 0, 0, 0.2)");
    }
    if (status === "notConnected") {
      setBtnTitle("CONNECT WALLET");
      setBtnBg("rgba(0, 0, 0, 0.6)");
      setIsConnected(false);
      SetIsConnected(false);
    }
    if (status === "connected") {
      if (isConnected) {
        setBtnTitle(String(account).substr(0, 7)+ "..."+ String(account).substr(-7));
        setBtnBg("rgba(0, 255, 0, 0.6)");
      } else {
        setBtnTitle("CONNECT WALLET");
        setBtnBg("rgba(0, 0, 0, 0.6)");
      }
    }
    if (chainId !== supportedChainId){
      setBtnTitle("WRONG CHAIN");
      setBtnBg("rgba(255, 0, 0, 0.6)");
      setIsConnected(false);
      SetIsConnected(false);
    } 
  }, [status, isConnected, account, chainId, supportedChainId]);


  return (
    <Box minHeight={window.innerHeight} overflow="hidden">
      <Box 
        pos="fixed" 
        top="0px"
        w="100%" 
        h={{base:"60px", md:"100px"}}
        align="center"
        marginTop={{base:"60px", md:"0px"}}
      >
        <Box 
          pos="fixed" 
          top='0px'
          w="100%"
          h={{base:"60px", md:"100px"}}
          align="center"
          bg={{base:"black", md:"transparent"}}
        >
          <Center h="100%" w="100%" paddingLeft="5%" paddingRight="5%">
            <Box width="40%" align="left">
              <HStack spacing='0px'>
                <Link 
                  to="/"
                  w={{base:"20px", sm:"20px", md:"25px", lg:"35px", xl:"50px", '2xl':"59px"}}
                >
                  <Image 
                    src="./images/Bild6.webp" 
                    alt='logo'                   
                  />
                </Link>
                <Link 
                  to="/"
                  w={{base:"20px", sm:"20px", md:"25px", lg:"35px", xl:"50px", '2xl':"59px"}}
                >
                  <Image 
                    src="./images/Bild6_text.webp" 
                    alt='logo_text' 
                  />
                </Link>
              </HStack>
            </Box>
            <Box width="60%" align="right">
              <Btn 
                onClick={connectMetaMask} 
                text={btnTitle} 
                bg={btnBg}
                width={{base:"200px", sm:"200px", md:"220px", lg:"240px", xl:"260px", "2xl":"280px"}}
                rightIcon={
                  isConnected
                    ? <AiOutlineLogout color="white" size={btnIconSize} />
                    : <AiOutlineLogin color="white" size={btnIconSize} />
                  }
              />
            </Box>
          </Center>
        </Box>

        <Wrap 
            width="100%"
            align="center"
            justify="center"
            spacing="0px"
          >
            <WrapItem>
              <Box 
                height={{base:"60px", md:"100px"}} 
                padding={{base:"0px 10px", md:"0px 15px", lg:"0px 30px", xl:"0px 50px", '2xl':"0px 110px"}}
              >
                <Center h="100%">
                  <Btn 
                    text=" MINT "
                    onClick={() => setMainRoute("mint")}
                    rightIcon={<IoIosArrowDropdownCircle fill="#FFFFFF" size={btnIconSize}/>}
                  />
  {/*                <Popup 
                    modal 
                    trigger={
                      <Btn 
                        text=" MINT " 
                        rightIcon={<IoIosArrowDropdownCircle fill="#FFFFFF" size={btnIconSize}/>}
                        ref={ref}
                      />
                    }
                  >
                    {close => <Mint close={close} />}
                  </Popup>*/}
                </Center>
              </Box>
            </WrapItem>
            <WrapItem>
              <Box 
                height={{base:"60px", md:"100px"}} 
                padding={{base:"0px", md:"0px 15px", lg:"0px 30px", xl:"0px 50px", '2xl':"0px 110px"}}
              >
                <Center h="100%">
                  <Btn
                    onClick={() => setMainRoute("collection")}
                    text=" YOUR COLLECTION " 
                    rightIcon={<IoIosArrowDropdownCircle fill="#FFFFFF" size={btnIconSize}/>}
                  />
  {/*                <Popup 
                    modal 
                    trigger={
                      <Btn 
                        text=" YOUR COLLECTION " 
                        rightIcon={<IoIosArrowDropdownCircle fill="#FFFFFF" size={btnIconSize}/>}
                        ref={ref}
                      />
                    }
                  >
                    {close => <Collection close={close} />}
                  </Popup>*/}
                </Center>
              </Box>
            </WrapItem>
          </Wrap>
      </Box>

      <Box
        align="center"
        marginTop={{base:"120px", md:"100px"}}
        marginBottom={{base:"60px", md:"100px"}}
        width="100%"
        height={{base:window.innerHeight-180, md:window.innerHeight-200}}
      >
        {
          (mainRoute === "mint")
            ? <Mint />
            : (mainRoute === "collection")
                ? <Collection />
                : <></>
        }
      </Box>

      <Box
        pos="fixed"
        bottom="0px"
        w="100%"
        h={{base:"60px", md:"100px"}}
        align="center"
        bg={{base:"black", md:"transparent"}}
      >
        <Center h="100%">
          <LinkIconGrop />
        </Center>
      </Box>
    </Box>
  );

}

export default Main;
