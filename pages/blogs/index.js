import BlogCard from "../../components/blog/BlogCard";
import Link from 'next/link'
import styles from '../../styles/components/BlogCard.module.css'
import process from 'process'

export default function Blogs({data}){
    const contents = JSON.parse(data.contents)

    console.log(contents)
    
    return(
        <div className={styles.blogs_container}>
            
            {
                contents.map((content, index) => {
                    return(
                        <Link 
                            href={content.link}
                            key={index.toString()}>
                                <a target="__blank">
                                    <BlogCard data={content}/>
                                </a>
                        </Link>
                    )
                })
}
        </div>
    )
    
}

export async function getServerSideProps() {
    var currentEnv = process.env.NODE_ENV

    var url = (currentEnv == "development") ? "http://localhost:3000/api/blogs": "https://www.mahara.ca/api/blogs"

    const res = await fetch(url)
    const data = await res.json()

    return{
        props:{
            data
        }
    }
}