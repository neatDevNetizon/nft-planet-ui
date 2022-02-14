import { Box, Image, Grid, GridItem, Center, Link }    from "@chakra-ui/react";
import Txt     			   		  			           from "./txt";

function Nft(props) {

	const imgBaseURI = "https://gateway.pinata.cloud/ipfs/QmXg1TxRfyXQVzf2doFkBijnE1c41wjmjtovjccXqb7JMV/";

	const imSrc = imgBaseURI + props.tokenId + ".png";

	const priceFontFamily = "arial,ｍｓ ｐゴシック,ms pgothic,돋움,dotum,helvetica,sans-serif";

	const price = props.priceInMatic + " MATIC"

	return(
		<Box bg="black"
			 width="215px"
			 height="240px"
			 padding="0px"
			 borderRadius="20px"
			 align="center"
		>
			<Center h="100%">
				<Box width="85%" height="80%" align="center">
	      			<Grid h="100%" 
	      				  w="100%" 
	      				  templateRows='repeat(8, 1fr)' 
	      				  templateColumns='repeat(8, 1fr)' 
	      				  gap={1}
	      			>
	      				<GridItem rowSpan={2} colSpan={1} />
	      				<GridItem rowSpan={2} colSpan={1}>
		      				<Center h="100%">
		      					<Image src="images/icons/poligon.webp" />
		      				</Center>
		      			</GridItem>
		      			<GridItem rowSpan={2} colSpan={5}>
							<Center h="100%">
								<Txt fontFamily={priceFontFamily}
									 fontSize="14px"
									 text={price}
									 align="left"
								/>
							</Center>
						</GridItem>
						<GridItem rowSpan={2} colSpan={1}/>

		      			<GridItem rowSpan={4} colSpan={8}>
		      				<Center	h="100%">
								<Image src={imSrc} 
									   width="103px" 
									   height="103px"
									   borderRadius="20px"
								/>
							</Center>
						</GridItem>

						<GridItem rowSpan={1} colSpan={8} />

						<GridItem rowSpan={1} colSpan={1}>
							<Center h="100%">
		      					<Image src="images/icons/Logomark-Blue.webp" />
		      				</Center>
						</GridItem>

						<GridItem rowSpan={1} colSpan={2}>
							<Center	h="100%">
								<Link href={ "https://testnets.opensea.io/assets/" + process.env.REACT_APP_EMP_CONTRACT_ADDRESS + "/" + props.tokenId } isExternal>
									<Txt fontFamily={priceFontFamily}
										fontSize="14px"
									 	text="SELL"
									 	align="left"
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