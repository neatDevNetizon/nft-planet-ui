import { Box, Wrap, WrapItem }  from '@chakra-ui/react'
import Nft                      from './nft' 

const getItems = (tokenIds) =>
  Array(tokenIds.length)
    .fill(0)
    .map((_, ind) => ({ id: `${ind}` }));

function Nfts(props) {
  
  const tokenIds = props.nftIds;
  const items = getItems(tokenIds);

  return (
    <Box w={{base:"90%", lg:"80%"}} align="center" paddingTop="20px">
        <Wrap 
            spacing={{base:"50px", sm:"60px", md:"70px", lg:"80px", xl:"60px", "2xl":"80px"}} 
            align="center" 
            justify="center"
        >
            {items.map(({ id }) => (
                <WrapItem key={id}>
                    <Nft tokenId={Number(tokenIds[id])} />
                </WrapItem>
            ))}
        </Wrap>
    </Box>
  )
}

export default Nfts;