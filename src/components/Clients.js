import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        modules: [Autoplay],
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            waitForTransition: true
        },
        speed: 1000,
        breakpoints: {
            640: {
            slidesPerView: 1,
            spaceBetween: 10,
            },
        }
        });
  });
  

export function Clients() {
    const body = document.createElement('section');
    body.innerHTML = `
        <div class="clients">
            <p class="clients-title">Nossas Pastas</p>
            <div class="swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="./assets/imgs/florestal.jpg" alt="Logo Florestal" class="card-img" />
                    </div>
                    <div class="swiper-slide">
                        <img src="./assets/imgs/vale.png" alt="Logo Vale Fértil" class="card-img" />
                    </div>
                    <div class="swiper-slide">
                        <img src="./assets/imgs/APACHE_LOGO.png" alt="Logo APACHE_LOGO" class="card-img" />
                    </div>
                    <div class="swiper-slide">
                        <img src="./assets/imgs/CNA_LOGO_COLORIDO.png" alt="Logo CNA_LOGO_COLORIDO" class="card-img" />
                    </div>
                    <div class="swiper-slide">
                        <img src="./assets/imgs/COALA_AUTO_LOGO_PRETO.png" alt="Logo COALA_AUTO_LOGO_PRETO" class="card-img" />
                    </div>
                    <div class="swiper-slide">
                        <img src="./assets/imgs/COALA_BEAUTY_LOGO_COLORIDO.png" alt="Logo COALA_BEAUTY_LOGO_COLORIDO" class="card-img" />
                    </div>
                    <div class="swiper-slide">
                        <img src="./assets/imgs/COALA_HOME_LOGO_COLORIDO.png" alt="Logo COALA_HOME_LOGO_COLORIDO" class="card-img" />
                    </div>
                    <div class="swiper-slide">
                        <img src="./assets/imgs/COALA_LOGO_COLORIDO.png" alt="Logo COALA_LOGO_COLORIDO" class="card-img" />
                    </div>
                    <div class="swiper-slide">
                        <img src="./assets/imgs/COPERALCOOL_BACFREE_LOGO_COLORIDO.png" alt="Logo COPERALCOOL_BACFREE_LOGO_COLORIDO" class="card-img" />
                    </div>
                    <div class="swiper-slide">
                        <img src="./assets/imgs/MPR_LOGO_COLORIDO.png" alt="Logo MPR_LOGO_COLORIDO" class="card-img" />
                    </div>
                    <div class="swiper-slide">
                        <img src="./assets/imgs/PET_COALA_LOGO_COLORIDO.png" alt="Logo PET_COALA_LOGO_COLORIDO" class="card-img" />
                    </div>
                    <div class="swiper-slide">
                        <img src="./assets/imgs/VINAGREEN_LOGO.png" alt="Logo VINAGREEN_LOGO" class="card-img" />
                    </div>
                    <div class="swiper-slide">
                        <img src="./assets/imgs/ZULU_LOGO_COLORIDO.png" alt="Logo ZULU_LOGO_COLORIDO" class="card-img" />
                    </div>
                    <div class="swiper-slide">
                        <img src="./assets/imgs/ZULU_PERFUMES_LOGO_COLORIDO.png" alt="Logo ZULU_PERFUMES_LOGO_COLORIDO" class="card-img" />
                    </div>
                    <div class="swiper-slide">
                        <img src="./assets/imgs/ZUMBI_LOGO_COLORIDO.png" alt="Logo ZUMBI_LOGO_COLORIDO" class="card-img" />
                    </div>
                </div>
            </div>
        </div>
    `;
    return body;
  }
