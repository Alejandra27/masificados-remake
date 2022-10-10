import Slider from './components/slider'
import Header from './components/header'
import Script from 'next/script'
import LatestOffers from './components/latestOffers'
import Footer from './components/footer'
import ContactForm from './components/contactForm'
import { useEffect } from 'react'
import loadUI from '../scripts/load'

export default function Home() {
  useEffect(() => {
    loadUI()
  })

  return (
    <div id="this-top" class="layout-theme animated-css" data-header="sticky" data-header-top="200">
      <div id="wrapper">
        <Header />
        <Slider />
        <LatestOffers />
        <ContactForm />
        <Footer />
      </div>

      <Script src="js/custom.js" />
    </div>
  )
}
