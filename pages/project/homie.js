
import Image from 'next/image'
import Link from 'next/link'
import EnlargeImage from '../../components/EnlargeImage'
import { useEffect, useState } from 'react'
import useScrolledDown from '../../hooks/useScrolledDown'
import { motion } from "framer-motion"

/** Required svgs */
import styles from '../../styles/Homie.module.css'
import HomieTitleSvg from '../../components/svgImages/homie/HomieTitleSvg'
import HomieProcessSVG from '../../components/svgImages/homie/ProcessSvg'
import KeyInsightsJsx from '../../components/svgImages/homie/KeyInsightsSvg'
import UserTestingComponent from '../../components/svgImages/homie/UserTestingComponent'
import ProblemSetComponent from '../../components/svgImages/homie/ProblemIcons'

/**Requried images for the 'Other Projects' section at the bottom */
import CoreProjectImage from '../../public/projects/core/core.webp'
import WorldJournalImage from '../../public/projects/world-journal/world-journal.webp'


/**
 * Imports all images in the public/projects/homie folder 
 * */
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

/**Object containing all images in the public/projects/homie folder */
const images = importAll(require.context('../../public/projects/homie', false, /\.(webp|jpe?g|svg)$/));

const hoverScaleAnimation = {
    scale: 1.07,
    transition: {
        duration: .3
    }
}


/** Component that is exported */
export default function Homie(){
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

    /**List containing sections pertaining to the Homie project
     * To change the order of the sections in the page, simply 
     * rearrange/reorder the items in the list below.
     */
    const homiePageSectionList = [
        homieTopSection(),
        synopsisSection(),
        overviewSection(),
        problemSection(),
        processSection(),
        researchGoalSection(),
        userGroupSection(),
        recruitmentCriteriaSection(),
        keyInsightsSection(),
        designBriefSection(),
        personasSection(handleImageEnlarging),
        userJourneyMapSection(handleImageEnlarging),
        conceptDevelopmentSection(handleImageEnlarging),
        userTestingSection(),
        iterationSection(handleImageEnlarging),
        finalDesignSection(handleImageEnlarging),
        figmaPrototypeSection(),
        otherProjectSection()
    ]

    /**
     * initial={{ opacity: 0, x: xValueOffScreen}}
        whileInView={{ opacity: 1, x: 0}}
        transition={{ duration: 0.4, type: "spring", stiffness: 100}}
        viewport={{ once: true, amount: 0.2}}
     */

    return(
        <>
            <EnlargeImage showModal={showModal} setShowModal={setShowModal} imageSource={imageSource}/>
            {homiePageSectionList.map((section, index) => {
                var xValueOffScreen
                if (index % 2 == 0){
                    xValueOffScreen = "-25vw"
                }
                else{
                    xValueOffScreen = "25vw"
                }
                return(
                    <motion.div 
                        
                        className={styles.container} 
                        key={index.toString()}

                    >
                            {section}
                    </motion.div>
                )
            })}

            {(isScrolled) ? <div tabIndex="0" role="button" className={styles.go_top_button} onClick={() => scrollToTheTop()} onKeyDown={(e) => handleOnEnterPressToTop(e)}>&uarr;</div> : null}
            
            
        </>
    )
}


/**All sectional fragments for the Homie project */
const homieTopSection = () => {
    return(
        <section className={styles.top_section}>
            <div>
                <HomieTitleSvg/>
                <p>Web application that simplifies and assists the rental housing search process.</p>
                <p>UX/UI - User Research - Visual Design - Usability Testing</p>
            </div>
            
            <Image 
                src={images['homie.webp']} 
                height={430}
                width={650} 
                alt="Homie Project Image"
                placeholder="blur" 
                blurDataURL={images['homie.webp']}/>
        </section>
    )
}

const synopsisSection = () => {
    return(
        <section className={styles.synopsis}>
            <div>
                <h3>Duration</h3>
                <p>4 Months</p>
            </div>
            <div>
                <h3>Role</h3>
                <p>UX Researcher</p>
            </div>
            <div>
                <h3>Type</h3>
                <p>Group Project</p>
            </div>
            <div>
                <h3>Methods &#38; Tools</h3>
                <p>Interviews, Surveys, Market Research, Competitive Analysis, Figma</p>
            </div>
        </section>
    )
}

