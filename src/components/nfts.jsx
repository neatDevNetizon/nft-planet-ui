import { Box, Wrap, WrapItem }  from '@chakra-ui/react';
import Nft                      from './nft';


const getItems = (tokenIds) =>
  Array(tokenIds.length)
    .fill(0)
    .map((_, ind) => ({ id: `${ind}` }));

function Nfts(props) {
  
  const tokenIds = props.nftIds;

  const items = getItems(tokenIds);

  // const [count, setCount] = React.useState(0);

  // const [nftItemArray, setNftItemArray] = React.useState([]);

  // React.useEffect(() => {
  //   if (count <= items.length) {
  //       setTimeout(() => {
  //           setCount(count + 1);
  //           setNftItemArray(oldArray => [...oldArray, <WrapItem key={count}><Nft tokenId={Number(tokenIds[count])} /></WrapItem>]);
  //       }, 1000);        
  //   }
  // }, [count]);

  return (
    <Box w={{base:"90%", lg:"80%"}} align="center">
        <Wrap 
            spacing={{base:"50px", sm:"60px", md:"70px", lg:"80px", xl:"60px", "2xl":"80px"}} 
            align="center" 
            justify="center"
        >
{/*        {nftItemArray}*/}
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