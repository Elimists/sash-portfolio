import FeaturedComponent from "/components/FeaturedComponent"
import styles from '../styles/Homie.module.css'

export default function Featured(){

    return(
        <div className={styles.container}>
            <div className={styles.featured_comp_inner_div}>
                <FeaturedComponent/>
            </div>
        </div>
    )
}