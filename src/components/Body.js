import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('#swiperHome', {
        slidesPerView: 1,
        modules: [Autoplay],
        loop: true,
        autoplay: {
            delay: 1,
            disableOnInteraction: false
        },
        speed: 9000
        });
  });

export function Body() {
    const body = document.createElement('main');
    body.innerHTML = `
        <div class="carousel-home">
            <div class="main-text">
                <p class="main-title">
                    Pétala Representações Comerciais. 
                    </br>
                    Conectando marcas e mercados há mais de 25 anos.
                </p>
            </div>
            <div id="swiperHome">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="./assets/imgs/pink-box2.png" alt="Logo Florestal" />
                    </div>
                    <div class="swiper-slide">
                        <img src="./assets/imgs/pink-truck.png" alt="Logo Vale Fértil" />
                    </div>
                    <div class="swiper-slide">
                        <img src="./assets/imgs/pink-box3.png" alt="Logo APACHE_LOGO" />
                    </div>
                    <div class="swiper-slide">
                        <img src="./assets/imgs/pink-truck2.png" alt="Logo CNA_LOGO_COLORIDO" />
                    </div>
                </div>
            </div>
        </div>
    `;
    return body;
  }
  