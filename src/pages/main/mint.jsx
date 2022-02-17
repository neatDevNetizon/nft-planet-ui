import { Center, Box }             from '@chakra-ui/react';
import Txt                         from '../../components/txt';
import Emperors                    from '../../components/emperors';
// import { CgClose }                        from "react-icons/cg";
// import { closeIconSize }                  from "../../components/componentSize";

export default function Mint(props) {

    return (
      <Box w="100%" h="100%">
        <Center h="100%">
          <Box
            height={{base:"100%", md:"80%"}}
            width ={{base:"100%", md:"60%"}}
            border={{base:'0px transparent', md:'2px outset white'}}
            borderRadius={{base:"10px", md:"15px", lg:"20px", xl:"25px", "2xl":"30px"}}
            align="center"
          >

{/*            <Box width="100%" align="right">
              <IconButton 
                  onClick={props.close} 
                  colorScheme='transparent'        
                  icon={<CgClose color="white" size={closeIconSize} />}
                  margin={{base:"0px", md:"2px", lg:"4px", xl:"6px", "2xl":"8px"}}
              />
            </Box> */}
            <Box 
              width="100%" 
              height="20%"
              align="center"
            >
              <Center h="100%">
                <Txt fontSize={{base:"16px", sm:"25px", lg:"30px", xl:"35px", "2xl":"40px"}}
                     opacity="0.5" 
                     text="CHOOSE YOUR EMPEROR TO MINT"
                />
              </Center>
            </Box>
            <Box
              width="100%"
              height="78%"
            >
              <Box w="100%" h="100%" overflow="hidden" position="relative">
                <Box w={{base:"102%", sm:"105%", md:"104%", lg:"103%", xl:"103%", '2xl':"102%"}} h="100%" overflowY="scroll" overflowX="hidden">
                  <Emperors isMint={true} spacing={{base:"50px", md:"30px", lg:"40px", xl:"50px", "2xl":"60px"}}/>
                </Box>
              </Box>
            </Box>
          </Box>
        </Center>
      </Box>
    );
}