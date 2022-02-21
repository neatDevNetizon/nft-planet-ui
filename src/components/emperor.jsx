import { useState }	  from "react";
import { FaArrowAltCircleRight }  from "react-icons/fa";
import { Box, 
		 // Tooltip, 
		 Center, 
		 VStack,
		 Image }   			      from "@chakra-ui/react";
import { Link }                   from "react-router-dom";
import { Btn } 					  from "./btn"
import Txt 						  from "./txt"
import { Mint }                   from "../utils/useContract";
import { btnIconSize } 		      from "./componentSize";

const fontFamily = "arial,ｍｓ ｐゴシック,ms pgothic,돋움,dotum,helvetica,sans-serif";	

function EmpTxt(props) {

	const emperorTier = props.emperorTier === 1
							? "NATION" 
							: props.emperorTier === 2
								? "CONTINENT" 
								: "WORLD" 

	const subTitle = props.emperorTier === 1
						?  "PRESIDENTS"
						: props.emperorTier === 2
							? "STARS"
							: "ENTREPRENEURS"

	return(
		<VStack>
			<Txt fontFamily={fontFamily} 
				 fontSize={{base:"14px", md:"16px", lg:"18px", "2xl":"20px"}}
				 opacity="0.8"
				 text={emperorTier}
			/>
			<Txt fontFamily={fontFamily} 
				 fontSize={{base:"14px", md:"16px", lg:"18px", "2xl":"20px"}}
				 opacity="0.8"
				 text="EMPEROR"
			/>
			<Txt fontFamily={fontFamily} 
				 fontSize={{base:"10px", md:"12px", lg:"14px"}}
				 opacity="0.3"
				 text={subTitle}
			/>
		</VStack>
	);
}

function Tip(props) {
	
	const priceUint = process.env.REACT_APP_CURRENCY_SYMBOL;

	const pixelNumber = props.pixel + " PIXEL";

	const priceInMATIC = props.price + " " + priceUint;
	
	return(
		<Box margin="10px">
			<Txt 
				text="1 NFT" 
				fontSize={{base:"10px", md:"12px", lg:"14px"}}
				fontFamily={fontFamily} 
			/>
			<Txt 
				text={pixelNumber} 
				fontSize={{base:"10px", md:"12px", lg:"14px"}}
				fontFamily={fontFamily}
			/>
			<Txt 
				text="PRICE:" 
				fontSize={{base:"8px", md:"9px", lg:"10px"}}
				fontFamily={fontFamily} 
			/>
			<Txt 
				text={priceInMATIC} 
				fontSize={{base:"8px", md:"9px", lg:"10px"}}
				fontFamily={fontFamily} 
			/>
		</Box>
	);
}

// function Img(props) {

// 	const imgId = "img_nft_" + props.emperorTier;

// 	return(
// 		<>
// 			<svg preserveAspectRatio="xMidYMid meet" 
// 				 data-bbox="34.726 34.726 130.548 130.548" 
// 				 viewBox="34.726 34.726 130.548 130.548" 
// 				 xmlns="http://www.w3.org/2000/svg" 
// 				 data-type="color" 
// 				 role="presentation" 
// 				 aria-hidden="true" 
// 				 aria-labelledby="svgcid-g1w5e1-y4huld"
// 				 // w={{base:"130px", sm:"135px", md:"145px", lg:"150px", xl:"155px",'2xl':"160px"}}
// 				 // h={{base:"130px", sm:"135px", md:"145px", lg:"150px", xl:"155px",'2xl':"160px"}}
// 			>
// 				<defs>
// 					<pattern
// 						id={imgId} 
// 						patternUnits="userSpaceOnUse" 
// 						x="45"
// 						y="45"
// 						width="135"
// 						height="135"
// 					>
// 						<image 
// 							href={props.imSrc} 
// 							width="110" 
// 							height="110"
// 						/>
// 					</pattern>
// 				</defs>
// 			    <g>
// 			        <rect 
// 			        	fill={"url(#" + imgId + ")"} 
// 			        	x="0" 
// 			        	y="0" 
// 			        	width="200" 
// 			        	height="200"
// 			        />
// 			        <path 
// 			        	fill="#231F20" 
// 			        	d="M153.406 46.594v26.279h11.868V34.726h-38.147v11.868h26.279z" 
// 			        	data-color="1" 
// 			        />
// 			        <path 
// 			        	fill="#231F20" 
// 			        	d="M46.594 46.594h26.279V34.726H34.726v38.147h11.868V46.594z" 
// 			        	data-color="1"
// 			        />
// 			        <path 
// 			        	fill="#231F20" 
// 			        	d="M153.406 153.406h-26.279v11.868h38.147v-38.147h-11.868v26.279z" 
// 			        	data-color="1"
// 			        />
// 			        <path 
// 			        	fill="#231F20" 
// 			        	d="M46.594 153.406v-26.279H34.726v38.147h38.147v-11.868H46.594z" 
// 			        	data-color="1"
// 			        />
// 			    </g>
// 			</svg>
// 		</>
// 	);
// }

