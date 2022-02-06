import { Grid, GridItem }   from '@chakra-ui/react'
import Nft                  from './nft' 

function Nfts() {

  return (
    <>
      <Grid h="100%"
            w="100%" 
            templateColumns='repeat(7, 1fr)' 
            gap={1}
      >
        <GridItem colSpan={1} >
            <Nft imSrc="images/nfts/1.webp" priceInMatic="156,45" nftId="1" />
        </GridItem>
        <GridItem colSpan={1} >
            <Nft imSrc="images/nfts/2.webp" priceInMatic="6,87" nftId="2" />
        </GridItem>       
        <GridItem colSpan={1} >
            <Nft imSrc="images/nfts/3.webp" priceInMatic="134,47" nftId="3" />
        </GridItem>
        <GridItem colSpan={1} >
            <Nft imSrc="images/nfts/3.webp" priceInMatic="45" nftId="4" />
        </GridItem>
        <GridItem colSpan={1} bg="" />
        <GridItem colSpan={1} bg="" />
        <GridItem colSpan={1} bg="" />
      </Grid>
    </>
  )
}

export default Nfts;