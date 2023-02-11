import BlogCard from "../../components/blog/BlogCard";
import Link from 'next/link'
import styles from '../../styles/components/BlogCard.module.css'

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

    const res = await fetch("http://localhost:3000/api/blogs")
    const data = await res.json()

    return{
        props:{
            data
        }
    }
}