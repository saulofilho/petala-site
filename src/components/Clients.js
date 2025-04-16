export function Clients() {
    const body = document.createElement('section');
    body.innerHTML = `
        <div class="clients">
            <p class="clients__title">Nossos Clientes</p>
            <div class="clients__grid">
                <div class="clients__card">
                    <img src="./public/assets/imgs/logo.png" alt="Logo" class="card__img" />
                </div>
                <div class="clients__card">
                    <img src="./public/assets/imgs/logo.png" alt="Logo" class="card__img" />
                </div>
                <div class="clients__card">
                    <img src="./public/assets/imgs/logo.png" alt="Logo" class="card__img" />
                </div>
                <div class="clients__card">
                    <img src="./public/assets/imgs/logo.png" alt="Logo" class="card__img" />
                </div>
                <div class="clients__card">
                    <img src="./public/assets/imgs/logo.png" alt="Logo" class="card__img" />
                </div>
                <div class="clients__card">
                    <img src="./public/assets/imgs/logo.png" alt="Logo" class="card__img" />
                </div>
            </div>
        </div>
    `;
    return body;
  }
  