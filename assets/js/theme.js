(function () {
  const button = document.querySelector('[data-theme-toggle]');
  const saved = localStorage.getItem('theme');
  const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    button.textContent = theme === 'dark' ? '☀' : '◐';
    button.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  }
  setTheme(saved || preferred);
  button.addEventListener('click', function () {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    setTheme(next);
  });
})();
