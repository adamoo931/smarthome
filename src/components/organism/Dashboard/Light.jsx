import { Flex  , Box , Text} from '@chakra-ui/react';
export function Light(){
  return(
    <Flex flex={1} justifyContent='space-around'  marginTop={10}>
            {/* START OF FORMULA */}
            <Flex width={{base: '95%', sm: '30em', md: '33em', lg: '37.2em', xl: '48em', '2xl': '57.6em'}} p={3} border={'1px'} borderRadius={'20px'} borderColor={'gray.200'} padding={20} flexDirection={'column'} boxShadow={'lg'}  bg={'white'}>  
            <Text fontSize={{ base: '20px', md: '25px', lg: '30px' }} color={'black.700'} fontWeight={700} mt={6}>
                        {"Light"}
                    </Text>
                
            </Flex>
        </Flex>
  )
}