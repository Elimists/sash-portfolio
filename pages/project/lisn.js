import uc from '../../public/uc.svg'
import Image from 'next/image'
import styles from '../../styles/ProjectDetails.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import useScrolledDown from '../../hooks/useScrolledDown'

export default function Lisn(){
    const [showModal, setShowModal] = useState(false)
    const [imageSource, setImageSource] = useState(null)

    const isScrolled = useScrolledDown()
    function scrollToTheTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    function handleImageEnlarging(imageSource) {
        setImageSource(imageSource)
        setShowModal(true)
    }

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'auto';
        }
    }, [showModal])

    return(
        <div className={styles.container}>
            <Image src={uc} width={500} height={350} alt="Under Construction" />
            <p>This page is currently being built. Please check back later.</p>
            <Link href="/"><a>Go Back</a></Link>
        </div>
    )
}