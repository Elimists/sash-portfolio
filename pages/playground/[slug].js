import { useRouter } from "next/router"
import OtherProjects from "../../components/OtherProjecs"

export default function Project({data}){
    var slug = data.slug
    return(
        <div>
            
        </div>
    )
}

/*
export async function getStaticPaths () {
    var currentEnv = process.env.NODE_ENV

    var url = (currentEnv == "development") ? "http://localhost:3000/api/projects" : "https://www.mahara.ca/api/projects"

    const res = await fetch(url)
    const data = await res.json()

    var arrayData = JSON.parse(data.contents)
    const paths = arrayData.map(content => {
        console.log(content.slug)
        return {
            params: {slug: content.slug.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}


export async function getStaticProps(context) {
    var currentEnv = process.env.NODE_ENV

    var slug = context.params.slug

    var url = (currentEnv == "development") ? "http://localhost:3000/api/project" : "https://www.mahara.ca/api/project"
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({slug})
    })
    const data = await res.json()

    return{
        props:{
            data
        }
    }
}


export async function getServerSideProps(context) {
    var currentEnv = process.env.NODE_ENV

    var slug = context.params.slug

    var url = (currentEnv == "development") ? "http://localhost:3000/api/project" : "https://www.mahara.ca/api/project"
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({slug})
    })
    const data = await res.json()

    return{
        props:{
            data
        }
    }
}
*/