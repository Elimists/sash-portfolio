import BlogCard from "../../components/blog/BlogCard";
import Link from 'next/link'

export default function Blogs({blogData}){
    const alldata = blogData.data
    
    return(
        <>
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
        </>
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