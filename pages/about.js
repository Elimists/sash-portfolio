import UnderConstruction from '../public/under_construction.svg'
import Image from 'next/image'
import styles from '../styles/About.module.css'

import AboutSashImage from '../public/about_image.png'

export default function About(){

    return(
        <>
            <div className={styles.container}>
                <div className={styles.image_container}>
                    <Image src={AboutSashImage}/>
                </div>
                <div className={styles.about_section}>
                    <h3 className={styles.meet_sash}>Meet Sash</h3>
                    <p>I am a very cool designer. I love designing Stuff. Designing stuff is my passion.</p>
                    <p>I like to think that I am a free spirit. I'm just trying to find my path in this world.</p>
                    <p>So holla @ me on Linkedin. Peace out.</p>
                    <div tabIndex="0" className={styles.view_resume_button}>
                        View Resume
                    </div>
                </div>
            </div>
        </>

       
    )
}