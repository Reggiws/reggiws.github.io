(function () {
  const button = document.querySelector('[data-theme-toggle]');
  const saved = localStorage.getItem('theme');
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    button.textContent = theme === 'dark' ? '☀' : '◐';
    button.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  }
  setTheme(saved === 'light' ? 'light' : 'dark');
  button.addEventListener('click', function () {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    setTheme(next);
  });
})();
