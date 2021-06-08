import React, { forwardRef, useState } from 'react';
import photoA from '../assets/gallery_photos/DSC06577.jpg'
import photoB from '../assets/gallery_photos/DSC06621.jpg'
import photoC from '../assets/gallery_photos/DSC06644.jpg'
import photoD from '../assets/gallery_photos/DSC06682.jpg'
import photoE from '../assets/gallery_photos/DSC06754.jpg'
import photoF from '../assets/gallery_photos/DSC06675.jpg'
import { Box, Flex, Heading, Img } from '@chakra-ui/react';
import { useDrag } from 'react-use-gesture';

const Gallery = forwardRef((props, ref) =>  {

	const photos =[photoA, photoB, photoC, photoD, photoE, photoF]
	const [phase, setPhase] = useState(0);
	const [phaseOffset, setPhaseOffset] = useState(0);
	const phaseSize = 360/photos.length
	const bind = useDrag(params => {
		console.log(params.vxvy);
		setPhase(params.offset[0])
	})

	function handleRotate(evt) {
		let tempPhase = 0

		// function smoothToZero(x, duration, callback) {
		// 	const timestamp = performance.now();
		// 	function step(t) {
		// 		const elapsed = t - timestamp;
		// 		const percentage = ((duration - elapsed) / duration)
		// 		if (percentage > 0) {
		// 			requestAnimationFrame(step)
		// 			callback(Math.max(0, percentage) * x)
		// 		} else {
		// 			callback(0)
		// 		}
		// 	}
		// 	step(performance.now())
		// }
		
	}

	return (

	<Flex w="full" justifyContent="center" flexDirection="column" alignItems="center" ref={ref}>
		<Heading>Gallery</Heading>
		<Flex justifyContent="center" 
			w={'full'} style={{touchAction: "pan-y"}}
			position="relative" 
			overflow="hidden" {...bind()}>
			<Box flexGrow={1} bg="white" opacity=".9" zIndex={3}></Box>
			<Box w={334} h={500} position="relative"
				style={{
					perspective:"2000px",
					transform: 'scale(.6)'
				}}>
			{
				photos.map((photo, i) => {
					const angle = (1/photos.length * i * 360 + phase + phaseOffset + 360) % 360
					const z = angle < 90 || angle > 270 ? 2 : 1
					return <Img 
						position="absolute"
						pointerEvents="none"
						zIndex={z}
						key={i}
						src={photo} 
						transform={`rotateY(${angle}deg) translateZ(400px)`}/>
				})
			}
			</Box>
			<Box flexGrow={1} bg="white" opacity=".9" zIndex={3}></Box>
		</Flex>
	</Flex>
	
	)

})

export default Gallery;
