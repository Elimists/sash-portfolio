import Navbar from "./Navbar"
import Head from 'next/head'
import Footer from './Footer'

export default function Layout({children}){

    return(
        <>
            <Head>
                <title>Sash Mahara Industrial Designer</title>
                <meta name="keywords" content="Industrial Designer, UX UI Designer"/>
                <meta name="description" content="Sash Mahara is a Product Designer from Nanaimo, Canada specializing in user centered design and research. Sash loves to create amazing experiences through digital or physical products."/>
                <meta name="author" content="ProReact Labs - Pran Pandey"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="icon" href="/sash-logo.svg" /> 
            </Head>
            <Navbar/>
            {children}
            <Footer/>
        </>
    )
}