import { Box, Wrap, WrapItem }        from '@chakra-ui/react'
import Emperor                   from './emperor' 

function Emperors(props) {

  const price = [
    process.env.REACT_APP_NATIONAL_EMPEROR_PRICE,
    process.env.REACT_APP_CONTINENT_EMPEROR_PRICE,
    process.env.REACT_APP_WORLD_EMPEROR_PRICE
  ]

  return (
    <Box w="100%" align="center">
      <Wrap 
        spacing={props.spacing}
        align='center'
        justify="center"
      >
        <WrapItem>
            <Emperor imSrc="images/emperors/emperor1.png" pixel="20" price={price[0]} emperorTier={1} isMint={props.isMint}/>
        </WrapItem>
        <WrapItem>
            <Emperor imSrc="images/emperors/emperor2.png" pixel="300" price={price[1]} emperorTier={2} isMint={props.isMint}/>
        </WrapItem>       
        <WrapItem>
            <Emperor imSrc="images/emperors/emperor3.png" pixel="4000" price={price[2]} emperorTier={3} isMint={props.isMint}/>
        </WrapItem>
      </Wrap>
    </Box>
  )
}

export default Emperors;