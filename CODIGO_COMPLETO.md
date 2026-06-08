# Código completo — Biblioteca Virtual Livro Sonoro v1.5


## index.html

```html
<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Livro Sonoro — Biblioteca Virtual 1.0</title>
  <meta name="description" content="Biblioteca Virtual Livro Sonoro: audiolivros, eBooks, PDFs, clássicos em português, literatura brasileira, russa, contos, poesia, filosofia e obras autorais.">
  <meta property="og:title" content="Livro Sonoro — Biblioteca Virtual 1.0">
  <meta property="og:description" content="Audiolivros, eBooks e clássicos em português. Da palavra escrita à palavra falada.">
  <meta property="og:type" content="website">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="app-header">
    <a class="logo" href="#inicio" aria-label="Livro Sonoro">
      <span class="logo-mark">☊</span>
      <span>
        <strong>Livro Sonoro</strong>
        <small>Biblioteca Virtual 1.0</small>
      </span>
    </a>

    <nav class="main-nav" aria-label="Navegação principal">
      <a href="#biblioteca">Biblioteca</a>
      <a href="#audiolivros">Audiolivros</a>
      <a href="#ebooks">eBooks</a>
      <a href="#loja">Loja</a>
      <a href="#apoie">Apoie</a>
    </nav>

    <div class="header-actions">
      <button class="icon-btn" aria-label="Buscar">⌕</button>
      <a class="listen-btn" href="#audiolivros">🎧 Ouça agora</a>
    </div>
  </header>

  <main id="inicio">
    <section class="hero-platform">
      <div class="hero-overlay">
        <p class="eyebrow">Biblioteca brasileira independente</p>
        <h1>Biblioteca Virtual 1.0</h1>
        <p>Audiolivros, eBooks, PDFs e clássicos em português.</p>
        <div class="hero-buttons">
          <a class="primary-btn" href="#biblioteca">Explorar catálogo →</a>
          <a class="ghost-btn" href="#ebooks">Ver eBooks/PDFs</a>
        </div>
      </div>
    </section>

    <section id="biblioteca" class="category-strip" aria-label="Categorias principais">
      <a href="#literatura">📖 Literatura</a>
      <a href="#contos">🪶 Contos</a>
      <a href="#poesia">✒️ Poesia</a>
      <a href="#brasileira">🇧🇷 Literatura Brasileira</a>
      <a href="#russa">🏛️ Literatura Russa</a>
      <a href="#infantil">🧒 Infantil e Juvenil</a>
      <a href="#ficcao">🚀 Ficção Científica</a>
      <a href="#autoajuda">📈 Autoajuda</a>
      <a href="#humanidades">🏺 Humanidades</a>
      <a href="#academicos">🎓 Acadêmicos</a>
    </section>

    <section id="audiolivros" class="library-section">
      <div class="section-title-row">
        <h2>🎧 Clássicos da Literatura Russa</h2>
        <a href="#catalogo-completo">Ver tudo →</a>
      </div>
      <div class="shelf-row" id="shelf-russa"></div>
    </section>

    <section class="library-section">
      <div class="section-title-row">
        <h2>📚 Clássicos e Obras Essenciais</h2>
        <a href="#catalogo-completo">Ver tudo →</a>
      </div>
      <div class="shelf-row" id="shelf-essenciais"></div>
    </section>

    <section id="brasileira" class="library-section">
      <div class="section-title-row">
        <h2>🇧🇷 Literatura Brasileira</h2>
        <a href="#catalogo-completo">Ver tudo →</a>
      </div>
      <div class="shelf-row" id="shelf-brasileira"></div>
    </section>

    <section id="ebooks" class="library-section light-band">
      <div class="section-title-row">
        <h2>📄 eBooks, PDFs e leitura livre</h2>
        <a href="#ebooks-grid">Ver tudo →</a>
      </div>
      <p class="section-subtitle">Espaço para domínio público, materiais de estudo, PDFs, textos acadêmicos e leitura complementar.</p>
      <div class="resource-carousel" id="ebooks-grid"></div>
    </section>

    <section id="loja" class="library-section store-band">
      <div class="section-title-row">
        <h2>🛒 Loja literária</h2>
        <a href="#apoie">Apoie o projeto →</a>
      </div>
      <p class="section-subtitle">Vitrine para eBooks próprios, livros físicos, links de afiliado, obras autorais e futuras parcerias.</p>
      <div class="store-row" id="store-row"></div>
    </section>

    <section id="colecoes" class="library-section">
      <div class="section-title-row">
        <h2>📚 Coleções editoriais</h2>
        <a href="#catalogo-completo">Ver tudo →</a>
      </div>
      <div class="collections-row">
        <article class="collection-card classic">
          <div>
            <h3>Coleção Clássicos Eternos</h3>
            <p>Grandes obras que atravessam o tempo.</p>
            <strong>6 títulos</strong>
          </div>
          <a href="#audiolivros">Ver coleção</a>
        </article>
        <article class="collection-card wisdom">
          <div>
            <h3>Sabedoria & Filosofia</h3>
            <p>Ideias que transformam mentes e destinos.</p>
            <strong>5 títulos</strong>
          </div>
          <a href="#loja">Ver coleção</a>
        </article>
        <article class="collection-card sacred">
          <div>
            <h3>Fé, Mistério & Espiritualidade</h3>
            <p>Textos sagrados e ensinamentos profundos.</p>
            <strong>7 títulos</strong>
          </div>
          <a href="#audiolivros">Ver coleção</a>
        </article>
        <article class="collection-card brazil">
          <div>
            <h3>Biblioteca Machado de Assis</h3>
            <p>O maior nome da literatura brasileira.</p>
            <strong>8 títulos</strong>
          </div>
          <a href="#brasileira">Ver coleção</a>
        </article>
      </div>
    </section>

    <section id="catalogo-completo" class="library-section catalog-panel">
      <div class="section-title-row">
        <h2>🔎 Catálogo completo</h2>
        <span id="total-obras">0 obras</span>
      </div>

      <div class="catalog-tools">
        <input id="busca" type="search" placeholder="Buscar por obra, autor ou categoria...">
        <div id="filtros" class="filter-pills"></div>
      </div>

      <div id="catalogo-grid" class="compact-grid"></div>
    </section>

    <section id="colecionaveis" class="library-section compact-info">
      <div class="section-title-row">
        <h2>🏺 Colecionáveis</h2>
        <a href="#contato">Contato →</a>
      </div>
      <div id="colecionaveis-grid" class="mini-info-grid"></div>
    </section>

    <section id="apoie" class="support-section">
      <div class="support-copy">
        <p class="eyebrow">Sustentação do projeto</p>
        <h2>Apoie a Biblioteca Livro Sonoro</h2>
        <p>O Livro Sonoro é um projeto brasileiro independente. O apoio ajuda a manter narrações, capas, edições, PDFs, eBooks, publicações e a evolução da plataforma.</p>
      </div>

      <div class="support-cards">
        <article>
          <h3>Pix</h3>
          <p>Contribuição direta.</p>
          <button data-copy="canallivrosonoro@gmail.com">Copiar Pix</button>
        </article>
        <article>
          <h3>Apoia.se</h3>
          <p>Clube mensal futuro.</p>
          <a href="#">Em breve</a>
        </article>
        <article>
          <h3>Parceiros</h3>
          <p>Editoras, escolas, autores e marcas culturais.</p>
          <a href="mailto:canallivrosonoro@gmail.com">Contato</a>
        </article>
      </div>
    </section>
  </main>

  <footer id="contato" class="site-footer">
    <div class="footer-brand">
      <div class="logo footer-logo">
        <span class="logo-mark">☊</span>
        <span>
          <strong>Livro Sonoro</strong>
          <small>Biblioteca Virtual 1.0</small>
        </span>
      </div>
      <p>Ouvir é conhecer. Ler é transformar.</p>
    </div>

    <div class="footer-column">
      <h4>Navegue</h4>
      <a href="#biblioteca">Biblioteca</a>
      <a href="#audiolivros">Audiolivros</a>
      <a href="#ebooks">eBooks</a>
      <a href="#colecoes">Coleções</a>
    </div>

    <div class="footer-column">
      <h4>Institucional</h4>
      <a href="#apoie">Apoie o projeto</a>
      <a href="#loja">Loja literária</a>
      <a href="#colecionaveis">Colecionáveis</a>
      <a href="mailto:canallivrosonoro@gmail.com">Contato</a>
    </div>

    <div class="footer-column">
      <h4>Contato</h4>
      <p>canallivrosonoro@gmail.com</p>
      <p>@livrosonoropodcast</p>
      <p>@livro.sonoro</p>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>

```


