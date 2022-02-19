import { Image, 
         Wrap, 
         WrapItem, 
         Center, 
         Box,
         VStack, 
         Link as ChakraLink }         from "@chakra-ui/react";
import { Link }                       from "react-router-dom";
import { BsShare }                    from "react-icons/bs";
import { IoDocumentOutline }          from "react-icons/io5";
import { FiThumbsUp }                 from "react-icons/fi";
import { FaArrowAltCircleDown }       from "react-icons/fa";
import Emperors                       from "../components/emperors";
import { Btn }                        from "../components/btn";
import Txt                            from "../components/txt";
import { descriptionIconSize,
         btnIconSize}                 from "../components/componentSize";

function Land() {

  return (
    <>
      <VStack
        spacing={1}
        align='stretch'
        overflow="hidden"
        marginTop={{base:"60px", lg:"0px"}}
      >
        <VStack
          spacing={10}
          align="stretch"
          height={window.innerHeight}
          paddingTop={{base:"20%", lg:"10%", xl:"5%"}}
        >
        <Box align="center">
            <Image 
              src="./images/Bild5.webp" 
              alt='logo' 
              h={{base:"200px", sm:"250px", lg:"300px", xl:"400px"}}
            />
        </Box>
        <Box align="center">
            <Btn onClick={() => window.scrollTo({
                                                  top: window.innerHeight,
                                                  left: 0,
                                                  behavior: 'smooth'
                                                })} 
                 text=" UNITED STATES NOW OPEN FOR MINTING " 
                 height={{base:"45px", lg:"55px", xl:"65px"}}
                 textSize={{base:"12px", lg:"16px", xl:"20px"}}
                 rightIcon={<FaArrowAltCircleDown fill="#FFFFFF" size={btnIconSize}/>}
            />
        </Box>
        </VStack>

        <Box
            bgImage="url('/images/flag.gif')"
            bgPosition="center"
            bgSize="cover"
            opacity="0.07"
            height={{base:"1200px", sm:"1250px", md:"600px", lg:"700px", xl:"800px"}}
            w="100%"
            align="center"
        />
        <Box 
          // position='relative' 
          zIndex="0"
          marginTop={{base:"-1150px!important", sm:"-1200px!important", md:"-550px!important", lg:"-650px!important", xl:"-750px!important"}}
          align="center"
          w="100%"
        >
          <Box paddingTop="15px">
            <Txt  
              fontSize={{base:"20px", lg:"40px", xl:"50px"}}
              fontFamily='arial black,arial-w01-black,arial-w02-black,arial-w10 black,sans-serif'
              text="CLAIM YOUR EMPERORS NOW"  
            />
          </Box>
          <Box padding={{base:"50px 40px", sm:"60px 200px", md:"70px 0px", xl:"100px 0px"}} w="center" align="center">
            <Emperors isMint={false} spacing={{base:"40px", md:"20px", lg:"40px", xl:"50px", "2xl":"60px"}}/>
          </Box>
          <Box paddingTop={{base:"100px", sm:"100px", md:"100px", lg:"150px", xl:"200px"}}>
            <Txt 
              text="HOW IT WORKS"
              fontSize={{base:"20px", sm:"25",md:"30", lg:"34px", xl:"37px","2xl":"40px"}}
            />
          </Box>
          <Box paddingTop="30px">
            <Description
              title="PHASE 1"
              body="Mint your NFTs  to claim properties/pixels for a reasonable price."
              isUnderlinedTitle="true"
            />
            <Description
              title="PHASE 2"
              body="Get for every minted emperor NFT the designated pixel amount and upload whatever content you like, so the others on NFTPLANET see what a real emperor looks like."
            />
            <Description
              title="PHASE 3"
              body="Enter the Pixelverse, start trading and staking your pixels to earn cryptos on rising property prices."
            />
          </Box>
          <Box paddingTop="100px">
            <Wrap justify="center" width={{base:"80%", lg:"70%", xl:"50%"}}>
              <WrapItem>
                <InfoDescription 
                  icon={<BsShare color="white" size={descriptionIconSize} />}
                  text="Share NFTPLANET to the world to give everyone the chance to participate." 
                />
              </WrapItem>
              <WrapItem>
                <InfoDescription 
                  icon={<IoDocumentOutline color="white" size={descriptionIconSize} />} 
                  text="Check out our DOCS, FAQ, CODE and the other stuff we are providing over here." 
                />
              </WrapItem>
              <WrapItem>
                <InfoDescription 
                  icon={<FiThumbsUp color="white" size={descriptionIconSize} />} 
                  text="Follow NFTPLANET on all plattforms to get the latest news, airdrops and insights." 
                />
              </WrapItem>
            </Wrap>
          </Box>
          <Box paddingTop="50px">
            <LinkIconGrop />
          </Box>
        </Box>
      </VStack>

      <Box 
        pos="fixed" 
        top='0px'
        zIndex="10000000"
        left="0px"
        width="100%"
        align="right"
        bg={{base:"black", lg:"transparent"}}
        h={{base:"60px", lg:"100px"}}
      >
        <Center h="100%">
        <Box width="95%" align="right">
          <Link to="/main" style={{ textDecoration: 'none' }}>
            <Btn 
              text=" GO TO APP "
            />
          </Link>
        </Box>
        </Center>
      </Box>
    </>
  );
}


