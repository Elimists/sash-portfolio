import Navbar from "./Navbar"
import Head from 'next/head'

export default function Layout({children}){

    return(
        <>
            <Head>
                <title>Sash Mahara Portfolio</title>
                <meta name="keywords" content="HTML, CSS, JavaScript"/>
                <meta name="description" content="Industrial designer specializing in user centered design and research. Love to create amazing experiences through digital or physical products."/>
                <meta name="author" content="ProReact Labs - Pran Pandey"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="icon" href="/sash-logo.svg" />
                <script defer src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
            </Head>
            <Navbar/>
            {children}
        </>
    )
}