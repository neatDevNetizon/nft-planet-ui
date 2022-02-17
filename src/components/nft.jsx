import { Box, 
		 Image, 
		 Link,
		 HStack }    		from "@chakra-ui/react";
import Txt     			   	from "./txt";
import { nftBoxWidth,
		 borderRadius,
		 btnIconSize,
		 btnIconPadding }   from "./componentSize";

function Nft(props) {

	const imgBaseURI = process.env.REACT_APP_IPFS_BASE_URL;

	const imSrc = imgBaseURI + props.tokenId + ".png";

	const fontFamily = "arial,ｍｓ ｐゴシック,ms pgothic,돋움,dotum,helvetica,sans-serif";

	return(
		<Box bg="black"
			 width={nftBoxWidth}
			 borderRadius={borderRadius}
			 align="center"
		>
			<Box padding="10%" align="center">
				<Image src={imSrc} borderRadius={borderRadius} />
			</Box>
			<Box padding="0% 10% 10% 10%" align="center">
				<Link 
					href={ process.env.REACT_APP_OPENSEA_BASE_URL + process.env.REACT_APP_EMP_CONTRACT_ADDRESS + "/" + props.tokenId }
					style={{ textDecoration: 'none' }}
					isExternal
				>
					<Box 
						border='3px solid #FFFFFF'
						borderRadius={{base:"5px", lg:"10px", xl:"15px"}}
						padding={{base:"2px", lg:"5px", xl:"10px"}}
						align="center"
						_hover={{ bg: '#ebedf0' }}
						_active={{
						    bg: '#dddfe2',
						    transform: 'scale(0.98)',
						    borderColor: '#bec3c9',
						}}
						_focus={{
						    boxShadow: '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
						}}
					>
  						<HStack spacing='5px' align="center" justify="center">
	  						<Image src="images/icons/Logomark-Blue.webp" h={btnIconSize}/>
	  						<Txt fontFamily={fontFamily}
							 	text="SELL"
							 	align="left"
							 	margin="0px 5px"
							/>
						</HStack>
					</Box>
				</Link>								
			</Box>
		</Box>
	)
}

export default Nft;