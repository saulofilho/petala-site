export function About() {
    const body = document.createElement('section');
    body.innerHTML = `
        <div class="projects">
            <div class="projects-grid">
                <div class="card">
                    <p class="card-title">Nossa História</p>
                    <p class="card-desc">
                        Ao longo dos anos, mantivemos nossos valores familiares, passando o legado de pai para filho, sempre com o compromisso de excelência e integridade.
                    </p>
                    <img src="./assets/imgs/excellent-review.png" alt="excellent review" class="card-img-about" />
                </div>
                <div class="card">
                    <p class="card-title">Missão</p>
                    <p class="card-desc">
                        Representar marcas com excelência, promovendo soluções que atendam às necessidades do mercado e fortaleçam as relações comerciais.
                    most of the time.
                    </p>
                    <img src="./assets/imgs/social-media-post.png" alt="social media post" class="card-img-about" />
                </div>
                <div class="card">
                    <p class="card-title">Visão</p>
                    <p class="card-desc">
                        Ser referência nacional em representações comerciais, reconhecida pela confiança, tradição e resultados.
                    </p>
                    <img src="./assets/imgs/business-idea.png" alt="business idea" class="card-img-about" />
                </div>
            </div>
        </div>
    `;
    return body;
  }
  