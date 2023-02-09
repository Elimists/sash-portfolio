import MarkdownIt from "markdown-it"
import BlogDetails from "../../components/blog/BlogDetails"
import styles from '../../styles/components/BlogDetails.module.css'


export default function Blog({blog}){
    const md = new MarkdownIt()
    const htmlContent = md.render(blog.attributes.details)
    return(
        <div className={styles.page_container}>
            <BlogDetails blog={blog}></BlogDetails>
        </div>
    )
}

export async function getStaticPaths(){

    const res = await fetch("https://mahara-cms.herokuapp.com/api/blogs?populate=*")
    const data = await res.json()

    const paths = data.data.map(blog => {
        return{
            params: {
                id: blog.id.toString()
            }
        }
    })

    return{
        paths,
        fallback: false
    }
}

export async function getStaticProps(context){
    const id = context.params.id
    const res = await fetch("https://mahara-cms.herokuapp.com/api/blogs/" + id +"?populate=*")
    const data = await res.json()

    return {
        props:{
            blog: data.data
        }
    }
}