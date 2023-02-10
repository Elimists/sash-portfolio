import Image from "next/image"
import MarkdownIt from "markdown-it"
import styles from '../../styles/components/BlogDetails.module.css'

export default function BlogDetails({blog}){

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                        ];

    var datePublished = new Date(blog.attributes.publishedAt)
    const month = monthNames[datePublished.getMonth()]
    const year = datePublished.getFullYear()
    const stringDate = month.toString() + ", " + year.toString();


    const md = new MarkdownIt({
        html: true
      })
    const htmlContent = md.render(blog.attributes.details)
    return(

        <div className={styles.container}>

            <section className={styles.top_section}>
                <div className={styles.image_div}>
                <Image
                    src={blog.attributes.coverimage.data.attributes.url}
                    height={blog.attributes.coverimage.data.attributes.height}
                    width={blog.attributes.coverimage.data.attributes.width}
                    placeholder="blur"
                    blurDataURL={blog.attributes.coverimage.data.attributes.url}
                    alt={blog.attributes.coverimage.data.attributes.alternativeText}
                />
                </div>
                <div className={styles.snippet_section}>
                    <h1>{blog.attributes.title}</h1>
                    <p className={styles.synopsis}>{blog.attributes.synopsis}</p>

                    <div>
                        <p className={styles.read_and_date}>{blog.attributes.readtime}</p>
                        <p className={styles.read_and_date}>{stringDate}</p>
                    </div>
                </div>
            </section>

            <section 
                className={styles.details}
                dangerouslySetInnerHTML={{__html: htmlContent}}>

            </section>
            
        </div>
    )
}