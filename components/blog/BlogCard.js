import styles from '../../styles/components/AllBlogComponent.module.css'

export default function BlogCard(){

    return(
        <div className={styles.blog_div}>
            <div className={styles.left_div}>
                <h2>Title of the Article</h2>
                <p>Anim ut adipisicing adipisicing amet voluptate aliquip deserunt adipisicing commodo voluptate occaecat mollit proident in.</p>
                <div className={styles.sub_info}>
                    <p>5 min read</p>
                    <p>Jan 23, 2023</p>
                </div>
                
                <div className={styles.read_button_div}>
                    <p>READ &rarr;</p>
                </div>
            </div>
            <div className={styles.right_div}>
                <img src="https://picsum.photos/510/335"></img>
            </div>
        </div>
    )
}