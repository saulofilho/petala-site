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
            slidesPerView: 2,
            spaceBetween: 20,
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
                        <img src="./assets/imgs/florestal.jpg" alt="Logo Florestal" class="card__img" />
                    </div>
                    <div class="swiper-slide">
                        <img src="./assets/imgs/mpr.png" alt="Logo MPR" class="card__img" />
                    </div>
                    <div class="swiper-slide">
                        <img src="./assets/imgs/vale.png" alt="Logo Vale Fértil" class="card__img" />
                    </div>
                    <div class="swiper-slide">
                        <img src="./assets/imgs/logo.png" alt="Logo" class="card__img" />
                    </div>
                </div>
            </div>
        </div>
    `;
    return body;
  }
