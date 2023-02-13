import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from '../styles/ProjectDetails.module.css'

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

export default function OtherProjects({slug}){
    const datas = ["Homie", "Core", "Lisn", "Memory Cache", "World Journal"]

    const [edited, setEditedData] = useState([])
    const [newData, setNewData] = useState([])

    // Needed useEffect hook as it was giving React Hydration Error
    useEffect(() => {
        setEditedData(datas.map(element => {return element.replace(" ", "").toLowerCase()}))
        var indexOfSlugInData = edited.indexOf(slug)
        var tempData = datas.filter((data, idx) => idx !== indexOfSlugInData)
        setNewData(tempData.sort(() => Math.random() - 0.5))
    }, [slug])

    if (!edited.includes(slug)) {
        return(
            <div className={styles.not_exist}>
                <p>That project does not exist!</p>
            </div>
        )
    }

    return (
        <div className={styles.other_projects}>
            {newData.map((data, index) => {
                var cleandata = data.replace(" ", "").toLowerCase()
                var src = "/projects/" + cleandata + "/" + cleandata + ".webp"
                var href = "/project/" + cleandata
                var alt = data + " Project"
                return(
                    <div key={index.toString()}>
                        <Link href={href}>
                            <div>
                                <Image
                                    src={src}
                                    height={280}
                                    width={400}
                                    placeholder="blur"
                                    blurDataURL={src}
                                    alt={alt}
                                />
                                <p>{data + " Project"}</p>
                            </div>
                        </Link>
                    </div>  
                )
            })} 
        </div>
    )
}