import styles from '../../styles/components/BlogCard.module.css'
import Image from 'next/image'

export default function BlogCard({data}){

    const {bcgcolor} = data

    return(
        <div className={styles.blog_div}>
            <div className={
                (data.id % 2 == 0) ? `${styles.blue} ${styles.left_div}` : `${styles.red}  ${styles.left_div}`
                }
                >
                <h2>{data.title}</h2>
                <p>{data.synopsis}</p>
                <div className={styles.sub_info}>
                    <p>{data.readtime}</p>
                    <p>{data.date}</p>
                </div>
                
                <div className={styles.read_button_div}>
                    <p>Read on Medium &rarr;</p>
                </div>
            </div>
            <div className={styles.right_div}>
                <Image
                    alt={data.alt}
                    src={data.coverimage.src}
                    layout='fill'
                    style={{borderBottomRightRadius: "7px", borderTopRightRadius: "7px"}}
                    blurDataURL={data.coverimage.src}
                />

                
            </div>
        </div>
    )
}