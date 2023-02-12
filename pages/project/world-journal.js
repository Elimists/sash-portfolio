import process from 'process'
import MarkdownIt from 'markdown-it'
import styles from '../../styles/ProjectDetails.module.css'
import useScrolledDown from '../../hooks/useScrolledDown'
import Link from 'next/link'
import Image from 'next/image'
import LisnProjectImage from '../../public/projects/lisn/lisn.webp'
import HomieProjectImage from '../../public/projects/homie/homie.webp'
import GoToTopButton from '../../components/GoToTopButton'


export default function WorldJournal({data}){
    const isScrolled = useScrolledDown()
    function scrollToTheTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const md = new MarkdownIt({
        html: true
    })

    const htmlContent = md.render(data.contents)

    return(
        <div className={styles.container}>
            <section
                className={styles.main_section}
                dangerouslySetInnerHTML={{__html: htmlContent}}>
            </section>
            {otherProjectSection()}
            {(isScrolled) ? <GoToTopButton/> : null}
        </div>
    )
}

export async function getServerSideProps() {
    var currentEnv = process.env.NODE_ENV

    var url = (currentEnv == "development") ? "http://localhost:3000/api/projects/worldjournal": "https://www.mahara.ca/api/projects/worldjournal"

    const res = await fetch(url)
    const data = await res.json()

    return{
        props:{
            data
        }
    }
}

const otherProjectSection = () => {
    return(
        <section className={styles.other_projects}>
            <div>
                <Link href="/project/homie">
                    <div>
                        <Image
                            src={HomieProjectImage}
                            height={280}
                            width={400}
                            placeholder="blur"
                            blurDataURL={HomieProjectImage}
                            alt="Homie Project"
                        />
                        <p>Homie</p>
                    </div>
                </Link>
            </div>
            <div>
                <Link href="/project/lisn">
                    <div>
                        <Image
                            src={LisnProjectImage}
                            height={300}
                            width={400}
                            placeholder="blur"
                            blurDataURL={LisnProjectImage}
                            alt="Lisn Project Image"
                        />
                        <p>Lisn</p>
                    </div>
                </Link>
            </div>
        </section>
    )
}

