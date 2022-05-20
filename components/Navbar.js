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

                <Image src={SashLogo}></Image>
                <div className={styles.nav_link_group}>
                    <Link href='/'><a className={(router.pathname == "/") && styles.nav_links_active}>Home</a></Link>
                    <Link href='/about'><a className={(router.pathname == "/about") && styles.nav_links_active}>About</a></Link>
                </div>

            </div>
        </div>
    )
}