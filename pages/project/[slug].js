import process from 'process'
import MarkdownIt from 'markdown-it'
import styles from '../../styles/ProjectDetails.module.css'
import useScrolledDown from '../../hooks/useScrolledDown'
import DOMPurify from 'isomorphic-dompurify'
import GoToTopButton from '../../components/GoToTopButton'
import OtherProjects from '../../components/OtherProjecs'

export default function Core({data}){
    const isScrolled = useScrolledDown()

    const md = new MarkdownIt({
        html: true
    })


    const htmlContent = md.render(data.contents)

    const cleanedContent = DOMPurify.sanitize(htmlContent)

    return(
        <div className={styles.container}>
            <section
                className={styles.main_section}
                dangerouslySetInnerHTML={{__html: cleanedContent}}>
            </section>
            <OtherProjects slug={data.slug}/>
            {(isScrolled) ? <GoToTopButton/> : null}
        </div>
    )
}

export async function getServerSideProps(context) {
    var currentEnv = process.env.NODE_ENV

    var slug = context.params.slug

    var url = (currentEnv == "development") ? "http://localhost:3000/api/project" : "https://www.mahara.ca/api/project"
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({slug})
    })
    
    const data = await res.json()

    return{
        props:{
            data
        }
    }
}