import styles from '../styles/TableOfContents.module.css'
import { AnimatePresence, motion, useCycle } from "framer-motion";


const itemVariants = {
    closed: {
      opacity: 0
    },
    open: { opacity: 1 }
  };
  
  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.07,
        staggerDirection: -1
      }
    },
    open: {
      transition: {
        staggerChildren: 0.07,
        staggerDirection: 1
      }
    }
};

export default function TableOfContents({toc}){

    const [open, cycleOpen] = useCycle(false, true);

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
                transition: { delay: 0.1, duration: 0.1 }
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

        <div className={styles.button_div}>
            <button onClick={cycleOpen}>{open ? "Close" : "Table of Contents"}</button>
        </div>
    </>
    )
}