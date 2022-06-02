import UnderConstruction from '../public/under_construction.svg'
import Image from 'next/image'
import styles from '../styles/About.module.css'
import {useState, useEffect} from 'react'

import AboutSashImage from '../public/about_image.png'
import AboutSashImageMobile from '../public/about_image_mobile.png'
import useWindowDimensions from '../hooks/useWindowDimensions'

import {motion} from 'framer-motion'




export default function About(){

    const { height, width } = useWindowDimensions()

    const [isMobileView, setIsMobileView] = useState(false)
    useEffect(() => {
        if (width < 1000) {
             setIsMobileView(true) 
        }
        else { setIsMobileView(false)}
    }, [width])

    const setImageVariants = {
        hidden: {
            x: -350
        },
        visible: {
            x: 0,
            transition: {
                duration: .55
            }
        }
    }

    const setMeetSashVariants = {
        hidden: {
            x: 350
        },
        visible: {
            x: 0,
            transition: {
                duration: .55
            }
        }
    }

    return(
        <>
            <div className={styles.container}>
                { !isMobileView ? 
                    <motion.div 
                        className={styles.image_container}
                        variants={setImageVariants} 
                        initial="hidden"
                        animate="visible">
                        <Image src={AboutSashImage} quality={100} unoptimized={true} loading="eager"/>
                    </motion.div> :
                    <motion.div 
                        className={styles.image_container}
                        variants={setImageVariants}
                        initial="hidden"
                        animate="visible">
                        <Image src={AboutSashImageMobile} quality={100} unoptimized={true} loading="eager"/>
                    </motion.div>
                    }
               
                <motion.div 
                    className={styles.about_section}
                    variants={setMeetSashVariants}
                    initial="hidden"
                    animate="visible">
                    <h3 className={styles.meet_sash}>Meet Sash</h3>
                    <p>Hi there! I&#39;m an Industrial Designer from Canada who loves to create unique and meaningful products.</p>
                    <p>I completed my Bachelor&#39;s degree in Industrial Design from Carleton University in 2022. My projects included 
                        a blend of physical and digital products which has provided me with a multi-disciplinary skill set in areas 
                        such as UX/UI, physical and digital prototyping, CAD, manufacturing, human factors, and marketing. 
                    </p>
                    <p>In summer of 2021 I interned at StarFish Medical, Canada&#39;s largest medical product engineering consultancy. 
                        I worked on a variety of medical products from handheld surgical equipment to large scale incubators. 
                        My focus was on user-experience analysis as well as early stage prototyping and concept development.
                    </p>
                    <p>From 2021 - 2022 I worked as a UX/UI Designer at  LISN, a podcast platform that developed AI technologies to 
                        enchance podcast discovery and curation. I conducted user research analysis and concept development for 
                        new product features and integration. I lead the design of new customer on-boarding flows and the redesign 
                        of the platform for their LISN 2.0 launch.
                    </p>
                    <p>Outside of design you can find me creating sci-fi concept art, planning my next camping trip, or making homemade pizza. 
                        Get in touch if you want a slice! 
                     </p>
                    
                    <div className={styles.button_container}>
                        <a tabIndex="0" className={styles.view_resume_button} href="https://drive.google.com/file/d/12Y5TtXeRIY8R-bKxoWOFnFrtpOI8rAyX/view" target="_blank" rel="noreferrer">
                            <span className={styles.material_symbols_sharp}>
                                description
                            </span>
                            View Resume
                        </a>
                        <a tabIndex="0" className={styles.view_resume_button} href="mailto: sash.mahara@gmail.com">
                            
                            <span className={styles.material_symbols_sharp}>
                                mail
                            </span>
                            Get In Touch
                        </a>
                    </div>
                </motion.div>
            </div>
        </>

       
    )
}