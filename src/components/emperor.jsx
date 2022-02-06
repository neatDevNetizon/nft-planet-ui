import { FaArrowAltCircleRight }  from "react-icons/fa"
import { Box }   				  from "@chakra-ui/react";
import Btn 						  from "./btn"

function Emperor(props) {

	const imgId = "img_nft_" + props.emperorId;

	return(
		<Box bg="black"
			 w="187px"
			 borderRadius="20px"
			 padding="20px 0px"
			 align="center"
		>
			<svg preserveAspectRatio="xMidYMid meet" 
				 data-bbox="34.726 34.726 130.548 130.548" 
				 viewBox="34.726 34.726 130.548 130.548" 
				 height="165" 
				 width="165" 
				 xmlns="http://www.w3.org/2000/svg" 
				 data-type="color" 
				 role="presentation" 
				 aria-hidden="true" 
				 aria-labelledby="svgcid-g1w5e1-y4huld">
			<defs>
				<pattern id={imgId} patternUnits="userSpaceOnUse" x="45" y="45" width="135" height="135">
					<image href={props.imSrc} width="105" height="105"/>
				</pattern>
			</defs>
			<title></title>
			    <g>
			        <rect fill={"url(#" + imgId + ")"} x="0" y="0" width="200" height="200"/>
			        <path fill="#231F20" d="M153.406 46.594v26.279h11.868V34.726h-38.147v11.868h26.279z" data-color="1"></path>
			        <path fill="#231F20" d="M46.594 46.594h26.279V34.726H34.726v38.147h11.868V46.594z" data-color="1"></path>
			        <path fill="#231F20" d="M153.406 153.406h-26.279v11.868h38.147v-38.147h-11.868v26.279z" data-color="1"></path>
			        <path fill="#231F20" d="M46.594 153.406v-26.279H34.726v38.147h38.147v-11.868H46.594z" data-color="1"></path>
			    </g>
			</svg>
			<Box padding="25px 0px">
				<Btn text="MINT" rightIcon={<FaArrowAltCircleRight fill="#FFFFFF" size="30px"/>} />
			</Box>
		</Box>
	)
}

export default Emperor;