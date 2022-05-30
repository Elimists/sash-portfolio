import UnderConstruction from '../public/under_construction.svg'
import Image from 'next/image'
import styles from '../styles/About.module.css'
import {useState, useEffect} from 'react'

import AboutSashImage from '../public/about_image.png'
import AboutSashImageMobile from '../public/about_image_mobile.png'
import useWindowDimensions from '../hooks/useWindowDimensions'

export default function About(){

    const { height, width } = useWindowDimensions()

    const [isMobileView, setIsMobileView] = useState(false)
    useEffect(() => {
        if (width < 750) {
             setIsMobileView(true) 
        }
        else { setIsMobileView(false)}
    }, [width])

    return(
        <>
            <div className={styles.container}>
                { !isMobileView ? 
                    <div className={styles.image_container}>
                        <Image src={AboutSashImage} />
                    </div> :
                    <div className={styles.image_container}>
                        <Image src={AboutSashImageMobile} />
                    </div>
                    }
               
                <div className={styles.about_section}>
                    <h3 className={styles.meet_sash}>Meet Sash</h3>
                    <p>I am a very cool designer. I love designing Stuff. Designing stuff is my passion.</p>
                    <p>I like to think that I am a free spirit. Im just trying to find my path in this world.</p>
                    <p>So holla &#x40; me on Linkedin. Peace out. Also, my shades are cool!</p>
                    <div tabIndex="0" className={styles.view_resume_button}>
                        View Resume
                    </div>
                </div>
            </div>
        </>

       
    )
}