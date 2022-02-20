import { Center, 
         Box,
         VStack }         from '@chakra-ui/react';
import React                  from 'react';
import Txt                    from '../../components/txt';
import Nfts                   from '../../components/nfts';
import { WalletOfOwner }      from '../../utils/useContract';

export default function Collection(props, ref) {

  const [wallet, setWallet] = React.useState([]);

  React.useEffect(() => {
    (async() => {
      let _wallet;
      _wallet = await WalletOfOwner();
      setWallet(_wallet);
    })();
  }, []);

    return (
      <Box w="100%" h="100%">
        <VStack>
            <Box 
              width="100%" 
              height="20%"
              align="center"
            >
              <Center w="90%" h="100%">
                <Txt fontSize={{base:"16px", sm:"25px", lg:"30px", xl:"35px", "2xl":"40px"}}
                     opacity="0.5" 
                     text="YOUR COLLECTION"
                />
              </Center>
            </Box>
            <Box
              width="100%"
              height="80%"
              paddingTop={{base:"5px", lg:"17px"}}
              align="center"
            >
              <Nfts nftIds={wallet} />
            </Box>
        </VStack>
      </Box>
    );
}