## style.css

```css
/* Livro Sonoro — Biblioteca Virtual 1.5 */
:root {
  --black: #0a0908;
  --ink: #14100d;
  --paper: #f5efe3;
  --paper-2: #fffaf1;
  --gold: #d4a13f;
  --gold-2: #f0d08a;
  --wine: #6d1736;
  --brown: #3b2416;
  --green: #254b38;
  --blue: #24384b;
  --red: #681c1d;
  --muted: #6d6255;
  --line: rgba(72, 45, 22, .18);
  --shadow: 0 14px 34px rgba(26, 18, 10, .18);
  --radius: 16px;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: #191410;
  background: var(--paper);
}
a { color: inherit; text-decoration: none; }
button, input { font: inherit; }

.app-header {
  height: 72px;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
  background: rgba(9, 8, 9, .96);
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 20;
  border-bottom: 1px solid rgba(212,161,63,.18);
  backdrop-filter: blur(12px);
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 250px;
}
.logo-mark {
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(212,161,63,.38);
  border-radius: 12px;
  color: var(--gold-2);
  background: rgba(212,161,63,.08);
  font-size: 1.4rem;
}
.logo strong {
  display: block;
  font-family: "Cormorant Garamond", Georgia, serif;
  color: var(--gold-2);
  font-size: 1.65rem;
  line-height: .8;
}
.logo small {
  color: var(--gold);
  font-size: .72rem;
  text-transform: uppercase;
  letter-spacing: .18em;
  font-weight: 800;
}

.main-nav {
  display: flex;
  gap: 32px;
  align-items: center;
  font-weight: 700;
}
.main-nav a { opacity: .92; }
.main-nav a:hover { color: var(--gold-2); }

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}
.icon-btn {
  border: 1px solid rgba(255,255,255,.15);
  background: rgba(255,255,255,.04);
  color: white;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  cursor: pointer;
}
.listen-btn {
  border-radius: 999px;
  padding: 12px 22px;
  background: linear-gradient(135deg, #c8892e, #efcb76);
  color: #1b0f06;
  font-weight: 900;
}

.hero-platform {
  min-height: 310px;
  position: relative;
  display: flex;
  align-items: center;
  background:
    linear-gradient(90deg, rgba(8,7,6,.97) 0%, rgba(8,7,6,.80) 32%, rgba(8,7,6,.20) 75%),
    url("assets/banner.png") center/cover no-repeat;
}
.hero-overlay {
  width: min(1180px, calc(100% - 64px));
  margin: 0 auto;
  color: var(--paper);
}
.eyebrow {
  margin: 0 0 10px;
  text-transform: uppercase;
  letter-spacing: .16em;
  color: var(--gold-2);
  font-weight: 900;
  font-size: .76rem;
}
.hero-overlay h1 {
  margin: 0;
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(3.2rem, 7vw, 5.8rem);
  line-height: .85;
  color: #f7e4b7;
}
.hero-overlay p {
  margin: 12px 0 0;
  color: #eeddbd;
  font-size: clamp(1.08rem, 2vw, 1.4rem);
}
.hero-buttons {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 24px;
}
.primary-btn, .ghost-btn {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 14px 24px;
  font-weight: 900;
}
.primary-btn {
  background: var(--wine);
  color: #fff;
  box-shadow: 0 10px 24px rgba(109,23,54,.28);
}
.ghost-btn {
  border: 1px solid rgba(240,208,138,.32);
  color: var(--gold-2);
  background: rgba(0,0,0,.24);
}

.category-strip {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding: 18px 32px;
  background: var(--paper-2);
  border-bottom: 1px solid var(--line);
  scrollbar-width: thin;
}
.category-strip a {
  white-space: nowrap;
  color: #fff;
  padding: 11px 18px;
  border-radius: 999px;
  font-weight: 900;
  box-shadow: 0 8px 18px rgba(28, 18, 9, .12);
}
.category-strip a:nth-child(1) { background: #5a1735; }
.category-strip a:nth-child(2) { background: #d84b1c; }
.category-strip a:nth-child(3) { background: #d69a18; }
.category-strip a:nth-child(4) { background: #2e674a; }
.category-strip a:nth-child(5) { background: #55687b; }
.category-strip a:nth-child(6) { background: #32817c; }
.category-strip a:nth-child(7) { background: #3b477b; }
.category-strip a:nth-child(8) { background: #b73c66; }
.category-strip a:nth-child(9) { background: #7d4a8e; }
.category-strip a:nth-child(10) { background: #a26d2d; }

.library-section {
  padding: 22px 32px 14px;
  background: var(--paper);
}
.library-section + .library-section { padding-top: 16px; }
.section-title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 14px;
}
.section-title-row h2 {
  margin: 0;
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(1.65rem, 3vw, 2.35rem);
  line-height: 1;
  color: #261911;
}
.section-title-row a, .section-title-row span {
  font-weight: 900;
  white-space: nowrap;
}
.section-subtitle {
  margin: -4px 0 18px;
  color: var(--muted);
  max-width: 850px;
}

.shelf-row {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding: 0 0 14px;
  scroll-snap-type: x mandatory;
  scrollbar-width: thin;
}
.book-card {
  flex: 0 0 178px;
  scroll-snap-align: start;
}
.book-cover {
  aspect-ratio: 1 / 1;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  background: #1a1510;
  box-shadow: var(--shadow);
  border: 1px solid rgba(0,0,0,.10);
}
.book-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.play-badge {
  position: absolute;
  left: 12px;
  bottom: 12px;
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: white;
  background: rgba(0,0,0,.62);
  border: 1px solid rgba(255,255,255,.55);
  font-size: .85rem;
}
.book-card h3 {
  margin: 10px 0 2px;
  font-size: .98rem;
  line-height: 1.08;
}
.book-card p {
  margin: 0;
  color: var(--muted);
  font-size: .85rem;
}
.book-meta {
  display: flex;
  gap: 8px;
  align-items: center;
  margin-top: 8px;
  color: var(--muted);
  font-size: .8rem;
}

.light-band {
  background: #fbf6ec;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}
.store-band {
  background:
    linear-gradient(180deg, rgba(212,161,63,.16), rgba(212,161,63,.05)),
    var(--paper);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.resource-carousel, .store-row {
  display: flex;
  overflow-x: auto;
  gap: 16px;
  padding-bottom: 14px;
  scrollbar-width: thin;
}
.resource-card {
  flex: 0 0 270px;
  min-height: 180px;
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 18px;
  background: #fff;
  box-shadow: 0 8px 22px rgba(24, 16, 8, .08);
}
.resource-card h3 {
  margin: 0 0 8px;
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: 1.65rem;
  line-height: .95;
}
.resource-kicker {
  color: #9a6826;
  text-transform: uppercase;
  letter-spacing: .12em;
  font-weight: 900;
  font-size: .7rem;
}
.resource-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin: 12px 0;
}
.resource-meta span {
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 6px 8px;
  font-size: .72rem;
  font-weight: 800;
  background: #fff8eb;
}
.resource-card a, .product-card a, .collection-card a, .support-cards a, .support-cards button {
  display: inline-flex;
  border: 1px solid rgba(90, 57, 25, .22);
  border-radius: 999px;
  padding: 9px 13px;
  background: rgba(90,57,25,.06);
  font-weight: 900;
  cursor: pointer;
}

.product-card {
  flex: 0 0 360px;
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 14px;
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 14px;
  background: #fff;
  box-shadow: 0 8px 22px rgba(24, 16, 8, .10);
}
.product-cover {
  aspect-ratio: 1 / 1;
  border-radius: 10px;
  overflow: hidden;
  background: #1d1712;
}
.product-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.product-card h3 {
  margin: 0 0 5px;
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: 1.6rem;
  line-height: .95;
}
.product-card p {
  margin: 5px 0;
  color: var(--muted);
  font-size: .88rem;
}

.collections-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
.collection-card {
  min-height: 170px;
  border-radius: 16px;
  color: white;
  padding: 18px;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  flex-direction: column;
  box-shadow: var(--shadow);
}
.collection-card h3 {
  margin: 0 0 8px;
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: 1.45rem;
  line-height: .95;
}
.collection-card p { margin: 0 0 12px; opacity: .86; }
.collection-card a {
  align-self: flex-start;
  color: white;
  background: rgba(255,255,255,.12);
  border-color: rgba(255,255,255,.18);
}
.classic { background: linear-gradient(135deg, #241019, #582036); }
.wisdom { background: linear-gradient(135deg, #2a1d0a, #9c6b13); }
.sacred { background: linear-gradient(135deg, #112419, #315c38); }
.brazil { background: linear-gradient(135deg, #112532, #275266); }

.catalog-panel {
  background: #fffaf1;
  border-top: 1px solid var(--line);
}
.catalog-tools {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 18px;
}
.catalog-tools input {
  min-width: 280px;
  flex: 1;
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 13px 17px;
  outline: none;
}
.filter-pills {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.filter-pills button {
  border: 1px solid var(--line);
  background: #fff;
  border-radius: 999px;
  padding: 11px 13px;
  font-weight: 900;
  cursor: pointer;
}
.filter-pills button.active {
  color: #fff;
  background: #5a1735;
}
.compact-grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 14px;
}
.compact-grid .book-card { flex: initial; }
.compact-grid .book-card h3 { font-size: .9rem; }
.compact-grid .book-card p { font-size: .78rem; }
.compact-grid .book-meta { display: none; }

.compact-info {
  background: #f7efe2;
}
.mini-info-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}
.mini-info-grid .resource-card {
  min-height: 130px;
  flex: initial;
}

.support-section {
  padding: 46px 32px;
  display: grid;
  grid-template-columns: 1.1fr 1.2fr;
  gap: 24px;
  background: #15110f;
  color: #f7eddb;
}
.support-copy h2 {
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(2.2rem, 4vw, 4rem);
  line-height: .9;
  margin: 0 0 14px;
  color: var(--gold-2);
}
.support-copy p:not(.eyebrow) {
  color: #d8c6a7;
  line-height: 1.65;
}
.support-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}
.support-cards article {
  border: 1px solid rgba(212,161,63,.22);
  border-radius: 16px;
  padding: 18px;
  background: rgba(255,255,255,.04);
}
.support-cards h3 {
  margin: 0 0 8px;
  color: var(--gold-2);
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: 1.8rem;
}
.support-cards a, .support-cards button {
  color: #fff;
  border-color: rgba(240,208,138,.24);
  background: rgba(212,161,63,.10);
}

.site-footer {
  padding: 34px 32px;
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1.2fr;
  gap: 28px;
  background: #0b0909;
  color: #d8c6a7;
}
.footer-logo { min-width: 0; }
.footer-column {
  display: flex;
  flex-direction: column;
  gap: 9px;
}
.footer-column h4 {
  margin: 0 0 6px;
  color: var(--gold-2);
  text-transform: uppercase;
  letter-spacing: .12em;
  font-size: .8rem;
}
.footer-column p { margin: 0 0 8px; }

@media (max-width: 1080px) {
  .main-nav { display: none; }
  .compact-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  .collections-row { grid-template-columns: repeat(2, 1fr); }
  .support-section { grid-template-columns: 1fr; }
  .site-footer { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 700px) {
  .app-header { padding: 0 16px; }
  .logo { min-width: 0; }
  .logo strong { font-size: 1.3rem; }
  .logo small { display: none; }
  .listen-btn { padding: 10px 13px; font-size: .85rem; }
  .hero-platform { min-height: 280px; }
  .hero-overlay { width: min(100% - 32px, 1180px); }
  .category-strip, .library-section, .support-section, .site-footer { padding-left: 16px; padding-right: 16px; }
  .book-card { flex-basis: 148px; }
  .compact-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .product-card { flex-basis: 315px; grid-template-columns: 100px 1fr; }
  .collections-row, .support-cards, .mini-info-grid, .site-footer { grid-template-columns: 1fr; }
}

```


