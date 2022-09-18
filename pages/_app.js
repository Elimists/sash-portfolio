import "@global-css"
import Layout from "@layout"
import {motion} from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return(
    <Layout>
      <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
        pageInitial:{
          opacity:0
        },
        pageAnimate:{
          opacity: 1,
          transition:{
            duration: .5
          }
        }
      }}>
      <Component {...pageProps} />
      </motion.div>
    </Layout>
  )
}

export default MyApp
