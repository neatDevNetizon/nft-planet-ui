import { Box, Wrap, WrapItem }   from '@chakra-ui/react'
import Nft                  from './nft' 

function Nfts() {

  return (
    <Box h="100%" w="100%" overflowY="hidden" overflowX="hidden">
    <Box h="100%" w="105%" overflowY="scroll" overflowX="hidden">
        <Wrap spacing='20px'>
            <WrapItem>
                <Nft tokenId={1} priceInMatic="156,45" nftId="1"/>
            </WrapItem>
            <WrapItem>
                <Nft tokenId={2} priceInMatic="6,87" nftId="2" />
            </WrapItem>
            <WrapItem>
                <Nft tokenId={3} priceInMatic="134,47" nftId="3" />
            </WrapItem>
            <WrapItem>
                <Nft tokenId={4} priceInMatic="45" nftId="4" />
            </WrapItem>
            <WrapItem>
                <Nft tokenId={5} priceInMatic="156,45" nftId="1" />
            </WrapItem>
            <WrapItem>
                <Nft tokenId={6} priceInMatic="6,87" nftId="2" />
            </WrapItem>
            <WrapItem>
                <Nft tokenId={7} priceInMatic="134,47" nftId="3" />
            </WrapItem>
            <WrapItem>
                <Nft tokenId={8} priceInMatic="45" nftId="4" />
            </WrapItem>
            <WrapItem>
                <Nft tokenId={9} priceInMatic="156,45" nftId="1" />
            </WrapItem>
            <WrapItem>
                <Nft tokenId={10} priceInMatic="6,87" nftId="2" />
            </WrapItem>
            <WrapItem>
                <Nft tokenId={11} priceInMatic="134,47" nftId="3" />
            </WrapItem>
            <WrapItem>
                <Nft tokenId={12} priceInMatic="45" nftId="4" />
            </WrapItem>
            <WrapItem>
                <Nft tokenId={13} priceInMatic="156,45" nftId="1" />
            </WrapItem>
            <WrapItem>
                <Nft tokenId={14} priceInMatic="6,87" nftId="2" />
            </WrapItem>
            <WrapItem>
                <Nft tokenId={15} priceInMatic="134,47" nftId="3" />
            </WrapItem>
            <WrapItem>
                <Nft tokenId={16} priceInMatic="45" nftId="4" />
            </WrapItem>
        </Wrap>
    </Box>
    </Box>
  )
}

export default Nfts;

// import { IconButton, Box, Center } from '@chakra-ui/react'
// import React from 'react';
// import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
// import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

// function Emperors(props) {

//   const tokenIds = !props.tokenIds
//                       ? [1,2,3,4,5,6,7,8,9]
//                       : props.tokenIds;
//   const items = getItems(tokenIds);
//   const [selected, setSelected] = React.useState([]);

//   const isItemSelected = (id) => !!selected.find((el) => el === id);

//   const handleClick =
//     (id) =>
//     ({ getItemById, scrollToItem }) => {
//       const itemSelected = isItemSelected(id);

//       setSelected((currentSelected) =>
//         itemSelected
//           ? currentSelected.filter((el) => el !== id)
//           : currentSelected.concat(id)
//       );
//     };

//   return (
//     <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
//       {items.map(({ id }) => (
//         <Card
//           itemId={id} // NOTE: itemId is required for track items
//           tokenId={tokenIds[id]}
//           title={id}
//           key={id}
//           onClick={handleClick(id)}
//           selected={isItemSelected(id)}
//         />
//       ))}
//     </ScrollMenu>
//   );
// }

// const getItems = (tokenIds) =>
//   Array(tokenIds.length)
//     .fill(0)
//     .map((_, ind) => ({ id: `${ind}` }));

// function LeftArrow() {
//   const { isFirstItemVisible, scrollPrev } = React.useContext(VisibilityContext);

//   return (
//     <Center h="100%">
//       <IconButton 
//         onClick={() => scrollPrev()} 
//         colorScheme='transparent'
//         disabled={isFirstItemVisible}        
//         icon={<AiOutlineDoubleLeft color="white" size="50px" />}
//       />
//     </Center>
//   );
// }

// function RightArrow() {
//   const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

//   return (
//     <IconButton 
//       onClick={() => scrollNext()} 
//       colorScheme='transparent'
//       disabled={isLastItemVisible}        
//       icon={<AiOutlineDoubleRight color="white" size="50px" />}
//     />
//   );
// }

// function Card({ onClick, selected, title, itemId, tokenId }) {
//   const visibility = React.useContext(VisibilityContext);

//   return (
//     <Box
//       onClick={() => onClick(visibility)}
//       w='240px'
//       tabIndex={0}
//       align="center"
//     >
//       <Box>
//         <Box>
//           <Emperor pixel="20" price="0.99" emperorId={tokenId} />
//         </Box>
//       </Box>
//       <Box
//         style={{
//           height: '110px',
//         }}
//       />
//     </Box>
//   );
// }

// export default Emperors;