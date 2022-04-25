import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rock Paper Scissors</title>
        <meta name="description" content="Rock Paper Scissors" />
        <link rel="icon" href="/stone.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        How To Win At <a href="https://www.youtube.com/watch?v=AnRYS02tvRA">Rock Paper Scissors!</a>
        </h1>
    <div className={styles.button} >
      <a href='/game'>
        <button 
        onClick={
          e=>{
            console.log("clicked")
          }
        }
        >start game</button></a></div>
        <p className={styles.description}>
          <iframe width="420" height="315"
src="https://www.youtube.com/embed/AnRYS02tvRA">
</iframe>
        </p>

        <div className={styles.grid}>
          <a href="https://en.wikipedia.org/wiki/Rock_paper_scissors" className={styles.card}>
            <h2>Wikipedia &rarr;</h2>
            <p>Find in-depth information about Rock, Paper, Scissors.</p>
          </a>

          <a href="https://www.youtube.com/watch?v=ND4fd6yScBM" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about How to Play Rock, Paper, Scissors</p>
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
          Rock Paper Scissors
            {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
          </span>
        </a>
      </footer>
    </div>
  )
}