const overviewSection = () => {
    return(
        <section className={styles.overview_section}>
            <div className={styles.heading_bar}></div>
            <h1>Overview</h1>
            <p>
                This senior project focused on researching, designing, and validating a 
                digital service that could help improve the user journey in a chosen problem space. 
                Our group chose to tackle the rental housing experience and develop a solution that 
                could streamline the process for beginners and experienced renters.
            </p>
        </section>
    )
}

const problemSection = () => {
    return(
        <section className={styles.problem_section}>
                <div className={styles.heading_bar}></div>
                <h1>Problem</h1>
                <p>
                    The process of finding and securing rental housing can be a daunting, overwhelming, and cumbersome journey. 
                    Renters encounter a slew of issues relating to poor information across rental ads, usability and experience of rental platforms and listings, communication with landlords and roommates, decision-making, and legal matters. 
                    There is also a need for more education and resources around renter rights.
                </p>
                <div className={styles.problem_section_img_div}>
                    <Image 
                        src={images['problemsection.webp']} 
                        width={500} 
                        height={124}
                        placeholder="blur"
                        blurDataURL={images['problemsection.webp']}
                        alt="Problem section image"/>
                </div>
            </section>
    )
}

const processSection = () => {
    return(
        <section className={styles.process_section}>
            <div className={styles.heading_bar}></div>
            <h1>Process</h1>
            <div>
                <HomieProcessSVG/>
            </div>
        </section>
    )
}

const researchGoalSection = () => {
    return(
        <section className={styles.research_goal_section}>
                <div className={styles.heading_bar}></div>
                <h1>Research Goals</h1>
                <div className={styles.problem_comp_div}>
                    <ProblemSetComponent/>
                </div>
        </section>
    )
}

const userGroupSection = () => {
    return(
        <section className={styles.user_group_section}>
            <div className={styles.heading_bar}></div>
            <h1>User Group</h1>
            <p>
                We divided our recruitment into two different types of users. 
                User group 1 was tenants and group 2 were landlords.
            </p>
            <div>
                <Image 
                    src={images['user_groups.webp']} 
                    width={265} 
                    height={142}
                    placeholder="blur"
                    blurDataURL={images['user_groups.webp']}
                    alt="User Groups"/>
            </div>
        </section>
    )
}

const recruitmentCriteriaSection = () => {
    return(
        <section className={styles.recruitment_criteria}>
            <div className={styles.heading_bar}></div>
            <h1>Recruitment Criteria</h1>
            <div className={styles.recruitcrit_img_div}>
                <Image 
                    src={images['recruitment_criteria.webp']} 
                    width={674} 
                    height={512}
                    placeholder="blur"
                    blurDataURL={images['recruitment_criteria.webp']}
                    alt="Recruitment Criteria"/>
            </div>
        </section>
    )
} 

const keyInsightsSection = () => {
    return(
        <section className={styles.key_insights}>
            <div className={styles.heading_bar}></div>
            <h1>Key Insights &#38; Themes</h1>
            <p>
            The results of our user research highlight many pain-points and opportunities for improvement. 
            Using data coding methods (see below) we identified key insights revolved around the lack of standardization of listings, communication methods, lease agreements, and the rental platforms themselves. 
            There was also a need for more personal, accurate, centralized and verified information regarding landlords and their properties (including roommates where applicable). 
            </p>
            <div>
                <div>
                    <Image 
                        src={images['key_insights1.webp']} 
                        width={715} 
                        height={200}
                        placeholder="blur"
                        blurDataURL={images['key_insights1.webp']}
                        alt="Data coding results from conducting user research"/>
                    <p>Data Coding</p>
                    
                </div>
                <div>
                    <KeyInsightsJsx />
                </div>
            </div>
        </section>
    )
}

