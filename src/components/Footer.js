export function Footer() {
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <div class="footer-wrapper">
      <div class="infos">
        <p>Dê um alô:</p>
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
