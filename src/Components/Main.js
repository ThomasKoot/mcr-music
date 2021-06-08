import React, { useEffect, useRef, useState } from 'react';
import Bio from './Bio';
import Discography from './Discography';
import Footer from './Footer';
import Gallery from './Gallery';
import Header from './Header';
import MainPhoto from './MainPhoto';
import MainPhotoMobile from './MainPhotoMobile';
import Social from './Social';


function Main(props) {

	const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 600px)').matches)
	const elements = {
		'connect' : useRef(),
		'about' : useRef(),
		'gallery' : useRef(),
		'discography' : useRef()
	}

	useEffect(() => {
		function checkScreenSize() {
			const newIsMobile = window.matchMedia('(max-width: 600px)').matches
			if ( newIsMobile !== isMobile) {
				setIsMobile(newIsMobile)
			}
		}
		window.addEventListener('resize', checkScreenSize)
		return () => window.removeEventListener('resize', checkScreenSize)
	}, [setIsMobile, isMobile])

	function handleNavClick(button) {
		return function() {
			elements[button].current.scrollIntoView({ behavior: 'smooth' })
		}
	}
	

	return (
		<>
			<Header onClick={handleNavClick}/>
			{ isMobile ? <MainPhotoMobile /> : <MainPhoto /> }
			<Social ref={elements.connect}/>
			<Bio ref={elements.about}/>
			<Gallery ref={elements.gallery}/>
			<Discography ref={elements.discography}/>
			<Footer />
		</>
	)
}

export default Main;
