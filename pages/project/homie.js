
import Image from 'next/image'
import Link from 'next/link'
import EnlargeImage from '../../components/EnlargeImage'
import { useEffect, useState } from 'react'
import useScrolledDown from '../../hooks/useScrolledDown'

/** Assets related to project - Homie */
import styles from '../../styles/Homie.module.css'
import HomieImg from '../../public/projects/homie/homie.webp'
import HomieTitleSvg from '../../components/svgImages/homie/HomieTitleSvg'
import HomieProcessSVG from '../../components/svgImages/homie/ProcessSvg'
import UserGroupLandlordsSvg from '../../components/svgImages/homie/UserGroupLandlordsSvg'
import UserGroupTenantsSvg from '../../components/svgImages/homie/UserGroupTenantsSvg'
import DataCodingImage from '../../public/projects/homie/key_insights1.webp'
import KeyInsightsJsx from '../../components/svgImages/homie/KeyInsightsSvg'
import PersonasAiden from '../../public/projects/homie/personas_aiden.webp'
import PersonasCarly from '../../public/projects/homie/personas_carly.webp'
import PersonasSamu from '../../public/projects/homie/personas_samu.webp'
import PersonasTamira from '../../public/projects/homie/personas_tamira.webp'
import UserJourneyMap from '../../public/projects/homie/user_journey.webp'
import ConceptCompAnalysis from '../../public/projects/homie/concept_comp_analysis.webp'
import ConceptApplicationArch from '../../public/projects/homie/concept_dev_info_arch.webp'
import ConceptLandlordPortal from '../../public/projects/homie/concept_dev_landlord_ui.webp'
import ConceptScheduling from '../../public/projects/homie/concept_dev_scheduling_ui.webp'
import ConceptBrowsingListings from '../../public/projects/homie/concept_dev_searching_ui.webp'
import Iterations from '../../public/projects/homie/iterations.webp'
import FinalDesignBooking from '../../public/projects/homie/final_design_booking.webp'
import FinalDesignComparison from '../../public/projects/homie/final_design_comparison.webp'
import FinalDesignHousing from '../../public/projects/homie/final_design_housing.webp'
import FinalDesignLanding from '../../public/projects/homie/final_design_landing.webp'
import FinalDesignListing from '../../public/projects/homie/final_design_listing.webp'
import FinalDesignMessaging from '../../public/projects/homie/final_design_messaging.webp'
import FinalDesignMood from '../../public/projects/homie/final_design_mood.webp'
import CoreProjectImage from '../../public/projects/core/core.webp'
import WorldJournalImage from '../../public/projects/world-journal/world-journal.webp'

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

    /** 
    const [quickNavPressed, setQuickNavPressed] = useState(false)
    useEffect(() => {
        if (showModal) {
            setQuickNavPressed(false)
        }
    }, [showModal])
    */

    return(
        <>
        <EnlargeImage 
            showModal={showModal} 
            setShowModal={setShowModal}
            imageSource={imageSource}/>
        
        <div className={styles.container}>

            <section className={styles.homie_top}>
                <div>
                    <HomieTitleSvg/>
                    <p>Web application that simplifies and assists the rental housing search process.</p>
                    <p>UX/UI - User Research - Visual Design - Behavioral Design</p>
                </div>
                
                <Image 
                    src={HomieImg} 
                    height={430}
                    width={650} 
                    alt="Homie Project Image"
                    placeholder="blur" 
                    blurDataURL={HomieImg}/>
            </section>

            <section className={styles.synopsis}>
                <div>
                    <h3>Duration</h3>
                    <p>4 Months</p>
                </div>
                <div>
                    <h3>Role</h3>
                    <p>UX Researcher &#38; Designer</p>
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

            <section className={styles.problem_section}>
                <div className={styles.heading_bar}></div>
                <h1>Problem</h1>
                <p>
                    Overall, the process of finding and securing a housing rental can be a daunting, 
                    overwhelming, and cumbersome journey. Most of the process is learned by word of 
                    mouth and through trial and error, making it difficult for inexperienced renters 
                    to know where to begin and confidently carry out the entire process. There is also
                    a need for more semi-formal education or resources concerning the renting process 
                    as a whole, including knowledge around renter rights. Even more experienced renters 
                    encounter a slew of issues relating to poor information across rental ads, usability
                    and experience of rental platforms and listings, communication with landlords and 
                    roommates, decision-making, and legal matters.
                </p>
            </section>

            <section className={styles.process_section}>
                <div className={styles.heading_bar}></div>
                <h1>Process</h1>
                <div>
                    <HomieProcessSVG/>
                </div>
            </section>

            <section className={styles.research_goal_section}>
                <div className={styles.heading_bar}></div>
                <h1>Research Goals</h1>
                <ul>
                    <li>Understand the tools and services that renters are currently using during their house hunt to find areas of improvement within existing tools.</li>
                    <li>Identify key criteria renters look for when searching for housing to empower them to make better housing decisions.</li>
                    <li>Understand user&#39;s knowledge regarding renting legalities to educate and build confidence in the renting process.</li>
                    <li>Gain insight into the end-to-end process of renting a property to uncover pain points and challenges to improve and streamline the experience for the renter.</li>
                </ul>
            </section>

            <section className={styles.recruitment_method_section}>
                <div className={styles.heading_bar}></div>
                <h1>Recruitment Method</h1>
                <p>
                    Our methods involved reaching out to friends and family &#40; and their wider network&#41; to find users that would fit our recruitment 
                    criteria &#40;see below&#41;. Posting in Carleton University student groups on social media &#40;i.e.: Reddit and Facebook&#41; requesting 
                    volunteers.
                </p>
            </section>

            <section className={styles.user_group_section}>
                <div className={styles.heading_bar}></div>
                <h1>User Group</h1>
                <p>
                    We divided our recruitment to 75-80% of interviewees from User Group 1, and 20-25% interviewees from User Group 2 since the 
                    service is targeted towards tenants.
                </p>
                <div>
                    <UserGroupTenantsSvg/>
                    <UserGroupLandlordsSvg/>
                </div>
            </section>

            <section className={styles.recruitment_criteria}>
                <div className={styles.heading_bar}></div>
                <h1>Recruitment Criteria</h1>
                <ol type="1">
                   <li>
                        <h3>Age Range: 18-19, 20-22, 23-26, 27+</h3>
                        <p>
                            We divided age ranges to track relationships between users&#39; age and housing criteria, 
                            previous experience, budget, and occupation. Considering people&#39;s motivations/life 
                            goals/habits to help make informed roommate matching decisions.
                        </p>
                    </li> 
                    <li>
                        <h3>Occupation: &#40;recent high school grad, university/college students, international students, 
                            working professional&#41;
                        </h3>
                        <p>
                            We divided occupations to gain insight into the relationship between budget, relocation, 
                            as well as possible housing situation preferences and any barriers.
                        </p>
                    </li>
                    <li>
                        <h3>Budget &#40;&gt;$500, $500-900, $900-1200, $1200+&#41;</h3>
                        <p>
                            We divided budget into ranges to identify how broad users&#39; options can be, get a better 
                            understanding of renters&#39; budgets match with the market, as well as to understand how
                            budget influences characteristics users look for when looking into housing.
                        </p>
                    </li>
                    <li>
                        <h3>Preferred Living Situation: &#40;single living alone, couple moving in together, group  of 
                            friends looking to move together, or single moving into existing housing situation&#41;
                        </h3>
                        <p>
                            To see how preferred living situations influence how users go about the housing hunt. For 
                            example, how they interact with landlords and other potential roommates. Identify different 
                            touchpoints from the standpoint of different types of users.
                        </p>
                    </li>
                    <li>
                        <h3>
                            Renting Experience/Knowledge &#40;First-time renter, 2-4 times renting experience, 5+ times 
                            renting experience&#41;
                        </h3>
                        <p>
                            To help determine if users are new or experienced renters and to understand their current 
                            knowledge/confidence  and process for finding rental housing.
                        </p>
                    </li>
                </ol>
            </section>

            <section className={styles.key_insights}>
                <div className={styles.heading_bar}></div>
                <h1>Key Insights &#38; Themes</h1>
                <p>
                    The results of our user research highlight many pain-points and opportunities for improvement. 
                    Using data coding methods &#40;see below&#41; we identified key insights revolved around the lack of 
                    standardization of listings, communication methods, lease agreements, and the rental platforms 
                    themselves. There was a need for more consistency and streamlining in these areas to ensure users 
                    have more pleasant experiences at different touchpoints and make the most informed housing decisions. 
                    There was also a need for more personal, accurate, centralized and verified information regarding 
                    landlords and their properties &#40;including roommates where applicable&#41;. The issue here is that tenants 
                    often desire a better sense of their potential living conditions and interactions with the landlord, 
                    and landlords feel the same way about tenants. Addressing these challenges will ultimately lead to more
                    trust between users and confidence in the housing rental journey.
                </p>
                <div>
                    <div>
                        <Image 
                            src={DataCodingImage} 
                            width={715} 
                            height={200}
                            placeholder="blur"
                            blurDataURL={DataCodingImage}
                            alt="Data Coding Image"/>
                        <p>Data Coding</p>
                        
                    </div>
                    <div>
                        <KeyInsightsJsx />
                    </div>
                </div>
            </section>

            <section className={styles.problem_statement}>
                <div className={styles.heading_bar}></div>
                <h1>Problem Statement</h1>
                <p>
                    Our challenge is to improve the rental experience from end to end by standardizing and enhancing key 
                    touchpoints along the process—considering tools, listings, documents, and communication methods. The 
                    housing rental process is something that many young adults will have to go through at some point in 
                    their lives. Therefore, facilitating a smoother entry and experience along the rental journey would 
                    bring more confidence and enjoyment to an otherwise stressful task.
                </p>
            </section>

            <section className={styles.design_brief}>
                <div className={styles.heading_bar}/>
                <h1>Design Brief</h1>
                <h2>Goals &#38; Objectives</h2>
                <ul>
                    <li>Educate and build confidence in the renting process for users of all experience levels</li>
                    <li>Streamline the process of renting from the initial housing search to move in</li>
                    <li>Increase transparency and facilitate effective communication, to build trust between users</li>
                    <li>Facilitate safe and secure interactions between users</li>
                </ul>

                <h2>Design Requirements &#38; Features</h2>
                <ol type="1">
                    <li>
                        <h3>Chat feature</h3>
                        <p>Read receipts, scheduling feature.</p>
                    </li>
                    <li>
                        <h3>Document Management &#40; for applications and leases&#41;</h3>
                        <p>Standardized forms, highlighting changes made by landlords, centralize document signing and transfers.</p>
                    </li>
                    <li>
                        <h3>Resource packages</h3>
                        <p>Housing search 101, terminology, legal matters, etc.</p>
                    </li>
                    <li>
                        <h3>Holistic Map</h3>
                        <p>Crime hotspots, amenities, proximity, transportation, attractions, etc.</p>
                    </li>
                    <li>
                        <h3>Unifying and Standardizing Listings</h3>
                        <p>Fill-in-blank listings, preset filters, AI-generated descriptions, photo tips, renewal prompts, “Hot listings” tag.</p>
                    </li>
                    <li>
                        <h3>Tenant &amp; landlord accounts</h3>
                        <p>Tenants profile, save filters, favourite listings, discussion forums, reviews, document hub, Landlord profile, 
                            reviews &amp; ratings, verification, payment preferences.</p>
                    </li>
                    <li>
                        <h3>Favourite Listings</h3>
                        <p>Creating different lists &amp; folders, pros &amp; cons, comparison charts.</p>
                    </li>
                    <li>
                        <h3>Verification &amp; Virtual Tours</h3>
                        <p>Booking a tour, in-app video calling, two-step verification.</p>
                    </li>
                    <li>
                        <h3>Moving tips &amp; tricks</h3>
                        <p>Checklists, 3rd party moving resources.</p>
                    </li>
                </ol>

                
            </section>

            <section className={styles.personas}>
                <div className={styles.heading_bar} />
                <h1>Personas</h1>
                <p>
                    After determining our design brief we created four personas from our background research which captured
                    the breadth of users we wanted to cater to.
                </p>
                <div>
                    <div>
                        <Image 
                            src={PersonasAiden} 
                            width={370} 
                            height={260} 
                            placeholder="blur" 
                            blurDataURL={PersonasAiden} 
                            alt="Aiden Persona"
                            onClick={() => handleImageEnlarging(PersonasAiden)}/>
                        <p>Aiden: Freshmen Student</p>
                    </div>

                    <div>
                        <Image 
                            src={PersonasCarly} 
                            width={370} 
                            height={260} 
                            placeholder="blur" 
                            blurDataURL={PersonasCarly} 
                            alt="Carly Persona" 
                                onClick={() => handleImageEnlarging(PersonasCarly)}/>
                        <p>Carly: Long Distance Mover</p>
                    </div>

                    <div>
                        <Image 
                            src={PersonasTamira} 
                            width={370} 
                            height={260} 
                            placeholder="blur" 
                            blurDataURL={PersonasTamira} 
                            alt="Tamira Persona"
                            onClick={() => handleImageEnlarging(PersonasTamira)}/>
                        <p>Tamira: New Parent</p>
                    </div>

                    <div>
                        <Image 
                            src={PersonasSamu} 
                            width={370} 
                            height={260} 
                            placeholder="blur" 
                            blurDataURL={PersonasSamu} 
                            alt="Samu Persona"
                            onClick={() => handleImageEnlarging(PersonasSamu)}/>
                        <p>Samu: Young Professional</p>
                    </div>
                </div>
            </section>

            <section className={styles.user_journey_map}>
                <div className={styles.heading_bar} />
                <h1>User Journey Map</h1>
                <p>
                    Having uncovered many of the pain-points and opportunities from our research we put together a user journey map 
                    that showed the rental housing process from start to finish. This journey map allowed us to visualize where the 
                    problem areas where and highlight key touch points that could be improved.
                </p>
                <div>
                    <Image 
                        src={UserJourneyMap} 
                        width={1062} 
                        height={273} 
                        placeholder="blur" 
                        blurDataURL={UserJourneyMap} 
                        alt="User Journe Map Image"
                        onClick={() => handleImageEnlarging(UserJourneyMap)}/>
                    <p>User Journey Map</p>
                </div>
            </section>

            <section className={styles.concept_development}>
                <div className={styles.heading_bar} />
                <h1>Concept Development</h1>

                <h2>Competitive Analysis</h2>
                <p>We began our concept development by doing some market research on existing products and understanding their approach, functionality, and layout.</p>
                <div className={styles.concept_dev_imgs_div}>
                    <Image src={ConceptCompAnalysis} width={433} height={300} placeholder="blur" blurDataURL={ConceptCompAnalysis} alt="Competitive Analysis Image"/>
                    <p>Competitive Analysis</p>
                </div>

                <h2>Application Architecture</h2>
                <p>The design solution involved creating an information architecture, comprised of all the possible pages, content, features, and user actions for Homie. Each of these assets were then grouped into named categories and organized in a hierarchical structure. </p>
                <div>
                    <Image 
                        src={ConceptApplicationArch} 
                        width={519} 
                        height={346} 
                        placeholder="blur" 
                        blurDataURL={ConceptApplicationArch} 
                        alt="Application Architecture Image"
                        onClick={() => handleImageEnlarging(ConceptApplicationArch)}/>
                    <p>Information Architecture</p>
                </div>

                <h2>UI Development</h2>
                <p>We focused our concept development into three key areas of the application that we identified from our research which needed the most improvement.</p>
                
                <div>
                    <Image 
                        src={ConceptLandlordPortal} 
                        width={1061} 
                        height={351} 
                        placeholder="blur" 
                        blurDataURL={ConceptLandlordPortal} 
                        alt="Landlord Portal Image"
                        onClick={() => handleImageEnlarging(ConceptLandlordPortal)}/>
                    <p>Landlord Portal - Creating and Managing Listings </p>
                </div>

                <div>
                    <Image 
                        src={ConceptBrowsingListings} 
                        width={1061} 
                        height={351}
                        placeholder="blur" 
                        blurDataURL={ConceptBrowsingListings} 
                        alt="Browsing and comparing Image"
                        onClick={() => handleImageEnlarging(ConceptBrowsingListings)}/>
                    <p>Browsing and comparing listings</p>
                </div>

                <div>
                    <Image 
                        src={ConceptScheduling} 
                        width={1061} 
                        height={351} 
                        placeholder="blur" 
                        blurDataURL={ConceptScheduling} 
                        alt="Booking Viewings Image"
                        onClick={() => handleImageEnlarging(ConceptScheduling)}/>
                    <p>Booking Viewings</p>
                </div>
            </section>

            <section className={styles.user_testing}>
                <div className={styles.heading_bar} />
                <h1>User Testing</h1>
                <p>
                    The usability testing was an eye opening moment for the group to update and improve our design. We asked each participant to 
                    complete a certain task, and we were not allowed to intervene. We also timed each participant to understand how efficient 
                    each user task was. At the end we interviewed each participant on their experience. Through our user testers, we gained key 
                    insights into what features functioned smoothly and what needed tweaking.
                </p>
                <ol type="1">
                    <li>
                        <h3>Task: Conduct a search for a 2 bedroom house in the local area</h3>
                        <p>Average Time: 26 seconds</p>
                        <p>Results: Easy to understand and navigate. No issues.</p>
                    </li>
                    <li>
                        <h3>Task: Compare 2 listings from your favourites</h3>
                        <p>Average Time: 2:25 minutes</p>
                        <p>Results: Mixed reviews, users had trouble understanding where their favourite listings go and how to select them for comparison. Needs improvement.</p>
                    </li>
                    <li>
                        <h3>Task: Book a virtual meeting with a landlord</h3>
                        <p>Average Time: 1:30 minutes</p>
                        <p>Results: Difficult to find at first but once started it was easy to understand and schedule. Needs slight improvement.</p>
                    </li>
                    <li>
                        <h3>Task: Create and fill out a listing</h3>
                        <p>Average Time: 8:16 minutes </p>
                        <p>Results: Users had difficulty uploading multiple images, image navigation was hard to understand. Listing score confused users and no ability to tag photos. Needs improvement.</p>
                    </li>
                </ol>
            </section>

            <section className={styles.iteration_section}>
                <div className={styles.heading_bar} />
                <h1>Iterations</h1>
                <p>
                    After getting the results from our user testing we iterated on the problem areas that confused users. We redesigned 
                    certain user flows to have more clarity and organization from the feedback we gained from our testing.
                </p>
                <div>
                    <Image 
                        src={Iterations} 
                        width={786} 
                        height={368} 
                        placeholder="blur" 
                        blurDataURL={Iterations} 
                        alt="Iteration Image"
                        onClick={() => handleImageEnlarging(Iterations)}/>
                </div>
            </section>

            <section className={styles.final_design_section}>
                <div className={styles.heading_bar} />
                <h1>Final Design</h1>
                <p>
                    After addressing the concerns from our user testing we began the finalization of the design by creating a branding 
                    guideline and developing a high-fidelity version of the application.
                </p>
                <div>
                    <div>
                        <Image 
                            src={FinalDesignMood} 
                            width={424} 
                            height={300} 
                            placeholder="blur" 
                            blurDataURL={FinalDesignMood} 
                            alt="Final Design Image"
                            onClick={() => handleImageEnlarging(FinalDesignMood)}/>
                        <p>Mood Board</p>
                    </div>
                    <div>
                        <Image 
                            src={FinalDesignLanding} 
                            width={403} height={287} 
                            placeholder="blur" 
                            blurDataURL={FinalDesignLanding} 
                            alt="Landing Page Imge" 
                            onClick={() => handleImageEnlarging(FinalDesignLanding)}/>
                        <p>Landing Page</p>
                    </div>
                    <div>
                        <Image 
                            src={FinalDesignHousing} 
                            width={403} 
                            height={287} 
                            placeholder="blur" 
                            blurDataURL={FinalDesignHousing} 
                            alt="Housing Page Image" 
                            onClick={() => handleImageEnlarging(FinalDesignHousing)}/>
                        <p>Housing Search</p>
                    </div>
                    <div>
                        <Image 
                            src={FinalDesignListing} 
                            width={403} 
                            height={287} 
                            placeholder="blur" 
                            blurDataURL={FinalDesignListing} 
                            alt="Listing Page Image" 
                            onClick={() => handleImageEnlarging(FinalDesignListing)}/>
                        <p>Listing View</p>
                    </div>
                    <div>
                        <Image 
                            src={FinalDesignComparison} 
                            width={403} 
                            height={287} 
                            placeholder="blur" 
                            blurDataURL={FinalDesignComparison} 
                            alt="Comparison Page Image" 
                            onClick={() => handleImageEnlarging(FinalDesignComparison)}/>
                        <p>Comparison Page</p>
                    </div>
                    <div>
                        <Image 
                            src={FinalDesignMessaging} 
                            width={403} 
                            height={287} 
                            placeholder="blur" 
                            blurDataURL={FinalDesignMessaging} 
                            alt="Final Design Messaging" 
                            onClick={() => handleImageEnlarging(FinalDesignMessaging)}/>
                        <p>Messaging View</p>
                    </div>
                    <div>
                        <Image 
                            src={FinalDesignBooking} 
                            width={403} 
                            height={287} 
                            placeholder="blur" 
                            blurDataURL={FinalDesignBooking} 
                            alt="Final Design Booking" 
                            onClick={() => handleImageEnlarging(FinalDesignBooking)}/>
                        <p>Booking Page</p>
                    </div>
                </div>
            </section>

            <section className={styles.figma_prototype}>
                <div className={styles.heading_bar} />
                <h1>Figma Prototype</h1>
                <div>
                    <iframe width={675} height={376} loading="lazy" src="https://www.figma.com/proto/1XnqrlsKWKXYud37ZUmkJJ/Homie-Project?embed_host=share&kind=&node-id=537%3A1562&page-id=531%3A1143&scaling=min-zoom&starting-point-node-id=537%3A1562&viewport=414%2C532%2C0.06" allowFullScreen></iframe>
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
        </div>
            {(isScrolled) ? <div tabIndex="0" role="button" className={styles.go_top_button} onClick={() => scrollToTheTop()} onKeyDown={(e) => handleOnEnterPressToTop(e)}>&uarr;</div> : null}
        </>
    )
}