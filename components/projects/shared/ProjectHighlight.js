import Image from "next/image"
import styles from "@project-highlight-styles"
import StyledBar from "@styled-bar-component"

export default function ProjectHighlight({data}){
    
    return(
        <div className={styles.container}>
            <section className={styles.top}>
                <div>
                    <h1>{data.title}</h1>  
                    <p>{data.synopsis}</p>
                    <p className={styles.tags}>{data.tags}</p>
                </div>

              
                <Image
                    src={data.project_image}
                    width={650}
                    height={430}
                    placeholder="blur"
                    blurDataURL={data.project_image}
                    alt="Core Image"
                />
               
            </section>

            <section className={styles.quick_glance}>
                <div>
                    <h3>Duration</h3>
                    <p>{data.duration}</p>
                </div>
                <div>
                    <h3>Role</h3>
                    <p>{data.role}</p>
                </div>
                <div>
                    <h3>Type</h3>
                    <p>{data.type}</p>
                </div>
                <div>
                    <h3>Methods &#38; Tools</h3>
                    <p>{data.research_methods}</p>
                </div>
            </section>

            <section className={styles.overview}>
                <StyledBar/>
                <h1>Overview</h1>
                <p>{data.overview}</p>
            </section>
        </div>
    )
}