## script.js

```javascript
const catalogo = [
  {
    id: "crime-castigo",
    titulo: "Crime e Castigo",
    autor: "Fiódor Dostoiévski",
    categoria: "Literatura Russa",
    colecao: "russa",
    promessa: "Culpa, delírio e redenção em áudio.",
    duracao: "Série",
    img: "assets/capas/crime-castigo.png",
    youtube: "#",
    spotify: "#"
  },
  {
    id: "anna",
    titulo: "Anna Karenina",
    autor: "Liev Tolstói",
    categoria: "Literatura Russa",
    colecao: "russa",
    promessa: "Paixão, sociedade e destino.",
    duracao: "5h20",
    img: "assets/capas/anna.png",
    youtube: "#",
    spotify: "#"
  },
  {
    id: "noites-brancas",
    titulo: "Noites Brancas",
    autor: "Fiódor Dostoiévski",
    categoria: "Literatura Russa",
    colecao: "russa",
    promessa: "Um amor quase possível.",
    duracao: "2h19",
    img: "assets/capas/noites-brancas.png",
    youtube: "#",
    spotify: "#"
  },
  {
    id: "ivan",
    titulo: "A Morte de Ivan Ilitch",
    autor: "Liev Tolstói",
    categoria: "Literatura Russa",
    colecao: "russa",
    promessa: "O medo de morrer.",
    duracao: "2h43",
    img: "assets/capas/ivan.png",
    youtube: "#",
    spotify: "#"
  },
  {
    id: "metamorfose",
    titulo: "A Metamorfose",
    autor: "Franz Kafka",
    categoria: "Gótico e Horror",
    colecao: "essenciais",
    promessa: "O pesadelo de acordar transformado.",
    duracao: "2h11",
    img: "assets/capas/metamorfose.png",
    youtube: "#",
    spotify: "#"
  },
  {
    id: "dracula",
    titulo: "Drácula",
    autor: "Bram Stoker",
    categoria: "Gótico e Horror",
    colecao: "essenciais",
    promessa: "Castelo, sombras e terror gótico.",
    duracao: "Série",
    img: "assets/capas/dracula.png",
    youtube: "#",
    spotify: "#"
  },
  {
    id: "inferno",
    titulo: "Inferno",
    autor: "Dante Alighieri",
    categoria: "Clássicos",
    colecao: "essenciais",
    promessa: "A jornada pelos 9 círculos.",
    duracao: "6h34",
    img: "assets/capas/inferno.png",
    youtube: "#",
    spotify: "#"
  },
  {
    id: "enoque",
    titulo: "O Livro de Enoque",
    autor: "Texto antigo",
    categoria: "Apócrifos",
    colecao: "essenciais",
    promessa: "Anjos caídos e segredos antigos.",
    duracao: "2h53",
    img: "assets/capas/enoque.png",
    youtube: "#",
    spotify: "#"
  },
  {
    id: "judas",
    titulo: "O Evangelho de Judas",
    autor: "Texto apócrifo",
    categoria: "Apócrifos",
    colecao: "essenciais",
    promessa: "A outra face da traição.",
    duracao: "30min",
    img: "assets/capas/judas.png",
    youtube: "#",
    spotify: "#"
  },
  {
    id: "tome",
    titulo: "O Evangelho de Tomé",
    autor: "Texto apócrifo",
    categoria: "Apócrifos",
    colecao: "essenciais",
    promessa: "114 palavras secretas.",
    duracao: "Especial",
    img: "assets/capas/tome.png",
    youtube: "#",
    spotify: "#"
  },
  {
    id: "alienista",
    titulo: "O Alienista",
    autor: "Machado de Assis",
    categoria: "Literatura Brasileira",
    colecao: "brasileira",
    promessa: "Loucura, poder e ironia.",
    duracao: "Especial",
    img: "assets/capas/alienista.png",
    youtube: "#",
    spotify: "#"
  },
  {
    id: "igreja-diabo",
    titulo: "A Igreja do Diabo",
    autor: "Machado de Assis",
    categoria: "Literatura Brasileira",
    colecao: "brasileira",
    promessa: "Sátira e tentação.",
    duracao: "22min",
    img: "assets/capas/igreja-diabo.png",
    youtube: "#",
    spotify: "#"
  },
  {
    id: "sermao-diabo",
    titulo: "O Sermão do Diabo",
    autor: "Machado de Assis",
    categoria: "Literatura Brasileira",
    colecao: "brasileira",
    promessa: "A sátira mais ácida de Machado.",
    duracao: "7min",
    img: "assets/capas/sermao-diabo.png",
    youtube: "#",
    spotify: "#"
  },
  {
    id: "sertoes",
    titulo: "Os Sertões",
    autor: "Euclides da Cunha",
    categoria: "Literatura Brasileira",
    colecao: "brasileira",
    promessa: "Canudos e o Brasil profundo.",
    duracao: "3h35",
    img: "assets/capas/sertoes.png",
    youtube: "#",
    spotify: "#"
  },
  {
    id: "profeta",
    titulo: "O Profeta",
    autor: "Khalil Gibran",
    categoria: "Espiritualidade",
    colecao: "essenciais",
    promessa: "Sabedoria atemporal.",
    duracao: "1h19",
    img: "assets/capas/profeta.png",
    youtube: "#",
    spotify: "#"
  },
  {
    id: "principe-maquiavel",
    titulo: "O Príncipe",
    autor: "Maquiavel",
    categoria: "Filosofia e Poder",
    colecao: "essenciais",
    promessa: "O manual clássico do poder.",
    duracao: "4h03",
    img: "assets/capas/principe-maquiavel.png",
    youtube: "#",
    spotify: "#"
  },
  {
    id: "pequeno-principe",
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    categoria: "Infantil e Juvenil",
    colecao: "essenciais",
    promessa: "A obra que todo adulto deveria ouvir.",
    duracao: "1h54",
    img: "assets/capas/pequeno-principe.png",
    youtube: "#",
    spotify: "#"
  },
  {
    id: "diabo-justo",
    titulo: "O Diabo Justo",
    autor: "E. S. Almeida",
    categoria: "Obras Autorais",
    colecao: "essenciais",
    promessa: "O Evangelho dos Dragões Caídos.",
    duracao: "Teaser",
    img: "assets/capas/diabo-justo.png",
    youtube: "#",
    spotify: "#"
  }
];

const ebooksLivres = [
  { titulo: "Dom Casmurro", autor: "Machado de Assis", categoria: "Literatura Brasileira", formato: "PDF / eBook", uso: "Domínio público", descricao: "Romance essencial para estudantes e leitores.", link: "#" },
  { titulo: "O Alienista", autor: "Machado de Assis", categoria: "Contos e Novelas", formato: "PDF / eBook", uso: "Domínio público", descricao: "Sátira brasileira sobre ciência, poder e loucura.", link: "#" },
  { titulo: "Noites Brancas", autor: "Fiódor Dostoiévski", categoria: "Literatura Russa", formato: "PDF / eBook", uso: "Domínio público", descricao: "Leitura curta e intensa para estudo e escuta comparada.", link: "#" },
  { titulo: "A Máquina do Tempo", autor: "H. G. Wells", categoria: "Ficção Científica", formato: "PDF / eBook", uso: "Domínio público", descricao: "Clássico fundador da ficção científica moderna.", link: "#" },
  { titulo: "Poemas Selecionados", autor: "Autores clássicos", categoria: "Poesia", formato: "PDF", uso: "Curadoria Livro Sonoro", descricao: "Coletânea futura para leitura, estudo e audição.", link: "#" }
];

const loja = [
  { titulo: "O Diabo Justo", autor: "E. S. Almeida", tipo: "eBook / Livro físico", descricao: "Fantasia sombria, mitologia, deuses em ruínas e dragões caídos.", preco: "Amazon / autoral", imagem: "assets/capas/diabo-justo.png", link: "#" },
  { titulo: "O Dragão que Riu da Tempestade", autor: "E. S. Almeida", tipo: "eBook / Impresso", descricao: "Romance poético afro-surrealista sobre dor, cidade e transformação.", preco: "Autor independente", imagem: "assets/capas/diabo-justo.png", link: "#" },
  { titulo: "Clássicos recomendados", autor: "Parceiros / afiliados", tipo: "Link afiliado", descricao: "Livros físicos, eBooks e edições comentadas de parceiros.", preco: "Comissão futura", imagem: "assets/capas/profeta.png", link: "#" },
  { titulo: "Coleção Livro Sonoro", autor: "Curadoria editorial", tipo: "Vitrine futura", descricao: "Pacotes, PDFs premium, edições comentadas e produtos digitais.", preco: "Em breve", imagem: "assets/banner.png", link: "#" }
];

const colecionaveis = [
  { titulo: "Miniaturas literárias", descricao: "Esculturas, bustos, criaturas e peças inspiradas em obras autorais.", status: "Galeria" },
  { titulo: "Caixas literárias", descricao: "Livro físico + marcador com QR Code + trilha sonora + item colecionável.", status: "Produto futuro" },
  { titulo: "Marcadores com QR Code", descricao: "Conexão entre livro físico, audiobook e página do projeto.", status: "Primeira produção" }
];

function bookCard(item) {
  return `
    <article class="book-card">
      <a class="book-cover" href="${item.youtube}" aria-label="Abrir ${item.titulo}">
        <img src="${item.img}" alt="Capa de ${item.titulo}" loading="lazy">
        <span class="play-badge">▶</span>
      </a>
      <h3>${item.titulo}</h3>
      <p>${item.autor}</p>
      <div class="book-meta"><span>★</span><span>${item.duracao}</span><span>🎧</span></div>
    </article>
  `;
}

function renderShelf(id, filterFn) {
  const el = document.querySelector(id);
  if (!el) return;
  el.innerHTML = catalogo.filter(filterFn).map(bookCard).join("");
}

function renderResources() {
  const ebooks = document.querySelector("#ebooks-grid");
  if (ebooks) {
    ebooks.innerHTML = ebooksLivres.map(item => `
      <article class="resource-card">
        <p class="resource-kicker">${item.categoria}</p>
        <h3>${item.titulo}</h3>
        <p>${item.autor}</p>
        <p>${item.descricao}</p>
        <div class="resource-meta"><span>${item.formato}</span><span>${item.uso}</span></div>
        <a href="${item.link}">Acessar</a>
      </article>
    `).join("");
  }

  const store = document.querySelector("#store-row");
  if (store) {
    store.innerHTML = loja.map(item => `
      <article class="product-card">
        <div class="product-cover"><img src="${item.imagem}" alt="Capa de ${item.titulo}" loading="lazy"></div>
        <div>
          <p class="resource-kicker">${item.tipo}</p>
          <h3>${item.titulo}</h3>
          <p>${item.autor}</p>
          <p>${item.descricao}</p>
          <div class="resource-meta"><span>${item.preco}</span></div>
          <a href="${item.link}">Ver produto</a>
        </div>
      </article>
    `).join("");
  }

  const mini = document.querySelector("#colecionaveis-grid");
  if (mini) {
    mini.innerHTML = colecionaveis.map(item => `
      <article class="resource-card">
        <p class="resource-kicker">${item.status}</p>
        <h3>${item.titulo}</h3>
        <p>${item.descricao}</p>
      </article>
    `).join("");
  }
}

const filtros = document.querySelector("#filtros");
const busca = document.querySelector("#busca");
const grid = document.querySelector("#catalogo-grid");
const total = document.querySelector("#total-obras");

const categorias = ["Todos", ...Array.from(new Set(catalogo.map(item => item.categoria)))];

function criarFiltros() {
  if (!filtros) return;
  filtros.innerHTML = categorias.map(cat => `<button class="${cat === "Todos" ? "active" : ""}" data-cat="${cat}">${cat}</button>`).join("");
  filtros.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      filtros.querySelectorAll("button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderCatalogo();
    });
  });
}

function renderCatalogo() {
  if (!grid) return;
  const cat = filtros?.querySelector(".active")?.dataset.cat || "Todos";
  const termo = busca?.value.toLowerCase().trim() || "";

  const filtrados = catalogo.filter(item => {
    const matchCat = cat === "Todos" || item.categoria === cat;
    const texto = `${item.titulo} ${item.autor} ${item.categoria} ${item.promessa}`.toLowerCase();
    return matchCat && (!termo || texto.includes(termo));
  });

  grid.innerHTML = filtrados.map(bookCard).join("");
  if (total) total.textContent = `${filtrados.length} obra${filtrados.length === 1 ? "" : "s"}`;
}

document.querySelectorAll("[data-copy]").forEach(btn => {
  btn.addEventListener("click", async () => {
    const texto = btn.dataset.copy;
    try {
      await navigator.clipboard.writeText(texto);
      const original = btn.textContent;
      btn.textContent = "Pix copiado!";
      setTimeout(() => btn.textContent = original, 1600);
    } catch (err) {
      alert("Pix: " + texto);
    }
  });
});

renderShelf("#shelf-russa", item => item.colecao === "russa");
renderShelf("#shelf-essenciais", item => item.colecao === "essenciais");
renderShelf("#shelf-brasileira", item => item.colecao === "brasileira");
renderResources();
criarFiltros();
renderCatalogo();
busca?.addEventListener("input", renderCatalogo);

```
