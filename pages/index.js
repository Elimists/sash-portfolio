import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CoreProjectImage from '../public/images/projects/core.png'
import HomieProjectImage from '../public/images/projects/homie.png'
import LisnProjectImage from '../public/images/projects/lisn.png'
import WorldJournalProjectImage from '../public/images/projects/world-journal.png'


const projects = [
  {
    'id': 1,
    'image': HomieProjectImage,
    'name': "Rental Housing Search - Homie",
    'description': "Web application that simplifies and assists the housing rental search process.",
    'tags': "UX/UI - User Research - Visual Design - Behavioural Design"
  },

  {
    'id': 2,
    'image': LisnProjectImage,
    'name': "User Research and Onboarding - LISN",
    'description': "Expanding product market research and improving new user onboarding for a mobile application.",
    'tags': "UX / UI - User Research - Product Roadmapping - Prototyping - Branding"
  },

  {
    'id': 3,
    'image': CoreProjectImage,
    'name': "Blood Pressure Monitor - Core.",
    'description': "Product redesign of a blood pressure monitor with mobile application geared towards athletes.",
    'tags': "Industrial Design - User Research - UX/UI - Prototyping - 3D CAD"
  },

  {
    'id': 4,
    'image': WorldJournalProjectImage,
    'name': "NASA Design Sprint - World Journal",
    'description': "Web application that aims to utilize the satellite imagery and live video feeds from the Internation Space Station for educational purposes.",
    'tags': "Web Design - Interaction Design - UX/UI"
  },

]


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sash Mahara</title>
        <meta name="description" content="Sash Mahara Portfolio" />
        <link rel="icon" href="/sash-logo.svg" />
      </Head>

      <main className={styles.main}>
        <div className={styles.intro}>
          <p>Hello, I&apos;m</p>
          <p className={styles.my_name}>
            Sash Mahara
          </p>
          <p>I&apos;m a industrial designer who specializes in user-centered design and research. I&apos;m passionate about all things tech and love to create amazing experiences through digital or phsyical products.</p>
          <div className={styles.check_out}>
            <p>
              Check out my work! 
            </p>
            <div className={styles.bouncy_arrow}>&darr;</div>
          </div>
        </div>
        

        <div className={styles.grid}>

          {projects.map((project) => {
            return(
              <div key={project.id} className={styles.card}>
                <Image src={project.image} alt={project.name} height={400} width={600}></Image>
                <h3 className={styles.project_title}>{project.name}</h3>
                <p className={styles.project_description}>{project.description}</p>
                <p className={styles.project_tags}>{project.tags}</p>
              </div>
            )
          })}
         
        </div>
      </main>

     
    </div>
  )
}
