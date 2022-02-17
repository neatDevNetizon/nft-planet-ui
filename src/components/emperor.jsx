import { useState }				  from "react";
import { FaArrowAltCircleRight }  from "react-icons/fa";
import { Box, Tooltip }           from "@chakra-ui/react";
import { Link }                   from "react-router-dom";
import { Btn } 					  from "./btn"
import Txt 						  from "./txt"
import { Mint }                   from "../utils/useContract";
import { emperorMainTxtPadding,
		 emperorTierTxtSize,
		 emperorSubTitleSize,
		 emperorPixelTxtSize,
		 emperorPriceTxtSize,
		 emperorSvgSize,
		 emperorWidth,
		 emperorMainHeight,
		 emperorBorderRadius,
		 emperorImgBoxSize,
		 emperorBtnBoxPadding,
		 emperorMainBoxPadding,
		 btnIconSize,
		 btnIconPadding } 		  from "./componentSize";

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
		<Box padding={emperorMainTxtPadding + " 0px"}>
			<Txt fontFamily={fontFamily} 
				 fontSize={emperorTierTxtSize}
				 opacity="0.8"
				 text={emperorTier}
			/>
			<Txt fontFamily={fontFamily} 
				 fontSize={emperorTierTxtSize}
				 opacity="0.8"
				 text="EMPEROR"
			/>
			<Txt fontFamily={fontFamily} 
				 fontSize={emperorSubTitleSize}
				 opacity="0.3"
				 text={subTitle}
			/>
		</Box>
	);
}

function Tip(props) {
	
	const pixelNumber = props.pixel + " PIXEL"

	const priceInMATIC = props.price + " MATIC"
	
	return(
		<Box margin="10px">
			<Txt 
				text="1 NFT" 
				fontSize={emperorPixelTxtSize} 
				fontFamily={fontFamily} 
			/>
			<Txt 
				text={pixelNumber} 
				fontSize={emperorPixelTxtSize} 
				fontFamily={fontFamily}
			/>
			<Txt 
				text="PRICE:" 
				fontSize={emperorPriceTxtSize} 
				fontFamily={fontFamily} 
			/>
			<Txt 
				text={priceInMATIC} 
				fontSize={emperorPriceTxtSize} 
				fontFamily={fontFamily} 
			/>
		</Box>
	);
}

function Img(props) {

	const imgId = "img_nft_" + props.emperorTier;

	return(
		<>
			<svg preserveAspectRatio="xMidYMid meet" 
				 data-bbox="34.726 34.726 130.548 130.548" 
				 viewBox="34.726 34.726 130.548 130.548" 
				 height={emperorSvgSize}
				 width={emperorSvgSize}
				 xmlns="http://www.w3.org/2000/svg" 
				 data-type="color" 
				 role="presentation" 
				 aria-hidden="true" 
				 aria-labelledby="svgcid-g1w5e1-y4huld">
				<defs>
					<pattern 
						id={imgId} 
						patternUnits="userSpaceOnUse" 
						x="45"
						y="45"
						width="135"
						height="135"
					>
						<image 
							href={props.imSrc} 
							width="110" 
							height="110"
						/>
					</pattern>
				</defs>
			    <g>
			        <rect 
			        	fill={"url(#" + imgId + ")"} 
			        	x="0" 
			        	y="0" 
			        	width="200" 
			        	height="200"
			        />
			        <path 
			        	fill="#231F20" 
			        	d="M153.406 46.594v26.279h11.868V34.726h-38.147v11.868h26.279z" 
			        	data-color="1" 
			        />
			        <path 
			        	fill="#231F20" 
			        	d="M46.594 46.594h26.279V34.726H34.726v38.147h11.868V46.594z" 
			        	data-color="1"
			        />
			        <path 
			        	fill="#231F20" 
			        	d="M153.406 153.406h-26.279v11.868h38.147v-38.147h-11.868v26.279z" 
			        	data-color="1"
			        />
			        <path 
			        	fill="#231F20" 
			        	d="M46.594 153.406v-26.279H34.726v38.147h38.147v-11.868H46.594z" 
			        	data-color="1"
			        />
			    </g>
			</svg>
		</>
	);
}

function mint(tier) {
	(async() => { await Mint(Number(tier)) })();
}

export default function Emperor(props) {

	const img = <Img emperorTier={props.emperorTier} imSrc={props.imSrc} />;

	const alt = <EmpTxt emperorTier={props.emperorTier} />;

	const [nftImg, setNftImg] = useState(img);

	return(
		<Tooltip label={<Tip pixel={props.pixel} price={props.price} />} 
				 width={emperorWidth}
				 borderRadius={emperorBorderRadius}
				 bg="#171923"
				 closeOnClick={false}
				 onOpen={() => setNftImg(alt)}
				 onClose={() => setNftImg(img)}
		>
			<Box bg="black"
				 w={emperorWidth}
				 h={emperorMainHeight}
				 borderRadius={emperorBorderRadius}
				 padding={emperorMainBoxPadding+" 0px"}
				 align="center"
			>
				<Box h={emperorImgBoxSize}>
					{nftImg}
				</Box>
				<Box padding={emperorBtnBoxPadding+" 0px"}>
					{props.isMint
						? <Btn 
							text="MINT" 
	                 		padding={btnIconPadding}
							rightIcon={<FaArrowAltCircleRight fill="#FFFFFF" size={btnIconSize} />}
							onClick={() => mint(props.emperorTier)}
						  />
						: <Link 
							to="/main" 
							style={{ textDecoration: 'none' }}
						  >
							<Btn 
								text="MINT"
	                 			padding={btnIconPadding}
								rightIcon={<FaArrowAltCircleRight fill="#FFFFFF" size={btnIconSize} />} />
						  </Link>
					}
				</Box>
			</Box>
		</Tooltip>
	);
}
