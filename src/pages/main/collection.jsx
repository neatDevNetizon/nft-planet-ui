import { Center, 
         Box,
         VStack }         from '@chakra-ui/react';
import React                  from 'react';
import Txt                    from '../../components/txt';
import Nfts                   from '../../components/nfts';
import { WalletOfOwner }      from '../../utils/useContract';
// import { CgClose }            from "react-icons/cg";

export default function Collection(props) {

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
              // marginTop={{base:"-65px", md:"-10px", lg:"-20px", xl:"-30px", "2xl":"-40px"}}
            >
              <Center h="100%">
                <Txt fontSize={{base:"16px", sm:"25px", lg:"30px", xl:"35px", "2xl":"40px"}}
                     opacity="0.5" 
                     text="YOUR COLLECTION"
                />
              </Center>
            </Box>
            <Box
              width="100%"
              height="80%"
            >
              <Nfts nftIds={wallet} />
            </Box>
        </VStack>
      </Box>
    );
}