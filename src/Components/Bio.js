import { Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import React, { forwardRef } from 'react';

const Bio = forwardRef((props, ref) => {

	return (
		<Grid templateColumns="repeat(6, 1fr)" gap={6} alignItems="center" mx={8} my={20} ref={ref} >
			<GridItem colSpan={[6, 4]} order={[2,1]} >
				<Text w="full" textAlign={["center", "right"]}>
					The Magic Carpet Riders learned the craft of DJ’ing by playing countless nights in the Dutch and Egyptian club-scene. Although there are both extremely flexible DJ’s, they share a deep love for classic house music. They decided to join forces and start a production-duo, “Sweet Love” released in 2021 is their debut single. The music of the Magic Carpet Riders pays homage to the classic house sound, but does not shy away from exploring new sonic territories. This duo is sure to bring more modern classic house bangers in the upcoming months!
				</Text>
			</GridItem>
			<GridItem colSpan={[6, 2]} order={[1,2]} justifySelf={"center"}>
				<Heading>About</Heading>
			</GridItem>
		</Grid>
	)
})

export default Bio;
