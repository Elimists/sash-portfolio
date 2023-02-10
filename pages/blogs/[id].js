import BlogDetails from "../../components/blog/BlogDetails"
import styles from '../../styles/components/BlogDetails.module.css'


export default function Blog({blog}){
    return(
        <div className={styles.page_container}>
            <BlogDetails blog={blog}></BlogDetails>
        </div>
    )
}


export async function getServerSideProps(context){
    const id = context.params.id
    const res = await fetch("https://mahara-cms.herokuapp.com/api/blogs/" + id +"?populate=*")
    const data = await res.json()

    return {
        props:{
            blog: data.data
        }
    }
}