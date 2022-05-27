import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import {useRouter} from 'next/router'
import {useState, useEffect} from 'react'

import LinkedInLogo from './logos/LinkedinLogo'
import ThemeToggle from './logos/ThemeToggle'
import SashLogo from './logos/SashLogo'


const navLinks = [
    {'name': 'Home', 'href': '/'},
    {'name': 'About', 'href': '/about'},

]
export default function Navbar(){
    const router = useRouter()
    const [activeTheme, setActiveTheme] = useState("light")

    

    function swapTheme(){
        if (activeTheme == "light"){
            setActiveTheme("dark")
        }
        else{
            setActiveTheme("light")
        }
    }
    
    
    useEffect(() => {
        document.body.dataset.theme = activeTheme
    }, [activeTheme])

    useEffect(() => {
        document.getElementById("mobile-nav-bar").style.right = "-100%"
    }, [])

    const [isMobileNavOpened, setIsMobileNavOpened] = useState(false)
    function handleMobileNavBarOpening(){
        setIsMobileNavOpened(!isMobileNavOpened)
        const navBarRight = document.getElementById("mobile-nav-bar")

        if (isMobileNavOpened){navBarRight.style.right = "0"}
        else{navBarRight.style.right = "-100%"}
    }

    
    return(
        <div className={styles.container}>
            <div className={styles.inner_content}>
                <div className={styles.sash_logo}>
                    <Link href="/">   
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

                    <div className={(activeTheme == "light") ? styles.light_theme : styles.dark_theme} onClick={() => swapTheme()}>
                        <ThemeToggle/>
                    </div>
                </div>

                <div className={styles.mobile_hamburger_menu} onClick={() => handleMobileNavBarOpening()}>
                    <div className={styles.hamburger_line}></div>
                    <div className={styles.hamburger_line}></div>
                    <div className={styles.hamburger_line}></div>
                </div>

            </div>

            {/*MOBILE NAV BAR */}
            <div className={styles.nav_link_group_mobile} id="mobile-nav-bar">
                <div className={styles.nav_mobile_close_button} onClick={() => {handleMobileNavBarOpening()}}>&times;</div>
                {navLinks.map(links => {
                    return (
                        <div>
                            <Link key={links.name} href={links.href}><a onClick={() => {handleMobileNavBarOpening()}} className={(router.pathname == links.href) ? styles.nav_links_active_mobile : styles.nav_links_inactive_mobile}>{links.name}</a></Link>
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

                <div className={(activeTheme == "light") ? styles.light_theme : styles.dark_theme} onClick={() => swapTheme()}>
                    <ThemeToggle />
                </div>
            </div>
            
        </div>
    )
}