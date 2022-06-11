import Image from 'next/image'
import Link from 'next/link'
import EnlargeImage from '../../components/EnlargeImage'
import { useState, useEffect } from 'react'
import useScrolledDown from '../../hooks/useScrolledDown'

/** Assets realted to the project World Journal  */
import styles from '../../styles/Homie.module.css'
import WorldJournalImage from '../../public/projects/world-journal/world-journal.webp'
import WorldJournalProcess from '../../components/svgImages/world-journal/WorldJournalProcess'
import FactorsAffectingImage from '../../public/projects/world-journal/factors.webp'
import IdeationImage1 from '../../public/projects/world-journal/ideation.webp'
import IdeationImage2 from '../../public/projects/world-journal/existingservices.webp'
import ProposalImage1 from '../../public/projects/world-journal/uimockup1.webp'
import ProposalImage2 from '../../public/projects/world-journal/uimockup2.webp'
import FinalPosterImage from '../../public/projects/world-journal/finalposter.webp'
import CoreProjectImage from '../../public/projects/core/core.webp'
import LisnProjectImage from '../../public/projects/lisn/lisn.webp'

export default function WorldJournal(){

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
                        <h1>World Journal</h1>
                        <p>
                            Web application that aims to utilize the satellite imagery and 
                            live video feeds from the Internation Space Station for educational 
                            purposes.
                        </p>
                        <p>Web Design - Design Sprint - UX/UI</p>
                    </div>

                    <Image
                        src={WorldJournalImage}
                        width={650}
                        height={430}
                        placeholder="blur"
                        blurDataURL={WorldJournalImage} 
                        alt="World Journal Image"
                        />
                </section>

                <section className={styles.synopsis}>
                    <div>
                        <h3>Duration</h3>
                        <p>1 week</p>
                    </div>
                    <div>
                        <h3>Role</h3>
                        <p>UX/UI Designer</p>
                    </div>
                    <div>
                        <h3>Type</h3>
                        <p>Individual Project</p>
                    </div>
                    <div>
                        <h3>Methods &#38; Tools</h3>
                        <p>Secondary Research, Panel Review, Adobe illustrator</p>
                    </div>
                </section>

                <section className={styles.overview_section}>
                    <div className={styles.heading_bar}></div>
                    <h1>Overview</h1>
                    <p>
                        During my third year of studies our class had the unique experience of
                        working with Dan Barstow, Educational Manager for the International 
                        Space Station and Frank White, space philosopher and author of the 
                        Overview Effect. We were challenged with the idea of creating a 
                        service that could utilize the hundreds of unused satellite images 
                        that were taken weekly by the International Space Station. All of 
                        these images were free for public use but remained unused and many of 
                        them unseen.   
                    </p>
                </section>

                <section className={styles.problem_section}>
                    <div className={styles.heading_bar}></div>
                    <h1>Problem</h1>
                    <p>
                        The International Space Stations takes multiple of photos of earth 
                        daily. These images are stored on NASA&#39;s website and are free for 
                        public use but majority of these photso are never seen by the public 
                        and just remain in archives. 
                    </p>
                </section>

                <section className={styles.process_section}>
                    <div className={styles.heading_bar}></div>
                    <h1>Process</h1>
                    <div>
                        <WorldJournalProcess/>
                    </div>
                </section>

                <section className={styles.research_wj_section}>
                    <div className={styles.heading_bar}></div>
                    <h1>Research</h1>
                    <p>
                        NASA saves many of the satellite images on their 
                        <Link href="https://www.windowsonearth.org/"><a target="_blank"><b> &#8220;Windows on Earth&#8221; </b></a></Link>
                        website which is updated regularly. In recent years NASA has even 
                        begun to feature timelapse videos, curating photos into special photo 
                        albums, and even created a picture game. Even with these new features 
                        majority of the images and videos do not get enough attention. 
                        Fortunately, becuase these images already exist on the web and are 
                        free for use, there exists an oppurtunity to use these images in other 
                        services that could attract more users.
                    </p>
                    {/** 
                    <iframe
                        title='Nasa Windows on Earth wesbite'
                        src='https://www.windowsonearth.org/Featured-Galleries/Best-New-Images/'
                        width={1000}
                        heigh={500}
                    />
                    */}
                    <p>
                        One of the unique phenomenons from viewing the earth from outer space 
                        is known as the &#8220;Overview Effect&#8221;, a term which was popularized by 
                        author Frank White. During our time with Frank he noted that in his 
                        experience interviewing and studying astronauts who had returned from 
                        space many of them had a new perspective on earth, life, and the 
                        interconnectedness of it all. It has been discribed as &#8220;a cognitive 
                        shift in awareness.&#8221; I wanted to bring this feeling of the Overview 
                        Effect to these satellite images and help users feel that shift in 
                        perspective. 
                    </p>
                    <div>
                        <Image
                            src={FactorsAffectingImage}
                            width={576}
                            height={308}
                            placeholder="blur"
                            blurDataURL={FactorsAffectingImage}
                            alt="Factors affecting image"
                        />
                        <p>Factors that contribute to the Overview Effect</p>
                    </div>
                </section>

                <section className={styles.ideation_wj_section}>
                    <div className={styles.heading_bar}></div>
                    <h1>Ideation</h1>
                    <p>
                        The Idea was to create a web application that could show you live 
                        satellite imagery and overlayed on the images were contextual 
                        information on what was happening in each of those locations. 
                        By combining these photos of earth with stories, news, facts, and the 
                        general travel of people in those places I could increase a users&apos;’ 
                        experience and awareness from more than just looking at a photo.
                    </p>
                    <div>
                        <Image
                            src={IdeationImage1}
                            width={626}
                            height={446}
                            placeholder="blur"
                            blurDataURL={IdeationImage1}
                            alt="Ideation Image 1"
                        />
                    </div>
                    <p>
                        Contextual information and data for what was happening in each location 
                        could be sourced from a variety of existing services. Live tracking of 
                        the ISS and Earth Imagery was already possible to source through NASA&apos;s 
                        own API. Life information and contextual information could be found from 
                        social media and news outlets. Travel information could be sourced 
                        through flight and marine traffic services which are already public.
                    </p>
                    <div>
                        <Image
                            src={IdeationImage2}
                            width={498}
                            height={280}
                            placeholder="blur"
                            blurDataURL={IdeationImage2}
                            alt="Ideation Image 2"
                        />
                    </div>
                </section>

                <section className={styles.concept_proposal_section}>
                    <div className={styles.heading_bar}></div>
                    <h1>Concept Proposal</h1>
                    <p>
                        The concept proposal showcased a web platform that showed a live 
                        video feed of  Earth from the International Space Station. 
                        Overlayed on the video feed would be location specific information 
                        such as local news, social events, and travel information. Users 
                        could even upload a their own location specific story. During times 
                        when there was no video feed available, the platform would show 
                        images instead. The platform also showcased past stories and images 
                        with location specific historical information. This concept was 
                        proposed as a learning tool and journalism resource.
                    </p>
                    <div>
                        <Image
                            src={ProposalImage1}
                            width={838}
                            height={410}
                            placeholder="blur"
                            blurDataURL={ProposalImage1}
                            alt="UI Mockup 1"
                        />
                    </div>
                    <div>
                        <Image
                            src={ProposalImage2}
                            width={840}
                            height={254}
                            placeholder="blur"
                            blurDataURL={ProposalImage2}
                            alt="UI Mockup 2"
                        />
                    </div>
                </section>

                <section className={styles.final_poster_wj}>
                    <div className={styles.heading_bar}></div>
                    <h1>Final Poster</h1>
                    <div>
                        <Image
                            src={FinalPosterImage}
                            width={836}
                            height={1488}
                            placeholder="blur"
                            blurDataURL={FinalPosterImage}
                            alt="Final Poster Image"
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
                                    src={CoreProjectImage}
                                    height={300}
                                    width={400}
                                    placeholder="blur"
                                    blurDataURL={CoreProjectImage}
                                    alt="Core Project"
                                />
                                <p>Core</p>
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