const designBriefSection = () => {
    return(
        <section className={styles.design_brief}>
            <div className={styles.heading_bar}/>
            <h1>Design Brief</h1>
            <div className={styles.designbrief_div}>
                <h3>Goals &#38; Objectives</h3>
                <div>
                    <Image 
                                src={images['design_objectives.webp']} 
                                width={643} 
                                height={275}
                                placeholder="blur"
                                blurDataURL={images['design_objectives.webp']}
                                alt="Design Goals and Objectives"/>
                </div>
            </div>
            
            <div className={styles.designreq_div}>
                <h3>Design Requirements &#38; Features</h3>
                <ol type="1">
                    <li>
                        <h4>Chat feature &#38; Scheduling</h4>
                    </li>
                    <li>
                        <h4>Document Management &#40; for applications and leases&#41;</h4>
                    </li>
                    <li>
                        <h4>Resource packages, Tips &#38; Tricks, Legal Information</h4>
                    </li>
                    <li>
                        <h4>Holistic Map, Bus Routes, Ammenities, Crime Spots</h4>
                    </li>
                    <li>
                        <h4>Standardizing Listings</h4>
                    </li>
                    <li>
                        <h4>Tenant &amp; landlord accounts</h4>
                    </li>
                    <li>
                        <h4>Favourite Listings</h4>
                    </li>
                    <li>
                        <h4>Verification &amp; Virtual Tours</h4>
                    </li>
                </ol>
            </div>
        </section>
    )
}

const personasSection = (handleImageEnlarging) => {
    return(
        <section className={styles.personas}>
            <div className={styles.heading_bar} />
            <h1>Personas</h1>
            <p>
                After determining our design brief we created four personas from our background research which captured
                the breadth of users we wanted to cater to.
            </p>
            <div>
                <motion.div whileHover={hoverScaleAnimation}>
                    <Image 
                        src={images['personas_aiden.webp']} 
                        width={370} 
                        height={260} 
                        placeholder="blur" 
                        blurDataURL={images['personas_aiden.webp']} 
                        alt="Persona for Aiden who is a freshman student looking for a place"
                        onClick={() => handleImageEnlarging(images['personas_aiden.webp'])}/>
                    <p>Aiden: Freshmen Student</p>
                </motion.div>

                <motion.div whileHover={hoverScaleAnimation}>
                    <Image 
                        src={images['personas_carly.webp']} 
                        width={370} 
                        height={260} 
                        placeholder="blur" 
                        blurDataURL={images['personas_carly.webp']} 
                        alt="Persona for Carly who is a long distance mover looking for a place" 
                            onClick={() => handleImageEnlarging(images['personas_carly.webp'])}/>
                    <p>Carly: Long Distance Mover</p>
                </motion.div>

                <motion.div whileHover={hoverScaleAnimation}>
                    <Image 
                        src={images['personas_tamira.webp']} 
                        width={370} 
                        height={260} 
                        placeholder="blur" 
                        blurDataURL={images['personas_tamira.webp']} 
                        alt="Persona for Tamira who is a new parent looking to rent"
                        onClick={() => handleImageEnlarging(images['personas_tamira.webp'])}/>
                    <p>Tamira: New Parent</p>
                </motion.div>

                <motion.div whileHover={hoverScaleAnimation}>
                    <Image 
                        src={images['personas_samu.webp']} 
                        width={370} 
                        height={260} 
                        placeholder="blur" 
                        blurDataURL={images['personas_samu.webp']} 
                        alt="Persona for Samu who is interested in renting"
                        onClick={() => handleImageEnlarging(images['personas_samu.webp'])}/>
                    <p>Samu: Young Professional</p>
                </motion.div>
            </div>
        </section>
    )
}

const userJourneyMapSection = (handleImageEnlarging) => {
    return(
        <section className={styles.user_journey_map}>
            <div className={styles.heading_bar} />
            <h1>User Journey Map</h1>
            <p>
                Having uncovered many of the pain-points and opportunities from our research we put together a user journey map 
                that showed the rental housing process from start to finish. This journey map allowed us to visualize where the 
                problem areas where and highlight key touch points that could be improved.
            </p>
            <motion.div whileHover={hoverScaleAnimation}>
                <Image 
                    src={images['user_journey.webp']} 
                    width={1062} 
                    height={273} 
                    placeholder="blur" 
                    blurDataURL={images['user_journey.webp']} 
                    alt="User journey map put together after our research"
                    onClick={() => handleImageEnlarging(images['user_journey.webp'])}/>
                <p>User Journey Map</p>
            </motion.div>
        </section>
    )
}

