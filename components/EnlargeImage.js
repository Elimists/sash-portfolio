import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import styles from '../styles/EnlargeImage.module.css'


const backdrop = {
    visible: {
        scale: 1.05,
        transition: { duration: .5 },
    },
    hidden: {
        scale: 0,
        transition: {duration: .5},
    }
}

const closeButton = {
    visible: {
        opacity: 1,
        transition: {duration: 1.5}
    },
    hidden:{
        opacity: 0,
    }

}
export default function EnlargeImage({ showModal, setShowModal, imageSource}){

    
    return (
        <AnimatePresence exitBeforeEnter>
            {showModal &&
                <motion.div
                    className={styles.container}
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                    >
                        {(imageSource != null) &&
                            <Image src={imageSource} width={imageSource.naturalWidth} height={imageSource.naturalHeight}></Image>
                        }

                        <motion.div 
                            className={styles.close_button} 
                            onClick={() => {setShowModal(false)}}
                            variants={closeButton}
                            initial="hidden"
                            animate="visible">
                                Close
                        </motion.div>
                </motion.div>
            }
        </AnimatePresence>
    )
}
