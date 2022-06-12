import Link from 'next/link'
import styles from '../styles/Footer.module.css'
import {useState, useEffect, useRef} from 'react'
import {motion, AnimatePresence} from 'framer-motion'

const listOfTechAndLibraries = [
    {
        name: "NextJs",
        website: "https://nextjs.org/",
        type: "React Framework"
    },
    {
        name: "Vercel",
        website: "https://vercel.com/",
        type: "Hosting provider"
    },
    {
        name: "Framer",
        website: "https://www.framer.com/motion/",
        type: "Javascript animation library"
    },
    
    {
        name: "unDraw",
        website: "https://undraw.co/",
        type: "Open source illustrations"
    }
]

const backdrop = {
    visible: {
        opacity: 1
    },
    hidden: {
        opacity: 0
    }
}

const modalVariant = {
    hidden:{
        y: "120vh",
        opacity: 0
    },
    visible:{
        y: "12vh",
        opacity: 1,
        transition:{
            delay: .1,
            type: "spring",
            bounce: 0.3
        }
    }
}

const ModalListTechnologies = ({showModal, setShowModal}) => {

    return(
        <AnimatePresence>
            {showModal &&
                <motion.div 
                    className={styles.modal_container}
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                >

                    <motion.div 
                        className={styles.modal}
                        variants={modalVariant}
                        >
                        
                        {listOfTechAndLibraries.map((item, index) => {
                            return(
                                <div key={index.toString()} className={styles.tech_div}>
                                    <Link href={item.website}>
                                        <a target="__blank">{item.name}</a>
                                    </Link>
                                    <p>{item.type}</p>
                                </div>
                            )
                        })}
                        <div 
                            className={styles.close_button}
                            onClick={() => setShowModal(false)}
                        >
                            Close
                        </div>
                    </motion.div>
            
                </motion.div>
            }
        </AnimatePresence>
    )
}

export default function Footer(){

    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        if (showModal){
            document.body.style.overflowY = "hidden"
        }
        else{
            document.body.style.overflowY = "scroll"
        }
    }, [showModal])
    return(
        <>
            <ModalListTechnologies showModal={showModal} setShowModal={setShowModal}/>
            <footer className={styles.container}>

                <p>
                    &copy; 2022 Sash Mahara. All rights reserved.
                </p>

                <p>
                    Designed by Sash Mahara &#160; | &#160;
                    Built by &nbsp;
                    <b>
                        <a
                            className={styles.built_by} 
                            href="https://www.linkedin.com/in/pran-pandey-6a7696195" 
                            target="__blank" 
                            >
                            Pran Pandey
                        </a>
                    </b>
                </p>

                

                <p className={styles.technology_list} onClick={() => setShowModal(true)}>
                    Technologies &#38; Libraries used
                </p>

            </footer>
        </>
    )
}