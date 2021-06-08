import { Grid, GridItem, Heading } from '@chakra-ui/react';
import React, { forwardRef } from 'react';
import { SocialIcon } from 'react-social-icons';

const Social = forwardRef((props, ref) => {

	const urls = [
		"https://soundcloud.com/magiccarpetriders",
		"https://www.instagram.com/magic_carpet_riders/",
		"https://twitter.com/RidersCarpet",
		"https://open.spotify.com/artist/34iyDqhMLFcEbJCh4EAbO0",
		"mailto:info@mcr-music.nl"
	]

	return (
		<Grid templateColumns="repeat(6, 1fr)" gap={6} alignItems="center" mx={8} my={20} ref={ref}>
			<GridItem colSpan={[6, 2]}>
				<Heading w="full" textAlign="center">Connect</Heading>
			</GridItem>
			<GridItem colSpan={[6, 4]} mx={[2,0]}>
				<Grid templateColumns="repeat(6, 1fr)" gap={3}>
					{urls.map(url => {
						return (
							<GridItem colSpan={[3,2,2,1]} key={url} justifySelf="center" my={4}>
								<SocialIcon url={url} target="blank"/>
							</GridItem>
						)
					})}
				</Grid>
			</GridItem>
		</Grid>
		
	)
})

export default Social;
