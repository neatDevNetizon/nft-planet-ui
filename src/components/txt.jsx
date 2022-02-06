import { Text } from "@chakra-ui/react";

export default function Txt(props) {

	return(
		<Text
	        fontSize={props.fontSize? props.fontSize : "19px"} 
	        fontFamily={props.fontFamily? props.fontFamily : 'arial black,arial-w01-black,arial-w02-black,arial-w10 black,sans-serif'}
	        fontWeight={props.isBold? "bold" : ""}
	        color={props.color? props.color: '#FFFFFF'}
	        textDecoration={props.isUnderline? "underline" : "none"}
	        margin={props.margin? props.margin: "0px"}
	        opacity={props.opacity? props.opacity : "1"}
	        align={props.align? props.align : "center"}
	    >{props.text}</Text>
	);
}

