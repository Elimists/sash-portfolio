import FeaturedComponent from "../components/pages/featured/FeaturedComponent"
import styles from '../styles/Homie.module.css'

export default function Featured(){

    return(
        <div className={styles.container}>
            <FeaturedComponent/>
        </div>
    )
}