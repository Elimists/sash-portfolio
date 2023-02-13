/**Imports */
import Image from 'next/image'
import styles from '../styles/components/FeaturedComponent.module.css'
import {motion} from 'framer-motion'

/**Import Images Here */
import AcidoImage from '../public/featured/acidorocket.webp'
import Graduate from "../public/featured/graduated.webp"
import gillesaward from "../public/featured/gillesaward.webp"
import Studioaward from "../public/featured/Studioaward.webp"
import medicalaward from "../public/featured/medicalaward.webp"

/** Data */
const featuredData = [
    {
        id: 1,
        title: "ACIDO Rocket Design Award",
        link: "https://acido.info/MemoryCache",
        date: "July 1, 2022",
        description: <p>Achieved the Design Thinking Award at the 2022 Industrial Design competition for my work on my capstone project, <a href="https://www.mahara.ca/project/memorycache"><b><u>The MemoryCache.</u></b></a> Hosted by the Association of Chartered Industrial Designers of Ontario. Award was sponsored by Entro.</p>,
        image: AcidoImage
    },

    {
        id: 2,
        title: "Carleton University Graduate Feature",
        link: "https://newsroom.carleton.ca/story/graduates-reflect-on-life-at-carleton/",
        date: "June 15 ,2022",
        description: <p>Featured on Carleton University&apos;s Graduate Highlights page, outlining my involvement and leadership within the university and academic achievements.</p>,
        image: Graduate
    },

    {
        id: 3,
        title: "Award of Excellence, School of Industrial Design",
        link: "https://www.linkedin.com/posts/sashmahara_industrialdesign-activity-6925495960189943809-Imh0?utm_source=share&utm_medium=member_desktop",
        date: "April 30 ,2022",
        description: <p>Received the Award of Excellence from Carleton University&apos;s School of Industrial Design for my work on my capstone project, <a href="https://www.mahara.ca/project/memorycache"><b><u>The MemoryCache.</u></b></a></p>,
        image: Studioaward
    },

    {
        id: 4,
        title: "Gilles Memorial Award",
        link: "https://carleton.ca/id/story/sashmahara/",
        date: "April 21 ,2021",
        description: <p>Received the Gilles Memorial Award for displaying good &lsquo;Form Giving&rsquo; for my work in my capstone project, <a href="https://www.mahara.ca/project/memorycache"><b><u>The MemoryCache.</u></b></a></p>,
        image: gillesaward
    },

    {
        id: 5,
        title: "Scholarship for Medical Equipment Design",
        link: "https://futurefunder.carleton.ca/giving-fund/george-lynn-memorial-scholarship-giving/",
        date: "December 18 ,2021",
        description: <p>Received the George A. Lynn Memorial Scholarship for excellence in medical equipment design for my work on the project, <b><u><a href="https://www.mahara.ca/project/core">Core.</a></u></b></p>,
        image: medicalaward
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
    const loadRate = 0.48;
    return(
        <>
        <motion.div 
            className={styles.container}
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration:(featured.id * loadRate ) }}
            >
            <div className={styles.text_div}>
                <h1><a target="_href" href={featured.link}>{featured.title} <LinkArrow/></a></h1>
                <h5 className={styles.date}>{featured.date}</h5>
                {featured.description}
            </div>
            <div className={styles.image_div}>
                <Image
                    src={featured.image}
                    height={223}
                    width={301}
                    alt="ACIDO Rocket Design Award"
                    blurDataURL={featured.image}
                />
            </div>
        </motion.div>
        <LongColorfulBottomBar/>
        </>
    )
}

/**Colorful bottom bar component.*/
const LongColorfulBottomBar = () => {

    return(
        <div className={styles.colorful_bottom_bar}/>
    )
}


function LinkArrow() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7 17L17 7M7 7h10v10"
        ></path>
      </svg>
    );
  }
  
