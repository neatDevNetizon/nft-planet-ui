import { Box, Wrap, WrapItem }   from '@chakra-ui/react'
import Nft                  from './nft' 

const getItems = (tokenIds) =>
  Array(tokenIds.length)
    .fill(0)
    .map((_, ind) => ({ id: `${ind}` }));

function Nfts(props) {
  
  const tokenIds = props.nftIds;
  const items = getItems(tokenIds);
  console.log(items);

  return (
    <Box h="100%" w="100%" overflowY="hidden" overflowX="hidden">
        <Box h="100%" w="105%" overflowY="scroll" overflowX="hidden">
            <Wrap spacing='20px'>
                {items.map(({ id }) => (
                    <WrapItem>
                        <Nft key={id} tokenId={Number(tokenIds[id])} priceInMatic="156,45"/>
                    </WrapItem>
                ))}
            </Wrap>
        </Box>
    </Box>
  )
}

export default Nfts;