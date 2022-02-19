import React        from 'react';
import { Button, Center }   from '@chakra-ui/react';
import Txt          from "./txt";

export const Btn = React.forwardRef((props, ref) => {

    return( 
        <Button
            height={props.height? props.height : {base:"35px", lg:"45px", xl:"55px"}}
            width={props.width? props.width : ""}
            bg={props.bg? props.bg : 'rgba(0, 0, 0, 0.6)'}
            border='3px solid #FFFFFF'
            borderRadius={props.borderRadius? props.borderRadius : {base:"10px", lg:"15px", xl:"20px"}}
            onClick={props.onClick}
            rightIcon={props.rightIcon ? props.rightIcon : ''}
            padding={props.padding? props.padding : '15px'}
            ref={ref}
        >
            <Center h="100%">
                <Txt  
                    text={props.text} 
                    fontSize={props.textSize? props.textSize : {base:"14px", lg:"17px", xl:"20px"}}
                />
            </Center>
        </Button>
    )
});
