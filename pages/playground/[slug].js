import { useRouter } from "next/router"

export default function Project({data}){

    console.log(data.contents)
    return(
        <div>

        </div>
    )
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