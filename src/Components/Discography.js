import { Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import React, { forwardRef } from 'react';

const releases = [
	{
		title: "Sweet Love ft. Bob George",
		releaseDate: "2021"
	},{
		title: "Same Old Bag",
		releaseDate: "2021"
	},{
		title: "Alone ft. Rav",
		releaseDate: "2021"
	}
]

const Discography = forwardRef((props, ref) => {

	return (
		<Grid templateColumns="repeat(6, 1fr)" gap={6} alignItems="center" ref={ref} my={12}>
			<GridItem colSpan={[6, 4]} order={[2,1]}>
				<Grid templateColumns="repeat(6, 1fr)" gap={4}>
					{
						releases.map(r => {
							return (
									<>
									<GridItem colSpan={[3,4]}>
										<Text textAlign="right">
											{r.title}
										</Text>
									</GridItem>
									<GridItem colSpan={[3,2]}>
										<Text textAlign="center">{r.releaseDate}</Text>
									</GridItem>
									</>
							)
						})
					}
				</Grid>
			</GridItem>
			<GridItem colSpan={[6, 2]} order={[1,2]} justifySelf="center">
				<Heading>Discography</Heading>
			</GridItem>
		</Grid>
	)

})

export default Discography;