const conceptDevelopmentSection = (handleImageEnlarging) => {
    return(
        <section className={styles.concept_development}>
            <div className={styles.heading_bar} />
            <h1>Concept Development</h1>

            <h2>Competitive Analysis</h2>
            <p>We began our concept development by doing some market research on existing products and understanding their approach, functionality, and layout.</p>
            <div className={styles.concept_dev_imgs_div}>
                <Image 
                    src={images['concept_comp_analysis.webp']} 
                    width={433} 
                    height={300} 
                    placeholder="blur" 
                    blurDataURL={images['concept_comp_analysis.webp']} 
                    alt="Competitive Analysis Image"/>
                <p>Competitive Analysis</p>
            </div>

            <h2>Application Architecture</h2>
            <p>The design solution involved creating an information architecture, comprised of all the possible pages, content, features, and user actions for Homie. Each of these assets were then grouped into named categories and organized in a hierarchical structure. </p>
            <motion.div whileHover={hoverScaleAnimation}>
                <Image 
                    src={images['concept_dev_info_arch.webp']} 
                    width={519} 
                    height={346} 
                    placeholder="blur" 
                    blurDataURL={images['concept_dev_info_arch.webp']} 
                    alt="Application Architecture Image"
                    onClick={() => handleImageEnlarging(images['concept_dev_info_arch.webp'])}/>
                <p>Information Architecture</p>
            </motion.div>

            <h2>UI Development</h2>
            <p>We focused our concept development into three key areas of the application that we identified from our research which needed the most improvement.</p>
            
            <motion.div whileHover={hoverScaleAnimation}>
                <Image 
                    src={images['concept_dev_landlord_ui.webp']} 
                    width={1061} 
                    height={351} 
                    placeholder="blur" 
                    blurDataURL={images['concept_dev_landlord_ui.webp']} 
                    alt="Landlord Portal Image"
                    onClick={() => handleImageEnlarging(images['concept_dev_landlord_ui.webp'])}/>
                <p>Landlord Portal - Creating and Managing Listings </p>
            </motion.div>

            <motion.div whileHover={hoverScaleAnimation}>
                <Image 
                    src={images['concept_dev_searching_ui.webp']} 
                    width={1061} 
                    height={351}
                    placeholder="blur" 
                    blurDataURL={images['concept_dev_searching_ui.webp']} 
                    alt="Browsing and comparing Image"
                    onClick={() => handleImageEnlarging(images['concept_dev_searching_ui.webp'])}/>
                <p>Browsing and comparing listings</p>
            </motion.div>

            <motion.div whileHover={hoverScaleAnimation}>
                <Image 
                    src={images['concept_dev_scheduling_ui.webp']} 
                    width={1061} 
                    height={351} 
                    placeholder="blur" 
                    blurDataURL={images['concept_dev_scheduling_ui.webp']} 
                    alt="Booking Viewings Image"
                    onClick={() => handleImageEnlarging(images['concept_dev_scheduling_ui.webp'])}/>
                <p>Booking Viewings</p>
            </motion.div>
        </section>
    )
}

const userTestingSection = () => {
    return(
        <section className={styles.user_testing}>
            <div className={styles.heading_bar} />
            <h1>User Testing</h1>
            <p>
                The usability testing was an eye opening moment for the group to update and improve our design. We asked each participant to 
                complete a certain task, and we were not allowed to intervene. We also timed each participant to understand how efficient 
                each user task was. At the end we interviewed each participant on their experience. Through our user testers, we gained key 
                insights into what features functioned smoothly and what needed tweaking.
            </p>

            <div className={styles.user_testing_comp_div}>
                <UserTestingComponent/>
            </div> 
        </section>
    )
}

const iterationSection = (handleImageEnlarging) => {
    return(
        <section className={styles.iteration_section}>
            <div className={styles.heading_bar} />
            <h1>Iterations</h1>
            <p>
                After getting the results from our user testing we iterated on the problem areas that confused users. We redesigned 
                certain user flows to have more clarity and organization from the feedback we gained from our testing.
            </p>
            <motion.div whileHover={hoverScaleAnimation}>
                <Image 
                    src={images['iterations.webp']} 
                    width={786} 
                    height={368} 
                    placeholder="blur" 
                    blurDataURL={images['iterations.webp']} 
                    alt="Iteration Image"
                    onClick={() => handleImageEnlarging(images['iterations.webp'])}/>
            </motion.div>
        </section>
    )
}

