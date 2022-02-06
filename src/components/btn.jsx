import { Button }                           from '@chakra-ui/react';
import Txt                                  from "./txt";

export default function Btn(props) {

    return( 
        <Button
            height={props.height? props.height: '55px'}
            background='rgba(0, 0, 0, 0.6)'            
            border='3px solid #FFFFFF'
            borderRadius='20px'
            onClick={props.onClick}
            padding="10px"
            rightIcon={props.rightIcon}
        ><Txt  margin='0px 5.5px 0px 5.5px' text={props.text} /></Button>
    )
}
