import Image from 'next/image'
import Link from 'next/link'
import EnlargeImage from '../../components/EnlargeImage'
import { useState, useEffect } from 'react'
import useScrolledDown from '../../hooks/useScrolledDown'

/** Assets realted to the project Core.  */
import styles from '../../styles/Homie.module.css'
import CoreTitleSvg from '../../components/svgImages/core/CoreTitleSvg'
import CoreImage from '../../public/projects/core/core.webp'
import CoreProcessSvg from '../../components/svgImages/core/CoreProcessSvg'

export default function CoreBP(){
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
        <>
            <EnlargeImage
                showModal={showModal}
                setShowModal={setShowModal}
                imageSource={imageSource}
            />

            <div className={styles.container}>
                <section className={styles.top_section}>
                    <div>
                        <CoreTitleSvg/>
                        <p>
                            Product redesign of a blood pressure monitor with a mobile 
                            application geared towards athletes.
                        </p>
                        <p>Industrial Design - User Research - UX/UI Rapid Prototyping - CAD</p>
                    </div>

                    <Image
                        src={CoreImage}
                        width={650}
                        height={430}
                        placeholder="blur"
                        blurDataURL={CoreImage}
                        alt="Core Image"
                    />
                </section>

                <section className={styles.synopsis}>
                    <div>
                        <h3>Duration</h3>
                        <p>3 Months</p>
                    </div>
                    <div>
                        <h3>Role</h3>
                        <p>Product Designer</p>
                    </div>
                    <div>
                        <h3>Type</h3>
                        <p>Individual Project</p>
                    </div>
                    <div>
                        <h3>Methods &#38; Tools</h3>
                        <p>Secondary Research, Market Research, User tests, Product autopsy, 3D printing</p>
                    </div>
                </section>

                <section className={styles.overview_section}>
                    <div className={styles.heading_bar}></div>
                    <h1>Overview</h1>
                    <p>
                        This third year project prompted students to choose an already 
                        existing product and analyze its use. From there the objective 
                        was to redesign the product for a new environment or user group 
                        using research into economics, existing technology, user needs, 
                        and manufacturing.
                    </p>
                </section>

                <section className={styles.problem_section}>
                    <div className={styles.heading_bar}></div>
                    <h1>Problem</h1>
                    <p>
                        Many professional and amateur athletes track their blood pressure 
                        to monitor existing conditions or prevent future health complications. These 
                        users require a device that can fit their active lifestyle and send their health 
                        data to their coaches or health professionals. Most blood pressure monitors are 
                        not designed for quick everyday use and frequent portability. Furthermore most 
                        blood pressure monitors have connectors and wires that make it cumbersome to 
                        operate.
                    </p>
                </section>

                <section className={styles.process_section}>
                    <div className={styles.heading_bar}></div>
                    <h1>Process</h1>
                    <div>
                        <CoreProcessSvg/>
                    </div>
                </section>
                
            </div>
        </>
    )
}