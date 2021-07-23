import { Heading, Flex, Img } from '@chakra-ui/react';
import React from 'react';
import mcrLogo from '../assets/mcr-logo.png'

function UnderConstuction(props) {

	return (
        
        <Flex bg="black" borderRadius={"xl"} p={20} m={10} direction="column" align="center">
            <Img
				boxSize={[150, 200]}
				src={mcrLogo} alt='mcr-logo' />
            <Heading bg="none" color="gray.100">
                under construction...
            </Heading>
        </Flex>
	)

}

export default UnderConstuction;