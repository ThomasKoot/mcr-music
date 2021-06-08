
import { Flex, Img, useBreakpoint } from '@chakra-ui/react';
import React from 'react';
import mcrLogo from '../assets/mcr-logo.png'

import NavButton from './NavButton';

const navButtons = [
	"connect",
	"about",
	"gallery",
	"discography"
]

function Header(props) {

	const breakpoint = useBreakpoint();

	return (<>
			<Flex align='center' bg={"black"} justify="space-between"
				width='100%'>
				<Img
					boxSize={[150, 200]}
					src={mcrLogo} alt='mcr-logo' />
				<Flex justify="flex-end" flexDirection={["column", null ,"row"]} mr={[2,6]}>
						{navButtons.map(text => <NavButton 
							text={text} 
							key={text}
							onClick={props.onClick}
							size={["base", "sm"].includes(breakpoint) ? "sm" : "md"}
						/>)}
				</Flex>
			</Flex>
		</>
	)
}

export default Header;