function mint(tier) {
	(async() => { await Mint(Number(tier)) })();
}

export default function Emperor(props) {

	const img = <Image id={props.emperorTier} src={props.imSrc} />
				
	const alt = <EmpTxt emperorTier={props.emperorTier} />
				
	// const [nftImg, setNftImg] = useState(alt);

	const [hovered, setHovered] = useState(false);

	const enterHoverHandler = () => {
		setHovered(true);
	}

	const leaveHoverHandler = () => {
		setHovered(false);
	}
	
	return(
		// <Tooltip 
		// 		label={<Tip pixel={props.pixel} price={props.price} />} 
		// 		w={{base:"140px", sm:"150px", md:"160px", lg:"170px", xl:"180px",'2xl':"190px"}}
		// 		borderRadius={{base:"10px", lg:"15px", xl:"20px"}}
		// 		// bg="#171923"
		// 		bg="black"
		// 		closeOnClick={false}
		// 		onOpen={() => setNftImg(alt)}
		// 		onClose={() => setNftImg(img)}
		// 		placement="bottom"
		// >
		// </Tooltip>
		<VStack justify="center" align="center" padding={{base:"0px 30px", sm:"0px 35px", md:"0px 40px", lg:"0px 45px"}}>
			<Box 
				bg="black"
				w={{base:"140px", sm:"150px", md:"160px", lg:"170px", xl:"180px",'2xl':"190px"}}
				borderRadius={{base:"10px", lg:"15px", xl:"20px"}}
				margin="0px"		
				align="center"
				onMouseEnter = {() => enterHoverHandler()}
				onMouseLeave = {() => leaveHoverHandler()}
			>
				<Box padding={{base:"10px", sm:"11px", md:"13px", lg:"14px", xl:"16px",'2xl':"18px"}}>
					<Box h={{base:"130px", sm:"135px", md:"145px", lg:"150px", xl:"155px",'2xl':"160px"}}>
						<Center	h="100%">
							{ hovered
								? alt
								: img
							}
						</Center>
					</Box>
				</Box>
				<Box padding={{base:"16px 0px", sm:"18px 0px", md:"20px 0px", lg:"22px 0px", xl:"24px 0px",'2xl':"26px 0px"}}>
					{props.isMint
						? <Btn 
							text="MINT" 
							rightIcon={<FaArrowAltCircleRight fill="#FFFFFF" size={btnIconSize} />}
							onClick={() => mint(props.emperorTier)}
						  />
						: <Link 
							to="/main" 
							style={{ textDecoration: 'none' }}
						  >
							<Btn 
								text="MINT"
								rightIcon={<FaArrowAltCircleRight fill="#FFFFFF" size={btnIconSize} />} />
						  </Link>
					}
				</Box>
			</Box>
			{ hovered
				? <Box 
					w={{base:"140px", sm:"150px", md:"160px", lg:"170px", xl:"180px",'2xl':"190px"}}
					h={{base:"75px", sm:"80px", md:"85px", lg:"90px", xl:"95px",'2xl':"100px"}}
					borderRadius={{base:"10px", lg:"15px", xl:"20px"}}
					bg="black"
				  >
				  	<Center h="100%">
						<Tip pixel={props.pixel} price={props.price} />
					</Center>
				  </Box>
				: <Box 
					w={{base:"140px", sm:"150px", md:"160px", lg:"170px", xl:"180px",'2xl':"190px"}}
					h={{base:"75px", sm:"80px", md:"85px", lg:"90px", xl:"95px",'2xl':"100px"}}
					bg="transparent"
				  />
			}
		</VStack>
	);
}
