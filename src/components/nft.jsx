import { Box, 
		 Image, 
		 Grid, 
		 GridItem, 
		 Center, 
		 Link,
		 HStack }    		from "@chakra-ui/react";
import Txt     			   	from "./txt";
import { nftBoxHeight,
		 nftBoxWidth,
		 nftImgSize,
		 nftTxtSize,
		 borderRadius,
		 btnIconSize } 		from "./componentSize";

function Nft(props) {

	const imgBaseURI = process.env.REACT_APP_IPFS_BASE_URL;

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
								<Link href={ process.env.REACT_APP_OPENSEA_BASE_URL + process.env.REACT_APP_EMP_CONTRACT_ADDRESS + "/" + props.tokenId } isExternal>
		      						<HStack spacing='5px'>
		      						<Image src="images/icons/Logomark-Blue.webp" h={btnIconSize}/>
		      						<Txt fontFamily={priceFontFamily}
										fontSize={nftTxtSize}
									 	text="SELL"
									 	align="left"
									 	margin="0px 5px"
									/>
									</HStack>
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