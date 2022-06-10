import styles from '../styles/Details.module.css'
import Image from 'next/image'
import { allProjects } from '../data/projects'
import {useRouter} from 'next/router'
import useWindowDimensions from '../hooks/useWindowDimensions'
import Link from 'next/link'
import {useState, useEffect, useRef} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import EnlargeImage from '../components/EnlargeImage'
import QuickNavigation from '../components/QuickNavigation'

import ConceptCompAnalysis from '../public/projects/homie/concept_comp_analysis.webp'
import ConceptDevInfoArch from '../public/projects/homie/concept_dev_info_arch.webp'
import ConceptLandlordUi from '../public/projects/homie/concept_dev_landlord_ui.webp'
import ConceptScheduling from '../public/projects/homie/concept_dev_scheduling_ui.webp'
import ConceptSearching from '../public/projects/homie/concept_dev_searching_ui.webp'
import FinalDesignBooking from '../public/projects/homie/final_design_booking.webp'
import FinalDesignComparison from '../public/projects/homie/final_design_comparison.webp'
import FinalDesignHousing from '../public/projects/homie/final_design_housing.webp'
import FinalDesignLanding from '../public/projects/homie/final_design_landing.webp'
import FinalDesignListing from '../public/projects/homie/final_design_listing.webp'
import FinalDesignMessaging from '../public/projects/homie/final_design_messaging.webp'
import FinalDesignMood from '../public/projects/homie/final_design_mood.webp'
import Iterations from '../public/projects/homie/iterations.webp'
import KeyInsights1 from '../public/projects/homie/key_insights1.webp'
import KeyInsightsJsx from '../components/svgImages/homie/KeyInsightsSvg'
import PersonasAiden from '../public/projects/homie/personas_aiden.webp'
import PersonasCarly from '../public/projects/homie/personas_carly.webp'
import PersonasSamu from '../public/projects/homie/personas_samu.webp'
import PersonasTamira from '../public/projects/homie/personas_tamira.webp'
import ProcessJsxSvgImg from '../components/svgImages/homie/ProcessSvg'
import UserGroupLandlordJsxSvgImg from '../components/svgImages/homie/UserGroupLandlordsSvg'
import UserGroupTenantsJsxSvgImg from '../components/svgImages/homie/UserGroupTenantsSvg'
import UserJourneyMap from '../public/projects/homie/user_journey.webp'

