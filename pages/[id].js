import styles from '../styles/Details.module.css'
import Image from 'next/image'
import { allProjects } from '../data/projects'
import {useRouter} from 'next/router'

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
                    <p className={styles.project_title}>{project.title}</p>
                    <p className={styles.project_description}>{project.description}</p>
                    <p className={styles.project_tags}>{project.tags}</p>
                </div>
                <Image src={project.image} height={400} width={600} alt={project.title}></Image>
            </div>

            <div className={styles.bottom_section}>
                <div className={styles.bottom_left}>
                    <div>
                        <p className={styles.property_heading}>Duration</p>
                        <p className={styles.property_value}>{project.duration}</p>
                    </div>
                    <div>
                        <p className={styles.property_heading}>Type</p>
                        <p className={styles.property_value}>{project.type}</p>
                    </div>
                    <div>
                        <p className={styles.property_heading}>Role</p>
                        <p className={styles.property_value}>{project.role}</p>
                    </div>
                    <div>
                        <p className={styles.property_heading}>Tools</p>
                        <p className={styles.property_value}>{project.tools}</p>
                    </div>
                </div>

                <div className={styles.bottom_right}>
                    <div>
                        <p className={styles.property_heading}>Problem</p>
                        <p className={styles.property_value}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed malesuada et a in. Placerat mattis lobortis nulla vitae nec, bibendum nec. Sit a etiam nec est et. Habitasse eleifend purus vivamus augue mauris nisl scelerisque. Blandit facilisi cursus faucibus donec placerat varius vitae, iaculis.</p>
                    </div>
                    <div>
                        <p className={styles.property_heading}>Research</p>
                        <p className={styles.property_value}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed malesuada et a in. Placerat mattis lobortis nulla vitae nec, bibendum nec. Sit a etiam nec est et. Habitasse eleifend purus vivamus augue mauris nisl scelerisque. Blandit facilisi cursus faucibus donec placerat varius vitae, iaculis.</p>
                    </div>
                    <div tabIndex="0">
                        <p className={styles.property_heading}>Subheading</p>
                        <p className={styles.property_value}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed malesuada et a in. Placerat mattis lobortis nulla vitae nec, bibendum nec. Sit a etiam nec est et. Habitasse eleifend purus vivamus augue mauris nisl scelerisque. Blandit facilisi cursus faucibus donec placerat varius vitae, iaculis.</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}