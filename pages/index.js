import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const Prismic = require('@prismicio/client');

  var apiEndpoint = "https://sockets.cdn.prismic.io/api/v2"

  // Prismic.client(apiEndpoint, { req }).then(function(api) {
  //   return api.query("");
  // }).then(function(response) {
  //   console.log("Documents: ", response.results);
  // }, function(err){
  //   console.log("Something went wrong: ", err);
  // })

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
