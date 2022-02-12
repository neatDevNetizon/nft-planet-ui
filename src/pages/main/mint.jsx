import { Grid, GridItem, Center, Box, IconButton }  from '@chakra-ui/react';
import { CgClose }                      from "react-icons/cg";
import Txt                              from '../../components/txt';
import Emperors                         from '../../components/emperors';

export default function Mint(props) {

    const popupHeight = window.innerHeight*0.65;
    const popupWidth = window.innerWidth*0.5;

    return (
      <Box
        height= {popupHeight}
        width = {popupWidth}
        border='2px outset white'
        borderRadius='30px'
        borderColor='white'
        minHeight='560PX'
        fontSize='14px'
        bg='transparent'
      >
        <Center h={popupHeight} w={popupWidth}>
          <Grid h={popupHeight} 
                w={popupWidth*0.98} 
                templateRows='repeat(24, 1fr)' 
                gap={1}
          >
            <GridItem rowSpan={4}>
              <Center h="100%">
                <Box width="10%" />
                <Box width="90%">
                  <Txt fontSize="38px"
                       opacity="0.5" 
                       text="CHOOSE YOUR EMPEROR TO MINT"
                  />
                </Box>
                <Box width="10%" align="right">
                  <IconButton 
                      onClick={props.close} 
                      colorScheme='transparent'        
                      icon={<CgClose color="white" size="50px" />}
                      margin="0 10px 0 0"
                  />
                </Box>
              </Center>
            </GridItem>
            <GridItem rowSpan={1} align="center" />
            <GridItem rowSpan={19} align="center">
              <Box width={popupWidth*0.85}>
                <Emperors />
              </Box>
            </GridItem>
          </Grid>
        </Center>
      </Box>
    );
}

