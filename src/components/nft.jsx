import { Box, Image, Grid, GridItem, Center }   		  from "@chakra-ui/react";
import Txt     			   		  						  from "./txt";

function Nft(props) {

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
	      				  gap={5}
	      			>
	      				<GridItem rowSpan={1} colSpan={1} />
	      				<GridItem rowSpan={1} colSpan={1}>
		      				<Center h="100%">
		      					<Image src="images/icons/poligon.webp" />
		      				</Center>
		      			</GridItem>
		      			<GridItem rowSpan={1} colSpan={5}>
							<Center h="100%">
								<Txt fontFamily={priceFontFamily}
									 fontSize="14px"
									 text={price}
									 align="left"
								/>
							</Center>
						</GridItem>
						<GridItem rowSpan={1} colSpan={1}/>
		      			<GridItem rowSpan={5} colSpan={8}>
		      				<Center	h="100%">
								<Image src={props.imSrc} 
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
								<Txt fontFamily={priceFontFamily}
									 fontSize="14px"
									 text="SELL"
									 align="left"
								/>
							</Center>
						</GridItem>
	      			</Grid>
				</Box>
			</Center>
		</Box>
	)
}

export default Nft;