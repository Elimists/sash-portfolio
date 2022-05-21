
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { allProjects } from '../data/projects'
import Link from 'next/link'
import {useState, useEffect} from 'react'



export default function Home({projects}) {

  const [isScrolledDown, setIsScrolledDown] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.pageYOffset > 200){
        setIsScrolledDown(true)
      }else{
        setIsScrolledDown(false)
      }
    })
  }, [])

  function scrollToTheTop(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

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

          {projects.map((project) => {
            return(
              <Link href={'/' + project.id + '#' + project.title_url_safe} key={project.id.toString()}>
              <div className={styles.card}>
                <Image src={project.image} alt={project.name} height={400} width={600}></Image>
                <h3 className={styles.project_title}>{project.name}</h3>
                <p className={styles.project_description}>{project.description}</p>
                <p className={styles.project_tags}>{project.tags}</p>
              </div>
              </Link>
            )
          })}
         
        </div>
        </section>

        {(isScrolledDown) ? <div className={styles.go_top_button} onClick={() => scrollToTheTop()}>&uarr;</div> : null}
      </main>

     
    </div>
  )
}


export const getStaticProps = async () => {

  return {
    props: { projects: allProjects }
  }
}
