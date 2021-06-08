import { Text, Flex } from '@chakra-ui/react';
import React from 'react';

function Footer(props) {

	return (
		<Flex h={150} alignItems="center" bg="black">
			<Text flexGrow={1} textAlign="center" color="white" cursor="pointer"
				onClick={() => window.scrollTo({
					top: 0,
					left: 0,
					behavior: 'smooth'
				})}>
					© Magic Carpet Riders 2021
			</Text>
		</Flex>
	)

}

export default Footer;
