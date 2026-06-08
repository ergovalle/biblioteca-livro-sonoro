# Código completo — Livro Sonoro Biblioteca Virtual 1.0 v2.1

## index.html

```html
<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Livro Sonoro — Biblioteca Virtual 1.0</title>
  <meta name="description" content="Livro Sonoro — Biblioteca Virtual 1.0. Audiobooks, e-books e podcasts literários em uma biblioteca escura, elegante e sonora." />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page-shell">
    <header class="topbar">
      <a href="#" class="brand" aria-label="Livro Sonoro — Biblioteca Virtual">
        <div class="brand-icon" aria-hidden="true">
          <svg viewBox="0 0 64 64" role="img">
            <path d="M10 15c9-4 16-2 22 4v35c-6-6-13-8-22-4V15Z"></path>
            <path d="M54 15c-9-4-16-2-22 4v35c6-6 13-8 22-4V15Z"></path>
            <path d="M6 20c-2 5-2 15 0 20"></path>
            <path d="M58 20c2 5 2 15 0 20"></path>
          </svg>
        </div>
        <div class="brand-text">
          <strong>Livro Sonoro</strong>
          <span>Biblioteca Virtual 1.0</span>
        </div>
      </a>

      <div class="top-actions">
        <button class="icon-button" type="button" aria-label="Buscar">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21 21-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"></path></svg>
        </button>
        <button class="icon-button notification" type="button" aria-label="Notificações">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9Z"></path><path d="M10 21h4"></path></svg>
        </button>
        <div class="avatar" aria-label="Perfil">LS</div>
      </div>
    </header>

    <section class="intro">
      <p>Da palavra escrita à palavra falada: clássicos, poemas e textos antigos para atravessar o tempo.</p>
    </section>

    <nav class="filters" aria-label="Filtros de conteúdo">
      <button class="filter-btn active" type="button" data-filter="Tudo">Tudo</button>
      <button class="filter-btn" type="button" data-filter="Audiobook">Audiobooks</button>
      <button class="filter-btn" type="button" data-filter="E-book">E-books</button>
      <button class="filter-btn" type="button" data-filter="Podcast">Podcasts</button>
    </nav>

    <main>
      <section class="content-section" data-section="Audiobook">
        <div class="section-heading">
          <h2>Audiobooks</h2>
          <button type="button" class="see-all" data-show="Audiobook">Ver tudo <span>›</span></button>
        </div>

        <div class="cards-grid">
          <article class="media-card" data-type="Audiobook">
            <div class="cover cover-enoque">
              <span class="cover-badge">🎧</span>
              <strong>O Livro<br>de Enoque</strong>
            </div>
            <p class="genre">Texto antigo • Apócrifo</p>
            <h3>O Livro de Enoque</h3>
            <p class="creator">Texto antigo</p>
            <p class="type"><span>🎧</span> Audiobook</p>
            <div class="links-row">
              <a href="https://www.youtube.com/watch?v=a7xAhsyQqIc&t=794s" target="_blank" rel="noopener">YouTube</a>
              <a href="https://open.spotify.com/episode/3S23cFooEUvs21IzjwuBON?si=ojvUb8WERoaMEXJE6SsYRw" target="_blank" rel="noopener">Spotify</a>
            </div>
          </article>

          <article class="media-card" data-type="Audiobook">
            <div class="cover cover-anna">
              <span class="cover-badge">🎧</span>
              <strong>Anna<br>Karenina</strong>
            </div>
            <p class="genre">Romance</p>
            <h3>Anna Karenina — Parte 1 Completa</h3>
            <p class="creator">Liev Tolstói</p>
            <p class="type"><span>🎧</span> Audiobook</p>
            <div class="links-row">
              <a href="https://youtu.be/4YFWaecEZVw?si=mz1c-4TZWRVboi2t" target="_blank" rel="noopener">YouTube</a>
              <a href="https://open.spotify.com/episode/1J68oRxixaSKLMb4g5c4TN?si=WQC6tYevTJOtwqUb5oc4mg" target="_blank" rel="noopener">Spotify</a>
            </div>
          </article>

          <article class="media-card" data-type="Audiobook">
            <div class="cover cover-profeta">
              <span class="cover-badge">🎧</span>
              <strong>O<br>Profeta</strong>
            </div>
            <p class="genre">Ficção Filosófica</p>
            <h3>O Profeta</h3>
            <p class="creator">Khalil Gibran</p>
            <p class="type"><span>🎧</span> Audiobook</p>
            <div class="links-row">
              <a href="https://youtu.be/zayaXdqe3YE?si=KO0g-kQdsd5k1oZ5" target="_blank" rel="noopener">YouTube</a>
              <a href="https://open.spotify.com/episode/3Dp1oMIC6wINY0CBAVbaTJ?si=kI3br5azSDCvYZWDeov1PA" target="_blank" rel="noopener">Spotify</a>
            </div>
          </article>

          <article class="media-card" data-type="Audiobook">
            <div class="cover cover-noites">
              <span class="cover-badge">🎧</span>
              <strong>Noites<br>Brancas</strong>
            </div>
            <p class="genre">Romance</p>
            <h3>Noites Brancas</h3>
            <p class="creator">Fiódor Dostoiévski</p>
            <p class="type"><span>🎧</span> Audiobook</p>
            <div class="links-row">
              <a href="https://youtu.be/01_zKAEoC-E?si=6G_iHB4b-955glSW" target="_blank" rel="noopener">YouTube</a>
              <a href="https://open.spotify.com/episode/5mL0sKfUqeSB7M8YOx9A1N?si=rEevtZ-XQJu9PCeAd0rtRw" target="_blank" rel="noopener">Spotify</a>
            </div>
          </article>

          <article class="media-card" data-type="Audiobook">
            <div class="cover cover-tome">
              <span class="cover-badge">🎧</span>
              <strong>Evangelho<br>de Tomé</strong>
            </div>
            <p class="genre">Texto apócrifo</p>
            <h3>O Evangelho de Tomé</h3>
            <p class="creator">Texto antigo</p>
            <p class="type"><span>🎧</span> Audiobook</p>
            <div class="links-row">
              <a href="https://youtu.be/pUImseQVqko" target="_blank" rel="noopener">YouTube</a>
              <a href="https://open.spotify.com/episode/06E2NyZJqEzrYK9Yw3H0pc?si=ff_jAbrUTauVEn5wWR8JQg" target="_blank" rel="noopener">Spotify</a>
            </div>
          </article>

          <article class="media-card" data-type="Audiobook">
            <div class="cover cover-crime">
              <span class="cover-badge">🎧</span>
              <strong>Crime e<br>Castigo I</strong>
            </div>
            <p class="genre">Romance • Série</p>
            <h3>Crime e Castigo — Capítulo 1</h3>
            <p class="creator">Fiódor Dostoiévski</p>
            <p class="type"><span>🎧</span> Audiobook</p>
            <div class="links-row">
              <a href="https://youtu.be/wXUqyLQv2JI" target="_blank" rel="noopener">YouTube</a>
              <a href="https://open.spotify.com/episode/3NIf9XGuAA1OZL4iP7xTI2?si=S0PSGKL5RsmaIXcbR2Xbsg" target="_blank" rel="noopener">Spotify</a>
            </div>
          </article>

          <article class="media-card" data-type="Audiobook">
            <div class="cover cover-crime2">
              <span class="cover-badge">🎧</span>
              <strong>Crime e<br>Castigo II</strong>
            </div>
            <p class="genre">Romance • Série</p>
            <h3>Crime e Castigo — Capítulo 2</h3>
            <p class="creator">Fiódor Dostoiévski</p>
            <p class="type"><span>🎧</span> Audiobook</p>
            <div class="links-row">
              <a href="https://youtu.be/Wc-zQqKbfLs" target="_blank" rel="noopener">YouTube</a>
              <a href="https://open.spotify.com/episode/3aF55QOJF0xf6gvvnuY9sS?si=u2P0-NneSJmSvaTDQhHk7Q" target="_blank" rel="noopener">Spotify</a>
            </div>
          </article>

          <article class="media-card" data-type="Audiobook">
            <div class="cover cover-dracula">
              <span class="cover-badge">🎧</span>
              <strong>Drácula<br>Capítulo 1</strong>
            </div>
            <p class="genre">Gótico • Terror</p>
            <h3>Drácula — Capítulo 1</h3>
            <p class="creator">Bram Stoker</p>
            <p class="type"><span>🎧</span> Audiobook</p>
            <div class="links-row">
              <a href="https://youtu.be/7gnzr8zebsM" target="_blank" rel="noopener">YouTube</a>
              <a href="https://open.spotify.com/episode/11UZGqgUdc2dNkcUw9PLxv?si=0Np0p9O5Trmr1ykwHt5sIg" target="_blank" rel="noopener">Spotify</a>
            </div>
          </article>

          <article class="media-card" data-type="Audiobook">
            <div class="cover cover-igreja">
              <span class="cover-badge">🎧</span>
              <strong>A Igreja<br>do Diabo</strong>
            </div>
            <p class="genre">Conto • Literatura Brasileira</p>
            <h3>A Igreja do Diabo</h3>
            <p class="creator">Machado de Assis</p>
            <p class="type"><span>🎧</span> Audiobook</p>
            <div class="links-row">
              <a href="https://youtu.be/-ipKk3njYEg" target="_blank" rel="noopener">YouTube</a>
              <a href="https://open.spotify.com/episode/7IrNcyDdijSqU8xa1kVk1X?si=-sk0pATTTpmtP6jEE9tvLA" target="_blank" rel="noopener">Spotify</a>
            </div>
          </article>

          <article class="media-card" data-type="Audiobook">
            <div class="cover cover-sertoes">
              <span class="cover-badge">🎧</span>
              <strong>Os<br>Sertões</strong>
            </div>
            <p class="genre">Literatura Brasileira</p>
            <h3>Os Sertões</h3>
            <p class="creator">Euclides da Cunha</p>
            <p class="type"><span>🎧</span> Audiobook</p>
            <div class="links-row">
              <a href="https://youtu.be/YF91k9Sg8nY" target="_blank" rel="noopener">YouTube</a>
              <a href="https://open.spotify.com/episode/6dl5ATIDVCzIDDxjcbSKJT?si=0NoxVQPOSSOx-egmMhsDsg" target="_blank" rel="noopener">Spotify</a>
            </div>
          </article>
        </div>
      </section>

      <section class="content-section" data-section="E-book">
        <div class="section-heading">
          <h2>E-books</h2>
          <button type="button" class="see-all" data-show="E-book">Ver tudo <span>›</span></button>
        </div>
        <div class="cards-grid">
          <article class="media-card" data-type="E-book">
            <div class="cover cover-diabo">
              <span class="cover-badge">📖</span>
              <strong>O Diabo<br>Justo</strong>
            </div>
            <p class="genre">Ficção</p>
            <h3>O Diabo Justo</h3>
            <p class="creator">E. S. Almeida</p>
            <p class="type"><span>📖</span> E-book</p>
            <div class="links-row">
              <a href="#" target="_blank" rel="noopener">Link em breve</a>
            </div>
          </article>

          <article class="media-card" data-type="E-book">
            <div class="cover cover-dragoes">
              <span class="cover-badge">📖</span>
              <strong>Evangelho dos<br>Dragões Caídos</strong>
            </div>
            <p class="genre">Fantasia</p>
            <h3>Evangelho dos Dragões Caídos</h3>
            <p class="creator">E. S. Almeida</p>
            <p class="type"><span>📖</span> E-book</p>
            <div class="links-row">
              <a href="#" target="_blank" rel="noopener">Link em breve</a>
            </div>
          </article>
        </div>
      </section>

      <section class="content-section" data-section="Podcast">
        <div class="section-heading">
          <h2>Podcasts</h2>
          <button type="button" class="see-all" data-show="Podcast">Ver tudo <span>›</span></button>
        </div>
        <div class="cards-grid">
          <article class="media-card" data-type="Podcast">
            <div class="cover cover-teorias">
              <span class="cover-badge">☊</span>
              <strong>Teorias<br>Sonoras</strong>
            </div>
            <p class="genre">Filosofia • Sociedade</p>
            <h3>Teorias Sonoras</h3>
            <p class="creator">Livro Sonoro</p>
            <p class="type"><span>☊</span> Podcast</p>
            <div class="links-row">
              <a href="#" target="_blank" rel="noopener">Em breve</a>
            </div>
          </article>

          <article class="media-card" data-type="Podcast">
            <div class="cover cover-sussurros">
              <span class="cover-badge">☊</span>
              <strong>Sussurros<br>Urbanos</strong>
            </div>
            <p class="genre">Histórias • Cultura</p>
            <h3>Sussurros Urbanos</h3>
            <p class="creator">Livro Sonoro</p>
            <p class="type"><span>☊</span> Podcast</p>
            <div class="links-row">
              <a href="#" target="_blank" rel="noopener">Em breve</a>
            </div>
          </article>

          <article class="media-card" data-type="Podcast">
            <div class="cover cover-clube">
              <span class="cover-badge">☊</span>
              <strong>Clube Leitura<br>de Ouvido</strong>
            </div>
            <p class="genre">Literatura • Leitura</p>
            <h3>Clube Leitura de Ouvido</h3>
            <p class="creator">Livro Sonoro</p>
            <p class="type"><span>☊</span> Podcast</p>
            <div class="links-row">
              <a href="#" target="_blank" rel="noopener">Em breve</a>
            </div>
          </article>

          <article class="media-card" data-type="Podcast">
            <div class="cover cover-arquivo">
              <span class="cover-badge">☊</span>
              <strong>Arquivo<br>Sonoro</strong>
            </div>
            <p class="genre">História • Memória</p>
            <h3>Arquivo Sonoro</h3>
            <p class="creator">Livro Sonoro</p>
            <p class="type"><span>☊</span> Podcast</p>
            <div class="links-row">
              <a href="#" target="_blank" rel="noopener">Em breve</a>
            </div>
          </article>
        </div>
      </section>

      <section class="support-box">
        <div class="support-title">
          <div class="support-icon">♡</div>
          <div>
            <h2>Apoie o Livro Sonoro</h2>
            <p>Seu apoio mantém histórias vivas.</p>
          </div>
        </div>

        <div class="support-grid">
          <button type="button" class="support-card" id="pixButton">
            <span>❖</span>
            <strong>Pix</strong>
            <small>Apoie via Pix</small>
          </button>

          <a href="#" class="support-card">
            <span>♡</span>
            <strong>Apoia.se</strong>
            <small>Seja um apoiador</small>
          </a>

          <a href="mailto:livrosonoropodcast@gmail.com" class="support-card">
            <span>✉</span>
            <strong>Contato</strong>
            <small>Fale conosco</small>
          </a>
        </div>

        <p class="copy-message" id="copyMessage" role="status" aria-live="polite"></p>
      </section>
    </main>
  </div>

  <script src="script.js"></script>
</body>
</html>

```

