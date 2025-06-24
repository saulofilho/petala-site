export function About() {
    const body = document.createElement('section');
    body.innerHTML = `
        <div class="main-project-text">
            <p class="main-subtitle">
                Confiança?
                <br/>
                A gente entrega.
                <br/>
                <br/>
                Há mais de cinco décadas, a família vem se destacando como ponte sólida entre marcas consagradas e o mercado consumidor. Com gestão 100 % familiar — fruto do legado que se renova de pais para filhos —, cultivamos valores de integridade, proximidade e inovação em cada projeto.
                <br/>
                <br/>
                Nossas soluções são desenhadas sob medida: unimos inteligência de mercado e networking estratégico para ampliar sua presença, maximizar resultados e consolidar parcerias duradouras.
            </p>
        </div>
        <div class="projects">
            <div class="projects-grid">
                <div class="card">
                    <p class="card-title">Nossa História</p>
                    <p class="card-desc">
                        Ao longo dos anos, mantivemos nossos valores familiares, passando o legado de pai para filho, sempre com o compromisso de excelência e integridade.
                    </p>
                </div>
                <div class="card">
                    <p class="card-title">Missão</p>
                    <p class="card-desc">
                        Representar marcas com excelência, promovendo soluções que atendam às necessidades do mercado e fortaleçam as relações comerciais.
                    most of the time.
                    </p>
                </div>
                <div class="card">
                    <p class="card-title">Visão</p>
                    <p class="card-desc">
                        Ser referência nacional em representações comerciais, reconhecida pela confiança, tradição e resultados.
                    </p>
                </div>
            </div>
        </div>
    `;
    return body;
  }
  