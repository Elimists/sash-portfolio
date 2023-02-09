import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import {useRouter} from 'next/router'
import {useState, useEffect} from 'react'

import LinkedInLogo from './logos/LinkedinLogo'
import ThemeToggle from './logos/ThemeToggle'
import SashLogo from './logos/SashLogo'

import {motion} from 'framer-motion'

import useWindowDimensions from '../hooks/useWindowDimensions'

const navLinks = [
    {'name': 'Home', 'href': '/'},
    {'name': 'Blog', 'href': '/blogs'},
    {'name': 'Featured', 'href': '/featured'},
    {'name': 'About', 'href': '/about'},
    
]
export default function Navbar(){
    const router = useRouter()
    const [activeTheme, setActiveTheme] = useState("light")
    const [isMobileNavOpened, setIsMobileNavOpened] = useState(false)
    const { height, width } = useWindowDimensions()

    function swapTheme() {
        if (activeTheme == "light") {
            setActiveTheme("dark")
        }
        else {
            setActiveTheme("light")
        }
    }

    useEffect(() => {
        if (width > 650) {setIsMobileNavOpened(false)}
    }, [width])
    
    useEffect(() => {
        document.body.dataset.theme = activeTheme
    }, [activeTheme])

    useEffect(() => {
        const navBarRight = document.getElementById("mobile-nav-bar")
        if (isMobileNavOpened) {
            navBarRight.style.right = "0"
            document.body.style.overflowY = "hidden"
            //document.body.style.position = "fixed"
        }
        else {
            navBarRight.style.right = "-100%"
            document.body.style.overflowY = "scroll"
            //document.body.style.position = "relative"
        }
        
    }, [isMobileNavOpened])

    const setNavVariants = {
        hidden: {
            scale: 0.8,
            opacity: 0
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: .3
            }
        }
    }
    
    
    return(
        <div className={styles.container}>
            <div className={styles.inner_content}>

                <motion.div className={styles.motion_nav_div} variants={setNavVariants} initial="hidden" animate="visible" >
                    <div className={styles.sash_logo}>
                        <Link href="/" >   
                            <a><SashLogo /></a>
                        </Link>
                    </div>
               
                    <div className={styles.nav_link_group}>
                        {navLinks.map(links => {
                            return(
                            <Link key={links.name} href={links.href}><a className={(router.pathname == links.href) ? styles.nav_links_active : undefined}>{links.name}</a></Link>
                            )
                        })}
                        
                        <div className={styles.linkedin_logo}>
                            <Link href="https://www.linkedin.com/in/sashmahara" passHref={true}>
                                <a target="_blank">
                                    <LinkedInLogo/>
                                </a>
                            </Link>
                        </div>

                        {/** 
                        <div className={(activeTheme == "light") ? styles.light_theme : styles.dark_theme} onClick={() => swapTheme()}>
                            <ThemeToggle/>
                        </div>
                        */}
                        
                    </div>
                </motion.div>
                
                <motion.div initial={setNavVariants.initial} animate={setNavVariants.animate} variants={setNavVariants}>
                    <div className={styles.mobile_hamburger_menu} onClick={() => setIsMobileNavOpened(prevState => !prevState)}>
                        <div className={styles.hamburger_line}></div>
                        <div className={styles.hamburger_line}></div>
                        <div className={styles.hamburger_line}></div>
                    </div>
                </motion.div>

            </div>

            {/*MOBILE NAV BAR */}
            <div className={styles.nav_link_group_mobile} id="mobile-nav-bar">
                <div className={styles.nav_mobile_close_button} onClick={() => setIsMobileNavOpened(prevState => !prevState)}>&times;</div>
                {navLinks.map(links => {
                    return (
                        <div key={links.name}>
                            <Link href={links.href}><a onClick={() => setIsMobileNavOpened(prevState => !prevState)} className={(router.pathname == links.href) ? styles.nav_links_active_mobile : styles.nav_links_inactive_mobile}>{links.name}</a></Link>
                        </div>
                    )
                })}

                <div>
                    <Link href="https://www.linkedin.com/in/sashmahara" passHref={true}>
                        <a target="_blank">
                            <LinkedInLogo />
                        </a>
                    </Link>
                </div>

                {/** 
                <div className={(activeTheme == "light") ? styles.light_theme : styles.dark_theme} onClick={() => swapTheme()}>
                    <ThemeToggle />
                </div>
                */}
            </div>
            
        </div>
    )
}