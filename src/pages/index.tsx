import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header></Header>
        <div>home</div>
        {/* <div style={{WebkitOverflowScrolling: "touch", overflow: "scroll", height: "500px", width:"320px", padding: 5, background: "red"}}>
          <iframe src="https://rsmateusz.ngrok.io/bookingswidget" title="booking widget" scrolling='yes' height={500}></iframe>
        </div> */}

          <iframe src="https://thecrab.munu.shop/bookingswidget" title="booking widget" style={{width: "300px", height: "80dvh", WebkitOverflowScrolling: "touch", overflow: "auto"}}></iframe>
        <Footer></Footer>
      </div>
    </>
  )
}
