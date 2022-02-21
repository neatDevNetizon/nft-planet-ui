import React                                 from 'react';
import { Link }                              from "react-router-dom";
import { IoIosArrowDropdownCircle }          from "react-icons/io";
import { Image,
         Box, 
         Wrap, 
         WrapItem, 
         Center, 
         HStack,
         useOutsideClick }                   from "@chakra-ui/react";
import MetamaskBtn                           from "../../components/metamaskBtn";
import { Btn }                               from "../../components/btn";
import { btnIconSize }                       from "../../components/componentSize";
import { LinkIconGrop }                      from "../land";
import Mint                                  from "./mint";
import Collection                            from "./collection";


function Main() {

  const [ mainRoute, setMainRoute ] = React.useState("")

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
              <MetamaskBtn />
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
