import Typed from 'typed.js';

document.addEventListener("DOMContentLoaded", () => {
  new Typed("#text-typed", {
    strings: ["REPRESENTAÇÕES", "COMERCIAIS"],
    typeSpeed: 80,
    backSpeed: 30,
    loop: true
  });
});

export function Header() {
  const header = document.createElement('header');
  header.innerHTML = `
    <div>
      <h1>
        PÉTALA
      <h1/>
      <h1 id="text-typed"><h1/>
  </div>
  `;
  return header;
}
