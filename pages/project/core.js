import uc from '../../public/uc.svg'
import Image from 'next/image'
import styles from '../../styles/ProjectDetails.module.css'
import Link from 'next/link'

export default function CoreBP(){
    return(
        <div className={styles.container}>
            <Image src={uc} width={500} height={350} alt="Under Construction" />
            <p>This page is currently being built. Please check back later.</p>
            <Link href="/"><a>Go Back</a></Link>
        </div>
    )
}