## style.css

```css
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Inter:wght@400;500;600;700;800&display=swap");

:root {
  --bg: #030504;
  --bg-soft: #080b08;
  --card: #0b0e0c;
  --text: #f4efe2;
  --muted: #9e9e96;
  --muted-2: #b9b09f;
  --line: rgba(204, 177, 116, 0.14);
  --gold: #d6b879;
  --green: #8daa3d;
  --shadow: 0 22px 70px rgba(0, 0, 0, 0.4);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  background:
    radial-gradient(circle at 20% 0%, rgba(63, 82, 34, 0.25), transparent 34rem),
    radial-gradient(circle at 90% 14%, rgba(117, 82, 39, 0.16), transparent 30rem),
    linear-gradient(180deg, #020302 0%, #050605 48%, #030403 100%);
  color: var(--text);
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  opacity: 0.045;
  background-image:
    linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px);
  background-size: 44px 44px;
  mask-image: linear-gradient(to bottom, #000, transparent 80%);
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font: inherit;
}

.page-shell {
  width: min(1180px, calc(100% - 42px));
  margin: 0 auto;
  padding: 34px 0 54px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 22px;
  margin-bottom: 24px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 0;
}

.brand-icon {
  width: 70px;
  height: 70px;
  color: var(--gold);
  flex: 0 0 auto;
  filter: drop-shadow(0 0 18px rgba(214, 184, 121, .15));
}

.brand-icon svg {
  width: 100%;
  height: 100%;
  fill: none;
  stroke: currentColor;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.brand-text strong {
  display: block;
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(2.15rem, 5vw, 3.3rem);
  line-height: .8;
  letter-spacing: .025em;
  color: var(--gold);
}

.brand-text span {
  display: block;
  margin-top: 10px;
  color: var(--green);
  font-size: clamp(.74rem, 1.8vw, .98rem);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: .32em;
}

.top-actions {
  display: flex;
  align-items: center;
  gap: 18px;
  flex: 0 0 auto;
}

.icon-button {
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border: 0;
  background: transparent;
  color: var(--text);
  cursor: pointer;
  position: relative;
  opacity: .94;
}

.icon-button svg {
  width: 31px;
  height: 31px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.notification::after {
  content: "";
  position: absolute;
  top: 9px;
  right: 10px;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--green);
}

.avatar {
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background:
    radial-gradient(circle at 50% 25%, #ead8c0, #a56f5f 55%, #3b201b 100%);
  border: 1px solid rgba(255,255,255,.16);
  color: #120d0b;
  font-weight: 900;
}

.intro {
  max-width: 760px;
  margin: -8px 0 24px;
}

.intro p {
  margin: 0;
  color: var(--muted-2);
  font-size: 1rem;
  line-height: 1.65;
}

.filters {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding: 4px 0 32px;
  scrollbar-width: none;
}

.filters::-webkit-scrollbar {
  display: none;
}

.filter-btn {
  min-width: 140px;
  padding: 18px 30px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,.08);
  background: linear-gradient(180deg, rgba(255,255,255,.075), rgba(255,255,255,.035));
  color: var(--text);
  font-size: 1.16rem;
  cursor: pointer;
  transition: transform .2s ease, border-color .2s ease, box-shadow .2s ease, background .2s ease;
  white-space: nowrap;
}

.filter-btn:hover {
  transform: translateY(-2px);
  border-color: rgba(141,170,61,.45);
}

.filter-btn.active {
  border-color: var(--green);
  background: linear-gradient(180deg, rgba(141,170,61,.16), rgba(141,170,61,.04));
  box-shadow: 0 0 0 1px rgba(141,170,61,.28), 0 0 22px rgba(141,170,61,.12);
}

.content-section {
  padding: 30px 0 36px;
  border-bottom: 1px solid var(--line);
}

.content-section.hidden {
  display: none;
}

.section-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 22px;
}

.section-heading h2 {
  margin: 0;
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(2.05rem, 4.2vw, 3rem);
  line-height: 1;
  color: #f2e8d5;
}

.see-all {
  border: 0;
  background: transparent;
  color: var(--green);
  font-size: 1.05rem;
  cursor: pointer;
  white-space: nowrap;
}

.see-all span {
  font-size: 1.55rem;
  vertical-align: -0.08em;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 26px 22px;
}

.media-card {
  min-width: 0;
  cursor: pointer;
  transition: transform .22s ease, filter .22s ease;
}

.media-card:hover {
  transform: translateY(-5px);
  filter: brightness(1.08);
}

.cover {
  position: relative;
  aspect-ratio: 1 / 1;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(214, 184, 121, .22);
  box-shadow: 0 18px 44px rgba(0,0,0,.34);
  background:
    linear-gradient(135deg, rgba(255,255,255,.10), transparent 45%),
    radial-gradient(circle at 50% 26%, rgba(214,184,121,.24), transparent 38%),
    linear-gradient(145deg, #1a2119, #050606);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px;
  isolation: isolate;
}

.cover::before {
  content: "";
  position: absolute;
  inset: 0;
  opacity: .37;
  background:
    radial-gradient(circle at 30% 20%, rgba(255,255,255,.18), transparent 14rem),
    linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px),
    linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px);
  background-size: auto, 34px 34px, 34px 34px;
  z-index: -1;
}

.cover::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 45%, rgba(0,0,0,.48) 100%);
  z-index: -1;
}

.cover strong {
  font-family: "Cormorant Garamond", Georgia, serif;
  color: #f1d89d;
  font-size: clamp(1.4rem, 3vw, 2.35rem);
  line-height: .92;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: .035em;
  text-shadow: 0 4px 18px rgba(0,0,0,.75);
}

.cover-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: rgba(0,0,0,.58);
  color: var(--gold);
  border: 1px solid rgba(214,184,121,.35);
  font-size: .9rem;
}

.genre {
  margin: 12px 0 5px;
  color: var(--muted);
  font-size: .96rem;
  line-height: 1.25;
}

.media-card h3 {
  margin: 0 0 4px;
  color: #fff;
  font-size: clamp(1.02rem, 2vw, 1.22rem);
  line-height: 1.16;
  font-weight: 800;
}

.creator {
  margin: 0;
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.35;
}

.type {
  margin: 10px 0 0;
  display: flex;
  align-items: center;
  gap: 7px;
  color: var(--green);
  font-size: .98rem;
  font-weight: 600;
}

.cover-anna { background: radial-gradient(circle at 70% 25%, rgba(169,125,86,.42), transparent 30%), linear-gradient(135deg, #3a1d15, #060605 72%); }
.cover-crime { background: radial-gradient(circle at 60% 28%, rgba(87,115,126,.40), transparent 34%), linear-gradient(135deg, #101d21, #050605 76%); }
.cover-profeta { background: radial-gradient(circle at 50% 30%, rgba(173,112,61,.42), transparent 32%), linear-gradient(135deg, #332014, #070606 78%); }
.cover-ivan { background: radial-gradient(circle at 60% 22%, rgba(107,136,162,.35), transparent 30%), linear-gradient(135deg, #13202a, #050606 78%); }
.cover-diabo { background: radial-gradient(circle at 40% 24%, rgba(89,119,52,.42), transparent 30%), linear-gradient(135deg, #101e13, #070606 78%); }
.cover-dragoes { background: radial-gradient(circle at 55% 25%, rgba(107,39,30,.42), transparent 34%), linear-gradient(135deg, #23110e, #050605 78%); }
.cover-noites { background: radial-gradient(circle at 50% 23%, rgba(48,96,122,.42), transparent 34%), linear-gradient(135deg, #0b2130, #050605 78%); }
.cover-principe { background: radial-gradient(circle at 54% 27%, rgba(194,154,64,.42), transparent 32%), linear-gradient(135deg, #0c172b, #050605 78%); }
.cover-teorias { background: radial-gradient(circle at 48% 25%, rgba(36,130,112,.44), transparent 34%), linear-gradient(135deg, #072220, #050605 78%); }
.cover-sussurros { background: radial-gradient(circle at 60% 30%, rgba(136,44,32,.42), transparent 34%), linear-gradient(135deg, #25100d, #050605 78%); }
.cover-clube { background: radial-gradient(circle at 50% 25%, rgba(130,93,51,.42), transparent 34%), linear-gradient(135deg, #22170d, #050605 78%); }
.cover-arquivo { background: radial-gradient(circle at 50% 25%, rgba(92,74,50,.42), transparent 34%), linear-gradient(135deg, #191512, #050605 78%); }

.support-box {
  margin-top: 42px;
  padding: 34px;
  border-radius: 34px;
  background:
    radial-gradient(circle at 50% 0%, rgba(141,170,61,.18), transparent 26rem),
    linear-gradient(180deg, rgba(255,255,255,.055), rgba(255,255,255,.025));
  border: 1px solid rgba(214,184,121,.12);
  box-shadow: var(--shadow);
}

.support-title {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  margin-bottom: 28px;
  text-align: left;
}

.support-icon {
  width: 58px;
  height: 58px;
  display: grid;
  place-items: center;
  color: var(--green);
  font-size: 2.4rem;
}

.support-title h2 {
  margin: 0;
  font-family: "Cormorant Garamond", Georgia, serif;
  color: #efe4cf;
  font-size: clamp(2rem, 4vw, 2.8rem);
  line-height: 1;
}

.support-title p {
  margin: 8px 0 0;
  color: var(--muted);
  font-size: 1.05rem;
}

.support-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.support-card {
  min-height: 96px;
  padding: 20px 22px;
  border-radius: 22px;
  border: 1px solid rgba(214,184,121,.13);
  background: rgba(0,0,0,.18);
  color: var(--text);
  display: grid;
  grid-template-columns: 48px 1fr;
  grid-template-areas:
    "icon title"
    "icon text";
  align-items: center;
  gap: 0 16px;
  cursor: pointer;
  transition: transform .22s ease, border-color .22s ease, background .22s ease;
  text-align: left;
}

.support-card:hover {
  transform: translateY(-3px);
  border-color: rgba(141,170,61,.42);
  background: rgba(141,170,61,.055);
}

.support-card span {
  grid-area: icon;
  color: var(--green);
  font-size: 2.1rem;
}

.support-card strong {
  grid-area: title;
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: 1.8rem;
  line-height: 1;
  color: #efe4cf;
}

.support-card small {
  grid-area: text;
  color: var(--muted);
  font-size: .98rem;
}

.copy-message {
  min-height: 22px;
  margin: 18px 0 0;
  text-align: center;
  color: var(--green);
  font-weight: 600;
}

@media (max-width: 900px) {
  .page-shell {
    width: min(100% - 30px, 1180px);
  }

  .cards-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .support-grid {
    grid-template-columns: 1fr;
  }

  .support-title {
    justify-content: flex-start;
  }
}

@media (max-width: 640px) {
  .page-shell {
    width: min(100% - 26px, 1180px);
    padding-top: 26px;
  }

  .topbar {
    gap: 12px;
    align-items: flex-start;
  }

  .brand-icon {
    width: 52px;
    height: 52px;
  }

  .top-actions {
    gap: 8px;
  }

  .icon-button {
    width: 36px;
    height: 36px;
  }

  .icon-button svg {
    width: 25px;
    height: 25px;
  }

  .avatar {
    width: 38px;
    height: 38px;
    font-size: .78rem;
  }

  .filters {
    gap: 10px;
    padding-bottom: 26px;
  }

  .filter-btn {
    min-width: auto;
    padding: 14px 22px;
    font-size: 1rem;
  }

  .content-section {
    padding: 26px 0 30px;
  }

  .section-heading {
    margin-bottom: 18px;
  }

  .cards-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 26px 16px;
  }

  .cover {
    border-radius: 12px;
    padding: 14px;
  }

  .cover strong {
    font-size: clamp(1.05rem, 6vw, 1.55rem);
  }

  .cover-badge {
    width: 28px;
    height: 28px;
    top: 9px;
    left: 9px;
    font-size: .78rem;
  }

  .genre {
    margin-top: 9px;
    font-size: .83rem;
  }

  .media-card h3 {
    font-size: .98rem;
  }

  .creator,
  .type {
    font-size: .88rem;
  }

  .support-box {
    padding: 24px 16px;
    border-radius: 26px;
  }

  .support-card {
    padding: 18px;
  }
}


/* Links reais YouTube / Spotify — v2.1 */
.links-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
}

.links-row a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 32px;
  padding: 7px 11px;
  border: 1px solid rgba(141,170,61,.28);
  border-radius: 999px;
  color: #dbe8ad;
  background: rgba(141,170,61,.07);
  font-size: .78rem;
  font-weight: 800;
  transition: transform .18s ease, border-color .18s ease, background .18s ease;
}

.links-row a:hover {
  transform: translateY(-2px);
  border-color: rgba(141,170,61,.65);
  background: rgba(141,170,61,.14);
}

.cover-enoque { background: radial-gradient(circle at 50% 22%, rgba(190,137,54,.44), transparent 34%), linear-gradient(135deg, #2b1b0e, #050605 78%); }
.cover-tome { background: radial-gradient(circle at 45% 26%, rgba(160,116,48,.42), transparent 32%), linear-gradient(135deg, #23170d, #050605 78%); }
.cover-crime2 { background: radial-gradient(circle at 62% 28%, rgba(91,91,82,.36), transparent 34%), linear-gradient(135deg, #191814, #050605 76%); }
.cover-dracula { background: radial-gradient(circle at 55% 24%, rgba(136,22,22,.46), transparent 34%), linear-gradient(135deg, #210909, #050605 78%); }
.cover-igreja { background: radial-gradient(circle at 50% 28%, rgba(140,42,24,.42), transparent 34%), linear-gradient(135deg, #260f09, #050605 78%); }
.cover-sertoes { background: radial-gradient(circle at 52% 26%, rgba(160,100,38,.42), transparent 34%), linear-gradient(135deg, #27180d, #050605 78%); }

```

## script.js

```javascript
const filterButtons = document.querySelectorAll(".filter-btn");
const sections = document.querySelectorAll(".content-section");
const seeAllButtons = document.querySelectorAll(".see-all");
const pixButton = document.querySelector("#pixButton");
const copyMessage = document.querySelector("#copyMessage");

const pixKey = "canallivrosonoro@gmail.com";

function setActiveButton(filter) {
  filterButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === filter);
  });
}

function applyFilter(filter) {
  setActiveButton(filter);

  sections.forEach((section) => {
    const sectionType = section.dataset.section;
    const shouldShow = filter === "Tudo" || sectionType === filter;
    section.classList.toggle("hidden", !shouldShow);
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyFilter(button.dataset.filter);
  });
});

seeAllButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyFilter(button.dataset.show);
  });
});

if (pixButton) {
  pixButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(pixKey);
      copyMessage.textContent = "Chave Pix copiada. Obrigado por apoiar o Livro Sonoro.";
    } catch (error) {
      copyMessage.textContent = `Chave Pix: ${pixKey}`;
    }

    setTimeout(() => {
      copyMessage.textContent = "";
    }, 3600);
  });
}

```