function Description(props) {

  const fontFamily = "arial,ｍｓ ｐゴシック,ms pgothic,돋움,dotum,helvetica,sans-serif";

  return(
      <Wrap 
        spacing='20px' 
        align='center' 
        justify="center" 
        width={{base:"80%", lg:"70%", xl:"60%"}} 
        marginTop="30px"
      >
        <WrapItem>
          <Box width={{base:"100px", lg:"200px", xl:"250px"}}>
            <Txt 
              fontSize={{base:"20px", lg:"35px", xl:"40px"}}
              text={props.title}
              isUnderline={props.isUnderlinedTitle}
              opacity="0.3" 
            />
          </Box>
        </WrapItem>
        <WrapItem>
            <Box width={{base:"300px", lg:"600px", xl:"600px"}}>
              <Txt fontFamily={fontFamily} 
               fontSize={{base:"14px", lg:"18px", xl:"20px"}}
               opacity="0.3"
               align="left"
               text={props.body}
              />
            </Box>
        </WrapItem>
      </Wrap>
  );
}


function InfoDescription(props) {

  const fontFamily = "arial,ｍｓ ｐゴシック,ms pgothic,돋움,dotum,helvetica,sans-serif";

  return(
    <VStack align="left" width="220px">
      {props.icon}
      <Txt fontFamily={fontFamily} 
           fontSize={{base:"14px", lg:"18px", xl:"20px"}}
           align="left"
           text={props.text} />
    </VStack>
  )
}


export function LinkIconGrop(props) {

  const linkIconHeight = {base:"25px", md:"30px", lg:"35px", xl:"40px", "2xl":"45px"};

  return (
    <Wrap align="center" justify="center">
      <WrapItem>
          <ChakraLink href="https://discord.com/" isExternal>
            <Center h="100%" margin={{base:"8px", sm:"10px", md:"15px", lg:"20px", xl:"25px"}}>
              <Image src="./images/icons/discord.webp" color="#cdcdcd" h={linkIconHeight}/>
            </Center>
          </ChakraLink>
      </WrapItem>
      <WrapItem>
          <ChakraLink href="https://twitter.com/" isExternal>
            <Center h="100%" margin={{base:"8px", sm:"10px", md:"15px", lg:"20px", xl:"25px"}}>
              <Image src="./images/icons/twitter.webp" color="#cdcdcd" h={linkIconHeight}/>
            </Center>
          </ChakraLink>
      </WrapItem>
      <WrapItem>
          <ChakraLink href="https://telegram.org/" isExternal>
            <Center h="100%" margin={{base:"8px", sm:"10px", md:"15px", lg:"20px", xl:"25px"}}>
              <Image src="./images/icons/telegram.webp" color="#cdcdcd" h={linkIconHeight}/>
            </Center>
          </ChakraLink>
      </WrapItem>
      <WrapItem>
          <ChakraLink href="https://www.gitbook.com/" isExternal>
            <Center h="100%" margin={{base:"8px", sm:"10px", md:"15px", lg:"20px", xl:"25px"}}>
                <Image src="./images/icons/gitbook.svg" h={linkIconHeight}/>
            </Center>
          </ChakraLink>
      </WrapItem>
    </Wrap>
  );
}

export default Land;

