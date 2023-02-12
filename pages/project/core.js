import process from 'process'
import MarkdownIt from 'markdown-it'
import styles from '../../styles/ProjectDetails.module.css'
import useScrolledDown from '../../hooks/useScrolledDown'

export default function Core({data}){

    const isScrolled = useScrolledDown()
    function scrollToTheTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const md = new MarkdownIt({
        html: true
    })

    const htmlContent = md.render(data.contents)

    return(
        <div className={styles.container}>
            <section
                className={styles.main_section}
                dangerouslySetInnerHTML={{__html: htmlContent}}>
            </section>
            {(isScrolled) ? <div tabIndex="0" role="button" className={styles.go_top_button} onClick={() => scrollToTheTop()} onKeyDown={(e) => handleOnEnterPressToTop(e)}>&uarr;</div> : null}
        </div>
    )
}

export async function getServerSideProps() {
    var currentEnv = process.env.NODE_ENV

    var url = (currentEnv == "development") ? "http://localhost:3000/api/projects/core": "https://www.mahara.ca/api/projects/core"

    const res = await fetch(url)
    const data = await res.json()

    return{
        props:{
            data
        }
    }
}
