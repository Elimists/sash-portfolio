import UnderConstruction from '../public/under_construction.svg'
import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function About(){

    return(
        <>
            {/** 
            <div className={styles.lottie_animation}>
            <lottie-player  src="https://assets8.lottiefiles.com/packages/lf20_pnrpmopy.json" background="transparent" speed="1" autoplay></lottie-player>
            </div>
            */}
           
            <div className={styles.container}>
                <Image src={UnderConstruction} height={500} width={700} alt="Under Construction"/>
                <p>Page is currently under construction</p>
            </div>
       
        </>

       
    )
}