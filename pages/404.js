import styles from '../styles/Custom404.module.css'
import Link from 'next/link'
import SwingImage from '../public/swingaway.webp'
import Image from 'next/image'
import {motion} from 'framer-motion'

const swingVariant = {
    visible: {
        scale: 1
    },
    hidden: {
        scale: 0
    }
}

export default function Custom404(){

    return(
        <>
        <motion.div 
            className={styles.swing_image} 
            animate={
                { rotate: [-72, 72, -72, 72, -72]}
            }
            transition={{ duration: 8.2 }}
            >
            <Image
                src={SwingImage}
                height={475}
                width={711}
                placeholder="blur"
                blurDataURL={SwingImage}
                alt="Swing away to the home page"
            />
        </motion.div>
        <div className={styles.container}>
            <p>404</p>
            <p>Oh no! Are you lost?</p>
            <Link href="/">
                <div>
                    <p>Go Home</p>
                </div>
            </Link>
            
        </div>
        </>
    )
}