import { Grid, GridItem, Center, Box }  from '@chakra-ui/react';
import { CgClose }                      from "react-icons/cg";
import { Link }                         from "react-router-dom";
import Txt                              from '../../components/txt';
import Emperors                         from '../../components/emperors';

function Mint({ close }) {
    return (
      <Box
        height= {window.innerHeight*0.65}
        width = {window.innerWidth*0.5}
        border='2px outset white'
        borderRadius='30px'
        borderColor='white'
        minHeight='560PX'
        fontSize='14px'
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
                <a onClick={close} color="white">        
                    <CgClose color="white" size="50px" />
                </a>
              </Box>
            </Center>
          </GridItem>
          <GridItem rowSpan={1} align="center" />
          <GridItem rowSpan={19} align="center">
            <Box width="85%">
              <Emperors />
            </Box>
          </GridItem>
        </Grid>
      </Box>
    );
}

export default Mint;
