(function () {
  const C = SITE;
  const page = document.body.dataset.page || 'home';
  const $ = (s, root=document) => root.querySelector(s);

  const navItems = [
    ['Publications', 'publications.html'],
    ['Projects', 'projects.html'],
    ['Blog', 'blog.html'],
    ['Life', 'life.html'],
    ['About', 'about.html']
  ];

  function esc(s) {
    return String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  }

  function header() {
    return `
      <header class="topbar">
        <div class="nav-wrap">
          <a class="site-title" href="index.html">${esc(C.person.name)}${C.person.chineseName ? ` <span>| ${esc(C.person.chineseName)}</span>` : ''}</a>
          <nav class="desktop-nav" aria-label="Primary">
            ${navItems.map(([label, href]) => `<a class="${page === label.toLowerCase() ? 'active' : ''}" href="${href}">${label}</a>`).join('')}
          </nav>
          <div class="nav-actions">
            <button id="searchBtn" class="nav-btn" aria-label="Search">⌕</button>
            <button id="themeBtn" class="nav-btn" aria-label="Toggle dark theme">◐</button>
            <button id="menuBtn" class="nav-btn mobile-only" aria-label="Menu">☰</button>
          </div>
        </div>
        <div id="mobileNav" class="mobile-nav">
          ${navItems.map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}
        </div>
      </header>`;
  }

  function footer() {
    return `<footer class="footer"><div>${esc(C.footer.license)}</div><div class="footer-dot">•</div><a href="${C.person.github}" target="_blank" rel="noreferrer">${esc(C.person.githubText)}</a></footer>`;
  }

  function searchPanel() {
    return `<div id="searchPanel" class="search-panel" aria-hidden="true"><div class="search-box"><div class="search-top"><input id="searchInput" placeholder="Search this site…" autocomplete="off"><button id="closeSearch" aria-label="Close">×</button></div><div id="searchResults" class="search-results"></div></div></div>`;
  }

  function pubCard(p) {
    return `<article class="publication"><a class="pub-thumb" href="${p.project || p.paper || '#'}"><img src="${p.image}" alt="${esc(p.title)}"></a><div class="pub-main"><h3><a href="${p.project || p.paper || '#'}">${esc(p.title)}</a></h3><p class="authors">${p.authors}</p><p class="venue">${esc(p.venue)}</p><div class="pub-links">${p.paper ? `<a href="${p.paper}" target="_blank" rel="noreferrer">Paper</a>` : ''}${p.project ? `<a href="${p.project}" target="_blank" rel="noreferrer">Project</a>` : ''}${p.code ? `<a href="${p.code}" target="_blank" rel="noreferrer">Code</a>` : ''}</div></div></article>`;
  }

  function home() {
    return `<main class="page">
      <section class="intro">
        <div class="portrait-col"><img src="${C.person.avatar}" class="portrait" alt="Profile photo"></div>
        <div class="intro-col">
          <h1>${esc(C.person.name)}${C.person.chineseName ? ` <span class="soft">| ${esc(C.person.chineseName)}</span>` : ''}</h1>
          <div class="contact-line"><a href="mailto:${esc(C.person.email)}">Mail</a><span>·</span><a href="${C.person.github}" target="_blank" rel="noreferrer">GitHub</a><span>·</span><span>WeChat: ${esc(C.person.wechat)}</span></div>
          <div class="about-text"><p class="role">${esc(C.person.role)}</p>${C.person.bio.map(x => `<p>${x}</p>`).join('')}<p>${esc(C.person.goal)}</p></div>
          <a class="more-link" href="about.html">More about me <span>↗</span></a>
        </div>
      </section>
      <section class="section" id="news"><div class="section-head"><h2>News</h2><a href="#" onclick="return false">More news <span>↗</span></a></div><div class="news-table">${C.news.slice(0,3).map(n => `<div class="news-row"><time>${esc(n.date)}</time><span class="badge">${esc(n.tag)}</span><a href="${n.href}">${esc(n.title)}</a></div>`).join('')}</div></section>
      <section class="section" id="publications"><div class="section-head"><h2>Publications</h2><a href="publications.html">More publications <span>↗</span></a></div>${C.publications.map(pubCard).join('')}</section>
    </main>`;
  }

  function publicationsPage() {
    return `<main class="page inner-page"><div class="page-head"><a href="index.html">← Back</a><h1>Publications</h1></div><p class="page-lead">Selected research papers and projects. Edit all entries from <code>assets/content.js</code>.</p><section class="section no-top">${C.publications.map(pubCard).join('')}</section></main>`;
  }

  function projectsPage() {
    return `<main class="page inner-page"><div class="page-head"><a href="index.html">← Back</a><h1>Projects</h1></div><section class="section no-top"><div class="project-list">${C.projects.map(p => `<a class="project-row" href="${p.href}"><div><strong>${esc(p.title)}</strong><p>${esc(p.text)}</p></div><span>↗</span></a>`).join('')}</div></section></main>`;
  }

  function blogPage() {
    return `<main class="page inner-page"><div class="page-head"><a href="index.html">← Back</a><h1>Blog</h1></div><section class="section no-top"><div class="blog-list">${C.blog.map(p => `<a class="blog-row" href="${p.href}"><time>${esc(p.date)}</time><div><strong>${esc(p.title)}</strong><b>${esc(p.tag)}</b></div></a>`).join('')}</div></section></main>`;
  }

  function lifePage() {
    return `<main class="page inner-page"><div class="page-head"><a href="index.html">← Back</a><h1>Life</h1></div><section class="section no-top"><p class="life-copy">${esc(C.life.intro)}</p><div class="life-strip large">${C.life.albums.map(a => `<div class="life-card"><span>${esc(a)}</span></div>`).join('')}</div></section></main>`;
  }

  function aboutPage() {
    return `<main class="page inner-page"><div class="page-head"><a href="index.html">← Back</a><h1>About</h1></div>
      <section class="section no-top"><div class="about-prose"><p>${C.person.bio.join('</p><p>')}</p><p>${esc(C.person.goal)}</p></div></section>
      <section class="section"><div class="section-title">Research Interests</div><div class="pill-list">${C.about.interests.map(x=>`<span>${esc(x)}</span>`).join('')}</div></section>
      <section class="section"><div class="section-title">Education</div>${C.about.education.map(x=>`<div class="timeline-row"><div><strong>${esc(x.school)}</strong><p>${esc(x.degree)}</p></div><time>${esc(x.time)}</time></div>`).join('')}</section>
      <section class="section"><div class="section-title">Research Experience</div>${C.about.experience.map(x=>`<div class="timeline-row"><div><strong>${esc(x.title)}</strong><p>${esc(x.org)}<br>${esc(x.note)}</p></div><time>${esc(x.time)}</time></div>`).join('')}</section>
      <section class="section"><div class="section-title">Tools</div><div class="pill-list">${C.about.tools.map(x=>`<span>${esc(x)}</span>`).join('')}</div></section>
    </main>`;
  }

  const content = { home, publications: publicationsPage, projects: projectsPage, blog: blogPage, life: lifePage, about: aboutPage }[page]();
  $('#site').innerHTML = header() + content + footer() + searchPanel();

  const root = document.documentElement;
  const savedTheme = localStorage.getItem('homepage-theme');
  if (savedTheme === 'dark') root.classList.add('dark');
  const themeBtn = $('#themeBtn');
  themeBtn.textContent = root.classList.contains('dark') ? '☀' : '◐';
  themeBtn.addEventListener('click', () => {
    root.classList.toggle('dark');
    localStorage.setItem('homepage-theme', root.classList.contains('dark') ? 'dark' : 'light');
    themeBtn.textContent = root.classList.contains('dark') ? '☀' : '◐';
  });

  const menuBtn = $('#menuBtn'), mobileNav = $('#mobileNav');
  menuBtn?.addEventListener('click', () => mobileNav.classList.toggle('open'));
  mobileNav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileNav.classList.remove('open')));

  const searchPanelEl = $('#searchPanel'), searchInput = $('#searchInput'), searchResults = $('#searchResults');
  const searchBtn = $('#searchBtn'), closeSearch = $('#closeSearch');
  const indexed = [
    ...C.news.map(x => ({title:x.title, text:`${x.date} ${x.tag} ${x.title}`, href:x.href, kind:'News'})),
    ...C.publications.map(x => ({title:x.title, text:`${x.title} ${x.authors} ${x.venue}`, href:'publications.html', kind:'Publication'})),
    ...C.projects.map(x => ({title:x.title, text:x.text, href:'projects.html', kind:'Project'})),
    ...C.blog.map(x => ({title:x.title, text:`${x.title} ${x.tag}`, href:x.href, kind:'Blog'})),
  ];
  function renderSearch(q='') {
    const needle = q.trim().toLowerCase();
    const hits = indexed.filter(x => !needle || `${x.title} ${x.text}`.toLowerCase().includes(needle)).slice(0,10);
    searchResults.innerHTML = hits.length ? hits.map(x=>`<a class="search-result" href="${x.href}"><span>${esc(x.kind)}</span><strong>${esc(x.title)}</strong></a>`).join('') : '<div class="search-empty">No matches.</div>';
  }
  function openSearch(){ searchPanelEl.classList.add('open'); searchPanelEl.setAttribute('aria-hidden','false'); renderSearch(); setTimeout(()=>searchInput.focus(),25); }
  function close(){ searchPanelEl.classList.remove('open'); searchPanelEl.setAttribute('aria-hidden','true'); }
  searchBtn.addEventListener('click', openSearch); closeSearch.addEventListener('click', close); searchInput.addEventListener('input',e=>renderSearch(e.target.value));
  searchPanelEl.addEventListener('click',e=>{if(e.target===searchPanelEl)close()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close(); if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openSearch();}});
})();
