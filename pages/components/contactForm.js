export default function ContactForm() {
    return (
        <section class="section_map section-bg-2 wow bounceInUp" data-wow-duration="2s">
            <div class="container text-center">
                <div class="row">
                    <div class="col-xs-12">
                        <h2 class="ui-title-inner">CONTACTANOS<br /></h2>
                        <p>En Automax todo es ágil y fácil, porque para nosotros lo más importante es tu tranquilidad durante todo el camino.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-10 col-sm-offset-1">
                        <form class="form-contact" action="post">
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
                                    <textarea class="form-control" placeholder="Detalles..." required rows="7"></textarea>
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
            </div>
        </section>
    )
}