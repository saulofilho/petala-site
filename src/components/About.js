export function About() {
    const body = document.createElement('section');
    body.innerHTML = `
        <div class="projects">
            <div class="projects__grid">
                <div class="card">
                    <p class="card__title">Nossa História</p>
                    <p class="card__desc">
                        Ao longo dos anos, mantivemos nossos valores familiares, passando o legado de pai para filho, sempre com o compromisso de excelência e integridade.
                    </p>
                    <hr class="card__sep" />
                </div>
                <div class="card">
                    <p class="card__title">Missão</p>
                    <p class="card__desc">
                        Representar marcas com excelência, promovendo soluções que atendam às necessidades do mercado e fortaleçam as relações comerciais.
                    most of the time.
                    </p>
                    <hr class="card__sep" />
                </div>
                <div class="card">
                    <p class="card__title">Visão</p>
                    <p class="card__desc">
                        Ser referência nacional em representações comerciais, reconhecida pela confiança, tradição e resultados.
                    </p>
                    <hr class="card__sep" />
                </div>
            </div>
        </div>
    `;
    return body;
  }
  