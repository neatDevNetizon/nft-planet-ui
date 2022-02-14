import { Box, Image, Grid, GridItem, Center, Link }    from "@chakra-ui/react";
import Txt     			   		  			           from "./txt";
import { nftBoxHeight,
		 nftBoxWidth,
		 nftImgSize,
		 nftTxtSize,
		 borderRadius,
		 btnIconSize } 								   from "./componentSize";

function Nft(props) {

	const imgBaseURI = "https://gateway.pinata.cloud/ipfs/QmXg1TxRfyXQVzf2doFkBijnE1c41wjmjtovjccXqb7JMV/";

	const imSrc = imgBaseURI + props.tokenId + ".png";

	const priceFontFamily = "arial,ｍｓ ｐゴシック,ms pgothic,돋움,dotum,helvetica,sans-serif";

	return(
		<Box bg="black"
			 width={nftBoxWidth}
			 height={nftBoxHeight}
			 borderRadius={borderRadius}
			 align="center"
		>
			<Center h="100%">
				<Box width="85%" height="80%" align="center">
	      			<Grid h="100%" 
	      				  w="100%" 
	      				  templateRows='repeat(10, 1fr)' 
	      				  templateColumns='repeat(8, 1fr)' 
	      				  gap={1}
	      			>
		      			<GridItem rowSpan={9} colSpan={8}>
		      				<Center	h="100%">
								<Image src={imSrc} 
									   width={nftImgSize} 
									   borderRadius={borderRadius}
								/>
							</Center>
						</GridItem>
						<GridItem rowSpan={1} colSpan={8}>
							<Center h="150%">
		      					<Image src="images/icons/Logomark-Blue.webp" h={btnIconSize}/>
		      					<Link href={ "https://testnets.opensea.io/assets/" + process.env.REACT_APP_EMP_CONTRACT_ADDRESS + "/" + props.tokenId } isExternal>
		      						<Txt fontFamily={priceFontFamily}
										fontSize={nftTxtSize}
									 	text="SELL"
									 	align="left"
									 	margin="0px 5px"
									/>
								</Link>								
		      				</Center>
						</GridItem>
	      			</Grid>
				</Box>
			</Center>
		</Box>
	)
}

export default Nft;