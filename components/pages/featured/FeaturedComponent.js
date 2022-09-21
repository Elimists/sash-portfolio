/**Imports */
import Image from 'next/image'
import styles from '../../../styles/components/FeaturedComponent.module.css'

import AcidoImage from '../../../public/featured/acidorocket.webp'


/** Data */
const featuredData = [
    {
        id: 1,
        title: "ACIDO Rocket Design Award",
        link: "https://acido.info/MemoryCache",
        date: "July 1, 2022",
        description: "Achieved the Design Thinking Award at the 2022 Industrial Design competition for my work on my capstone project, The MemoryCache. Hosted by the Association of Chartered Industrial Designers of Ontario. Award was sponsored by Entro.",
        image: AcidoImage
    },

]

/** Main Component */
export default function FeaturedComponent(){

    return(
        <>
            {featuredData.map((featured, index) => {
                return(
                    <div key={index}><FractionalComponent featured={featured} index={index}/></div>
                )
            })}
        </>
    )
}

/** Fractional componenet */
const FractionalComponent = ({featured, index}) => {
    return(
        <>
        <div className={styles.container}>
            <div className={styles.text_div}>
                <h1><a target="_href" href={featured.link}>{featured.title} &#8599;</a></h1>
                <h5>{featured.date}</h5>
                <p>{featured.description}</p>
            </div>
            <div>
            <Image
                src={featured.image}
                height={375}
                width={500}
                alt="ACIDO Rocket Design Award"
                blurDataURL={featured.image}
            />
            </div>
        </div>
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