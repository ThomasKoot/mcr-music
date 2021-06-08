import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton, Img, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
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

	return (<>
			<Flex align='center' bg={"black"} 
				width='100%'>
				<Img
					boxSize={200}
					src={mcrLogo} alt='mcr-logo' />
				<Flex w={'100%'} justify="flex-end" >
					<Box display={["none", "block"]} mr={[4,null,null,8,10]}>
						{navButtons.map(text => <NavButton text={text} key={text} onClick={props.onClick}/>)}
					</Box>
					<Box display={["block", "none"]} mr={4}>
						<Menu >
							<MenuButton
								as={IconButton}
								icon={<HamburgerIcon />}
								aria-label="Options"
							/>
							<MenuList>
								{navButtons.map(text => <MenuItem key={text} onClick={props.onClick(text)}>{text}</MenuItem>)}
							</MenuList>
						</Menu>
					</Box>
				</Flex>
			</Flex>
		</>
	)
}

export default Header;
