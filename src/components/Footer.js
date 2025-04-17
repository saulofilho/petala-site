export function Footer() {
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <div class="footer-wrapper">
      <div class="infos">
        <p>Fale com a gente:</p>
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
