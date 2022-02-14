import { Grid, GridItem }   from '@chakra-ui/react'
import Emperor              from './emperor' 

function Emperors(props) {

  return (
    <>
      <Grid h="100%" w="100%" templateColumns='repeat(3, 1fr)' gap={1}>
        <GridItem colSpan={1} disabled="" >
            <Emperor imSrc="images/emperors/1.webp" pixel="20" price="0.99" emperorTier={1} isMint={props.isMint}/>
        </GridItem>
        <GridItem colSpan={1} >
            <Emperor imSrc="images/emperors/2.webp" pixel="300" price="9.99" emperorTier={2} isMint={props.isMint}/>
        </GridItem>       
        <GridItem colSpan={1} >
            <Emperor imSrc="images/emperors/3.webp" pixel="4000" price="99.99" emperorTier={3} isMint={props.isMint}/>
        </GridItem>
      </Grid>
    </>
  )
}

export default Emperors;

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

