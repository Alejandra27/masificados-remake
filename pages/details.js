import Header from './components/header'
import Script from 'next/script'
import Footer from './components/footer'
import Link from "next/link";
import { useEffect } from 'react'
import loadUI from '../scripts/load'


export default function Details() {

    useEffect(() => {
        loadUI()
    })

    return (
        <>
            <div id="this-top" class="layout-theme animated-css" data-header="sticky" data-header-top="200"  >
                <div id="wrapper">

                    <Header></Header>

                    <div class="block-title">
                        <div class="block-title__inner section-bg section-bg_second">
                            <div class="bg-inner">
                                <h1 class="ui-title-page">DETALLES</h1>
                                <div class="decor-1 center-block"></div>
                            </div>
                        </div>
                    </div>

                    <div class="container">
                        <div class="row">
                            <div class="col-md-8">
                                <main class="main-content">
                                    <article class="car-details">
                                        <div class="car-details__wrap-title clearfix">
                                            <h2 class="car-details__title">BMW Serie 1</h2>
                                            <div class="car-details__wrap-price"><span class="car-details__price"><span class="car-details__price-inner">$70.000.000</span></span></div>
                                        </div>

                                        <div id="slider-product" class="flexslider slider-product">
                                            <ul class="slides">
                                                <li>
                                                    <a href="assets/media/slider_product/large/1.jpg" >
                                                        <img class="img-responsive" src="slider_product/large/1.jpg" height="430" width="770" alt="Foto" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="assets/media/slider_product/large/1.jpg" >
                                                        <img class="img-responsive" src="slider_product/large/2.jpg" height="430" width="770" alt="Foto" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="assets/media/slider_product/large/1.jpg" >
                                                        <img class="img-responsive" src="slider_product/large/3.jpg" height="430" width="770" alt="Foto" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="assets/media/slider_product/large/1.jpg" >
                                                        <img class="img-responsive" src="slider_product/large/4.jpg" height="430" width="770" alt="Foto" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="assets/media/slider_product/large/1.jpg" >
                                                        <img class="img-responsive" src="slider_product/large/5.jpg" height="430" width="770" alt="Foto" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="assets/media/slider_product/large/1.jpg" >
                                                        <img class="img-responsive" src="slider_product/large/6.jpg" height="430" width="770" alt="Foto" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div id="carousel-product" class="flexslider carousel-product">
                                            <ul class="slides">
                                                <li>
                                                    <img src="slider_product/small/1.jpg" height="75" width="95" alt="foto" />
                                                </li>
                                                <li>
                                                    <img src="slider_product/small/2.jpg" height="75" width="95" alt="foto" />
                                                </li>
                                                <li>
                                                    <img src="slider_product/small/3.jpg" height="75" width="95" alt="foto" />
                                                </li>
                                                <li>
                                                    <img src="slider_product/small/4.jpg" height="75" width="95" alt="foto" />
                                                </li>
                                                <li>
                                                    <img src="slider_product/small/5.jpg" height="75" width="95" alt="foto" />
                                                </li>
                                                <li>
                                                    <img src="slider_product/small/6.jpg" height="75" width="95" alt="foto" />
                                                </li>
                                            </ul>
                                        </div>

                                        <div class="wrap-nav-tabs">
                                            <ul class="nav nav-tabs">
                                                <li class="active"><a href="#tab1" data-toggle="tab">Descripción</a></li>
                                                <li><a href="#tab2" data-toggle="tab">Caracteristicas</a></li>
                                            </ul>
                                        </div>


                                        <div class="tab-content">
                                            <div class="tab-pane active" id="tab1">
                                                El BMW Serie 1 es juvenil, divertido y urbano. Las proporciones compactas, la línea del techo continua y el impactante dinamismo de sus líneas prometen agilidad y el placer de conducir a primera vista. El interior es moderno con una estructura precisa. Ofrece a los pasajeros más espacio que nunca.
                                            </div>
                                            <div class="tab-pane" id="tab2">

                                            </div>
                                            <div class="tab-pane" id="tab3">

                                                <div class="decor-1"></div>

                                            </div>
                                        </div>

                                        <div class="panel-group accordion" id="accordion-1">
                                            <div class="panel panel-default">
                                                <div class="panel-heading">
                                                    <a class="btn-collapse" data-toggle="collapse" data-parent="#accordion-1" href="#collapse-1"><i class="icon"></i></a>
                                                    <h3 class="panel-title">Exterior e interior</h3>
                                                </div>
                                                <div id="collapse-1" class="panel-collapse collapse in">
                                                    <div class="panel-body">
                                                        <p>Autoridad reconocible al instante: el diseño del BMW Serie 1 deja una poderosa impresión por dentro y por fuera. Empezando por el dinámico frontal con su gran parrilla doble y su amplia fascia. A lo largo de la línea del techo continua corren de forma paralela los contornos claramente definidos hasta llegar a la distintiva zaga. El carácter superior del BMW Serie 1 continúa hasta el interior. Aquí los pasajeros pueden disfrutar de una atmósfera de bienestar generosamente proporcionada y abierta. La cabina impresiona con las opciones de equipamiento ergonómicamente optimizadas y su diseño sistemáticamente orientado al conductor.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="panel">
                                                <div class="panel-heading">
                                                    <a class="btn-collapse collapsed" data-toggle="collapse" data-parent="#accordion-1" href="#collapse-2"><i class="icon"></i></a>
                                                    <h3 class="panel-title">Seguridad</h3>
                                                </div>
                                                <div id="collapse-2" class="panel-collapse collapse">
                                                    <div class="panel-body">
                                                        <p>Autoridad reconocible al instante: el diseño del BMW Serie 1 deja una poderosa impresión por dentro y por fuera. Empezando por el dinámico frontal con su gran parrilla doble y su amplia fascia. A lo largo de la línea del techo continua corren de forma paralela los contornos claramente definidos hasta llegar a la distintiva zaga. El carácter superior del BMW Serie 1 continúa hasta el interior. Aquí los pasajeros pueden disfrutar de una atmósfera de bienestar generosamente proporcionada y abierta. La cabina impresiona con las opciones de equipamiento ergonómicamente optimizadas y su diseño sistemáticamente orientado al conductor.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="panel">
                                                <div class="panel-heading">
                                                    <a class="btn-collapse collapsed" data-toggle="collapse" data-parent="#accordion-1" href="#collapse-3"><i class="icon"></i></a>
                                                    <h3 class="panel-title">Rendimiento</h3>
                                                </div>
                                                <div id="collapse-3" class="panel-collapse collapse">
                                                    <div class="panel-body">
                                                        <p>BMW M135i x Drive
                                                            Emisiones de CO2 (g/km): 171
                                                            Rendimiento Combinado (km/l): 13.3

                                                            Los ejemplos muestran el equipamiento opcional.
                                                            Los valores de rendimiento de combustible y emisiones de CO2 están basados en el ciclo ECE y se obtuvieron en condiciones controladas de laboratorio, que bien pueden no ser reproducibles ni obtenerse en condiciones y hábitos de manejo convencionales, debido a condiciones climatológicas, combustible, condiciones topográficas y otros factores.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </main>
                            </div>

                            <div class="col-md-4">
                                <aside class="sidebar">
                                    <section class="widget">
                                        <h3 class="widget-title">Especificaciones</h3>
                                        <div class="decor-1"></div>
                                        <div class="widget-content">
                                            <dl class="list-descriptions list-unstyled">
                                                <dt>Modelo</dt>
                                                <dd>BMW Serie 1</dd>
                                                <dt>Año</dt>
                                                <dd>2022</dd>
                                                <dt>Tipo de vehículo</dt>
                                                <dd>Sedan</dd>
                                                <dt>Tipo de motor</dt>
                                                <dd>1.5 l / 1.496 cc</dd>
                                                <dt>dimensiones</dt>
                                                <dd>Peso: 1.365 kg
                                                    Largo: 4.319 mm
                                                    Alto: 1.434 mm
                                                    Ancho: 1.799 mm
                                                </dd>
                                                <dt>trasmisión:</dt>
                                                <dd>Automatica</dd>

                                                <dt>capacidad</dt>
                                                <dd>5 pasajeros</dd>
                                            </dl>
                                        </div>
                                    </section>

                                    <section class="widget">
                                        <h3 class="widget-title">Relacionados</h3>
                                        <div class="decor-1"></div>
                                        <div class="widget-content">
                                            <section class="widget-post1 clearfix">
                                                <div class="widget-post1__img">
                                                    <a href='/details'>
                                                        <img class="img-responsive" src="slider_product/small/wv.jpg" height="75" width="75" alt="foto" />
                                                    </a>
                                                </div>
                                                <div class="widget-post1__inner">
                                                    <h3 class="widget-post1__title">Wolsvagen Polo</h3>
                                                    <div class="widget-post1__price">Precio: $70.000.000</div>
                                                    <div class="widget-post1__description">Año 2020</div>
                                                </div>
                                            </section>
                                            <section class="widget-post1 clearfix">
                                                <div class="widget-post1__img">
                                                    <a href='/details'>
                                                        <img class="img-responsive" src="slider_product/small/nm.jpg" height="75" width="75" alt="foto" />
                                                    </a>
                                                </div>
                                                <div class="widget-post1__inner">
                                                    <h3 class="widget-post1__title">Nissan Micra</h3>
                                                    <div class="widget-post1__price">Precio: $40.000.000</div>
                                                    <div class="widget-post1__description">Año 2021</div>
                                                </div>
                                            </section>
                                        </div>
                                    </section>

                                    <section class="widget">
                                        <h3 class="widget-title">Quien vende</h3>
                                        <div class="decor-1"></div>
                                        <div class="widget-content">
                                            <section class="widget-post1 clearfix">
                                                <div class="widget-post1__img">
                                                    <a href="https://automax.com.co">
                                                        <img class="img-responsive who-sells-logo" src="posts/370x250/au2.jpg" />
                                                    </a>
                                                </div>
                                            </section>

                                        </div>
                                    </section>

                                    <section class="widget">
                                        <h3 class="widget-title">CONTACTANOS</h3>
                                        <div class="decor-1"></div>
                                        <div class="row">
                                            <div class="col-sm-12 ">
                                                <form >
                                                    <div class="row">
                                                        <div class="col-sm-6">
                                                            <input class="form-control" type="text" placeholder="Nombres" required />
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <input class="form-control" type="text" placeholder="Apellidos" required />
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-sm-6">
                                                            <input class="form-control" type="text" placeholder="No. de teléfono" required />
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <input class="form-control" type="text" placeholder="Asunto" required />
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-xs-12">
                                                            <textarea class="form-control" placeholder="Comentarios" required rows="5"></textarea>
                                                            <div class="btn">
                                                                <div class="wrap__btn-skew-r">
                                                                    <button class="btn-skew-r btn-effect "><span class="btn-skew-r__inner">Enviar</span></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </section>

                                </aside>
                            </div>
                        </div>
                    </div>

                    <Footer />

                </div>
            </div>

        </>
    )
} 