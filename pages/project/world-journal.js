import process from 'process'
import MarkdownIt from 'markdown-it'
import styles from '../../styles/ProjectDetails.module.css'

export default function WorldJournal({data}){

    const md = new MarkdownIt({
        html: true
    })

    const htmlContent = md.render(data.contents)

    function test(element) {
        var newTab = window.open();
        setTimeout(function() {
            newTab.document.body.innerHTML = element.innerHTML;
        }, 500);
        return false;
    }

    return(
        <div className={styles.container}>
            <section
                className={styles.main_section}
                dangerouslySetInnerHTML={{__html: htmlContent}}>
            </section>
        </div>
    )
}

export async function getServerSideProps() {
    var currentEnv = process.env.NODE_ENV

    var url = (currentEnv == "development") ? "http://localhost:3000/api/projects/worldjournal": "https://www.mahara.ca/api/projects/worldjournal"

    const res = await fetch(url)
    const data = await res.json()

    return{
        props:{
            data
        }
    }
}

