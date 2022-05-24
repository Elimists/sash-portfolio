import styles from '../styles/Navbar.module.css'
import SashLogo from '../public/sash-logo.svg'
import Link from 'next/link'
import Image from 'next/image'
import {useRouter} from 'next/router'

export default function Navbar(){
    const router = useRouter()
    return(
        <div className={styles.container}>
            <div className={styles.inner_content}>
                <Link href="/">
                    <a><Image src={SashLogo} alt="Sash Mahara Logo"/></a>
                </Link>
                <div className={styles.nav_link_group}>
                    <Link href='/'><a className={(router.pathname == "/") ? styles.nav_links_active : undefined}>Home</a></Link>
                    <Link href='https://www.linkedin.com/in/sashmahara/?originalSubdomain=ca'><a target="_blank">About</a></Link>
                    {/*<Link href='/about'><a className={(router.pathname == "/about") ? styles.nav_links_active : undefined}>About</a></Link>*/}

                </div>

            </div>
        </div>
    )
}