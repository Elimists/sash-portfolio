import uc from '../../public/uc.svg'
import Image from 'next/image'
import styles from '../../styles/ProjectDetails.module.css'
import Link from 'next/link'
export default function Lisn(){
    return(
        <div className={styles.container}>
            <Image src={uc} width={500} height={350} alt="Under Construction" />
            <p>Items are currentnly being added into the page. Please check back later.</p>
            <Link href="/"><a>Go Back</a></Link>
        </div>
    )
}