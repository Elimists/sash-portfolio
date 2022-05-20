import Navbar from "./Navbar"
import Head from 'next/head'

export default function Layout({children}){

    return(
        <>
            <Head>
                <title>Sash Mahara Portfolio</title>
                <meta name="keywords" content="HTML, CSS, JavaScript"/>
                <meta name="description" content="Sash Mahara Portfolio. Portfolio created by ProReactLabs." />
                <meta name="author" content="ProReact Labs - Pran Pandey"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta charSet="utf-8"/>
                <link rel="icon" href="/sash-logo.svg" />
            </Head>
            <Navbar/>
            {children}
        </>
    )
}