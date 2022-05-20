import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sash Mahara</title>
        <meta name="description" content="Sash Mahara's Portfolio" />
        <link rel="icon" href="/sash-logo.svg" />
      </Head>

      <main className={styles.main}>
        <div>
          <p>Hello, I&apos;m</p>
          <h1 className={styles.title}>
            Sash Mahara
          </h1>
          <p>I&apos;m a industrial designer who specializes in user-centered design and research. I&apos;m passionate about all things tech and love to create amazing experiences through digital or phsyical products.</p>
        </div>
        <p className={styles.description}>
          Check out my work! &darr;
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

     
    </div>
  )
}
