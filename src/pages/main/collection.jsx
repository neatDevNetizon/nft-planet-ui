import { Grid, GridItem, Center, Box }  from '@chakra-ui/react';
import Nfts                   from '../../components/nfts';
import Txt                    from '../../components/txt';

export default function Collection() {
  return (
    <Box
      height= "100%"
      width = "90%"
      border='2px outset white'
      borderRadius='30px'
      borderColor='white'
      fontSize='14px'
      fontWeight='semibold'
      bg='transparent'
    >
      <Grid h="100%" w="100%" templateRows='repeat(24, 1fr)' gap={1}>
        <GridItem rowSpan={4}>
          <Center h="100%">
            <Txt fontSize="38px" 
                 opacity="0.5"
                 text="YOUR COLLECTION"
            />
          </Center>
        </GridItem>
        <GridItem rowSpan={1} />
        <GridItem rowSpan={19} align="center">
          <Box width="100%">
            <Nfts />
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}