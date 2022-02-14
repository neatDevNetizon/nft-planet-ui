import React                            from 'react';
import { Grid, GridItem, Center, Box, IconButton }  from '@chakra-ui/react';
import { CgClose }                      from "react-icons/cg";
import Nfts                             from '../../components/nfts';
import Txt                              from '../../components/txt';
import { WalletOfOwner }                from '../../utils/useContract';
import { mainTitleSize,
         closeIconSize } from "../../components/componentSize";

export default function Collection(props) {
  
  const popupHeight = window.innerHeight*0.7;

  const popupWidth = window.innerWidth*0.9;

  const [wallet, setWallet] = React.useState([]);

  React.useEffect(() => {
    (async() => {
      let _wallet;
      _wallet = await WalletOfOwner();
      setWallet(_wallet);
    })();
  }, []);

  return (
    <Box
      height={popupHeight}
      width={popupWidth}
      border='2px outset white'
      borderRadius='30px'
      borderColor='white'
      fontSize='14px'
      minHeight='400px'
      bg='transparent'
    >
      <Center h={popupHeight}>
        <Grid h={popupHeight}
              w={popupWidth*0.98}
              templateRows='repeat(24, 1fr)'
              gap={1}
        >
          <GridItem rowSpan={4}>
            <Center h="100%">
              <Box width="5%" />
              <Box width="90%">
                <Txt fontSize={mainTitleSize}
                     opacity="0.5"
                     text=" YOUR COLLECTION"
                />
              </Box>
              <Box width="5%" align="right">
                <IconButton 
                    onClick={props.close} 
                    colorScheme='transparent'        
                    icon={<CgClose color="white" size={closeIconSize} />}
                    margin="0 10px 0 0"
                />
              </Box>
            </Center>
          </GridItem>

          <GridItem rowSpan={20}>
          <Center height="100%">
            <Box w={popupWidth*0.95} height="90%">
              <Nfts nftIds={wallet} />
            </Box>
          </Center>
          </GridItem>
        </Grid>
      </Center>
    </Box>
  );
}