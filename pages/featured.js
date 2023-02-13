import FeaturedComponent from "/components/FeaturedComponent"
import styles from '../styles/Home.module.css'

export default function Featured(){

    return(
        <div className={styles.featured_container}>
            <div className={styles.featured_comp_inner_div}>
                <FeaturedComponent/>
            </div>
        </div>
    )
}