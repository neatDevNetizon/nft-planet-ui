import { Image, 
         Grid, 
         GridItem, 
         Center, 
         Box, 
         Link as ChakraLink }         from "@chakra-ui/react";
import { Link }                       from "react-router-dom";
import { BsShare }                    from "react-icons/bs";
import { IoDocumentOutline }          from "react-icons/io5";
import { FiThumbsUp }                 from "react-icons/fi";
import { FaArrowAltCircleDown }       from "react-icons/fa";
import Emperors                       from "../components/emperors";
import { Btn }                        from "../components/btn";
import Txt                            from "../components/txt";
import { landLogoHeight, 
         landBtnHeight, 
         btnBorderRadius, 
         btnTextSize,
         landTitleSize,
         landSubTitleSize,
         landTextSize,
         descriptionIconSize,
         descriptionTextSize,
         linkIconHeight,
         btnHeight,
         btnIconSize }                from "../components/componentSize";
 
function Land() {

  const descriptionFontFamily = "arial,ｍｓ ｐゴシック,ms pgothic,돋움,dotum,helvetica,sans-serif";

  return (
    <>
      <Grid 
        h={window.innerHeight*3} 
        templateRows='repeat(72, 1fr)' 
        gap={1}
      >
        <GridItem rowSpan={4} />
        <GridItem rowSpan={9}>
          <Center h="100%">
            <Image 
              src="./images/Bild5.webp" 
              alt='logo' 
              h={landLogoHeight}
            />
          </Center>
        </GridItem>
        <GridItem rowSpan={1} />
        <GridItem rowSpan={3}>
          <Center h="100%">
            <Btn onClick={() => window.scrollTo({
                                                  top: window.innerHeight,
                                                  left: 0,
                                                  behavior: 'smooth'
                                                })} 
                 text=" UNITED STATES NOW OPEN FOR MINTING " 
                 textSize={btnTextSize}
                 height={landBtnHeight}
                 borderRadius={btnBorderRadius}
                 rightIcon={<FaArrowAltCircleDown fill="#FFFFFF" size={btnIconSize}/>}
            />
          </Center>
        </GridItem>
        <GridItem rowSpan={9} />
        <GridItem rowSpan={18}>
          <Box
            bgImage="url('/images/flag.gif')"
            bgPosition="center"
            bgSize="cover"
            opacity="0.07"
            height="100%"
            width="100%"
          />
          <Box 
            position='relative' 
            top='-100%' 
            height="100%" 
            align="center"
          >
            <Grid 
              h="100%" 
              w="100%" 
              templateColumns='repeat(7, 1fr)' 
              templateRows='repeat(7, 1fr)' 
              gap={1}
            >
              <GridItem colSpan={7} rowSpan={2}>
                <Center h="100%">
                  <Txt  
                    fontSize={landTitleSize}
                    fontFamily='arial black,arial-w01-black,arial-w02-black,arial-w10 black,sans-serif'
                    text="CLAIM YOUR EMPERORS NOW"  
                  />
                </Center>
              </GridItem>
              <GridItem colSpan={2} rowSpan={5} />
              <GridItem colSpan={3} rowSpan={5}>
                <Emperors isMint={false}/>
              </GridItem >
              <GridItem colSpan={2} rowSpan={5} />
            </Grid>
          </Box>             
        </GridItem>
        <GridItem rowSpan={6} />
        <GridItem rowSpan={3} >
          <Center h="100%">
            <Txt fontSize={landSubTitleSize} text="HOW IT WORKS" />
          </Center>
        </GridItem>
        <GridItem rowSpan={1} />
        <GridItem rowSpan={1}>
          <Center h="100%">
            <Grid 
              w={window.innerWidth} 
              h="100%" 
              templateColumns='repeat(7, 1fr)' 
              gap={1}
            >
              <GridItem colSpan={2} />
              <GridItem colSpan={1}>
                <Txt 
                  fontSize={landSubTitleSize} 
                  text="PHASE 1" 
                  isUnderline="true" 
                  opacity="0.3"
                />
              </GridItem>
              <GridItem colSpan={2}>
                <Center h="100%">
                  <Box width="100%">
                    <Txt fontFamily={descriptionFontFamily} 
                     fontSize={landTextSize}
                     opacity="0.3"
                     align="left"
                     text="Mint your NFTs  to claim properties/pixels for a reasonable price."
                    />
                  </Box>
                </Center>
              </GridItem>
              <GridItem colSpan={2} />
            </Grid>
          </Center>
        </GridItem>
        <GridItem rowSpan={2} />
        <GridItem rowSpan={1}>
          <Center h="100%">
            <Grid 
              w={window.innerWidth} 
              h="100%" 
              templateColumns='repeat(7, 1fr)' 
              gap={1}
            >
              <GridItem colSpan={2} />
              <GridItem colSpan={1}>
                <Txt 
                  fontSize={landSubTitleSize} 
                  text="PHASE 2" 
                  opacity="0.3"
                />
              </GridItem>
              <GridItem colSpan={2}>
                <Center h="100%">
                  <Box width="100%">
                    <Txt fontFamily={descriptionFontFamily} 
                       fontSize={landTextSize}
                       opacity="0.3"
                       align="left"
                       text="Get for every minted emperor NFT the designated pixel amount and upload whatever content you like, so the others on NFTPLANET see what a real emperor looks like."
                    />
                  </Box>
                </Center>
              </GridItem>
              <GridItem colSpan={2} />
            </Grid>
          </Center>
        </GridItem>
        <GridItem rowSpan={2} />
        <GridItem rowSpan={1}>
          <Center h="100%">
            <Grid 
              w={window.innerWidth} 
              h="100%" 
              templateColumns='repeat(7, 1fr)' 
              gap={1}
            >
              <GridItem colSpan={2} />
              <GridItem colSpan={1}>
                <Txt 
                  fontSize={landSubTitleSize} 
                  text="PHASE 3" 
                  opacity="0.3" 
                />
              </GridItem>
              <GridItem colSpan={2}>
                <Center h="100%">
                  <Box width="100%">
                    <Txt fontFamily={descriptionFontFamily} 
                     fontSize={landTextSize}
                     opacity="0.3"
                     align="left"
                     text="Enter the Pixelverse, start trading and staking your pixels to earn cryptos on rising property prices."
                    />
                  </Box>
                </Center>
              </GridItem>
              <GridItem colSpan={2} />
            </Grid>
          </Center>
        </GridItem>
        <GridItem rowSpan={3} />
        <GridItem rowSpan={5}>
          <Center h="100%">
            <Grid 
              w={window.innerWidth} 
              h="100%" 
              templateColumns='repeat(10, 1fr)' 
              gap={35}
            >
              <GridItem colSpan={2} />
              <GridItem colSpan={2}>
                  <BsShare color="white" size={descriptionIconSize} />
                  <Txt fontFamily={descriptionFontFamily} 
                       fontSize={descriptionTextSize}
                       align="left"
                       text="Share NFTPLANET to the world to give everyone the chance to participate." />
              </GridItem>
              <GridItem colSpan={2}>
                  <IoDocumentOutline color="white" size={descriptionIconSize} />
                  <Txt fontFamily={descriptionFontFamily} 
                       fontSize={descriptionTextSize}
                       align="left"
                       text="Check out our DOCS, FAQ, CODE and the other stuff we are providing over here." />
              </GridItem>
              <GridItem colSpan={2}>
                  <FiThumbsUp color="white" size={descriptionIconSize} />
                  <Txt fontFamily={descriptionFontFamily}
                       fontSize={descriptionTextSize}
                       align="left"
                       text="Follow NFTPLANET on all plattforms to get the latest news, airdrops and insights." />
              </GridItem>
              <GridItem colSpan={2} />
            </Grid>
          </Center>
        </GridItem>
        <GridItem rowSpan={1} />
        <GridItem rowSpan={3}>
          <Center h="100%">
            <ChakraLink href="https://discord.com/">
              <Image 
                src="./images/discord.webp" 
                margin="10px" 
                h={linkIconHeight} 
              />
            </ChakraLink>
            <ChakraLink href="https://twitter.com/">
              <Image 
                src="./images/twitter.webp" 
                margin="10px" 
                h={linkIconHeight} 
              />
            </ChakraLink>
            <ChakraLink href="https://telegram.org/">
              <Image 
                src="./images/telegram.webp" 
                margin="10px" 
                h={linkIconHeight} 
              />
            </ChakraLink>
          </Center>
        </GridItem>
        <GridItem rowSpan={1} />
      </Grid>

      <Box 
        position='fixed' 
        top='30px' 
        right='30px'
      >
          <Link to="/main" style={{ textDecoration: 'none' }}>
            <Btn 
              text=" GO TO APP " 
              height={btnHeight}
              textSize={btnTextSize}
              borderRadius={btnBorderRadius}
            />
          </Link>
      </Box>
    </>
  );
}

export default Land;
