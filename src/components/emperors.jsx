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