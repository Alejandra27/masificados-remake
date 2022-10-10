export default function Slider() {
  return (
    <div id="sliderpro1" class="slider-pro main-slider">
      <div class="sp-slides">
        <div class="sp-slide"> <img class="sp-image" src="main-slider/1.jpg"
          data-src="main-slider/1.jpg"
          data-retina="main-slider/1.jpg" alt="img" />

          <div class="item-wrap sp-layer  sp-padding" data-horizontal="100" data-vertical="300"
            data-show-transition="left" data-hide-transition="up" data-show-delay="400" data-hide-delay="200">
            <div class="main-slider__inner text-left">
              <div class="custom-caption"> <a class="main-slider__btn btn-effect" href="javascript:void(0);"><span class="main-slider__btn_inner">Vendido por Automax</span></a>
                <div class="main-slider__title">porsche 911</div>
                <div class="decor-1"></div>
               
                <div> <span class="main-slider__price">$180.000.000</span>  </div>
              </div>
            </div>
          </div>
        </div>

        <div class="sp-slide"> <img class="sp-image" src="main-slider/2.jpg"
          data-src="main-slider/2.jpg"
          data-retina="main-slider/2.jpg" alt="img" />
          <div class="item-wrap sp-layer  sp-padding" data-horizontal="100" data-vertical="300"
            data-show-transition="left" data-hide-transition="up" data-show-delay="400" data-hide-delay="200">
            <div class="main-slider__inner text-left">
              <div class="custom-caption"> <a class="main-slider__btn btn-effect" href="javascript:void(0);"><span class="main-slider__btn_inner">Vendido por Automax</span></a>
                <div class="main-slider__title">Toyota Corolla</div>
                <div class="decor-1"></div>
                <div> <span class="main-slider__price">$105.000.000</span>  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}