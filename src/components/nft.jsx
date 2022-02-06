import { FaArrowAltCircleRight }  from "react-icons/fa";
import { Box, Image }   		  from "@chakra-ui/react";
import Txt     			   		  from "./txt";

function Nft(props) {

	const imgId = "img_nft_" + props.nftId;

	return(
		<Box bg="black"
			 width="215px"
			 height="230px"
			 padding="0px"
			 borderRadius="20px"
			 align="center"
		>
			<Image src="images\icons\poligon.webp" />
			<Txt text="MATIC" />
			<Image src={props.imSrc} 
				   width="103px" 
				   height="103px"
				   borderRadius="20px"
			/>
		</Box>
	)
}

export default Nft;