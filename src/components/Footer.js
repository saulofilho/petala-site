export function Footer() {
  const footer = document.createElement('footer');
  footer.innerHTML = `
      <div class="footer-wrapper">
        <div class="infos">
          <p>Avenida Rio Branco</p>
          <p>Nº 404, Sala 307, Bloco 1 - Centro</p>
          <p>Cuiabá - MT</p>
        </div>
        <div class="infos">
          <p>lucilenemirandola@gmail.com</p>
        </div>
    </div>
    <div class="copyright">
      <p>
        Copyright © 2025 Pétala Representações Comerciais.
        <br />
        All rights reserved.
      </p>
    </div>
  `;
  return footer;
}