export const getStaticPaths = async () => {

    const paths = allProjects.map(project => {
        return {
            params: {
                id: project.id.toString()
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const project = allProjects[parseInt(id-1)] // Since its an array, index needs to start at 0

   
    const otherProjects = []

    const previousProject = parseInt(id) - 1
    const nextProject = parseInt(id) + 1
    allProjects.forEach((element) => {
        if (element.id == previousProject){
            otherProjects.push({type: "Previous", element})
        }
        if (element.id == nextProject){
            otherProjects.push({type: "Next", element})
        }
    })


    return{
        props: {
            project,
            otherProjects
        }
    }
}


const elementIds = [
    "Top",
    "Overview",
    "Problem",
    "Process",
    "Research Goals",
    "Recruitment Method",
    "User Groups",
    "Recruitment Criteria",
    "Key Insights",
    "Problem Statement",
    "Design Brief",
    "Personas",
    "User Journey Map",
    "Concept Development",
    "User Testing",
    "Iterations",
    "Final Design",
    "Figma Prototype"
]



export default function ProjectDetail({project, otherProjects}){

    const router = useRouter()
    const { height, width } = useWindowDimensions()
    const [showModal, setShowModal] = useState(false)
    const [imageSource, setImageSource] = useState(null)
    const [imageDimension, setImageDimensions] = useState(null)
    const [quickNavPressed, setQuickNavPressed] = useState(false)
    const [isScrolledDown, setIsScrolledDown] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 200) {
                setIsScrolledDown(true)
            } else {
                setIsScrolledDown(false)
            }
        })
    }, [])

    function scrollToTheTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    function handleOnEnterPressToTop(event) {
        if (event.key === 'Enter') {
            scrollToTheTop()
        }
    }

    function handleGoingBackOnEnter(event){
        if (event.key === 'Enter'){
            router.push("/#my-projects-library")
        }
    }

    function handleEnterToClickSwitch(event, elementID) {
        if (event.key === 'Enter') {
            document.getElementById(elementID).click()
        }
    }


    function handleImageEnlarging(imageSource){
        setImageSource(imageSource)
        setShowModal(true)
    }

    useEffect(() => {
        if(showModal){
            document.body.style.overflow = 'hidden';
        }
        else{
            document.body.style.overflow = 'auto';
        }
    }, [showModal])

    useEffect(() => {
        if(showModal){
            setQuickNavPressed(false)
        }
    }, [showModal])


    

    return(
        <>
        {/**
        <div className={styles.quick_nav_button} onClick={() => setQuickNavPressed(!quickNavPressed)}>
            <div className={styles.arrow_container}>
                <motion.div
                    className={styles.arrow}
                    animate={(quickNavPressed) ? { rotate: 270} : {rotate: 90}}>
                    &lt;
                </motion.div>
            </div>
        </div>

        <QuickNavigation
            quickNavPressed={quickNavPressed}
            setQuickNavPressed={setQuickNavPressed}
            elementIds={elementIds}/>
        */}
        <EnlargeImage 
            showModal={showModal} 
            setShowModal={setShowModal} 
            imageSource={imageSource} 
            imageDimension={imageDimension}/>

        <div 
            
            className={styles.container} 
            id={project.title_url_safe} 
            onClick={() => setQuickNavPressed(false)}>
            
            <div
                className={styles.top_section} 
                id={"#" + elementIds[0].replace(/\s/g, "")}>
                
                <div className={styles.details_top_left}>
                    <a tabIndex="0" className={styles.go_back_button} onKeyDown={(e) => handleGoingBackOnEnter(e)} onClick={() => {
                        router.push("/#my-projects-library")
                    }}>
                        <p className={styles.left_arrow}>&larr; </p>Back
                    </a>
                    <h1 className={styles.project_title}>{project.title}</h1>
                    <p className={styles.project_description}>{project.description}</p>
                    <p className={styles.project_tags}>{project.tags}</p>
                </div>
                    <div className={styles.image_container}>
                        <Image  src={project.image} height={400} width={600} alt={project.title} placeholder="blur" blurDataURL={project.image}></Image>
                </div>
            </div>

            <div className={styles.bottom_section}>
                <div className={styles.project_highlights}>
                    <div className={styles.project_highlight}>
                        <p className={styles.property_heading}>Duration</p>
                        <p className={styles.property_value}>{project.duration}</p>
                    </div>
                    
                    <div className={styles.project_highlight}>
                        <p className={styles.property_heading}>Role</p>
                        <p className={styles.property_value}>{project.role}</p>
                    </div>
                    <div className={styles.project_highlight}>
                        <p className={styles.property_heading}>Type</p>
                        <p className={styles.property_value}>{project.type}</p>
                    </div>
                    <div className={styles.project_highlight}>
                        <p className={styles.property_heading}>Methods &#38; Tools</p>
                        <p className={styles.property_value}>{project.tools}</p>
                    </div>
                </div>

                <div className={styles.project_indepth}>

                    {('overview' in project) &&
                    
                        <div tabIndex="0" className={styles.detail_section} id={"#" + elementIds[1].replace(/\s/g, "") }>
                            <div className={styles.heading_bar}></div> 
                            <h2 className={styles.details_heading}>Overview</h2>
                            <p className={styles.details_value}>{project.overview}</p>
                        </div>
                    }

                    {('problem' in project) && 
                        <div tabIndex="0" className={styles.detail_section} id={"#" + elementIds[2].replace(/\s/g, "") }>
                            <div className={styles.heading_bar}></div> 
                            <h2 className={styles.details_heading}>Problem</h2>
                            <p className={styles.details_value}>{project.problem}</p>
                        </div>
                    }

                    {('research' in project) &&
                        <div tabIndex="0" className={styles.detail_section} >
                            <div className={styles.heading_bar}></div>
                            <h2 className={styles.details_heading}>Research</h2>
                            <p>{project.research.description}</p>
                            {project.research.images.map((img, index) => {
                                return(
                                    <div key={index.toString()}>
                                        <Image src={img.image} width={290} height={244} placeholder="blur" blurDataURL={img.image}/>
                                    </div>
                                )
                            })}
                            <p>{project.research.category_insights.description}</p>
                            {project.research.category_insights.insights.map((insight, index) => {
                                return(
                                    <div key={index.toString()}>
                                        <h4>{insight.title}</h4>
                                        <p>{insight.description}</p>
                                    </div>
                                )
                            })}
                            <p>{project.research.category_objectives.description}</p>
                            {project.research.category_objectives.objectives.map((objective, index) => {
                                return(
                                    <div key={index.toString()}>
                                        <h4>{objective.title}</h4>
                                        <p>{objective.description}</p>
                                    </div>
                                )
                            })}
                        </div>
                    }

                    {('ideation' in project) &&
                        <div tabIndex="0" className={styles.detail_section} >
                            <div className={styles.heading_bar}></div>
                            <h2 className={styles.details_heading}>Ideation</h2>
                            <p>{project.ideation.concept_development.description}</p>
                            {project.ideation.concept_development.images.map((img, index) => {
                                return(
                                    <div key={index.toString()}>
                                        <Image 
                                            src={img.image} 
                                            width={img.width} 
                                            height={img.height} 
                                            placeholder="blur" 
                                            blurDataURL={img.image} 
                                            alt={img.title}/>
                                        <p>{img.title}</p>
                                    </div>
                                )
                            })}
                            <p>{project.ideation.objectives.description}</p>
                            <div>
                                {project.ideation.objectives.categories.map((category, index) => {
                                    return(
                                        <div key={index.toString()}>
                                            <h4>{category.title}</h4>
                                            <p>{category.description}</p>
                                            <div>
                                                <Image
                                                    src={category.image}
                                                    width={category.width}
                                                    height={category.height}
                                                    placeholder="blur"
                                                    blurDataURL={category.image}
                                                    alt={category.title + "Image"} />
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    }

                    {('final_onboarding_pages' in project) &&
                         <div tabIndex="0" className={styles.detail_section} >
                            <div className={styles.heading_bar}></div>
                            <h2 className={styles.details_heading}>Final Onboarding Process</h2>
                                <iframe width={848} height={441} loading="lazy" src={project.final_onboarding_pages.src} allowFullScreen></iframe>
                        </div>
                    }

                    {('new_home_page_ideation' in project) &&
                        <div tabIndex="0" className={styles.detail_section} >
                                <div className={styles.heading_bar}></div>
                                <h2 className={styles.details_heading}>New Home Page Ideation</h2>
                                <div>
                                    <p>{project.new_home_page_ideation.flowA.description}</p>
                                    {project.new_home_page_ideation.flowA.images.map((img, index) => {
                                        return(
                                            <div key={index.toString()}>
                                                <Image
                                                    src={img.image}
                                                    width={img.width}
                                                    height={img.height}
                                                    placeholder="blur"
                                                    blurDataURL={img.image}
                                                    alt={img.title}/>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div>
                                    <p>{project.new_home_page_ideation.flowB.description}</p>
                                    {project.new_home_page_ideation.flowB.images.map((img, index) => {
                                        return(
                                            <div className={index.toString()}>
                                                <Image
                                                    src={img.image}
                                                    width={img.width}
                                                    height={img.height}
                                                    placeholder="blur"
                                                    blurDataURL={img.image}
                                                    alt={img.title}/>
                                                <p>{img.title}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div>
                                    <p>{project.new_home_page_ideation.flowC.description}</p>
                                    {project.new_home_page_ideation.flowC.images.map((img, index) => {
                                        return(
                                            <div className={index.toString()}>
                                                <Image
                                                    src={img.image}
                                                    width={img.width}
                                                    height={img.height}
                                                    placeholder="blur"
                                                    blurDataURL={img.image}
                                                    alt={img.title}/>
                                                <p>{img.title}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                        </div>
                    }

                    {('new_home_page_concepts' in project) &&
                        <div tabIndex="0" className={styles.detail_section} >
                            <div className={styles.heading_bar}></div>
                            <h2 className={styles.details_heading}>New Home Page Concepts</h2>
                            {project.new_home_page_concepts.images.map((img, index) => {
                                return(
                                    <div key={index.toString()}>
                                        <Image
                                            src={img.image}
                                            width={img.width}
                                            height={img.height}
                                            placeholder="blur"
                                            blurDataURL={img.image}
                                            alt={img.image}/>
                                        <div>
                                            <h4>{img.title}</h4>
                                            <p>{img.description}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    }

                    {('final_home_page' in project) &&
                        <div tabIndex="0" className={styles.detail_section} >    
                            <div className={styles.heading_bar}></div>
                            <h2 className={styles.details_heading}>Final Home Page</h2>
                            <p>{project.final_home_page.description}</p>
                            {project.final_home_page.images.map((img, index) => {
                                return(
                                    <div>
                                        <Image
                                            src={img.image}
                                            width={img.width}
                                            height={img.height}
                                            placeholder="blur"
                                            blurDataURL={img.image}
                                            alt={img.image}/>
                                    </div>
                                )
                            })}
                            <iframe width={848} height={441}  loading="lazy" src={project.final_home_page.iframe_src} allowFullScreen></iframe>
                        </div>
                    }

                    {('process' in project) &&
                        <div tabIndex="0" className={styles.detail_section} id={"#" + elementIds[3].replace(/\s/g, "")} >
                            <div className={styles.heading_bar}></div> 
                            <h2 className={styles.details_heading}>Process</h2>
                            <div className={styles.process_image_container}>
                                <ProcessJsxSvgImg/>
                            </div>
                        </div>
                    }

                    {('research_goals' in project) &&
                            <div tabIndex="0" className={styles.detail_section} id={"#" + elementIds[4].replace(/\s/g, "")} >
                            <div className={styles.heading_bar}></div> 
                            <h2 className={styles.details_heading}>Research Goals</h2>
                            <ul className={styles.research_goal_ul}>
                            {project.research_goals.map((goal, index) => {
                                return(
                                    <li key={index.toString()} className={styles.research_goal_list_item}>{goal}</li>
                                )
                            })}
                            </ul>
                        </div>
                    }

                    {('recruitment_method' in project) && 
                            <div tabIndex="0" className={styles.detail_section} id={"#" + elementIds[5].replace(/\s/g, "")} >
                            <div className={styles.heading_bar}></div> 
                        <h2 className={styles.details_heading}>Recruitment Method</h2>
                        <p>{project.recruitment_method}</p>
                    </div>
                    }

                    {('user_groups' in project) && 
                            <div tabIndex="0" className={styles.detail_section} id={"#" + elementIds[6].replace(/\s/g, "")} >
                            <div className={styles.heading_bar}></div> 
                            <h2 className={styles.details_heading}>User Groups</h2>
                            <p>{project.user_groups.description}</p>
                            <div className={styles.user_group_image}>
                                <div><UserGroupTenantsJsxSvgImg /></div>
                                <div><UserGroupLandlordJsxSvgImg/></div>
                            </div>
                        </div>
                    }

                    {('recruitment_criterias' in project ) && 
                        <div tabIndex="0" className={styles.detail_section} id={"#" + elementIds[7].replace(/\s/g, "")} >
                            <div className={styles.heading_bar}></div> 
                        <h2 className={styles.details_heading}>Recruitment Criteria</h2>
                        <ol type='1' className={styles.criteria_ol}>
                        {project.recruitment_criterias.map((criteria, index) => {
                            return(
                                <li key={index.toString()}>
                                        <h4 className={styles.criteria_list_title}>{criteria.title}</h4>
                                        <p>{criteria.description}</p>
                                </li>
                            )
                        })}
                        </ol>
                    </div>
                    }

                    {('key_insights' in project) &&
                            <div tabIndex="0" className={styles.detail_section} id={"#" + elementIds[8].replace(/\s/g, "")} >
                            <div className={styles.heading_bar}></div> 
                            <h2>Key Insights</h2>
                            <p>{project.key_insights.details}</p>
                            <div className={styles.key_insights_imgs_container}>
                                {project.key_insights.images.map((img, index) => {
                                    return(
                                        <div key={index.toString()} className={styles.key_insight_img}>
                                            <Image 
                                                src={img.img} 
                                                height={img.height} 
                                                width={img.width} 
                                                alt={img.title} 
                                                placeholder="blur" 
                                                blurDataURL={img.img}></Image>
                                                <p>{img.title}</p>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className={styles.key_insight_img2}>
                                <KeyInsightsJsx/>
                            </div>
                        </div>
                    }

                    {('problem_statement' in project) &&
                            <div className={styles.detail_section} id={"#" + elementIds[9].replace(/\s/g, "")} >
                            <div className={styles.heading_bar}></div>
                            <h2>Problem Statement</h2>
                            <p>{project.problem_statement}</p>
                        </div>
                    }

                    {/** DESIGN BRIEFS */}
                    {('design_briefs' in project) &&
                            <div className={styles.detail_section} id={"#" + elementIds[10].replace(/\s/g, "")} >
                            <div className={styles.heading_bar}></div> 
                        <h2 className={styles.details_heading}>Design Brief</h2>
                        {project.design_briefs.map((brief, index) => {
                            if (brief.title === "Goal & Objectives"){
                                return(
                                    <>
                                        <h3 key={index.toString()}>{brief.title}</h3>
                                        <ul>
                                            {brief.goals.map((goal, index) => {
                                                return (
                                                    <li className={styles.briefs_li} key={index.toString()}>{goal}</li>
                                                    )
                                            })} 
                                        </ul>
                                    
                                    </>
                                )
                            }

                            if (brief.title === "Design Requirements & Features"){
                                return(
                                    <>
                                        <h3>{brief.title}</h3>
                                        <div className={styles.brief_req_feat}>
                                            <ol type="1" className={styles.briefs_ol}>
                                                {brief.goals.map((goal, index) => {
                                                    return(
                                                        <>
                                                            <li key={index.toString()}>
                                                                <h4>{goal.title}</h4>
                                                                <p>{goal.description}</p>
                                                            </li>
                                                        </>
                                                    )
                                                })}
                                            </ol>
                                        </div>
                                    </>
                                )
                            }
                        })}
                    </div>
                    }

                    {/** PERSONAS */}
                    {('personas' in project) &&
                            <div className={styles.detail_section} id={"#" + elementIds[11].replace(/\s/g, "")} >
                        <div className={styles.heading_bar}></div>
                        <h2 className={styles.details_heading}>Personas</h2>
                        <p>{project.personas.description}</p>
                        <div className={styles.personas_image_container}>
                            {project.personas.images.map((imageObj, index) => {
                                return(
                                    <motion.div 
                                        key={index.toString()} 
                                        className={styles.persona_container}
                                        whileHover={{
                                            scale: 1.05,
                                            transition: { duration: .4 },
                                        }}
                                        >
                                        <div className={styles.persona_image_div}>
                                            <Image 
                                                src={imageObj.image} 
                                                height={imageObj.height} 
                                                width={imageObj.width} 
                                                alt={imageObj.title} 
                                                placeholder="blur" 
                                                blurDataURL={imageObj.image}
                                                onClick={() => handleImageEnlarging(imageObj.image)}></Image>
                                        </div>
                                        <p className={styles.persona_paragraph}>{imageObj.title}</p>
                                    </motion.div>
                                )
                                
                            })}
                        </div> 
                    </div>
                    }

                    {('user_journey_map' in project) &&
                            <div className={styles.detail_section} id={"#" + elementIds[12].replace(/\s/g, "")} >
                            <div className={styles.heading_bar}></div>
                            <h2 className={styles.details_heading}>User Journey Map</h2>
                            <p>{project.user_journey_map.description}</p>
                            <div className={styles.user_journey_img_container}>
                                {project.user_journey_map.images.map((img, index) => {
                                    return(
                                        <motion.div 
                                            whileHover={{
                                                scale: 1.05,
                                                transition: { duration: .4 },
                                            }}
                                            key={index.toString()} >
                                            <Image 
                                                
                                                src={img.image} 
                                                height={img.height} 
                                                width={img.width} 
                                                alt={img.title} 
                                                placeholder="blur" 
                                                blurDataURL={img.image}
                                                onClick={() => handleImageEnlarging(img.image)}></Image>
                                            <p>{img.title}</p>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </div>
                    }

                    {('concept_development' in project) &&
                            <div className={styles.detail_section} id={"#" + elementIds[13].replace(/\s/g, "")} >
                            <div className={styles.heading_bar}></div>
                            <h2 className={styles.details_heading}>Concept Developmet</h2>
                            <div className={styles.concept_container_outer}>
                                {project.concept_development.map((concept, index) => {
                                    return(
                                        <div key={index.toString()} className={styles.concept_conatiner_inner}>
                                            <h3>{concept.title}</h3>
                                            <p>{concept.description}</p>
                                            <div className={styles.concept_images_container}>
                                                {concept.images.map((img, index) => {
                                                    return(
                                                        <motion.div 
                                                            key={index.toString()} 
                                                            className={styles.concept_div}
                                                            whileHover={{
                                                                scale: 1.05,
                                                                transition: { duration: .4 },
                                                            }}>
                                                            <div className={styles.concept_image_div}>
                                                                <Image 
                                                                    src={img.image}
                                                                    height={img.height}
                                                                    width={img.width}
                                                                    alt={img.title} 
                                                                    placeholder="blur" 
                                                                    blurDataURL={img.image}
                                                                    onClick={() => handleImageEnlarging(img.image)}></Image>
                                                            </div>
                                                            <p>{img.title}</p>
                                                        </motion.div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    }

                    {('user_testing' in project) && 
                            <div className={styles.detail_section} id={"#" + elementIds[14].replace(/\s/g, "")} >
                            <div className={styles.heading_bar}></div>
                            <h2 className={styles.details_heading}>User Testing</h2>
                            <p>{project.user_testing.description}</p>
                            <ol type="1">
                                {project.user_testing.insights.map((insight, index) => {
                                    return(
                                        <>
                                            <li key={index.toString()} className={styles.user_testing_li}>
                                                <h3>{insight.title}</h3>
                                                <p>Average Time: {insight.time}</p>
                                                <p>Results: {insight.results}</p>
                                            </li>
                                        </>
                                    )
                                })}
                            </ol>
                        </div>
                    }

                    {('iterations' in project) && 
                            <div className={styles.detail_section} id={"#" + elementIds[15].replace(/\s/g, "")} >
                            <div className={styles.heading_bar}></div>
                            <h2 className={styles.details_heading}>Iterations</h2>
                            <p>{project.iterations.description}</p>
                            <div className={styles.iteration_image_container}>
                                <motion.div
                                    style={{cursor: 'pointer'}}
                                    whileHover={{
                                        scale: 1.05,
                                        transition: { duration: .4 },
                                    }}>
                                    <Image 
                                        src={project.iterations.image} 
                                        height={project.iterations.height} 
                                        width={project.iterations.width} 
                                        alt={project.title} 
                                        placeholder="blur" 
                                        blurDataURL={project.iterations.image}
                                        onClick={() => handleImageEnlarging(project.iterations.image)}></Image>
                                </motion.div>
                                <p>{project.title}</p>
                            </div>
                        </div>
                    }

                    {('final_design' in project) && 
                            <div className={styles.detail_section} id={"#" + elementIds[16].replace(/\s/g, "")} >
                            <div className={styles.heading_bar}></div>
                            <h2 className={styles.details_heading}>Final Design</h2>
                            <p>{project.final_design.description}</p>
                            <div className={styles.final_design_imgs_container}>
                                {project.final_design.images.slice(0).reverse().map((img, index) => {
                                    return(
                                        <motion.div 
                                            style={{cursor:'pointer'}}
                                            key={index.toString()} 
                                            whileHover={{
                                            scale: 1.05,
                                            transition: { duration: .4 },
                                            }}>
                                            <Image 
                                                src={img.image} 
                                                height={img.height} 
                                                width={img.width} 
                                                alt={img.title} 
                                                placeholder="blur" 
                                                blurDataURL={img.image}
                                                onClick={() => handleImageEnlarging(img.image)}></Image>
                                            <p>{img.title}</p>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </div>
                    }

                    {('figma_prototype' in project) &&
                            <div className={styles.detail_section} id={"#" + elementIds[17].replace(/\s/g, "")} >
                            <div className={styles.heading_bar}></div>
                            <h2 className={styles.details_heading}>Figma Prototype</h2>
                            {(project.title === "Homie") &&
                                <iframe className={styles.iframe} loading="lazy"  src={project.figma_prototype.src} allowFullScreen></iframe>
                            }
                        </div>
                    }
                </div>
                {/**End of BOttom Detail section div */}
                
                {/**PREVIOUS & NEXT PROJECTS*/}
                <div className={styles.detail_section}>
                    <div className={styles.heading_bar}></div>
                    <h2 className={styles.details_heading}>Other Projects</h2>
                    <div className={styles.other_projects_container}>
                        
                        {(otherProjects.length > 0) &&
                            <>
                                {otherProjects.map((otherProject, index) => {
                                    return(
                                        <>
                                            <Link href={'/' + otherProject.element.id + '#' + otherProject.element.title_url_safe} key={otherProject.element.id.toString()}>
                                                <div id={otherProject.element.title_url_safe} className={styles.other_project_img_container} tabIndex="0" role="button" onKeyDown={(e) => handleEnterToClickSwitch(e, otherProject.element.title_url_safe)} >
                                                    <p>{otherProject.type} Project</p>
                                                    <Image src={otherProject.element.image} alt={otherProject.element.name} width="400" height="250" placeholder="blur" blurDataURL={otherProject.element.image}></Image>
                                                    <p className={styles.other_project_title}>{otherProject.element.title}</p>
                                                </div> 
                                            </Link>
                                        </>
                                    )
                                })}
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
            {(isScrolledDown) ? 
                <div 
                    tabIndex="0" 
                    role="button" 
                    className={styles.go_top_button} 
                    onClick={() => scrollToTheTop()} 
                    onKeyDown={(e) => handleOnEnterPressToTop(e)}>
                        &uarr;
                </div> : null}
        </>
    )
}