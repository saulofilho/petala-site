export function Header() {
  const header = document.createElement('header');
  header.innerHTML = `
    <div class="logo">
    <h1>
      PÉTALA
      <br/>
      REPRESENTAÇÕES
      <br/>
      COMERCIAIS
    <h1/>
  </div>
  <div class="menu-toggle" id="menuToggle">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  </div>
  <nav class="nav" id="navMenu">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
    </ul>
  </nav>
  `;
  return header;
}
