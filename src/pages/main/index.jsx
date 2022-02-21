import React                                 from 'react';
import { useEffect, useState }               from "react";
import { useMetaMask }                        from "metamask-react";
import { Link }                              from "react-router-dom";
import { IoIosArrowDropdownCircle }          from "react-icons/io";
import { AiOutlineLogout, AiOutlineLogin }   from "react-icons/ai";
import { ethers }                            from "ethers";
import { Image,
         Box, 
         Wrap, 
         WrapItem, 
         Center, 
         HStack,
         useOutsideClick }                   from "@chakra-ui/react";
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

  const switchNetwork = async () => {
    if (window.ethereum) {
      try {
        window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [{
            chainId: process.env.REACT_APP_CHAIN_ID,
            rpcUrls: [process.env.REACT_APP_CHAIN_RPC_URL],
            chainName: process.env.REACT_APP_CHAIN_NAME,
            nativeCurrency: {
              name: process.env.REACT_APP_CURRENCY_NAME,
              symbol: process.env.REACT_APP_CURRENCY_SYMBOL,
              decimals: process.env.REACT_APP_CURRENCY_DECIMAL
            },
            blockExplorerUrls: [process.env.REACT_APP_BLOCK_EXPLORER_URL]
          }]
        });
      } catch (error) {
          console.error(error);
      }
    }
  };

  const connectMetaMask = () => {
    if (status === "initializing")
      alert("Wallet Initializing...");
    else if(status === "unavailable")
      alert("Please install Metamask. https://metamask.io");
    else if(status === "connecting")
      alert("Wallet Connecting...");
    else if(chainId !== supportedChainId) {
      alert("Wrong chain! Please select "+supportedChainName+" in your metamask.");
      (async () => {
          await window.ethereum.enable();
          await switchNetwork();
      })();
    }
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
    if (status !== "unavailable" && chainId !== supportedChainId){
      setBtnTitle("WRONG CHAIN");
      setBtnBg("rgba(255, 0, 0, 0.6)");
      setIsConnected(false);
      SetIsConnected(false);
    } 
  }, [status, isConnected, account, chainId, supportedChainId]);

  const ref = React.useRef();

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  useOutsideClick({
    ref: ref,
    handler: () => setIsModalOpen(false),
  })

  return (
    <Box>
      <Box 
        pos="fixed" 
        top="0px"
        w="100%" 
        h={{base:"60px", lg:"100px"}}
        align="center"
        marginTop={{base:"60px", lg:"0px"}}
        zIndex="10000000"
      >
        <Box 
          pos="fixed" 
          top='0px'
          w="100%"
          h={{base:"60px", lg:"100px"}}
          align="center"
          bg={{base:"black", lg:"transparent"}}
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
        <Box bg={{base:"#091516", sm:"transparent"}}>
          <Wrap 
            width="100%"
            align="center"
            justify="center"
            spacing="0px"
          >
            <WrapItem>
              <Box 
                height={{base:"60px", lg:"100px"}} 
                padding={{base:"0px 10px", md:"0px 15px", lg:"0px 15px", xl:"0px 50px", '2xl':"0px 110px"}}
              >
                <Center h="100%">
                  <Btn 
                    text=" MINT "
                    onClick={() => { setMainRoute("mint"); setIsModalOpen(true) }}
                    rightIcon={<IoIosArrowDropdownCircle fill="#FFFFFF" size={btnIconSize}/>}
                  />
                </Center>
              </Box>
            </WrapItem>
            <WrapItem>
              <Box 
                height={{base:"60px", lg:"100px"}} 
                padding={{base:"0px", md:"0px 15px", lg:"0px 15px", xl:"0px 50px", '2xl':"0px 110px"}}
              >
                <Center h="100%">
                  <Btn
                    onClick={() => { setMainRoute("collection"); setIsModalOpen(true) }}
                    text=" YOUR COLLECTION " 
                    rightIcon={<IoIosArrowDropdownCircle fill="#FFFFFF" size={btnIconSize}/>}
                  />
                </Center>
              </Box>
            </WrapItem>
          </Wrap>
        </Box>
      </Box>
      <Box 
        pos="fixed"
        top={{base:"120px", lg:"100px"}}
        bottom={{base:"60px", lg:"100px"}}
        w="100%"
        align="center"
        overflowY="hidden"
        overflowX="hidden"
      >
        <Box
          w={{base:"100%", sm:"104%", md:"103%", lg:"102%", "2xl":"101%"}}
          h="100%"
          align="center"
          overflowY="scroll"
          overflowX="hidden"
        >
          {isModalOpen
            ? ((mainRoute === "mint")
                ? <Box ref={ref} w="100%" h="100%"><Mint /></Box>
                : (mainRoute === "collection")
                    ? <Box ref={ref}  w="100%" h="100%"><Collection /></Box>
                    : <></>)
            : <></>
          }
        </Box >
      </Box>

      <Box
        pos="fixed"
        bottom="0px"
        w="100%"
        h={{base:"60px", lg:"100px"}}
        align="center"
        bg={{base:"black", lg:"transparent"}}
        zIndex="10000000"
      >
        <Center h="100%">
          <LinkIconGrop />
        </Center>
      </Box>
    </Box>
  );

}

export default Main;
