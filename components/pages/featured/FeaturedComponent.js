/**Imports */
import Image from 'next/image'
import styles from '../../../styles/components/FeaturedComponent.module.css'
import {motion} from 'framer-motion'

/**Import Images Here */
import AcidoImage from '../../../public/featured/acidorocket.webp'

/** Data */
const featuredData = [
    {
        id: 1,
        title: "ACIDO Rocket Design Award",
        link: "https://acido.info/MemoryCache",
        date: "July 1, 2022",
        description: <p>Achieved the Design Thinking Award at the 2022 Industrial Design competition for my work on my capstone project, The MemoryCache. Hosted by the Association of Chartered Industrial Designers of Ontario. Award was sponsored by Entro.</p>,
        image: AcidoImage
    },

]

/** Main Component */
export default function FeaturedComponent(){

    return(
        <>
            {featuredData.map((featured) => {
                return(
                    <motion.div 
                        key={featured.id.toString()}
                        
                        >
                            <FractionalComponent featured={featured}/>
                    </motion.div>
                )
            })}
        </>
    )
}

/** Fractional componenet */
const FractionalComponent = ({featured}) => {
    return(
        <>
        <motion.div 
            className={styles.container}
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration:(featured.id*0.50 ) }}
            >
            <div className={styles.text_div}>
                <h1><a target="_href" href={featured.link}>{featured.title} &#8599;</a></h1>
                <h5>{featured.date}</h5>
                {featured.description}
            </div>
            <div>
            <Image
                src={featured.image}
                height={350}
                width={475}
                alt="ACIDO Rocket Design Award"
                blurDataURL={featured.image}
            />
            </div>
        </motion.div>
        <LongColorfulBottomBar/>
        </>
    )
}


/**Colorful bottom bar component. */
const LongColorfulBottomBar = () => {

    return(
        <div className={styles.colorful_bottom_bar}/>
    )
}