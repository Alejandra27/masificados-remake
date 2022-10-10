import Head from 'next/head'
import Slider from './components/slider'
import Header from './components/header'
import Script from 'next/script'
import LatestOffers from './components/latestOffers'


export default function Destacados() {

    return (
        <>
            <div id="this-top" class="layout-theme animated-css" data-header="sticky" data-header-top="200"  >
                <div id="wrapper">
                    <Header></Header>
                    <div class="block-title">
                        <div class="block-title__inner section-bg section-bg_second">
                            <div class="bg-inner">
                                <h1 class="ui-title-page">A TU MEDIDA</h1>
                                <div class="decor-1 center-block"></div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8" >
                                <main class="main-content">
                                    <h1>Más recientes</h1>

                                    <article class="post post_mod-b post_mod-d clearfix">
                                        <div>
                                            <img class="img-responsive" src="posts/770x380/1.jpg" width="770" height="350" alt="Foto" />
                                        </div>

                                        <div class="entry-main entry-main_mod-a">
                                            <div class="entry-main__inner">
                                                <h3 class="entry-title"><a href="javascript:void(0);">Chevrolet Blazer</a></h3>
                                                <div class="entry-meta">
                                                    <ul class="card__list list-unstyled">
                                                        <li class="card-list__row">
                                                            <span class="card-list__title">Tipo:</span>
                                                            <span class="card-list__info">Sedan</span>
                                                        </li>
                                                        <li class="card-list__row">
                                                            <span class="card-list__title">Motor:</span>
                                                            <span class="card-list__info">V6 3.6 L</span>
                                                        </li>
                                                        <li class="card-list__row">
                                                            <span class="card-list__title">Kilometraje:</span>
                                                            <span class="card-list__info">20,000 KM</span>
                                                        </li>
                                                        <li class="card-list__row">
                                                            <span class="card-list__title">Color:</span>
                                                            <span class="card-list__info">Plateado</span>
                                                        </li>
                                                        <li class="card-list__row">
                                                            <span class="card-list__title">Transmisión:</span>
                                                            <span class="card-list__info">Manual</span>
                                                        </li>
                                                        <li class="card-list__row">
                                                            <span class="card-list__title">Vendido por:</span>
                                                            <span class="card-list__info">Automax</span>
                                                        </li>
                                                    </ul>
                                                    <div class="card__price">Precio<span class="card__price-number">$155.000.000</span></div>
                                                </div>
                                            </div>

                                            <footer class="entry-footer">
                                                <div class="wrap-post-btn"><a class="post-btn btn-effect" href="javascript:void(0);"><span class="post-btn__inner">Detalles</span></a></div>
                                            </footer>
                                        </div>
                                    </article>

                                    <article class="post post_mod-b post_mod-d clearfix">
                                        <div class="entry-media">
                                            <img class="img-responsive" src="posts/770x380/2.jpg" width="770" height="380" alt="Foto" />
                                        </div>

                                        <div class="entry-main entry-main_mod-a">
                                            <div class="entry-main__inner">
                                                <h3 class="entry-title"><a href="javascript:void(0);">Toyota Rav4</a></h3>
                                                <div class="entry-meta">
                                                    <ul class="card__list list-unstyled">
                                                        <li class="card-list__row">
                                                            <span class="card-list__title">Tipo:</span>
                                                            <span class="card-list__info">Sedan</span>
                                                        </li>
                                                        <li class="card-list__row">
                                                            <span class="card-list__title">Motor:</span>
                                                            <span class="card-list__info">V6 3.6 L</span>
                                                        </li>
                                                        <li class="card-list__row">
                                                            <span class="card-list__title">Kilometraje:</span>
                                                            <span class="card-list__info">20,000 KM</span>
                                                        </li>
                                                        <li class="card-list__row">
                                                            <span class="card-list__title">Color:</span>
                                                            <span class="card-list__info">Plateado</span>
                                                        </li>
                                                        <li class="card-list__row">
                                                            <span class="card-list__title">Transmisión:</span>
                                                            <span class="card-list__info">Manual</span>
                                                        </li>
                                                        <li class="card-list__row">
                                                            <span class="card-list__title">Vendido por:</span>
                                                            <span class="card-list__info">Automax</span>
                                                        </li>
                                                    </ul>
                                                    <div class="card__price">Precio<span class="card__price-number">$110.000.000</span></div>
                                                </div>
                                            </div>

                                            <footer class="entry-footer">
                                                <div class="wrap-post-btn"><a class="post-btn btn-effect" href="javascript:void(0);"><span class="post-btn__inner">Detalles</span></a></div>
                                            </footer>

                                        </div>
                                    </article>

                                    <article class="post post_mod-b post_mod-d clearfix">
                                        <div class="entry-media">
                                            <img class="img-responsive" src="posts/770x380/3.jpg" width="770" height="380" alt="Foto" />
                                        </div>

                                        <div class="entry-main entry-main_mod-a">
                                            <div class="entry-main__inner">
                                                <h3 class="entry-title"><a href="javascript:void(0);">Ford Explorer</a></h3>
                                                <div class="entry-meta">
                                                    <ul class="card__list list-unstyled">
                                                        <li class="card-list__row">
                                                            <span class="card-list__title">Tipo:</span>
                                                            <span class="card-list__info">Sedan</span>
                                                        </li>
                                                        <li class="card-list__row">
                                                            <span class="card-list__title">Motor:</span>
                                                            <span class="card-list__info">V6 3.6 L</span>
                                                        </li>
                                                        <li class="card-list__row">
                                                            <span class="card-list__title">Kilometraje:</span>
                                                            <span class="card-list__info">20,000 KM</span>
                                                        </li>
                                                        <li class="card-list__row">
                                                            <span class="card-list__title">Color:</span>
                                                            <span class="card-list__info">Plateado</span>
                                                        </li>
                                                        <li class="card-list__row">
                                                            <span class="card-list__title">Transmisión:</span>
                                                            <span class="card-list__info">Manual</span>
                                                        </li>
                                                        <li class="card-list__row">
                                                            <span class="card-list__title">Vendido por:</span>
                                                            <span class="card-list__info">Automax</span>
                                                        </li>
                                                    </ul>
                                                    <div class="card__price">Precio<span class="card__price-number">$85.000.000</span></div>
                                                </div>
                                            </div>

                                            <footer class="entry-footer">
                                                <div class="wrap-post-btn"><a class="post-btn btn-effect" href="javascript:void(0);"><span class="post-btn__inner">Detalles</span></a></div>
                                            </footer>

                                        </div>
                                    </article>

                                    <article class="post post_mod-b clearfix">
                                        <div class="entry-media">
                                            <img class="img-responsive" src="posts/770x380/4.jpg" width="770" height="380" alt="Foto" />
                                        </div>

                                        <div class="entry-main entry-main_mod-a">
                                            <div class="entry-main__inner">
                                                <h3 class="entry-title"><a href="javascript:void(0);">Nissan Frontier</a></h3>
                                                <div class="entry-meta">
                                                    <ul class="card__list list-unstyled">
                                                        <li class="card-list__row">
                                                            <span class="card-list__title">Tipo:</span>
                                                            <span class="card-list__info">Sedan</span>
                                                        </li>
                                                        <li class="card-list__row">
                                                            <span class="card-list__title">Motor:</span>
                                                            <span class="card-list__info">V6 3.6 L</span>
                                                        </li>
                                                        <li class="card-list__row">
                                                            <span class="card-list__title">Kilometraje:</span>
                                                            <span class="card-list__info">20,000 KM</span>
                                                        </li>
                                                        <li class="card-list__row">
                                                            <span class="card-list__title">Color:</span>
                                                            <span class="card-list__info">Plateado</span>
                                                        </li>
                                                        <li class="card-list__row">
                                                            <span class="card-list__title">Transmisión:</span>
                                                            <span class="card-list__info">Manual</span>
                                                        </li>
                                                        <li class="card-list__row">
                                                            <span class="card-list__title">Vendido por:</span>
                                                            <span class="card-list__info">Automax</span>
                                                        </li>
                                                    </ul>
                                                    <div class="card__price">Precio<span class="card__price-number">$80.000.000</span></div>
                                                </div>
                                            </div>

                                            <footer class="entry-footer">
                                                <div class="wrap-post-btn"><a class="post-btn btn-effect" href="javascript:void(0);"><span class="post-btn__inner">Detalles</span></a></div>
                                            </footer>

                                        </div>
                                    </article>

                                    <ul class="pagination">
                                        <li><a href="javascript:void(0);">ANT</a></li>
                                        <li class="active"><a href="javascript:void(0);">1</a></li>
                                        <li><a href="javascript:void(0);">2</a></li>
                                        <li><a href="javascript:void(0);">3</a></li>
                                        <li><a href="javascript:void(0);">4</a></li>
                                        <li><a href="javascript:void(0);">5</a></li>
                                        <li><a href="javascript:void(0);">SIG</a></li>
                                    </ul>
                                </main>
                            </div>
                            <div >
                            </div>

                            <div class="row">
                                <div class="col-md-4">
                                    <h2>Filtro</h2>
                                    <form >
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="widget-content">
                                                    <div class="select select_mod-a jelect">
                                                        <input value="0" data-text="imagemin" type="text" class="jelect-input" />
                                                        <div tabindex="0" role="button" class="jelect-current">Carroceria</div>
                                                        <ul class="jelect-options">
                                                            <li class="jelect-option jelect-option_state_active">Sedan</li>
                                                            <li class="jelect-option">Hatchback</li>
                                                            <li class="jelect-option">Minivan</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-sm-6">
                                                <div class="widget-content">
                                                    <div class="select select_mod-a jelect">
                                                        <input value="0" data-text="imagemin" type="text" class="jelect-input" />
                                                        <div tabindex="0" role="button" class="jelect-current">Marca</div>
                                                        <ul class="jelect-options">
                                                            <li class="jelect-option jelect-option_state_active">Toyota</li>
                                                            <li class="jelect-option">Mazda</li>
                                                            <li class="jelect-option">Nissan</li>
                                                            <li class="jelect-option">Chevrolet</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="widget-content">
                                                    <div class="select select_mod-a jelect">
                                                        <input value="0" data-text="imagemin" type="text" class="jelect-input" />
                                                        <div tabindex="0" role="button" class="jelect-current">Año</div>
                                                        <ul class="jelect-options">
                                                            <li class="jelect-option jelect-option_state_active">2022</li>
                                                            <li class="jelect-option">2021</li>
                                                            <li class="jelect-option">2019</li>
                                                            <li class="jelect-option">2015</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-sm-6">
                                                <div class="widget-content">
                                                    <div class="select select_mod-a jelect">
                                                        <input value="0" data-text="imagemin" type="text" class="jelect-input" />
                                                        <div tabindex="0" role="button" class="jelect-current">Color</div>
                                                        <ul class="jelect-options">
                                                            <li class="jelect-option jelect-option_state_active">Negro</li>
                                                            <li class="jelect-option">Blanco</li>
                                                            <li class="jelect-option">Rojo</li>
                                                            <li class="jelect-option">Azul</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-xs-12">

                                                <div class="btn">
                                                    <div class="wrap__btn-skew-r">
                                                        <button class="btn-skew-r btn-effect "><span class="btn-skew-r__inner">Aplicar</span></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Script src="js/jquery-migrate-1.2.1.js" />
            <Script src="plugins/bootstrap/js/bootstrap.min.js" />
            <Script src="js/modernizr.custom.js" />
            <Script src="plugins/owl-carousel/owl.carousel.min.js" />
            <Script src="js/waypoints.min.js" />

            <Script src="plugins/prettyphoto/js/jquery.prettyPhoto.js" />
            <Script src="http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js" />
            <Script src="plugins/jelect/jquery.jelect.js" />
            <Script src="plugins/nouislider/jquery.nouislider.all.min.js" strategy="beforeInteractive" />
            <Script src="plugins/sliderpro/js/jquery.sliderPro.min.js" />

            <Script src="js/cssua.min.js" />
            <Script src="js/wow.min.js" strategy="beforeInteractive" />

            <Script src="plugins/flexslider/jquery.flexslider.js" />
            <Script src="js/custom.js" />

        </>
    )
} 