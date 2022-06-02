import styles from '../styles/Details.module.css'
import Image from 'next/image'
import { allProjects } from '../data/projects'
import {useRouter} from 'next/router'
import useWindowDimensions from '../hooks/useWindowDimensions'

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
    const project = allProjects[parseInt(id-1)]

    return{
        props: {project: project}
    }
}

export default function ProjectDetail({project}){

    const router = useRouter()
    const { height, width } = useWindowDimensions()

    function handleGoingBackOnEnter(event){
        if (event.key === 'Enter'){
            router.push("/#my-projects-library")
        }
    }

    return(
        <div className={styles.container} id={project.title_url_safe}>
            
            <div className={styles.top_section}>
                
                <div className={styles.details_top_left}>
                    <a tabIndex="0" className={styles.go_back_button} onKeyDown={(e) => handleGoingBackOnEnter(e)} onClick={() => {
                        router.push("/#my-projects-library")
                    }}>
                    <p className={styles.left_arrow}>&larr; </p>Back</a>
                    <h1 className={styles.project_title}>{project.title}</h1>
                    <p className={styles.project_description}>{project.description}</p>
                    <p className={styles.project_tags}>{project.tags}</p>
                </div>
                <div className={styles.image_container}>
                    <Image src={project.image} height={400} width={600} alt={project.title}></Image>
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
                    
                        <div tabIndex="0" className={styles.detail_section}>
                            <div className={styles.heading_bar}></div> 
                            <h2 className={styles.details_heading}>Overview</h2>
                            <p className={styles.details_value}>{project.overview}</p>
                        </div>
                    }

                    {('problem' in project) && 
                        <div tabIndex="0" className={styles.detail_section} >
                            <div className={styles.heading_bar}></div> 
                            <h2 className={styles.details_heading}>Problem</h2>
                            <p className={styles.details_value}>{project.problem}</p>
                        </div>
                    }

                    {('process' in project) &&
                        <div tabIndex="0" className={styles.detail_section} >
                            <div className={styles.heading_bar}></div> 
                            <h2 className={styles.details_heading}>Process</h2>
                            <div className={styles.process_image_container}>
                                <Image src={project.process} height={250} width={650} alt="Process Image"></Image>
                            </div>
                        </div>
                    }

                    {('research_goals' in project) &&
                        <div tabIndex="0" className={styles.detail_section} >
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
                        <div tabIndex="0" className={styles.detail_section} >
                            <div className={styles.heading_bar}></div> 
                        <h2 className={styles.details_heading}>Recruitment Method</h2>
                        <p>{project.recruitment_method}</p>
                    </div>
                    }

                    {('user_groups' in project) && 
                        <div tabIndex="0" className={styles.detail_section} >
                            <div className={styles.heading_bar}></div> 
                        <h2 className={styles.details_heading}>User Groups</h2>
                        <p>{project.user_groups.description}</p>
                        <Image src={project.user_groups.image} height={400} width={600} alt="User Group Image"></Image>
                    </div>
                    }

                    {('recruitment_criterias' in project ) && 
                        <div tabIndex="0" className={styles.detail_section} >
                            <div className={styles.heading_bar}></div> 
                        <h2 className={styles.details_heading}>Recruitment Criteria</h2>
                        <ol type='1'>
                        {project.recruitment_criterias.map((criteria, index) => {
                            return(
                                <li key={index.toString()}>
                                
                                        <h4>{criteria.title}</h4>
                                        <p>{criteria.description}</p>
                                </li>
                            )
                        })}
                        </ol>
                    </div>
                    }

                    {('key_insights' in project) &&
                        <div tabIndex="0" className={styles.detail_section} >
                            <div className={styles.heading_bar}></div> 
                        <h2>Key Insights</h2>
                        <p>{project.key_insights.details}</p>
                        <div className={styles.key_insights_images}>
                            <Image src={project.key_insights.image} height={275} width={375} alt="Key Insights Image 1"></Image>
                            <Image src={project.key_insights.image2} height={275} width={375} alt="Key Insights Image 2"></Image>
                        </div>
                        <p>Data Coding</p>
                        <Image src={project.key_insights.image} height={100} width={1100} alt="Key Insights Image"></Image>
                    </div>
                    }

                    {('problem_statement' in project) &&
                        <div className={styles.detail_section} >
                            <div className={styles.heading_bar}></div>
                            <h2>Problem Statement</h2>
                            <p>{project.problem_statement}</p>
                        </div>
                    }

                    {/** DESIGN BRIEFS */}
                    {('design_briefs' in project) &&
                        <div className={styles.detail_section} >
                            <div className={styles.heading_bar}></div> 
                        <h2 className={styles.details_heading}>Design Brief</h2>
                        {project.design_briefs.map((brief, index) => {
                            if (brief.title === "Goal & Objectives"){
                                return(
                                    <>
                                        <h3>{brief.title}</h3>
                                        
                                        {brief.goals.map((goal, index) => {
                                            return (<li key={index.toString()}>{goal}</li>)
                                            
                                        })} 
                                    
                                    </>
                                )
                            }

                            if (brief.title === "Design Requirements & Features"){
                                return(
                                    <>
                                        <h3>{brief.title}</h3>
                                        <div className={styles.brief_req_feat}>
                                            <ol type="1">
                                                {brief.goals.map((goal, index) => {
                                                    return(
                                                        <>
                                                            <li>
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
                    <div>
                        <div className={styles.heading_bar}></div>
                        <h2 className={styles.details_heading}>Personas</h2>
                        <p>{project.personas.description}</p>
                        <div className={styles.personas_image_container}>
                            {project.personas.images.map((imageObj, index) => {
                                return(
                                    <div key={index.toString()} className={styles.persona_image}>
                                        <div>
                                            <Image src={imageObj.image} height={250} width={350}></Image>
                                        </div>
                                        <p>{imageObj.title}</p>
                                    </div>
                                )
                                
                            })}
                        </div>
                    </div>
                    }
                </div>
            </div>
            
        </div>
    )
}