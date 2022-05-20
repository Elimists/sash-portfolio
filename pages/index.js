
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { allProjects } from '../data/projects'


export default function Home() {

  function handleScroll(){
    var scrollToDiv = document.getElementById("my-projects-library").offsetTop
    window.scrollTo({ top: scrollToDiv, behavior: 'smooth' });
  }

  return (
    <div className={styles.container}>
      

      <main className={styles.main}>
        <div className={styles.intro}>
          <p className={styles.hello}>Hello, I&apos;m</p>
          <h1 className={styles.my_name}>
            Sash Mahara
          </h1>
          <p className={styles.hello}>I&apos;m a industrial designer who specializes in user-centered design and research. I&apos;m passionate about all things tech and love to create amazing experiences through digital or phsyical products.</p>
          
          <div className={styles.check_out} onClick={() => handleScroll()}>
            <p className={styles.check_out_text}>
              Check out my work! 
            </p>
            <div className={styles.bouncy_arrow}>&darr;</div>
          </div>
          

          <p className={styles.work_heading}>WORK</p>
        </div>
        
        
        <section id="my-projects-library">
        <div className={styles.grid}>

          {allProjects.map((project) => {
            return(
              <div key={project.id.toString()} className={styles.card}>
                <Image src={project.image} alt={project.name} height={400} width={600}></Image>
                <h3 className={styles.project_title}>{project.name}</h3>
                <p className={styles.project_description}>{project.description}</p>
                <p className={styles.project_tags}>{project.tags}</p>
              </div>
            )
          })}
         
        </div>
        </section>
      </main>

     
    </div>
  )
}
