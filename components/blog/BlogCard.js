import styles from '../../styles/components/BlogCard.module.css'

export default function BlogCard({data}){

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                        ];

    var datePublished = new Date(data.attributes.publishedAt)
    const month = monthNames[datePublished.getMonth()]
    const year = datePublished.getFullYear()
    const stringDate = month.toString() + " " + year.toString();
    return(
        <div className={styles.blog_div}>
            <div className={styles.left_div}>
                <h2>{data.attributes.title}</h2>
                <p>{data.attributes.synopsis}</p>
                <div className={styles.sub_info}>
                    <p>{data.attributes.readtime}</p>
                    <p>{stringDate}</p>
                </div>
                
                <div className={styles.read_button_div}>
                    <p>READ &rarr;</p>
                </div>
            </div>
            <div className={styles.right_div}>
                <img src={data.attributes.coverimage.data.attributes.url}></img>
            </div>
        </div>
    )
}