import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useUser } from '@auth0/nextjs-auth0/client';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const { user, error, isLoading } = useUser();

    return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          {
              user ? (
                  <>
                      <h2 className={inter.className}>
                          {user.name}
                      </h2>
                      <h2 className={inter.className}>
                            <a href="/api/auth/logout">Logout</a>
                      </h2>
                  </>
              ) : (
                  <a
                      href="/api/auth/login"
                  >
                      <h2 className={inter.className}>
                          Login <span>-&gt;</span>
                      </h2>
                  </a>
              )
          }

      </main>
    </>
  )
}
