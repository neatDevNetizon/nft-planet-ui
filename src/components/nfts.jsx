import { Box, 
         Wrap, 
         WrapItem }         from '@chakra-ui/react'
import Nft                  from './nft' 

const getItems = (tokenIds) =>
  Array(tokenIds.length)
    .fill(0)
    .map((_, ind) => ({ id: `${ind}` }));

function Nfts(props) {
  
  const tokenIds = props.nftIds;
  const items = getItems(tokenIds);

  return (
    <Box w="100%" align="center">
        <Wrap spacing='20px' align="center" justify="center">
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