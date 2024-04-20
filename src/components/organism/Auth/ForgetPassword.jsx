import { Flex  , Box , Text} from '@chakra-ui/react';
import { mail, login} from '../../../assets/Images/index.js';
import {SubmitButton, InputForm} from './../../molecule/Auth/index.js'

export function ForgetPassword()
{
    return(
         <Flex flex={1} justifyContent='space-around'  marginTop={10}>
            {/* START OF FORMULA */}
            <Flex width={{base: '95%', sm: '30em', md: '33em', lg: '37.2em', xl: '48em', '2xl': '57.6em'}} p={3} border={'1px'} borderRadius={'20px'} borderColor={'gray.200'} padding={20} flexDirection={'column'} boxShadow={'lg'}  bg={'white'}>  
                <Flex  flexDirection={'column'}>
                    <center>
                        <Box>
                            <Text fontSize={{base : '20px' , md : '25px' , lg : '30px'}} color={'black.700'} className='dm-sans' fontWeight={700}>{"Password Recovery"}</Text>
                        </Box>
                        <Box >
                            <Text fontSize={{base : '15px' , md : '17px' , lg : '20px'}} marginTop={3} className='dm-sans' color={'gray.500'}>{"Enter your e-mail to recover your password"}</Text>
                        </Box>
                    </center>
                </Flex>
                <Flex flexDirection={'column'}>
                    <InputForm image={mail} text='Email'/>
                    <SubmitButton image={login} text='Submit' />
                </Flex>
            </Flex>
        </Flex>
    )
}