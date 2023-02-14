import process from 'process'
import MarkdownIt from 'markdown-it'
import styles from '../../styles/ProjectDetails.module.css'
import useScrolledDown from '../../hooks/useScrolledDown'
import DOMPurify from 'isomorphic-dompurify'
import GoToTopButton from '../../components/GoToTopButton'
import OtherProjects from '../../components/OtherProjecs'
import { unified } from 'unified'
import rehypeParse from 'rehype-parse'
import rehypeStringify from 'rehype-stringify'
import { visit } from 'unist-util-visit'
import parameterize from 'parameterize'
import TableOfContents from '../../components/TableOfContents'

export default function Core({data}){
    const isScrolled = useScrolledDown()

    const md = new MarkdownIt({
        html: true
    })

    const htmlContent = md.render(data.contents)

    const tableOfContents = []

    const content  = unified()
    .use(rehypeParse, {
        fragment: true,
    })
    .use(() => {
        return (tree) => {
            visit(tree, 'element', (node) => {
                if (node.tagName === 'h3'){
                    const id = parameterize(node.children[0].value)
                    node.properties.id = id
                    tableOfContents.push(
                        {
                            id,
                            title: node.children[0].value
                        }
                    )
                }
            })
        }
    })
    .use(rehypeStringify)
    .processSync(htmlContent)
    .toString()

    const cleanedContent = DOMPurify.sanitize(content)

    return(
        <>
            <TableOfContents toc={tableOfContents}/>
            <div className={styles.container}>
                <section
                    className={styles.main_section}
                    dangerouslySetInnerHTML={{__html: cleanedContent}}>
                </section>
                <OtherProjects slug={data.slug}/>
                {(isScrolled) ? <GoToTopButton/> : null}
            </div>
        </>
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