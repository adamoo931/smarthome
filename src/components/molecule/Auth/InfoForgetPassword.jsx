import { Flex  , Box , Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export function InfoForgetPassword()
{
    return(
        <Flex justifyContent={'end'} marginTop={2}>
            <Box marginRight={{base : '15%' , md : '24%', lg : '25%'}}>
                <Link to='/forget-password'>
                    <Text fontSize={{base : '12px' , md : '14px'}} color={'gray.500'} className='dm-sans'>Forgot password?</Text>
                </Link>
            </Box>
        </Flex>
    )
}