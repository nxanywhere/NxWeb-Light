import '../styles/globals.css'
import Nav from '../components/nav'
import '../styles/nav.scss'
import Footer from '../components/footer'
import '../styles/font.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
