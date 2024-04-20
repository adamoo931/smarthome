import { Flex, Box, Text, Image, Button, useBreakpointValue } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export function SubmitButton({ image, text }) {
    const imageWidth = useBreakpointValue({ base: '30px', md: '30px', xl: '40px', "2xl": '40px' });
    const imageHeight = useBreakpointValue({ base: '30px', md: '30px', xl: '40px', "2xl": '40px' });
    const buttonWidth = useBreakpointValue({ base: '150px', md: '150px', lg: '200px', xl: '200px', "2xl": '200px' });

    return (
        <Flex justifyContent={'center'} marginTop={100}>
            <Button
                width={buttonWidth}
                borderRadius={'20px'}
                bgGradient="linear(to-r, rgba(94,175,250,1), rgba(138,73,247,1))"
                _hover={{ bgGradient: "linear(to-r, rgba(138,73,247,1), rgba(94,175,250,1))"}}
            >
                <Flex w={'100%'} >
                    <Box display={'flex'} justifyContent={'end'} alignItems={'center'} flex={5} >
                        <Text fontSize={{base: '18px', md: '20px'}} color={'white'}>{text}</Text>
                    </Box>
                    <Box display={'flex'} justifyContent={'end'} flex={4}>
                        <Image src={image} width={imageWidth} height={imageHeight} />
                    </Box>
                </Flex>
            </Button>
        </Flex>
    )
}

SubmitButton.propTypes = {
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};
