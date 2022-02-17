import { Wrap, WrapItem }        from '@chakra-ui/react'
import Emperor                   from './emperor' 

function Emperors(props) {

  return (
    <Wrap 
      spacing={props.spacing}
      align='center'
      justify="center"
    >
      <WrapItem>
          <Emperor imSrc="images/emperors/1.webp" pixel="20" price="0.99" emperorTier={1} isMint={props.isMint}/>
      </WrapItem>
      <WrapItem>
          <Emperor imSrc="images/emperors/2.webp" pixel="300" price="9.99" emperorTier={2} isMint={props.isMint}/>
      </WrapItem>       
      <WrapItem>
          <Emperor imSrc="images/emperors/3.webp" pixel="4000" price="99.99" emperorTier={3} isMint={props.isMint}/>
      </WrapItem>
    </Wrap>
  )
}

export default Emperors;