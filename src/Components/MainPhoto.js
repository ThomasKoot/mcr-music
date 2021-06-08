import { Box, Img } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import mainPhoto from '../assets/DSC06644.jpeg'

function MainPhoto(props) {

	const [offset, setOffset] = useState(0);

	useEffect(() => {
		function report() {
			setOffset(window.pageYOffset * .5)
		}
		window.addEventListener('scroll', report)

		return () => window.removeEventListener('scroll', report)
	}, [setOffset])

	return (
		<Box
			overflow="hidden"
			height="350px">
			<Img 
				style={{
					transform: `translateY(${-200 + offset}px)`
				}}
				htmlHeight="600px"
				htmlWidth="1500px"
				maxWidth="1500px"
				maxHeight="600px"
				overflow="hidden"
				position="relative"
				left={["calc((1000px - 100vw) * -.5)", null, null, "0px"]}
				src={mainPhoto} 
				alt={"magic carpet riders"} />
		</Box>
	)

}

export default MainPhoto;
