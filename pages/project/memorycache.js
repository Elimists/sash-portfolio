import Image from 'next/image'
import Link from 'next/link'
import EnlargeImage from '../../components/EnlargeImage'
import { useState, useEffect } from 'react'
import useScrolledDown from '../../hooks/useScrolledDown'

/** Assets realted to the project Core.  */
import styles from '../../styles/Homie.module.css'


import LisnProjectImage from '../../public/projects/lisn/lisn.webp'
import HomieProjectImage from '../../public/projects/homie/homie.webp'

/**
 * Imports all images in the public/projects/homie folder 
 * */
 function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

/**Object containing all images in the public/projects/homie folder */
const images = importAll(require.context('../../public/projects/memorycache', false, /\.(webp|jpe?g|svg)$/));


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
                        <div className={styles.core_title_div}>
                            <p>The MemoryCache</p>
                        </div>
                        <p>
                            An assistive storytelling device that uses holograms to share memories and memorabilia.
                        </p>
                        <p>Extended Reality - Interaction Design - User Research - User Experience - Emerging Technology</p>
                    </div>

                    <Image 
                    src={images['Hero.webp']} 
                    height={430}
                    width={650} 
                    alt="MemoryCache Image"
                    placeholder="blur" 
                    blurDataURL={images['Hero.webp']}/>
                </section>

                <section className={styles.synopsis}>
                    <div>
                        <h3>Duration</h3>
                        <p>8 Months</p>
                    </div>
                    <div>
                        <h3>Role</h3>
                        <p>Product Designer</p>
                    </div>
                    <div>
                        <h3>Type</h3>
                        <p>Individual Project, Capstone Project</p>
                    </div>
                    <div>
                        <h3>Methods &#38; Tools</h3>
                        <p>Primary &#38; Secondary Research, User Tests, 3D Printing, Figma, Fusion360, Keyshot</p>
                    </div>
                </section>

                <section className={styles.overview_section}>
                    <div className={styles.heading_bar}></div>
                    <h1>Overview</h1>
                    <p>
                        This 4th year capstone project was centered around the idea of social connectedness and personal informatics.
                        The  challenge was to investigate a problem at the intersection between social interaction and personal data and to create a physical and/or digital solution to address these issues.
                        <b>I chose to focus on the issues of bereavement and mourning caused by the loss of a loved one as this issue was rooted in social connectedness as well as personal informatics.</b>
                    </p>
                </section>

                <section className={styles.problem_section}>
                    <div className={styles.heading_bar}></div>
                    <h1>Project Timeline</h1>
                    <div>
                    <Image 
                    src={images['timeline.webp']} 
                    height={560}
                    width={1416} 
                    alt="Project Timeline"
                    placeholder="blur" 
                    blurDataURL={images['timeline.webp']}/>
                    </div>
                </section>

                <section className={styles.process_section}>
                    <div className={styles.heading_bar}></div>
                    <h1>Area of Focus</h1>
                    <p>
                    Researching into the issues of grief and how they are connected with social connectedness led me to discover new insights.
                    Through my research evolution I discovered that <b>storytelling and the sharing of memories and memorabilia were extremely enriching and beneficial for people who were mourning.</b>
                    </p>
                    <div>
                        <Image 
                        src={images['areaoffocus.webp']} 
                        height={398}
                        width={620} 
                        alt="Area of Focus Image"
                        placeholder="blur" 
                        blurDataURL={images['areaoffocus.webp']}/>
                        <p>Research Evolution</p>
                    </div>
                </section>
                
                <section className={styles.research_section}>
                    <div className={styles.heading_bar}></div>
                    <h1>Research Planning</h1>
                    <p>
                    To understand more deeply the process of storytelling and it’s pain-points I would need to conduct user research.
                    To being this process I began by creating a research plan outlining the overview of what I wanted to understand from the user.
                    I broke down the research plan from problem to goal, and then to research questions.
                    After creating the research questions I divided them into interview questions and survey questions as some were more qualitative and others were more quantitative.
                    </p>
                    <div>
                        <Image 
                            src={images['researchplanning.webp']} 
                            height={539}
                            width={735} 
                            alt="User Research Planning Image"
                            placeholder="blur" 
                            blurDataURL={images['researchplanning.webp']}/>
                            <p>Research Planning</p>
                    </div>
                </section>

                <section className={styles.research_section}>
                    <div className={styles.heading_bar}></div>
                    <h1>User Research</h1>
                    <p>
                        My recruitment method involved reaching out through social media, family &36; friends, university groups, as well as reddit.
                        I was also able to connect with a researcher from the University of Toronto who studies bereavement and how it relates to human-computer interaction.
                    </p>
                    <div>
                        <div>
                        <Image 
                            src={images['clipboard.svg']} 
                            height={100}
                            width={100} 
                            alt="34 Survey Participants"
                            placeholder="blur" 
                            blurDataURL={images['clipboard.svg']}/>
                            <p>34 Survey Participants</p>
                        </div>
                        <div>
                        <Image 
                            src={images['users.svg']} 
                            height={100}
                            width={100} 
                            alt="5 Interview Participants"
                            placeholder="blur" 
                            blurDataURL={images['users.svg']}/>
                            <p>5 Interview Participants</p>
                        </div>
                        
                    </div>
                </section>

                <section className={styles.research_section}>
                    <div className={styles.heading_bar}></div>
                    <h1>Data Analysis</h1>
                    <p>
                        I utilized a variety of data analysis methods to synthesize the interview and survey data into clear and understandable themes.
                        I used affinity diagrams to organize and group the data collected from user research, this allowed me to identify key themes and insights.
                        Next I transcribed the interviews and used data coding to further analyze and identify patterns in the data.
                    </p>
                    <div>
                        <div>
                        <Image 
                            src={images['affinitydiagram.webp']} 
                            height={408}
                            width={630} 
                            alt="Affinity Diagram From Survey Results"
                            placeholder="blur" 
                            blurDataURL={images['affinitydiagram.webp']}/>
                            <p>Affinity Diagram From Survey Results</p>
                        </div>
                        <div>
                        <Image 
                            src={images['datacoding.webp']} 
                            height={408}
                            width={630} 
                            alt="Data Coding"
                            placeholder="blur" 
                            blurDataURL={images['datacoding.webp']}/>
                            <p>Data Coding</p>
                        </div>
                    </div>
                </section>

                <section className={styles.ideation_section}>
                    <div className={styles.heading_bar}></div>
                    <h1>Results From Data Analysis - Data Visualization</h1>
                    <p>
                        After synthesizing the data into key themes and insights the results were very informative.
                        Using diagrams and journey maps I was able to highlight how the data correlated and what the main learning outcomes were.
                        The Journey map also helped showcased what area of the user journey could be improved and where the most amount of effort should be focused.
                        The data was shown to stakeholders and profs who were able to understand the problem through these visuals.
                    </p>
                    <div>
                        <div>
                            <Image 
                                src={images['datavisual_1.webp']} 
                                height={461}
                                width={778} 
                                alt="Data Visualization"
                                placeholder="blur" 
                                blurDataURL={images['datavisual_1.webp']}/>
                                <p>Visual Diagram Showing the Key Themes From User Data</p>
                        </div>
                        <div>
                            <Image 
                                src={images['datavisual_2.webp']} 
                                height={461}
                                width={778}  
                                alt="Journey Map"
                                placeholder="blur" 
                                blurDataURL={images['datavisual_2.webp']}/>
                                <p>User Journey Map and Area of Opportunity</p>
                        </div>
                    </div>
                </section>
                
                <section className={styles.ideation_core_section}>
                    <div className={styles.heading_bar}></div>
                    <h1>Design Brief</h1>
                    <p>
                        The research phase helped uncover many areas of improvement and key considerations that should be made when tackling this problem.
                        Utilizing the research gained I put together a design brief to serve as a roadmap for future development.
                    </p> 
                    <div>
                        <Image 
                                src={images['designbrief2.svg']} 
                                height={376}
                                width={1212} 
                                alt="Design Brief"
                                placeholder="blur" 
                                blurDataURL={images['designbrief2.svg']}/>
                    </div>
                </section>

                <section className={styles.ideation_section}>
                    <div className={styles.heading_bar}></div>
                    <h1>Concept Development</h1>
                    <div>
                         <Image 
                                src={images['conceptdevelopment.webp']} 
                                height={3933}
                                width={723} 
                                alt="Concept Development Journey"
                                placeholder="blur" 
                                blurDataURL={images['conceptdevelopment.webp']}/>
                    </div>
                </section>


                <section className={styles.ideation_section}>
                    <div className={styles.heading_bar}></div>
                    <h1>Final Design</h1>
                    <p>
                        Check out this short video (1m40s) to see how the device works!
                    </p>
                    <div>
                        <iframe src="https://player.vimeo.com/video/698033014?h=6eb6ceadea" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                        <p><a href="https://vimeo.com/698033014">MemoryCache</a> from <a href="https://vimeo.com/user167769784">Sash Mahara</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
                    </div>
                </section>
                
        <section className={styles.final_design_section}>
            <div className={styles.heading_bar} />
                    <h1>Looks Like Model</h1>
                    <div>
                        <div>
                            <Image 
                                src={images['model1.jpg']} 
                                height={359}
                                width={298} 
                                alt="Looks like model"
                                placeholder="blur" 
                                blurDataURL={images['model1.jpg']}/>
                        </div>
                        <div>
                            <Image 
                                src={images['model2.jpg']} 
                                height={359}
                                width={298} 
                                alt="Looks like model"
                                placeholder="blur" 
                                blurDataURL={images['model2.jpg']}/>
                        </div>
                        <div>
                            <Image 
                                src={images['model3.jpg']} 
                                height={359}
                                width={298}
                                alt="Looks like model"
                                placeholder="blur" 
                                blurDataURL={images['model3.jpg']}/>
                        </div>
                        <div>
                            <Image 
                                src={images['model4.jpg']} 
                                height={359}
                                width={298} 
                                alt="Looks like model"
                                placeholder="blur" 
                                blurDataURL={images['model4.jpg']}/>
                        </div>
                    </div>
                </section>
                
                <section className={styles.final_poster}>
                    <div className={styles.heading_bar}></div>
                    <h1>Final Poster</h1>
                    <div>
                        <Image 
                                src={images['finalposter.jpg']} 
                                height={1443}
                                width={1113} 
                                alt="Final Presentatino Poster"
                                placeholder="blur" 
                                blurDataURL={images['finalposter.jpg']}/>
                    </div>
                </section>

                <section className={styles.final_poster}>
                    <div className={styles.heading_bar}></div>
                    <h1>Results &#38; Take-aways</h1>
                    <div>
                        <Image 
                                src={images['results_takeaways.svg']} 
                                height={569}
                                width={1113} 
                                alt="Results and Take-Aways"
                                placeholder="blur" 
                                blurDataURL={images['results_takeaways.svg']}/>
                    </div>
                </section>

                <section className={styles.other_projects}>
                    <div className={styles.heading_bar} />
                    <h1>My Other Projects</h1>
                    <div>
                        <Link href="/project/homie">
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