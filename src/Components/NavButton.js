import { Button } from '@chakra-ui/react';
import React from 'react';

function NavButton(props) {

	return (
		<Button variant="outline" colorScheme="whiteAlpha" m={2} onClick={props.onClick(props.text)}>
			{props.text}
		</Button>
	)

}

export default NavButton;
