import { Center, 
         Box,
         VStack }                     from '@chakra-ui/react';
import Txt                                from '../../components/txt';
import Emperors                           from '../../components/emperors';

export default function Mint(props) {

    return (
      <Box w="100%" h="100%">
          <VStack>
            <Box 
              w="100%" 
              h="20%"
              align="center"
              paddingTop={{base:"10px", md:"20px", xl:"30px"}}
            >
              <Center w="90%" h="100%">
                <Txt fontSize={{base:"16px", sm:"25px", lg:"30px", xl:"35px", "2xl":"40px"}}
                     opacity="0.5" 
                     text="CHOOSE YOUR EMPEROR TO MINT"
                />
              </Center>
            </Box>
            <Box
              w={{base:"60%", md:"100%"}}
              h="80%"
              paddingTop={{base:"10px", md:"40px", xl:"60px"}}
              paddingBottom="200px"
            >
                  <Emperors isMint={true} spacing={{base:"40px", md:"20px", lg:"40px", xl:"50px", "2xl":"60px"}}/>
            </Box>
        </VStack>
      </Box>
    );
}