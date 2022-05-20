import UnderConstruction from '../public/under_construction.svg'
import Image from 'next/image'
import styles from '../styles/About.module.css'
export default function About(){

    return(
        <div className={styles.container}>
            <Image src={UnderConstruction} height={500} width={700}/>
            <p>Page is currently under construction</p>
        </div>
    )
}