import { Grid, GridItem, Center, Box }  from '@chakra-ui/react';
import { CgClose }                      from "react-icons/cg";
import Nfts                             from '../../components/nfts';
import Txt                              from '../../components/txt';

export default function Collection() {
  return (
    <Box
      height= "90%"
      width = "90%"
      border='2px outset white'
      borderRadius='30px'
      borderColor='white'
      fontSize='14px'
      fontWeight='semibold'
      minWidth="1000px"
      minHeight="300px"
      bg='transparent'
    >
      <Center h="100%">
        <Grid h="100%" w="98%" templateRows='repeat(24, 1fr)' gap={1}>
          <GridItem rowSpan={4}>
            <Center h="100%">
              <Box width="10%" />
              <Box width="80%">
                <Txt fontSize="38px" 
                     opacity="0.5"
                     text=" YOUR COLLECTION"
                />
              </Box>
              <Box width="10%" align="right">
                <CgClose color="white" size="50px"/>
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