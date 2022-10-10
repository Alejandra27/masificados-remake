import Head from 'next/head'
import Slider from './components/slider'
import Header from './components/header'
import Script from 'next/script'
import LatestOffers from './components/latestOffers'
import Footer from './components/footer'


export default function Destacados() {

    return (
        <>

            <div id="this-top" class="layout-theme animated-css" data-header="sticky" data-header-top="200"  >
                <div id="wrapper">

                    <Header />

                    <div class="block-title">
                        <div class="block-title__inner section-bg section-bg_second">
                            <div class="bg-inner">
                                <h1 class="ui-title-page">MÁS BUSCADOS</h1>
                                <div class="decor-1 center-block"></div>
                            </div>
                        </div>
                    </div>

                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12">
                                <main class="main-content">

                                    <div class="wrap-post">

                                        <article class="post post_mod-c clearfix">
                                            <a href="/details">
                                                <div class="entry-media">
                                                    <img class="img-responsive" src="posts/370x250/1.jpg" width="370" height="250" alt="Foto" />
                                                    <div class="post-hover"></div>
                                                </div>
                                            </a>

                                            <div class="entry-main entry-main_mod-a">
                                                <div class="entry-main__inner">
                                                    <h3 class="entry-title">Chevrolet Blazer</h3>
                                                    <div class="entry-meta">

                                                        <div class="card__price">Precio<span class="card__price-number">$155.000.000</span></div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <img class="img-responsive" src="posts/370x250/au.jpg" width="70" height="50" alt="Foto" />
                                                </div>
                                            </div>
                                        </article>

                                        <article class="post post_mod-c clearfix">
                                            <a href="/details">
                                                <div class="entry-media">
                                                    <img class="img-responsive" src="posts/370x250/2.jpg" width="370" height="250" alt="Foto" />
                                                    <div class="post-hover"></div>
                                                </div>
                                            </a>

                                            <div class="entry-main entry-main_mod-a">
                                                <div class="entry-main__inner">
                                                    <h3 class="entry-title">Toyota Rav4</h3>
                                                    <div class="entry-meta">
                                                        <div class="card__price">Precio<span class="card__price-number">$100.500.000</span></div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <img class="img-responsive" src="posts/370x250/au.jpg" width="70" height="50" alt="Foto" />
                                                </div>
                                            </div>
                                        </article>

                                        <article class="post post_mod-c clearfix">
                                            <a href="/details">
                                                <div class="entry-media">
                                                    <img class="img-responsive" src="posts/370x250/3.jpg" width="370" height="250" alt="Foto" />
                                                    <div class="post-hover"></div>
                                                </div>
                                            </a>

                                            <div class="entry-main entry-main_mod-a">
                                                <div class="entry-main__inner">
                                                    <h3 class="entry-title">Ford Fortuner</h3>
                                                    <div class="entry-meta">

                                                        <div class="card__price">Precio<span class="card__price-number">$120.000.000</span></div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <img class="img-responsive" src="posts/370x250/au.jpg" width="70" height="50" alt="Foto" />
                                                </div>
                                            </div>
                                        </article>

                                        <article class="post post_mod-c clearfix">
                                            <a href="/details">
                                                <div class="entry-media">
                                                    <img class="img-responsive" src="posts/370x250/4.jpg" width="370" height="250" alt="Foto" />
                                                    <div class="post-hover"></div>
                                                </div>
                                            </a>

                                            <div class="entry-main entry-main_mod-a">
                                                <div class="entry-main__inner">
                                                    <h3 class="entry-title">Nissan Frontier</h3>
                                                    <div class="entry-meta">

                                                        <div class="card__price">Precio<span class="card__price-number">$80.000.000</span></div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <img class="img-responsive" src="posts/370x250/au.jpg" width="70" height="50" alt="Foto" />
                                                </div>
                                            </div>
                                        </article>

                                        <article class="post post_mod-c clearfix">
                                            <a href="/details">
                                                <div class="entry-media">
                                                    <img class="img-responsive" src="posts/370x250/5.jpg" width="370" height="250" alt="Foto" />
                                                    <div class="post-hover"></div>
                                                </div>
                                            </a>

                                            <div class="entry-main entry-main_mod-a">
                                                <div class="entry-main__inner">
                                                    <h3 class="entry-title">Chevrolet Tracker</h3>
                                                    <div class="entry-meta">

                                                        <div class="card__price">Precio<span class="card__price-number">$55.000.000</span></div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <img class="img-responsive" src="posts/370x250/au.jpg" width="70" height="50" alt="Foto" />
                                                </div>
                                            </div>
                                        </article>

                                        <article class="post post_mod-c clearfix">
                                            <a href="/details">
                                                <div class="entry-media">
                                                    <img class="img-responsive" src="posts/370x250/6.jpg" width="370" height="250" alt="Foto" />
                                                    <div class="post-hover"></div>
                                                </div>
                                            </a>

                                            <div class="entry-main entry-main_mod-a">
                                                <div class="entry-main__inner">
                                                    <h3 class="entry-title">Toyota Prado</h3>
                                                    <div class="entry-meta">
                                                        <div class="card__price">Precio<span class="card__price-number">$92.800.000</span></div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <img class="img-responsive" src="posts/370x250/au.jpg" width="70" height="50" alt="Foto" />
                                                </div>
                                            </div>
                                        </article>

                                        <article class="post post_mod-c clearfix">
                                            <a href="/details">
                                                <div class="entry-media">
                                                    <img class="img-responsive" src="posts/370x250/7.jpg" width="370" height="250" alt="Foto" />
                                                    <div class="post-hover"></div>
                                                </div>
                                            </a>

                                            <div class="entry-main entry-main_mod-a">
                                                <div class="entry-main__inner">
                                                    <h3 class="entry-title">Mazda CX3</h3>
                                                    <div class="entry-meta">
                                                        <div class="card__price">Precio<span class="card__price-number">$52.000.000</span></div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <img class="img-responsive" src="posts/370x250/au.jpg" width="70" height="50" alt="Foto" />
                                                </div>
                                            </div>
                                        </article>

                                        <article class="post post_mod-c clearfix">
                                            <a href="/details">
                                                <div class="entry-media">
                                                    <img class="img-responsive" src="posts/370x250/8.jpg" width="370" height="250" alt="Foto" />
                                                    <div class="post-hover"></div>
                                                </div>
                                            </a>

                                            <div class="entry-main entry-main_mod-a">
                                                <div class="entry-main__inner">
                                                    <h3 class="entry-title">Kia Sportage</h3>
                                                    <div class="entry-meta">

                                                        <div class="card__price">Precio<span class="card__price-number">$155.000.000</span></div>
                                                    </div>
                                                </div>
                                                <div>

                                                    <img class="img-responsive" src="posts/370x250/au.jpg" width="70" height="50" alt="Foto" />
                                                </div>
                                            </div>
                                        </article>

                                        <article class="post post_mod-c clearfix">
                                            <a href="/details">
                                                <div class="entry-media">
                                                    <img class="img-responsive" src="posts/370x250/9.jpg" width="370" height="250" alt="Foto" />
                                                    <div class="post-hover"></div>
                                                </div>
                                            </a>

                                            <div class="entry-main entry-main_mod-a">
                                                <div class="entry-main__inner">
                                                    <h3 class="entry-title">Chevrolet Sonic</h3>
                                                    <div class="entry-meta">
                                                        <div class="card__price">Precio<span class="card__price-number">$24.500.000</span></div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <img class="img-responsive" src="posts/370x250/au.jpg" width="50" height="50" alt="Foto" />
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div class="text-center"><a class="btn btn-success btn-effect" href="javascript:void(0);"><span class="btn-inner">Ver más</span></a></div>
                                </main>
                            </div>
                        </div>
                    </div>

                    <Footer />

                </div>
            </div>

            <Script src="plugins/owl-carousel/owl.carousel.min.js" />
            <Script src="js/waypoints.min.js" />

            <Script src="plugins/prettyphoto/js/jquery.prettyPhoto.js" />
            <Script src="http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js" />

            <Script src="plugins/flexslider/jquery.flexslider.js" />
            <Script src="js/custom.js" />

        </>
    )
} 
