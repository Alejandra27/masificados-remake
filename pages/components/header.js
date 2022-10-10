import Link from "next/link";

export default function Header() {
  return (
    <div class="header">
      <div class="top-header">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <div class="header-contacts"> <span class="header-contacts__item">Medellín, 9 de octubre de 2022 </span>  </div>
              <ul class="social-links list-inline">
                <li><a class="icon fa fa-facebook" href="https://www.facebook.com/masificados/"></a></li>
                <li><a class="icon fa fa-instagram" href="https://www.instagram.com/elcolombiano_/?hl=es"></a></li>
                <li><a class="fa fa-whatsapp" href="javascript:void(0);"></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="header__inner">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-xs-12"> <a href="/" class="logo"> <img class="logo__img img-responsive" src="logo.png" height="180" width="280" alt="Logo" /> </a>
              <div class="navbar yamm">
                <div class="navbar-header hidden-md hidden-lg hidden-sm">
                  <button type="button" data-toggle="collapse" data-target="#navbar-collapse-1" class="navbar-toggle"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>
                  <a href="javascript:void(0);" class="navbar-brand"></a> </div>
                <div id="navbar-collapse-1" class="navbar-collapse collapse">
                  <ul class="nav navbar-nav">
                    <li><Link href="/">INICIO</Link></li>
                    <li><Link href="/listing">VEHÍCULOS</Link> </li>
                    <li><Link href="/destacados">DESTACADOS</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}