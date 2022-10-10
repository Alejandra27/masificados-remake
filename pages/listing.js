import Header from './components/header'
import Script from 'next/script'
import Footer from './components/footer'

function Title() {
    return (
        <div class="block-title">
            <div class="block-title__inner section-bg section-bg_second">
                <div class="bg-inner">
                    <h1 class="ui-title-page">VEHÍCULOS</h1>
                    <div class="decor-1 center-block"></div>
                </div>
            </div>
        </div>
    )
}

function ListingContainer() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-9">
                    <main class="main-content">
                        <div class="sorting">
                            <div class="sorting__inner">
                                <div class="sorting__item">
                                    <span class="sorting__title">Mostrar</span>
                                    <div class="select jelect">
                                        <input id="page" name="page" value="0" data-text="imagemin" type="text" class="jelect-input" />
                                        <div tabindex="0" role="button" class="jelect-current">10 elementos</div>
                                        <ul class="jelect-options">
                                            <li class="jelect-option jelect-option_state_active">10 elementos</li>
                                            <li class="jelect-option">20 elementos</li>
                                            <li class="jelect-option">30 elementos</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="sorting__item">
                                    <span class="sorting__title">Ordenar</span>
                                    <div class="select jelect">
                                        <input id="sort" name="sort" value="0" data-text="imagemin" type="text" class="jelect-input" />
                                        <div tabindex="0" role="button" class="jelect-current">Últimos añadidos</div>
                                        <ul class="jelect-options">
                                            <li class="jelect-option jelect-option_state_active">Últimos añadidos</li>
                                            <li class="jelect-option">Primeros añadidos</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <article class="card clearfix">
                            <div class="card__img">
                            <a href='/details'><img class="img-responsive" src="cards/1.jpg" height="196" width="235" alt="foto" /></a>     
                            </div>
                            <div class="card__inner">
                                <h2 class="card__title ui-title-inner">Chevrolet Cruze</h2>
                                <div class="decor-1"></div>
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
                                <div class="card__price">Precio<span class="card__price-number">$55.000.000</span></div>
                            </div>
                        </article>

                        <article class="card clearfix">
                            <div class="card__img">
                            <a href='/details'><img class="img-responsive" src="cards/2.jpg" height="196" width="235" alt="foto" /></a>     
                                <span class="card__wrap-label"><span class="card__label">DESTACADO</span></span>
                            </div>
                            <div class="card__inner">
                                <h2 class="card__title ui-title-inner">nissan kicks</h2>
                                <div class="decor-1"></div>
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
                                        <span class="card-list__info">44,000 KM</span>
                                    </li>
                                    <li class="card-list__row">
                                        <span class="card-list__title">Color:</span>
                                        <span class="card-list__info">Blanco</span>
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
                                <div class="card__price">Precio<span class="card__price-number">$38.000.000</span></div>
                            </div>
                        </article>

                        <article class="card clearfix">
                            <div class="card__img">
                            <a href='/details'><img class="img-responsive" src="cards/3.jpg" height="196" width="235" alt="foto" /></a>     
                            </div>
                            <div class="card__inner">
                                <h2 class="card__title ui-title-inner">toyota corolla</h2>
                                <div class="decor-1"></div>
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
                                        <span class="card-list__info">15,000 KM</span>
                                    </li>
                                    <li class="card-list__row">
                                        <span class="card-list__title">Color:</span>
                                        <span class="card-list__info">Gris Oscuro</span>
                                    </li>
                                    <li class="card-list__row">
                                        <span class="card-list__title">Transmisión:</span>
                                        <span class="card-list__info">Automatica</span>
                                    </li>
                                    <li class="card-list__row">
                                        <span class="card-list__title">Vendido por:</span>
                                        <span class="card-list__info">Automax</span>
                                    </li>
                                </ul>
                                <div class="card__price">Precio<span class="card__price-number">$80.000.000</span></div>
                            </div>
                        </article>

                        <article class="card clearfix">
                            <div class="card__img">
                            <a href='/details'><img class="img-responsive" src="cards/4.jpg" height="196" width="235" alt="foto" /></a>     
                            </div>
                            <div class="card__inner">
                                <h2 class="card__title ui-title-inner">MAZDA 3</h2>
                                <div class="decor-1"></div>
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
                                        <span class="card-list__info">11,000 KM</span>
                                    </li>
                                    <li class="card-list__row">
                                        <span class="card-list__title">Color:</span>
                                        <span class="card-list__info">Gris Oscuro</span>
                                    </li>
                                    <li class="card-list__row">
                                        <span class="card-list__title">Transmisión:</span>
                                        <span class="card-list__info">Automatica</span>
                                    </li>
                                    <li class="card-list__row">
                                        <span class="card-list__title">Vendido por:</span>
                                        <span class="card-list__info">Automax</span>
                                    </li>
                                </ul>
                                <div class="card__price">Precio<span class="card__price-number">$65.000.000</span></div>
                            </div>
                        </article>

                        <article class="card clearfix">
                            <div class="card__img">
                                <a href='/details'><img class="img-responsive" src="cards/5.jpg" height="196" width="235" alt="foto" /></a>     
                            </div>
                            <div class="card__inner">
                                <h2 class="card__title ui-title-inner">CHEVROLET BLAZER</h2>
                                <div class="decor-1"></div>
                                <ul class="card__list list-unstyled">
                                    <li class="card-list__row">
                                        <span class="card-list__title">Tipo:</span>
                                        <span class="card-list__info">Pickup</span>
                                    </li>
                                    <li class="card-list__row">
                                        <span class="card-list__title">Motor:</span>
                                        <span class="card-list__info">V6 3.6 L</span>
                                    </li>
                                    <li class="card-list__row">
                                        <span class="card-list__title">Kilometraje:</span>
                                        <span class="card-list__info">8,000 KM</span>
                                    </li>
                                    <li class="card-list__row">
                                        <span class="card-list__title">Color:</span>
                                        <span class="card-list__info">Blanco</span>
                                    </li>
                                    <li class="card-list__row">
                                        <span class="card-list__title">Transmisión:</span>
                                        <span class="card-list__info">Automatica</span>
                                    </li>
                                    <li class="card-list__row">
                                        <span class="card-list__title">Vendido por:</span>
                                        <span class="card-list__info">Automax</span>
                                    </li>
                                </ul>
                                <div class="card__price">Precio<span class="card__price-number">$180.000.000</span></div>
                            </div>
                        </article>

                        <article class="card clearfix">
                            <div class="card__img">
                            <a href='/details'><img class="img-responsive" src="cards/6.jpg" height="196" width="235" alt="foto" /></a>     
                            </div>
                            <div class="card__inner">
                                <h2 class="card__title ui-title-inner">NISSAN MARCH</h2>
                                <div class="decor-1"></div>
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
                                        <span class="card-list__info">28,000 KM</span>
                                    </li>
                                    <li class="card-list__row">
                                        <span class="card-list__title">Color:</span>
                                        <span class="card-list__info">Azul</span>
                                    </li>
                                    <li class="card-list__row">
                                        <span class="card-list__title">Transmisión:</span>
                                        <span class="card-list__info">Automatica</span>
                                    </li>
                                    <li class="card-list__row">
                                        <span class="card-list__title">Vendido por:</span>
                                        <span class="card-list__info">Automax</span>
                                    </li>
                                </ul>
                                <div class="card__price">Precio<span class="card__price-number">$30.000.000</span></div>
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


                <div class="col-md-3">
                    <aside class="sidebar">
                        <section class="widget widget_mod-a">
                            <h3 class="widget-title">MARCAS</h3>
                            <div class="decor-1"></div>
                            <div class="widget-content">
                                <ul class="list-categories list-unstyled">
                                    <li class="list-categories__item">
                                        <a class="list-categories__link" href="javascript:void(0);">Audi (5)</a>
                                    </li>
                                    <li class="list-categories__item">
                                        <a class="list-categories__link" href="javascript:void(0);">CHEVROLET (22)</a>
                                    </li>
                                    <li class="list-categories__item">
                                        <a class="list-categories__link" href="javascript:void(0);">TOYOTA (15)</a>
                                    </li>
                                    <li class="list-categories__item">
                                        <a class="list-categories__link" href="javascript:void(0);">NISSAN (18)</a>
                                    </li>
                                    <li class="list-categories__item">
                                        <a class="list-categories__link" href="javascript:void(0);">MERCEDES-BENZ (3)</a>
                                    </li>
                                    <li class="list-categories__item">
                                        <a class="list-categories__link" href="javascript:void(0);">MAZDA (12)</a>
                                    </li>
                                </ul>
                                <a class="list-categories__more" href="javascript:void(0);">ver mas</a>
                            </div>
                        </section>

                        <div class="wrap-filter">
                            <section class="widget widget_mod-a">
                                <h3 class="widget-title">rango de precios</h3>
                                <div class="decor-1"></div>
                                <div class="widget-content">
                                    <div class="slider-price" id="slider-price"></div>
                                    <span class="slider-price__wrap-input">
                                        <input class="slider-price__input" id="slider-price_min" />
                                        <span>-</span>
                                        <input class="slider-price__input" id="slider-price_max" />
                                    </span>
                                </div>
                            </section>

                            <section class="widget widget_mod-a">
                                <h3 class="widget-title">tipo de vehículos</h3>
                                <div class="decor-1"></div>
                                <div class="widget-content">
                                    <div class="select select_mod-a jelect">
                                        <input id="vehicle-type" name="vehicle-type" value="0" data-text="imagemin" type="text" class="jelect-input" />
                                        <div tabindex="0" role="button" class="jelect-current">Todas</div>
                                        <ul class="jelect-options">
                                            <li class="jelect-option jelect-option_state_active">Sedan</li>
                                            <li class="jelect-option">Hatchback</li>
                                            <li class="jelect-option">Minivan</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <section class="widget widget_mod-a">
                                <h3 class="widget-title">TIPO DE COMBUSTIBLE</h3>
                                <div class="decor-1"></div>
                                <div class="widget-content">
                                    <div class="select select_mod-a jelect">
                                        <input id="fuel-type" name="fuel-type" value="0" data-text="imagemin" type="text" class="jelect-input" />
                                        <div tabindex="0" role="button" class="jelect-current">Todas</div>
                                        <ul class="jelect-options">
                                            <li class="jelect-option jelect-option_state_active">Gasolina</li>
                                            <li class="jelect-option">Electrico</li>
                                            <li class="jelect-option">Gas</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        </div>

                        <div class="btn">
                            <div class="btn-filter wrap__btn-skew-r js-filter">
                                <button class="btn-skew-r btn-effect "><span class="btn-skew-r__inner">filtrar vehículos</span></button>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default function Listing() {
    return (
        <>
            <div id="this-top" class="layout-theme animated-css" data-header="sticky" data-header-top="200">
                <div id="wrapper">
                    <Header />
                    <Title />
                    <ListingContainer />
                    <Footer />

                    <Script src="plugins/owl-carousel/owl.carousel.min.js" />
                    <Script src="js/waypoints.min.js" />

                    <Script src="plugins/prettyphoto/js/jquery.prettyPhoto.js" />
                    <Script src="http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js" />
                    <Script src="plugins/nouislider/jquery.nouislider.all.min.js" strategy="beforeInteractive" />
                    <Script src="js/custom.js" />
                </div>
            </div>
        </>
    )
}
