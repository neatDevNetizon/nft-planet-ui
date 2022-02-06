import { Grid, GridItem, Center }   from '@chakra-ui/react'
import Emperor                      from './emperor' 

function Emperors() {

  return (
    <>
      <Grid h="100%" w="100%" templateColumns='repeat(3, 1fr)' gap={1}>
        <GridItem colSpan={1} >
            <Emperor imSrc="images/emperors/1.webp" emperorId="1" />
        </GridItem>
        <GridItem colSpan={1} >
            <Emperor imSrc="images/emperors/2.webp" emperorId="2" />
        </GridItem>       
        <GridItem colSpan={1} >
            <Emperor imSrc="images/emperors/3.webp" emperorId="3" />
        </GridItem>
      </Grid>
    </>
  )
}

export default Emperors;