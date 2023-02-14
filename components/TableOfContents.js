import styles from '../styles/TableOfContents.module.css'
import { AnimatePresence, motion, useCycle } from "framer-motion";
import useWindowDimensions from '../hooks/useWindowDimensions'
import {useState, useEffect} from 'react'


const itemVariants = {
    closed: {
      opacity: 0
    },
    open: { opacity: 1 }
  };
  
  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.0,
        staggerDirection: -1
      }
    },
    open: {
      transition: {
        staggerChildren: 0.02,
        staggerDirection: 1
      }
    }
};

export default function TableOfContents({toc}){

    const [open, cycleOpen] = useCycle(false, true);
    const { height, width } = useWindowDimensions()

    const [mobileToCMenu, setMobileToCMenu] = useState(false)
    useEffect(() => {
        if (width <= 1500) {setMobileToCMenu(true)}
    }, [width])

    return(
        
        <>
        <AnimatePresence>
            {open && (
            <motion.aside
                initial={{ width: 0 }}
                animate={{
                width: 300
                }}
                exit={{
                width: 0,
                transition: { delay: 0.03, duration: 0.03 }
                }}
            >
                <motion.div
                className={styles.container}
                initial="closed"
                animate="open"
                exit="closed"
                variants={sideVariants}
                >
                {toc.map(({ id, title }, index) => (
                    <motion.a
                    key={index.toString()}
                    href={`#${id}`}
                    whileHover={{ scale: 1.05 }}
                    variants={itemVariants}
                    >
                        {title}
                    </motion.a>
                ))}
                </motion.div>
            </motion.aside>
            )}
        </AnimatePresence>
        
        {(mobileToCMenu) ? 
        <div className={styles.mobile_button_div}>
            <button onClick={cycleOpen}>{open ? "<" : ">>"}</button>
        </div> :
        <div className={styles.button_div}>
            <button onClick={cycleOpen}>{open ? "Close" : "Table of Contents"}</button>
        </div>
        }
        
    </>
    )
}