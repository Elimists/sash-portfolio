import styles from '../styles/Custom404.module.css'
import Link from 'next/link'

export default function Custom404(){

    return(
        <div className={styles.container}>
            <p>404</p>
            <p>Oh no! Are you lost?</p>
            <Link href="/">
                <div>
                    <p>Go Home</p>
                </div>
            </Link>
        </div>
    )
}