const finalDesignSection = (handleImageEnlarging) => {
    return(
        <section className={styles.final_design_section}>
            <div className={styles.heading_bar} />
            <h1>Final Design</h1>
            <p>
                After addressing the concerns from our user testing we began the finalization of the design by creating a branding 
                guideline and developing a high-fidelity version of the application.
            </p>
            <div>
                <motion.div whileHover={hoverScaleAnimation}>
                    <Image 
                        src={images['final_design_mood.webp']} 
                        width={424} 
                        height={300} 
                        placeholder="blur" 
                        blurDataURL={images['final_design_mood.webp']} 
                        alt="Final Design Image"
                        onClick={() => handleImageEnlarging(images['final_design_mood.webp'])}/>
                    <p>Mood Board</p>
                </motion.div>
                <motion.div whileHover={hoverScaleAnimation}>
                    <Image 
                        src={images['final_design_landing.webp']} 
                        width={403} height={287} 
                        placeholder="blur" 
                        blurDataURL={images['final_design_landing.webp']} 
                        alt="Landing Page Imge" 
                        onClick={() => handleImageEnlarging(images['final_design_landing.webp'])}/>
                    <p>Landing Page</p>
                </motion.div>
                <motion.div whileHover={hoverScaleAnimation}>
                    <Image 
                        src={images['final_design_housing.webp']} 
                        width={403} 
                        height={287} 
                        placeholder="blur" 
                        blurDataURL={images['final_design_housing.webp']} 
                        alt="Housing Page Image" 
                        onClick={() => handleImageEnlarging(images['final_design_housing.webp'])}/>
                    <p>Housing Search</p>
                </motion.div>
                <motion.div whileHover={hoverScaleAnimation}>
                    <Image 
                        src={images['final_design_listing.webp']} 
                        width={403} 
                        height={287} 
                        placeholder="blur" 
                        blurDataURL={images['final_design_listing.webp']} 
                        alt="Listing Page Image" 
                        onClick={() => handleImageEnlarging(images['final_design_listing.webp'])}/>
                    <p>Listing View</p>
                </motion.div>
                <motion.div whileHover={hoverScaleAnimation}>
                    <Image 
                        src={images['final_design_comparison.webp']} 
                        width={403} 
                        height={287} 
                        placeholder="blur" 
                        blurDataURL={images['final_design_comparison.webp']} 
                        alt="Comparison Page Image" 
                        onClick={() => handleImageEnlarging(images['final_design_comparison.webp'])}/>
                    <p>Comparison Page</p>
                </motion.div>
                <motion.div whileHover={hoverScaleAnimation}>
                    <Image 
                        src={images['final_design_messaging.webp']} 
                        width={403} 
                        height={287} 
                        placeholder="blur" 
                        blurDataURL={images['final_design_messaging.webp']} 
                        alt="Final Design Messaging" 
                        onClick={() => handleImageEnlarging(images['final_design_messaging.webp'])}/>
                    <p>Messaging View</p>
                </motion.div>
                <motion.div whileHover={hoverScaleAnimation}>
                    <Image 
                        src={images['final_design_booking.webp']} 
                        width={403} 
                        height={287} 
                        placeholder="blur" 
                        blurDataURL={images['final_design_booking.webp']} 
                        alt="Final Design Booking" 
                        onClick={() => handleImageEnlarging(images['final_design_booking.webp'])}/>
                    <p>Booking Page</p>
                </motion.div>
            </div>
        </section>
    )
}

const figmaPrototypeSection = () => {
    return(
        <section className={styles.figma_prototype}>
            <div className={styles.heading_bar} />
            <h1>Figma Prototype</h1>
            <div>
                <iframe 
                    title='Homie Figma Prototype'
                    width={1300} 
                    height={662} 
                    loading="lazy" src="https://www.figma.com/proto/1XnqrlsKWKXYud37ZUmkJJ/Homie-Project?embed_host=share&kind=&node-id=537%3A1562&page-id=531%3A1143&scaling=min-zoom&starting-point-node-id=537%3A1562&viewport=414%2C532%2C0.06" 
                    allowFullScreen/>
            </div>
        </section>
    )
}

const otherProjectSection = () => {
    return(
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
                            blurDataURL={CoreProjectImage}/>
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
                            blurDataURL={WorldJournalImage} />
                        <p>World Journal</p>
                    </div>
                </Link>
            </div>
        </section>
    )
}