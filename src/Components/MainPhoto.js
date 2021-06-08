import { Box, Img, useBreakpoint } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import mainPhoto from '../assets/DSC06709.jpeg'

function MainPhoto(props) {

	const [offset, setOffset] = useState(0);
	const breakpoint = useBreakpoint();
	const [vw, setVw] = useState();

	useEffect(() => {
		function setWidth() {
			setVw(window.innerWidth)
		}
		setWidth()
		window.addEventListener("resize", setWidth)
		return () => window.removeEventListener("resize", setWidth)
	}, [])

	console.log(vw)

	useEffect(() => {
		function report() {
			setOffset(window.pageYOffset * .3)
		}
		window.addEventListener('scroll', report)

		return () => window.removeEventListener('scroll', report)
	}, [setOffset])

	return (
		<Box
			overflow="hidden"
			height={450 - (Math.max(1400 - vw, 0) * .3)}>
			<Img 
				style={{
					transform: `translateY(${-250 + offset + (Math.max(1400 - vw, 0) * .2)}px)`
				}}
				filter="grayscale(100%)"
				overflow="hidden"
				position="relative"
				//left={["calc((1300px - 100vw) * -.5)", null, null, null, "0px"]}
				src={mainPhoto} 
				alt={"magic carpet riders"} />
		</Box>
	)

}

export default MainPhoto;
