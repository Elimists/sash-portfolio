import Image from 'next/image'
import Link from 'next/link'
import EnlargeImage from '../../components/EnlargeImage'
import { useState, useEffect } from 'react'
import useScrolledDown from '../../hooks/useScrolledDown'

/** Assets related to project Lisn */
import styles from '../../styles/Homie.module.css'
import LisnImage from '../../public/projects/lisn/lisn.webp'
import BrainStormSessionImage from '../../public/projects/lisn/brainstorm.webp'
import ResearchQuestionsImage from '../../public/projects/lisn/research_q.webp'
import InitialWireframeImage from '../../public/projects/lisn/initial_wireframe.webp'
import LofiMockupImage from '../../public/projects/lisn/lofi_mockup.webp'
import NewHPIdeationImage1 from '../../public/projects/lisn/new_hp.webp'
import SimilarAppsImage from '../../public/projects/lisn/similar_apps.webp'
import BlockframingImage from '../../public/projects/lisn/blockframing.webp'
import OldConvoCardImage from '../../public/projects/lisn/oldconvocard.webp'
import HomePageConceptImage from '../../public/projects/lisn/homepageconcept.webp'
import FinalHomePageImage from '../../public/projects/lisn/finalhomepage.webp'
import CoreProjectImage from '../../public/projects/core/core.webp'
import WorldJournalImage from '../../public/projects/world-journal/world-journal.webp'

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
        <>
        <EnlargeImage
            showModal={showModal}
            setShowModal={setShowModal}
            imageSource={imageSource} />

            <div className={styles.container}>

                <section className={styles.top_section}>
                    <div>
                        <h1>LISN</h1>
                        <p>Improving new user onboarding for a mobile application and UI redesign.</p>
                        <p>UX/UI - User Research - Prototyping - Branding </p>
                    </div>

                    <Image
                        src={LisnImage}
                        height={430}
                        width={650}
                        alt="Homie Project Image"
                        placeholder="blur"
                        blurDataURL={LisnImage} />
                </section>

                <section className={styles.synopsis}>
                    <div>
                        <h3>Duration</h3>
                        <p>2021 - Present</p>
                    </div>
                    <div>
                        <h3>Role</h3>
                        <p>UX/UI Designer</p>
                    </div>
                    <div>
                        <h3>Type</h3>
                        <p>Company Initiative</p>
                    </div>
                    <div>
                        <h3>Methods &#38; Tools</h3>
                        <p>User Research, Co-design workshops, Figma</p>
                    </div>
                </section>

                <section className={styles.overview_section}>
                    <div className={styles.heading_bar}></div>
                    <h1>Overview</h1>
                    <p>
                        LISN is a startup podcast company developing A.I technologies that 
                        help users discover new podcasts and also allow users to create curated
                        playlists using clips from different podcasts. The company is growing
                        its user base and wanted to create an easy to understand onboarding
                        flow for new users. Additionally, they also wanted to design a new
                        home page for their mobile app that facilitated a simplified 
                        user-experience. As their new UX/UI designer I led the research 
                        and design of their new onboarding flows and mobile app.
                    </p>
                </section>

                <section className={styles.problem_section}>
                    <div className={styles.heading_bar}></div>
                    <h1>Problem</h1>
                    <p>
                        New users were having a hard time understanding the mobile app as 
                        there was no introduction provided on how to use the features and 
                        how to create podcast clips which was the main service at the time. 
                        The organization of the app also left users confused as their content 
                        was scattered in different pages and menus. 
                    </p>
                </section>

                <section className={styles.research_section}>
                    <div className={styles.heading_bar}></div>
                    <h1>Research</h1>
                    <p>
                        As a new company, LISN did not have previous user experience research 
                        or analysis. I began by creating a research plan and working with the
                        team to identify key areas of the service that we needed to understand 
                        better. Our main objective was to understand user goals within the app 
                        and their satisfaction with the current platform. 
                    </p>
                    <div>
                        <div>
                            <Image
                                src={BrainStormSessionImage}
                                width={290}
                                height={244}
                                placeholder="blur"
                                blurDataURL={BrainStormSessionImage}
                                alt="Brain Storm Session"
                            />
                            <p>Brainstorming session with team</p>
                        </div>
                        <div>
                            <Image
                                src={ResearchQuestionsImage}
                                width={244}
                                height={244}
                                placeholder="blur"
                                blurDataURL={ResearchQuestionsImage}
                                alt="Research Questions"
                            />
                            <p>Research Questions</p>
                        </div>
                    </div>
                    <p>
                        Through interviews and outreach to current users we were able to uncover 
                        insights into users&sbquo; pain-points and goals when navigating the app.
                    </p>
                    <div>
                        <h3>Insight 1</h3>
                        <p>
                            Users wanted to have their frequently listened to content easily 
                            available and have the ability to organize them in the order they 
                            preferred 	&#40;i.e chronological, first to last, most popular, etc&#41;
                        </p>
                    
                   
                        <h3>Insight 2:</h3>
                        <p>
                            Users wanted to reduce the time searching for a podcast and have 
                            their curated content managed for them.
                        </p>
                    </div>
                    <p>
                        Our team also wanted to highlight key features of the app to new users 
                        on our onboarding flows. With some internal discussions we narrowed down 
                        our scope into 3 key features that were most important for new users to 
                        know.
                    </p>
                    <div>
                        <h3>Objective 1</h3>
                        <p>
                            Educate users on “conversations”. Conversations is an in-app feature 
                            that groups related podcast clips together into a curated playlist 
                            for easy and quick listening.
                        </p>

                        <h3>Objective 2:</h3>
                        <p>
                            Educate users on “Clips”. Clips is an in-app feature that allows 
                            users to snip a podcast&sbquo;s audio into just the section they are 
                            interested in and easily save, share, or use it to create their own 
                            conversations.
                        </p>

                        <h3>Objective 3:</h3>
                        <p>
                            Welcome user feedback. As the app was new we really wanted to invite 
                            users to be apart of the growing community and voice their 
                            concerns/suggestions to help the service improve.
                        </p>

                    </div>
                </section>

                <section className={styles.ideation_section}>
                    <div className={styles.heading_bar}></div>
                    <h1>Ideation</h1>
                    <p>
                        I began the concept development by working on the onboarding screens 
                        first. I created some wireframes and focused on keeping the content 
                        short and sweet. We wanted to avoid created a long onboarding flow with 
                        lots of test. Instead, I decided to use small gifs that could highlight 
                        key features and make the onboarding experience more enjoyable.
                    </p>

                    <div>
                        <div>
                            <Image
                                src={InitialWireframeImage}
                                width={525}
                                height={289}
                                placeholder="blur"
                                blurDataURL={InitialWireframeImage} 
                                alt="Initial Wireframe"   
                            />
                            <p>Initial wireframes</p>
                        </div>
                        <div>
                            <Image
                                src={LofiMockupImage}
                                width={715}
                                height={291}
                                placeholder="blur"
                                blurDataURL={LofiMockupImage}
                                alt="Lo-fi Mockup"
                            />
                            <p>Lo-Fi Mockup</p>
                        </div>
                    </div>
                    <p>
                        For each objective I created a small animation that could represent the 
                        feature we wanted to highlight. This also helped create a more visually 
                        appealing onboarding flow and good first impression of the app for new 
                        users. You can view the animations below on the <b>Final Onboarding Process</b>
                        &nbsp; section.
                    </p>
                </section>

                <section className={styles.final_onboarding_section}>
                    <div className={styles.heading_bar}></div>
                    <h1>Final Onboarding Process</h1>
                    <div>
                        <iframe 
                            title='Figma Final Onboarding Process'
                            width={848} 
                            height={441} 
                            loading="lazy" 
                            src="https://www.figma.com/proto/wvyskMpJxXJ6c2rejTf0yz?embed_host=share&kind=&node-id=310%3A291&page-id=310%3A191&scaling=min-zoom&starting-point-node-id=310%3A227&viewport=1425%2C493%2C0.32" 
                            allowFullScreen/>
                    </div>
                </section>

                <section className={styles.home_page_ideation}>
                    <div className={styles.heading_bar}></div>
                    <h1>New Home Page Ideation</h1>
                    <p>
                        In addition to the new onboarding pages, we wanted to create a new home page within
                        the app that better organized content and created easy access to the most used
                        features. I started concept development with some competitive analysis and then moved
                        on to create blockframes and wireframes. I was continually testing with the team
                        throughout this process to ensure cohesion and a feasible development scope.
                    </p>
                    <div>
                        <Image
                            src={NewHPIdeationImage1}
                            width={606}
                            height={558}
                            placeholder="blur"
                            blurDataURL={NewHPIdeationImage1}
                            alt="New Home Page Image"
                        />
                    </div>
                    <p>
                        As a good UX principle, we wanted to create a home page that felt familiar for new 
                        users. We did not want to overwhelm new users with a completely novel home page 
                        that required lots of learning, instead we opted to create a familiar flow to other 
                        apps in the podcast/music market space as many of our users also used these services.
                    </p>
                    <div>
                        <div>
                            <Image
                                src={SimilarAppsImage}
                                width={567}
                                height={360}
                                placeholder="blur"
                                blurDataURL={SimilarAppsImage}
                                alt="Similar Apps"
                            />
                            <p>Brainstorming with similar apps in the market</p>
                        </div>
                        <div>
                            <Image
                                src={BlockframingImage}
                                width={567}
                                height={360}
                                placeholder="blur"
                                blurDataURL={BlockframingImage}
                                alt="Block Framing"
                            />
                            <p>Blockframing</p>
                        </div>
                    </div>
                    <p>
                        One of the challenges we faced was designing a new layout card for our 
                        conversations feature. Conversations included multiple short clips of various 
                        podcasts that were put together into a &sbquo;Conversation&sbquo;. We wanted to create a 
                        card system that showed users which podcasts were contained within each 
                        conversation along with a description, duration, original poster, and interaction 
                        buttons. The challenge was to do this without creating something too busy and 
                        complicated for mobile screens.
                    </p>
                    <div>
                        <Image
                            src={OldConvoCardImage}
                            width={585}
                            height={146}
                            placeholder="blur"
                            blurDataURL={OldConvoCardImage}
                            alt="Old Conversation UI"
                        />
                    </div>
                </section>

                <section className={styles.new_home_page_concepts_section}>
                    <div className={styles.heading_bar}></div>
                    <h1>New Home Page Concepts</h1>
                    <div>
                        <Image
                            src={HomePageConceptImage}
                            width={561}
                            height={941}
                            placeholder="blur"
                            blurDataURL={HomePageConceptImage}
                            alt="Home Page Concept Design"
                        />
                    </div>
                </section>

                <section className={styles.final_home_page}>
                    <div className={styles.heading_bar}></div>
                    <h1>Final Home Page</h1>
                    <p>
                        After testing the concepts within the team concept 1 was the most favourable due to its easy readability, 
                        clean layout, and simple development turnaround. 
                    </p>
                    <div>
                        <Image
                            src={FinalHomePageImage}
                            width={726}
                            height={514}
                            placeholder="blur"
                            blurDataURL={FinalHomePageImage}
                            alt="Final Home Page Design"
                        />
                       
                    </div>
                    <p>New Home Page</p>
                    <div>
                        <iframe
                            title='Homie Figma Prototype'
                            width={430}
                            height={926}
                            oading="lazy" src="https://www.figma.com/proto/KSj63BgYfeq6OHsA6yPAjV/LISN-Home-Screen-Redesign?embed_host=share&kind=&node-id=12%3A1368&page-id=0%3A1&scaling=min-zoom&show-proto-sidebar=1&starting-point-node-id=12%3A1368&viewport=325%2C921%2C0.63"
                            allowFullScreen />
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

                        <Link href="/project/world-journal">
                            <div>
                                <Image
                                    src={WorldJournalImage}
                                    height={300}
                                    width={400}
                                    placeholder="blur"
                                    blurDataURL={WorldJournalImage} 
                                    alt="World Journal Project"
                                />
                                <p>World Journal</p>
                            </div>
                        </Link>
                    </div>
                </section>
            </div>
            {(isScrolled) ? <div tabIndex="0" role="button" className={styles.go_top_button} onClick={() => scrollToTheTop()} onKeyDown={(e) => handleOnEnterPressToTop(e)}>&uarr;</div> : null}
        </>
    )
}