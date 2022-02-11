// import { Grid, GridItem, Box}   from '@chakra-ui/react'
import Emperor                  from './emperor' 

// function Emperors() { 

//   const emperorIds = [1,3,5]
//   return (
//     <Box height="400px" overflowX='auto'>
//       <Grid w="100%" templateColumns='repeat(3, 1fr)' gap={1}>
//         <GridItem colSpan={1} >
//             <Emperor pixel="20" price="0.99" emperorId={1} />
//         </GridItem>
//         <GridItem colSpan={1} >
//             <Emperor pixel="300" price="9.99" emperorId={2} />
//         </GridItem>       
//         <GridItem colSpan={1} >
//             <Emperor pixel="4000" price="99.99" emperorId={3} />
//         </GridItem>
//         <GridItem colSpan={1} >
//             <Emperor pixel="20" price="0.99" emperorId={1} />
//         </GridItem>
//         <GridItem colSpan={1} >
//             <Emperor pixel="300" price="9.99" emperorId={2} />
//         </GridItem>       
//         <GridItem colSpan={1} >
//             <Emperor pixel="4000" price="99.99" emperorId={3} />
//         </GridItem>
//       </Grid>
//     </Box>
//   )
// }

// export default Emperors;

import { IconButton, Box, Center } from '@chakra-ui/react'
import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

function Emperors(props) {

  const tokenIds = !props.tokenIds
                      ? [1,2,3]
                      : props.tokenIds;
  const items = getItems(tokenIds);
  const [selected, setSelected] = React.useState([]);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {items.map(({ id }) => (
        <Card
          itemId={id} // NOTE: itemId is required for track items
          tokenId={tokenIds[id]}
          title={id}
          key={id}
          onClick={handleClick(id)}
          selected={isItemSelected(id)}
        />
      ))}
    </ScrollMenu>
  );
}

const getItems = (tokenIds) =>
  Array(tokenIds.length)
    .fill(0)
    .map((_, ind) => ({ id: `${ind}` }));

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } = React.useContext(VisibilityContext);

  return (
    <Center h="100%">
      <IconButton 
        onClick={() => scrollPrev()} 
        colorScheme='transparent'
        disabled={isFirstItemVisible}        
        icon={<AiOutlineDoubleLeft color="white" size="50px" />}
      />
    </Center>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <IconButton 
      onClick={() => scrollNext()} 
      colorScheme='transparent'
      disabled={isLastItemVisible}        
      icon={<AiOutlineDoubleRight color="white" size="50px" />}
    />
  );
}

function Card({ onClick, selected, title, itemId, tokenId }) {
  const visibility = React.useContext(VisibilityContext);

  return (
    <Box
      onClick={() => onClick(visibility)}
      w='240px'
      tabIndex={0}
      align="center"
    >
      <Box>
        <Box>
          <Emperor pixel="20" price="0.99" emperorId={tokenId} />
        </Box>
      </Box>
      <Box
        style={{
          height: '110px',
        }}
      />
    </Box>
  );
}

export default Emperors;