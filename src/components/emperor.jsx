import { useState }				  from "react";
import { FaArrowAltCircleRight }  from "react-icons/fa";
import { Box, Tooltip }      	  from "@chakra-ui/react";
import { Btn } 					  from "./btn"
import Txt 						  from "./txt"

const fontFamily = "arial,ｍｓ ｐゴシック,ms pgothic,돋움,dotum,helvetica,sans-serif";	

function EmpTxt(props) {

	const emperorType = props.emperorId === 1
							? "NATION" 
							: props.emperorId === 2
								? "CONTINENT" 
								: "WORLD" 

	const subTitle = props.emperorId === 1
						?  "PRESIDENTS"
						: props.emperorId === 2
							? "STARS"
							: "ENTREPRENEURS"

	return(
		<Box padding="50px 0px">
			<Txt fontFamily={fontFamily} 
				 fontSize="20px"
				 opacity="0.8"
				 text={emperorType}
			/>
			<Txt fontFamily={fontFamily} 
				 fontSize="20px"
				 opacity="0.8"
				 text="EMPEROR"
			/>
			<Txt fontFamily={fontFamily} 
				 fontSize="14px"
				 opacity="0.3"
				 text={subTitle}
			/>
		</Box>
	);
}

function Tip(props) {
	
	const pixelNumber = props.pixel + " PIXEL"

	const priceInUSDC = props.price + " USDC"
	
	return(
		<Box margin="10px">
			<Txt text="1 NFT" fontSize="14px" fontFamily={fontFamily} />
			<Txt text={pixelNumber} fontSize="14px" fontFamily={fontFamily}/>
			<Txt text="PRICE:" fontSize="10px" fontFamily={fontFamily} />
			<Txt text={priceInUSDC} fontSize="10px" fontFamily={fontFamily} />
		</Box>
	);
}

function Img(props) {

	const imgId = "img_nft_" + props.emperorId;

	return(
		<>
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
					<image href={props.imSrc} width="110" height="110"/>
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
		</>
	);
}

export default function Emperor(props) {

	const imgBaseURI = "https://gateway.pinata.cloud/ipfs/QmXg1TxRfyXQVzf2doFkBijnE1c41wjmjtovjccXqb7JMV/";
	
	const img = <Img emperorId={props.emperorId} imSrc={imgBaseURI + props.emperorId + ".png"} />;

	const alt = <EmpTxt emperorId={props.emperorId} />;

	const [nftImg, setNftImg] = useState(img);

	return(
		<Tooltip label={<Tip pixel={props.pixel} price={props.price} />} 
				 width="187px" 
				 borderRadius="20px" 
				 bg="black"
				 closeOnClick={false}
				 onOpen={() => setNftImg(alt)}
				 onClose={() => setNftImg(img)}
		>
			<Box bg="black"
				 w="187px"
				 h="315px"
				 borderRadius="20px"
				 padding="20px 0px"
				 align="center"
			>
				<Box h="180px">
					{nftImg}
				</Box>
				<Box padding="25px 30px">
				<Btn text="MINT" 
					 rightIcon={<FaArrowAltCircleRight fill="#FFFFFF" size="30px"/>} 
				/>
			</Box>
			</Box>
		</Tooltip>
	);
}
