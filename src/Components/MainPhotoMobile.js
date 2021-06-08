import { Img } from '@chakra-ui/react';
import React from 'react';
import main_photo_mobile from '../assets/main_photo_mobile.jpg'

function MainPhotoMobile(props) {

	return (
		<div >
			<Img w="full" src={main_photo_mobile} alt="magic carpet riders" />
		</div>
	)

}

export default MainPhotoMobile;
