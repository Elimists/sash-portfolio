import styles from '../styles/Navbar.module.css'
import SashLogo from '../public/sash-logo.svg'
import Link from 'next/link'
import Image from 'next/image'
export default function Navbar(){
    return(
        <div className={styles.container}>
            <div className={styles.inner_content}>

                <Image src={SashLogo}></Image>
                <div className={styles.nav_link_group}>
                    <Link href='/'><a>Home</a></Link>
                    <Link href='/about'><a>About</a></Link>
                </div>
                
            </div>
        </div>
    )
}