import BlogCard from "../../components/blog/BlogCard";
import Link from 'next/link'
import styles from '../../styles/components/BlogCard.module.css'

export default function Blogs({blogData}){
    const alldata = blogData.data
    
    return(
        <div className={styles.blogs_container}>
            {
                alldata.map((data, index) => {
                    return(
                        <Link 
                            href={'/blogs/' + data.id}
                            key={index.toString()}>
                                <a>
                                    <BlogCard data={data}/>
                                </a>
                        </Link>
                    )
                })
            }
        </div>
    )
    
}

export async function getStaticProps() {

    const res = await fetch("https://mahara-cms.herokuapp.com/api/blogs?populate=*")
    const data = await res.json()

    return{
        props:{
            blogData: data
        }
    }
}