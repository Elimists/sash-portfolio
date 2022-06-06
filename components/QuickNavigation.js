import styles from '../styles/QuickNavigation.module.css'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'


const quickNavVariants = {
    visible: {
        x: -10,
        scale: 1.05,
        transition: { duration: .5 },
    },
    hidden: {
        x: 400,
        scale: 0,
        transition: { duration: .5 },
    }
}
export default function QuickNavigation({quickNavPressed, setQuickNavPressed, elementIds}){

    function handleQuickNavPress(elementId){
        var elemId = elementId.toString().replace(/\s/g, "")
        var newElemId = "#" + elemId
        document.getElementById(newElemId).scrollIntoView({behavior:"smooth"})
    }

    const [theElementId, setTheElementId] = useState("")
    const [allElementIds, setAllElementIds] = useState(null)

    useEffect(() => {
        setAllElementIds(elementIds)
    }, [])
    
    
  
    return(
        <AnimatePresence exitBeforeEnter>
            {quickNavPressed &&
                <>
                {(allElementIds == null) ? <div>Loading</div> :
                <motion.div 
                    className={styles.element_id_container}
                    variants={quickNavVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{x: 400, scale: 0, duration: .5}}>
                    <p>Quick Navigation</p>
                    {allElementIds.map((elementId, index) => {
                        return(
                            <div 
                                key={index.toString()} 
                                className={(theElementId === elementId) ? styles.element_div_active: styles.element_div}
                                onClick={() => [setTheElementId(elementId), handleQuickNavPress(elementId), setQuickNavPressed(false)]}>{(index + 1).toString()}. &nbsp; {elementId}</div>
                        )
                    })}
                </motion.div>
                }
                </>
            }
        </AnimatePresence>
    )
}