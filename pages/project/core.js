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
import AnalysisImage1 from '../../public/projects/core/analysis1.webp'
import AnalysisImage2 from '../../public/projects/core/analysis2.webp'
import AnalysisImage3 from '../../public/projects/core/analysis3.webp'
import ProjectAutopsyImage1 from '../../public/projects/core/autopsy1.webp'
import ProjectAutopsyImage2 from '../../public/projects/core/autopsy2.webp'
import ProjectAutopsyImage3 from '../../public/projects/core/autopsy3.webp'
import ProjectAutopsyImage4 from '../../public/projects/core/autopsy4.webp'
import IdeationImage1 from '../../public/projects/core/ideation1.webp'
import IdeationImage2 from '../../public/projects/core/ideation2.webp'
import IdeationImage3 from '../../public/projects/core/ideation3.webp'
import IdeationImage4 from '../../public/projects/core/ideation4.webp'
import PivotImage1 from '../../public/projects/core/pivot1.webp'
import PivotImage2 from '../../public/projects/core/pivot2.webp'
import FinalDesignImage1 from '../../public/projects/core/final1.webp'
import FinalDesignImage2 from '../../public/projects/core/final2.webp'
import FinalDesignImage3 from '../../public/projects/core/final3.webp'
import FinalDesignImage4 from '../../public/projects/core/final4.webp'
import FinalDesignImage5 from '../../public/projects/core/final5.webp'
import UxUiDevImage1 from '../../public/projects/core/uxuidev1.webp'
import UxUiDevImage2 from '../../public/projects/core/uxuidev2.webp'
import FinalPresentationImage from '../../public/projects/core/finalpresentation.webp'

