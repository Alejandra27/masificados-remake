import Script from 'next/script'

import '../public/plugins/sliderpro/css/slider-pro.css'
import '../public/plugins/bootstrap/css/bootstrap.css'
import '../public/plugins/isotope/isotope.css'
import '../public/plugins/owl-carousel/owl.carousel.css'
import '../public/plugins/owl-carousel/owl.transitions.css'
import '../public/plugins/owl-carousel/owl.theme.css'
import '../styles/yamm/yamm.css'

import '../public/plugins/flexslider/flexslider.css'
import '../public/plugins/jelect/main.css'
import '../public/plugins/animate/animate.css'
import '../public/plugins/iview/css/iview.css'
import '../public/plugins/iview/css/skin/style.css'

import '../styles/master.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
        <Script src="plugins/jquery/jquery-1.11.1.min.js" strategy="beforeInteractive" />
        <Script src="js/jquery-migrate-1.2.1.js" strategy="beforeInteractive" />
        <Script src="plugins/bootstrap/js/bootstrap.min.js" strategy="beforeInteractive" />
        <Script src="js/modernizr.custom.js" strategy="beforeInteractive" />
        <Script src="js/waypoints.min.js" strategy="beforeInteractive" />

        <Script src="plugins/jelect/jquery.jelect.js" strategy="beforeInteractive" />
        <Script src="plugins/nouislider/jquery.nouislider.all.min.js" strategy="beforeInteractive" />
        <Script src="plugins/sliderpro/js/jquery.sliderPro.min.js" strategy="beforeInteractive" />
        <Script src="plugins/prettyphoto/js/jquery.prettyPhoto.js" strategy="beforeInteractive" />

        <Script src="plugins/owl-carousel/owl.carousel.min.js" strategy="beforeInteractive" />
        <Script src="http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js" strategy="beforeInteractive" />
        <Script src="plugins/flexslider/jquery.flexslider.js" strategy="beforeInteractive" />

        <Script src="js/cssua.min.js" strategy="beforeInteractive" />
        <Script src="js/wow.min.js" strategy="beforeInteractive" />
        
        <Component {...pageProps} />
    </>
  )
}