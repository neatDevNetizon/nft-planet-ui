import { useState }                     from "react";
import { Grid, GridItem, Center, Box }  from '@chakra-ui/react';
import { CgClose }                      from "react-icons/cg";
import { Link }                         from "react-router-dom";
import Txt                              from '../../components/txt';
import Emperors                         from '../../components/emperors';

function Mint() {

  const [mintRoute, setMintRoute] = useState("");

  if (mintRoute === ""){
    return (
      <Box
        height= "100%"
        width = "50%"
        border='2px outset white'
        borderRadius='30px'
        borderColor='white'
        fontSize='14px'
        fontWeight='semibold'
        minWidth='850px'
        minHeight="400px"
        bg='transparent'
      >
        <Grid h="100%" w="98%" templateRows='repeat(24, 1fr)' gap={1}>
          <GridItem rowSpan={4}>
            <Center h="100%">
              <Box width="5%" />
              <Box width="90%">
                <Txt fontSize="38px"
                     opacity="0.5" 
                     text="CHOOSE YOUR EMPEROR TO MINT"
                />
              </Box>
              <Box width="5%" align="right">
                <CgClose color="white" size="50px" />
              </Box>
            </Center>
          </GridItem>
          <GridItem rowSpan={1} />
          <GridItem rowSpan={19} align="center">
            <Box width="85%">
              <Emperors />
            </Box>
          </GridItem>
        </Grid>
      </Box>
    );
  } else {
    return (<></>);
  }
}

export default Mint;
