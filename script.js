const root = document.documentElement;
const themeBtn = document.getElementById('themeBtn');
const themeText = document.getElementById('themeText');
const searchBtn = document.getElementById('searchBtn');
const searchDialog = document.getElementById('searchDialog');
const searchInput = document.getElementById('searchInput');

autoTheme();

themeBtn?.addEventListener('click', () => {
  const next = root.classList.toggle('dark');
  localStorage.setItem('theme', next ? 'dark' : 'light');
  updateThemeLabel();
});

searchBtn?.addEventListener('click', () => {
  if (typeof searchDialog?.showModal === 'function') {
    searchDialog.showModal();
    setTimeout(() => searchInput?.focus(), 60);
  }
});

searchDialog?.addEventListener('click', (event) => {
  if (event.target === searchDialog) searchDialog.close();
});

document.getElementById('year').textContent = new Date().getFullYear();

function autoTheme() {
  const saved = localStorage.getItem('theme');
  const shouldDark = saved === 'dark' || (!saved && window.matchMedia?.('(prefers-color-scheme: dark)').matches);
  root.classList.toggle('dark', shouldDark);
  updateThemeLabel();
}

function updateThemeLabel() {
  if (!themeText) return;
  themeText.textContent = root.classList.contains('dark') ? 'Light Theme' : 'Dark Theme';
}
