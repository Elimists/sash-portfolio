import styles from '../../styles/components/BlogCard.module.css'
import Image from 'next/image'

export default function BlogCard({data}){

    return(
        <div className={styles.blog_div}>
            <div className={styles.left_div}>
                <h2>{data.title}</h2>
                <p>{data.synopsis}</p>
                <div className={styles.sub_info}>
                    <p>{data.readtime}</p>
                    <p>{data.date}</p>
                </div>
                
                <div className={styles.read_button_div}>
                    <p>READ &rarr;</p>
                </div>
            </div>
            <div className={styles.right_div}>
                <Image
                    alt={data.alt}
                    src={data.coverimage.src}
                    layout='fill'
                    sizes='100vw'
                    style={{borderBottomRightRadius: "7px", borderTopRightRadius: "7px"}}
                />

                
            </div>
        </div>
    )
}