import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CoreProjectImage from '../public/images/projects/core.png'
import HomieProjectImage from '../public/images/projects/homie.png'



const projects = [
  {
    'name': "Rental Housing Search - Homie",
    'description': "Web application that simplifies and assists the housing rental search process.",
    'tags': ['UX/UI - User Research', 'Visual Design', 'Behavioural Design']
  }
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
        <div>
          <p>Hello, I&apos;m</p>
          <h1 className={styles.title}>
            Sash Mahara
          </h1>
          <p>I&apos;m a industrial designer who specializes in user-centered design and research. I&apos;m passionate about all things tech and love to create amazing experiences through digital or phsyical products.</p>
          <p>
            Check out my work! &darr;
          </p>
        </div>
        

        <div className={styles.grid}>
          <div className={styles.card}>
            <Image src={HomieProjectImage} alt="Homie Project" height={400} width={600}></Image>
            <h3>Project Title</h3>
            <p>This is a project description. Temporary description is awesome!</p>
            <p>UI/UX - User Desgin - Tags</p>
          </div>

          <div className={styles.card}>
            <Image src={HomieProjectImage} alt="Homie Project" height={400} width={600}></Image>
            <h3>Project Title</h3>
            <p>This is a project description. Temporary description is awesome!</p>
            <p>UI/UX - User Desgin - Tags</p>
          </div>

          <div className={styles.card}>
            <Image src={HomieProjectImage} alt="Homie Project" height={400} width={600}></Image>
            <h3>Project Title</h3>
            <p>This is a project description. Temporary description is awesome!</p>
            <p>UI/UX - User Desgin - Tags</p>
          </div>

          <div className={styles.card}>
            <Image src={HomieProjectImage} alt="Homie Project" height={400} width={600}></Image>
            <h3>Project Title</h3>
            <p>This is a project description. Temporary description is awesome!</p>
            <p>UI/UX - User Desgin - Tags</p>
          </div>
          
        </div>
      </main>

     
    </div>
  )
}
