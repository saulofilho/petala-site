export function Footer() {
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <div class="footer-wrapper">
      <div class="infos">
        <p>Dúvidas? Mande a sua mensagem para o nosso email. Responderemos o breve possível.</p>
        <p>lucilenemirandola@gmail.com</p>
      </div>
    </div>
    <div class="copyright">
      <p>
        Copyright © 2025 Pétala Representações Comerciais, LTDA.
        <br />
        All rights reserved.
      </p>
    </div>
  `;
  return footer;
}