import LisnProjectImage from '../../public/projects/lisn/lisn.webp'
import HomieProjectImage from '../../public/projects/homie/homie.webp'


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
                    <div>
                        <h3>Persona</h3>
                        <div>
                            <Image
                                src={AnalysisImage1}
                                width={496}
                                height={144}
                                placeholder="blur"
                                blurDataURL={AnalysisImage1}
                                alt="Professional cross country skier"
                            />
                        </div>
                        <p>
                            Sami trains for 5 hours on a typical day. He will Start his day early 
                            with a large breakfast and a health analysis going over his muscle and 
                            joint pain, as well as any cold or flu symptoms. He inputs his health 
                            data into a fitness recovery program which will assess if he is okay to 
                            train again or if he should take a rest day. His first training routine 
                            is 2 hours long. After this he will eat lunch and take a nap. Around 
                            midday he will have another meal and begin his second 2 hour training 
                            session. In the evenings he will spend time with his family and have 
                            dinner. After dinner he will do light exercise such as running or 
                            cycling before winding down for bed at 10pm.
                        </p>
                        <h3>User Analysis</h3>
                        <div>
                            <div>
                                <Image
                                    src={AnalysisImage2}
                                    width={376}
                                    height={282}
                                    placeholder="blur"
                                    blurDataURL={AnalysisImage2}
                                    alt="Blood Pressure monitor used for user analysis"
                                />
                            </div>
                            <div>
                                <Image
                                    src={AnalysisImage3}
                                    width={798}
                                    height={353}
                                    placeholder="blur"
                                    blurDataURL={AnalysisImage3}
                                    alt="Analysis using drawings."
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.ideation_section}>
                    <div className={styles.heading_bar}></div>
                    <h1>Project Autopsy</h1>
                    <p>
                        The blood pressure monitor was then taken apart to learn more about the 
                        size and shape of the internal components and the technology behind the 
                        device.
                    </p>
                    <div>
                        <div>
                            <Image
                                src={ProjectAutopsyImage1}
                                width={612}
                                height={500}
                                placeholder="blur"
                                blurDataURL={ProjectAutopsyImage1}
                                alt="Product deconstruction to better understand design"
                            />
                            <p>Product Deconstruction</p>
                        </div>
                        <div>
                            <Image
                                src={ProjectAutopsyImage2}
                                width={402}
                                height={259}
                                placeholder="blur"
                                blurDataURL={ProjectAutopsyImage2}
                                alt="Product cannot be stored properly and is cluttered"
                            />
                            <p>Product is not well designed for easy storage. This makes daily use annoying and messy.</p>
                        </div>
                        <div>
                            <Image
                                src={ProjectAutopsyImage3}
                                width={232}
                                height={257}
                                placeholder="blur"
                                blurDataURL={ProjectAutopsyImage3}
                                alt="Product display is outdate and could use a refresher"
                            />
                            <p>Product display is outdated and could use a refresh.</p>
                        </div>
                    </div>
                    <p>
                        The key components were measured and cut out into shapes that mimicked 
                        their size. These were then used to ideate a new component layout, and 
                        to help guide a more feasible design.
                    </p>
                    <div>
                        <div>
                        <Image
                            src={ProjectAutopsyImage4}
                            width={673}
                            height={442}
                            placeholder="blur"
                            blurDataURL={ProjectAutopsyImage4}
                            alt="Product was deconstructed and a 2D diagram was drawn of its internal parts"
                        />
                        <p>Product was deconstructed and a 2D diagram was drawn of its internal parts.</p>
                        </div>
                    </div>
                </section>
                
                <section className={styles.ideation_core_section}>
                    <div className={styles.heading_bar}></div>
                    <h1>Ideation &#38; Concept Development</h1>
                    <p>
                        The blood pressure monitor was then taken apart to learn more about the 
                        size and shape of the internal components and the technology behind the 
                        device.
                    </p>
                    <div>
                        <h3>Product Inspiration</h3>
                        <p>
                            Taking a look into modern fitness products, current product trends 
                            lean towards clean and minimal designs. Most products have neutral 
                            colors with black and white being the most common.
                        </p>
                        <div>
                            <Image
                                src={IdeationImage1}
                                width={566}
                                height={215}
                                placeholder="blur"
                                blurDataURL={IdeationImage1}
                                alt="High-end health and fitness products"
                            />
                            <p>High-end health and fitness products</p>
                        </div>

                        <h3>Initial Sketches</h3>
                        <p>
                            The idea started off by trying to explore solutions for a blood 
                            pressure monitor that could be used wirelessly and charge on a dock 
                            when not in use. Focus was kept on making sure the display could 
                            face the user and not be hard to see.
                        </p>
                        <div>
                            <Image
                                src={IdeationImage2}
                                width={762}
                                height={452}
                                placeholder="blur"
                                blurDataURL={IdeationImage2}
                                alt="Concept sketches for a wireless device"
                            />
                            <p>Concept sketches for a wireless device</p>
                        </div>
                        <p>
                            From the ideation sketches low-fidelity mock-ups were constructed 
                            to test the ideas and rank them among each other. Model 4 ranked 
                            the highest in user testing due to its simple form factor, ease of 
                            cuff storage and easy to see display position.
                        </p>
                        <div>
                            <Image
                                src={IdeationImage3}
                                width={755}
                                height={361}
                                placeholder="blur"
                                blurDataURL={IdeationImage3}
                                alt="User testing different forms"
                            />
                            <p>User testing different forms</p>
                        </div>

                        <h3>Final Concept</h3>
                        <p>
                            Although the finalized concept addressed many of the pain points 
                            from our original blood pressure monitor, it still had a few 
                            shortcomings that were discovered. The main issue with the 
                            finalized concept was that it did not allow for easy portability 
                            as the form was difficult to store. Further ideation was needed to 
                            increase portability and reduce the form factor for traveling 
                            purposes. Exploration into a collapsible device was investigated.
                        </p>
                        <div>
                            <Image
                                src={IdeationImage4}
                                width={700}
                                height={400} 
                                placeholder="blur"
                                blurDataURL={IdeationImage4}
                                alt="Final concept sketch for the Core device"
                            />
                            <p>Final concept sketch</p>
                        </div>
                    </div>
                </section>

                <section className={styles.ideation_section}>
                    <div className={styles.heading_bar}></div>
                    <h1>Pivot &#38; Takeaways</h1>
                    <p>
                        Although the finalized concept addressed many of the pain points from 
                        our original blood pressure monitor, it still had a few shortcomings 
                        that were discovered. The main issue with the finalized concept was 
                        that it did not allow for easy portability as the form was difficult 
                        to store. Further ideation was needed to increase portability and 
                        reduce the form factor for traveling purposes. Exploration into a 
                        collapsible device was investigated.
                    </p>
                    <div>
                        <div>
                            <Image
                                src={PivotImage1}
                                width={637}
                                height={458}
                                placeholder="blur"
                                blurDataURL={PivotImage1}
                                alt="Iterative sketches to explore new hinge mechanics"
                            />
                            <p>Iterative sketches to explore new hinge mechanics</p>
                        </div>
                        <div>
                            <Image
                                src={PivotImage2}
                                width={311}
                                height={289}
                                placeholder="blur"
                                blurDataURL={PivotImage2}
                                alt="New design concept for the device with changes applied"
                            />
                            <p>New lo-fi concept with changes applied</p>
                        </div>
                    </div>
                </section>


                <section className={styles.ideation_section}>
                    <div className={styles.heading_bar}></div>
                    <h1>Final Design</h1>
                    <p>
                        The refined concept was taken further and modeled on SolidWorks. 
                        Using CAD software allowed for further development as the folding and 
                        hinge mechanics could be worked out and the overall form could be 
                        understood more clearly. After finalizing the CAD model a physical 
                        model was made using 3D printed ABS plastic.
                    </p>
                    <div>
                        <div>
                            <Image
                                src={FinalDesignImage1}
                                width={716}
                                height={458}
                                placeholder="blur"
                                blurDataURL={FinalDesignImage1}
                                alt="Parts related to the final design of the product."
                            />
                        </div>
                        <div>
                            <Image
                                src={FinalDesignImage2}
                                width={554}
                                height={416}
                                placeholder="blur"
                                blurDataURL={FinalDesignImage2}
                                alt="3D printed prototype for the final design."
                            />
                            <p>ABS 3D printed prototype</p>
                        </div>
                        <div>
                            <Image
                                src={FinalDesignImage3}
                                width={785}
                                height={488}
                                placeholder="blur"
                                blurDataURL={FinalDesignImage3}
                                alt="Technical drawing related to the final design for Core"
                            />
                            <p>Technical Drawings</p>
                        </div>
                        <div>
                            <Image
                                src={FinalDesignImage4}
                                width={735}
                                height={236}
                                placeholder="blur"
                                blurDataURL={FinalDesignImage4}
                                alt="Painting the 3D printed prototype of the Core"
                            />
                            <p>Painting Process</p>
                        </div>
                        <div>
                            <Image
                                src={FinalDesignImage5}
                                width={819}
                                height={231}
                                placeholder="blur"
                                blurDataURL={FinalDesignImage5}
                                alt="Final product after painting and assembly"
                            />
                        </div>
                    </div>
                </section>
                
                <section className={styles.ideation_section}>
                    <div className={styles.heading_bar}></div>
                    <h1>UX/UI Development</h1>
                    <p>
                        Current market trends for modern blood pressure monitors shows that 
                        internet of things is becoming increasingly popular. Many new devices 
                        coming onto the market today feature connectible phone apps to enhance 
                        the devices use and tracking potential. Following this a connectible 
                        app was also designed to go along with the redesigned blood pressure 
                        monitor.
                    </p>
                    <div>
                        <div>
                            <Image
                                src={UxUiDevImage1}
                                width={606}
                                height={461}
                                placeholder="blur"
                                blurDataURL={UxUiDevImage1}
                                alt="Wireframing user flows for the new Core app"
                            />
                            <p>Wireframing user flows</p>
                        </div>
                        <div>
                            <Image
                                src={UxUiDevImage2}
                                width={650}
                                height={336}
                                placeholder="blur"
                                blurDataURL={UxUiDevImage2}
                                alt="Render of the UI for the new Core app"
                            />
                            <p>UI Mockup</p>
                        </div>
                    </div>
                </section>
                
                <section className={styles.final_poster}>
                    <div className={styles.heading_bar}></div>
                    <h1>Final Presentation</h1>
                    <div>
                        <Image
                            src={FinalPresentationImage}
                            width={820}
                            height={1040}
                            placeholder="blur"
                            blurDataURL={FinalPresentationImage}
                            alt="The final presentation poster for the Core project"
                        />
                    </div>
                </section>

                <section className={styles.other_projects}>
                    <div className={styles.heading_bar} />
                    <h1>My Other Projects</h1>
                    <div>
                        <Link href="/project/core">
                            <div>
                                <Image
                                    src={HomieProjectImage}
                                    height={280}
                                    width={400}
                                    placeholder="blur"
                                    blurDataURL={HomieProjectImage}
                                    alt="Homie Project"
                                />
                                <p>Homie</p>
                            </div>
                        </Link>

                        <Link href="/project/lisn">
                            <div>
                                <Image
                                    src={LisnProjectImage}
                                    height={300}
                                    width={400}
                                    placeholder="blur"
                                    blurDataURL={LisnProjectImage}
                                    alt="Lisn Project Image"
                                />
                                <p>Lisn</p>
                            </div>
                        </Link>
                    </div>
                </section>

            </div>
            {(isScrolled) ? <div tabIndex="0" role="button" className={styles.go_top_button} onClick={() => scrollToTheTop()} onKeyDown={(e) => handleOnEnterPressToTop(e)}>&uarr;</div> : null}
        </>
    )
}