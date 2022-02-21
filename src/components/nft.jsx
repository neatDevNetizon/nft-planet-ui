import { Box, 
		 Image, 
		 Link,
		 HStack }    		from "@chakra-ui/react";
import Txt     			   	from "./txt";

function Nft(props) {

	const imgBaseURI = process.env.REACT_APP_IPFS_BASE_URL;

	const imSrc = imgBaseURI + props.tokenId + ".png";

	return(
		<Box bg="black"
			 width={{base:"160px", sm:"170px", md:"180px", lg:"190px", xl:"200px", "2xl":"215px"}}
			 borderRadius={{base:"10px", lg:"15px", xl:"20px"}}
			 align="center"
		>
			<Box padding="10%" align="center">
				<Image src={imSrc} borderRadius={{base:"10px", lg:"15px", xl:"20px"}} />
			</Box>
			<Box padding="0% 10% 10% 10%" align="center">
				<Link 
					href={ process.env.REACT_APP_OPENSEA_BASE_URL + process.env.REACT_APP_EMP_CONTRACT_ADDRESS + "/" + props.tokenId }
					style={{ textDecoration: 'none' }}
					isExternal
				>
					<Box 
						border='3px solid #FFFFFF'
						borderRadius={{base:"10px", lg:"15px", xl:"20px"}}
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
	  						<Image 
	  							src="images/icons/Logomark-Blue.webp" 
	  							h={{base:"20px", sm:"22px", md:"24px", lg:"26px", xl:"28px", "2xl":"30px"}}
	  						/>
	  						<Txt 
	  							fontFamily='arial black,arial-w01-black,arial-w02-black,arial-w10 black,sans-serif'
							 	text="SELL"
							 	align="left"
							 	paddingLeft="15px"
							 	fontSize={{base:"17px", lg:"20px", xl:"25px"}}
							/>
						</HStack>
					</Box>
				</Link>								
			</Box>
		</Box>
	)
}

export default Nft;