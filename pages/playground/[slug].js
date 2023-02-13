import { useRouter } from "next/router"

export default function Project({data}){

    return(
        <div>

        </div>
    )
}

export async function getServerSideProps(context) {
    var currentEnv = process.env.NODE_ENV

    console.log(context.params.slug)
    var slug = context.params.slug

    var url = (currentEnv == "development") ? "http://localhost:3000/api/projects/" + slug : "https://www.mahara.ca/api/projects/" + slug
    const res = await fetch(url)
    const data = await res.json()

    return{
        props:{
            data
        }
    }
}

/*
export async function getServerSideProps() {
    var currentEnv = process.env.NODE_ENV

    var url = (currentEnv == "development") ? "http://localhost:3000/api/projects/allprojects": "https://www.mahara.ca/api/projects/allprojects"

    const res = await fetch(url)
    const data = await res.json()

    return{
        props:{
            data
        }
    }
}
*/
