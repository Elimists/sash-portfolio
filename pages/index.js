
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { allProjects } from '../data/projects'
import Link from 'next/link'
import {useState, useEffect} from 'react'
import Script from 'next/script'

//Do not remove the below Image imports
import CoreProjectImage from '../public/core.png'
import HomieProjectImage from '../public/projects/homie/homie.png' 
import LisnProjectImage from '../public/lisn.png'
import WorldJournalProjectImage from '../public/world-journal.png'

import { motion } from 'framer-motion'

const filterTerms = [
  {'term': 'All'},
  {'term': 'UX/UI'},
  {'term': 'Industrial Design'},
  {'term': 'Logos & Branding'},
  {'term': 'Fun'}
]

export default function Home({projects}) {

  const [isScrolledDown, setIsScrolledDown] = useState(false)
  const [filterTerm, setFilterTerm] = useState("All")
  const [allProjects, setAllProjects] = useState([])


  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.pageYOffset > 200){
        setIsScrolledDown(true)
      }else{
        setIsScrolledDown(false)
      }
    })
  }, [])

 
  useEffect(() => {
    if (filterTerm == "All"){
      setAllProjects(projects)
    }
    else{
      var newArr = []
      projects.map((project) => {
        if (project.tags.includes(filterTerm)){
          newArr.push(project)
        }
       
      })
      setAllProjects(newArr)
    }
  }, [filterTerm])

  function scrollToTheTop(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  function handleScroll(){
    var scrollToDiv = document.getElementById("my-projects-library")
    scrollToDiv.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  function handleOnEnterPressToProjects(event){
    if (event.key === 'Enter'){
      handleScroll()
    }
  }

  function handleOnEnterPressToTop(event){
    if (event.key === 'Enter'){
      scrollToTheTop()
    }
  }

  function handleEnterToClickSwitch(event, elementID){
    if (event.key === 'Enter'){
      document.getElementById(elementID).click()
    }
  }

  function handleOnEnterPressSetFilterTerm(event, filterTerm){
    if (event.key === 'Enter'){
      setFilterTerm(filterTerm)
    }
  }

  const [lottieClicked, setLottieClicked] = useState(false)
  
  useEffect((lp) => {
    var lp = document.getElementById("lottie-player")
  
  }, [lottieClicked])

  function handleLottiePlayer(lp){

  }


  const setAboutMeVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: .5
      }
    }
  }

  const setProjectsVariants = {
    hidden: {
      scale: 0.6,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: .7
      }
    }
  }


  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <motion.div variants={setAboutMeVariants} initial="hidden" animate="visible" >
            <div className={styles.intro}>
              <p className={styles.hello}>Hello, I&apos;m</p>
              <h1 className={styles.my_name}>
                Sash Mahara
              </h1>
              <p className={styles.hello}>I&apos;m a industrial designer who specializes in user-centered design and research. I&apos;m passionate about all things tech and love to create amazing experiences through digital or phsyical products.</p>
              
              <div role='button' className={styles.check_out} onClick={() => handleScroll()} onKeyDown={(e) => handleOnEnterPressToProjects(e)} tabIndex="0" >
                
                <p className={styles.check_out_text}>
                  Check out my work! 
                </p>
                <div className={styles.bouncy_arrow}>&darr;</div>
              </div>
            </div>
          </motion.div>
          
          
          <motion.div className={styles.my_project_section} variants={setProjectsVariants} initial="hidden" animate="visible">
            <section id="my-projects-library" className={styles.my_project_section}>
            <p className={styles.work_heading}>WORK</p>
              <div className={styles.filter_options}>
                {filterTerms.map((theTerm) => {
                  return(
                    <div key={theTerm.term} id={theTerm.term} tabIndex="0" className={(filterTerm == theTerm.term) ? styles.filter_active : styles.filter} onClick={() => setFilterTerm(theTerm.term)} onKeyDown={(e) => handleOnEnterPressSetFilterTerm(e, theTerm.term)}>{theTerm.term}</div>
                  )
                })}
                
              </div>
              <div className={styles.grid}>

                {allProjects.map((project) => {
                  return(
                    <Link  href={'/' + project.id + '#' + project.title_url_safe} key={project.id.toString()} >
                      <div id={project.title_url_safe} className={styles.card} tabIndex="0" role="button" onKeyDown={(e) => handleEnterToClickSwitch(e, project.title_url_safe)} >
                        <Image src={project.image} alt={project.name} width="600" height="400"></Image>
                        <p className={styles.project_title}>{project.name}</p>
                        <p className={styles.project_description}>{project.description}</p>
                        <p className={styles.project_tags}>{project.tags}</p>
                      </div>
                    </Link>
                  )
                })}
              
              </div>
            </section>
          </motion.div>


          {(isScrolledDown) ? <div tabIndex="0" role="button" className={styles.go_top_button} onClick={() => scrollToTheTop()} onKeyDown={(e) => handleOnEnterPressToTop(e)}>&uarr;</div> : null}
        </main>

      
      </div>
    </>
  )
}


export const getStaticProps = async () => {

  return {
    props: { projects: allProjects }
  }
}
