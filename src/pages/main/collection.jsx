import { Grid, GridItem, Center, Box, IconButton }  from '@chakra-ui/react';
import { CgClose }                      from "react-icons/cg";
import Nfts                             from '../../components/nfts';
import Txt                              from '../../components/txt';

export default function Collection(props) {
  return (
    <Box
      height= {window.innerHeight*0.5}
      width = {window.innerWidth*0.9}
      border='2px outset white'
      borderRadius='30px'
      borderColor='white'
      fontSize='14px'
      minHeight='400px'
      bg='transparent'
    >
      <Center h="100%">
        <Grid h="100%" w="98%" templateRows='repeat(24, 1fr)' gap={1}>
          <GridItem rowSpan={4}>
            <Center h="100%">
              <Box width="5%" />
              <Box width="90%">
                <Txt fontSize="38px" 
                     opacity="0.5"
                     text=" YOUR COLLECTION"
                />
              </Box>
              <Box width="5%" align="right">
                <IconButton 
                    onClick={props.close} 
                    colorScheme='transparent'        
                    icon={<CgClose color="white" size="50px" />}
                />
              </Box>
            </Center>
          </GridItem>
          <GridItem rowSpan={1} />
          <GridItem rowSpan={19} align="center">
            <Box width="100%">
              <Nfts />
            </Box>
          </GridItem>
        </Grid>
      </Center>
    </Box>
  );
}