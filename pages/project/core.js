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
import ResearchImage from '../../public/projects/core/research.webp'
import ProjectionImage from '../../public/projects/core/gbprojections.webp'
import MarketShareImage from '../../public/projects/core/gbmarketshare.webp'

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
                
                <section className={styles.research_section}>
                    <div className={styles.heading_bar}></div>
                    <h1>Research</h1>
                    <p>
                        Through research it was found that many professional athletes actually suffer
                        from high blood pressure also known as hypertension. In fact hypertension 
                        was found to be the most common cardiovascular complication affecting 
                        athletes. Further more sudden cardiac arrest is the leading cause of death 
                        in young athletes. As a result most athletes today use some type of digital 
                        tool to track their vitals, training, and recovery to help monitor their 
                        health and give themselves a competitive edge.
                    </p>
                    <div>
                        <Image
                            src={ResearchImage}
                            width={1057}
                            height={464}
                            placeholder="blur"
                            blurDataURL={ResearchImage}
                            alt="Brain Storm Session"
                        />
                    </div>
                </section>

                <section className={styles.market_econ_section}>
                    <div className={styles.heading_bar}></div>
                    <h1>Market Economics</h1>
                    <p>
                        Within the research phase, the blood pressure monitor (BPM) market was 
                        evaluated. BPM market economics data shows that the demand for BPMs is 
                        projected to increase due to urbanization and modernization worldwide. 
                        The 1.5 billion dollar industry is projected to grow to a further 2.7 
                        billion dollars by 2025. Most popular BPM devices on the market today are 
                        digital monitors.
                    </p>
                    <div>
                        <div>
                            <Image
                                src={ProjectionImage}
                                width={530}
                                height={281}
                                placeholder="blur"
                                blurDataURL={ProjectionImage}
                                alt="Projection"
                            />
                            <p>Global Blood Pressure Monitor Market Size with projections</p>
                        </div>
                        <div>
                            <Image
                                src={MarketShareImage}
                                width={530}
                                height={284}
                                placeholder="blur"
                                blurDataURL={MarketShareImage}
                                alt="Market Share"
                            />
                            <p>Global Blood Pressure Monitor Market Share by monitor type</p>
                        </div>
                        
                    </div>
                </section>

                <section className={styles.analysis_section}>
                    <div className={styles.heading_bar}></div>
                    <h1>Analysis</h1>
                    <p>
                        Research was done into the life of a professional athlete to see what 
                        their daily routine was and how they utilize health devices in their 
                        day to day tasks. After learning more about the specific user, product 
                        testing was done using a real blood pressure monitor while keeping 
                        their persona in mind. The goal was to see what the experience would 
                        be for this person when using a blood pressure monitor.
                    </p>
                </section>

            </div>
            {(isScrolled) ? <div tabIndex="0" role="button" className={styles.go_top_button} onClick={() => scrollToTheTop()} onKeyDown={(e) => handleOnEnterPressToTop(e)}>&uarr;</div> : null}
        </>
    )
}