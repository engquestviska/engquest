// Apply light mode CSS variables via style injection
(function() {
  const style = document.createElement('style');
  style.textContent = `
    [data-theme="light"] {
      --bg:      #f5f5f8;
      --surface: #ffffff;
      --surface2:#f0f0f5;
      --border:  #e0e0e8;
      --text:    #1a1a2e;
      --muted:   #707088;
      --subtle:  #d0d0e0;
    }
  `;
  document.head.appendChild(style);
})();

// Load saved theme on every page
(function() {
  const saved = localStorage.getItem('eq_theme');
  if (saved === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next === 'dark' ? '' : 'light');
  localStorage.setItem('eq_theme', next);
  updateThemeIcon();
}

function updateThemeIcon() {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
    btn.textContent = isLight ? '☀️' : '🌙';
    btn.title = isLight ? 'Switch to dark mode' : 'Switch to light mode';
  });
}

document.addEventListener('DOMContentLoaded', updateThemeIcon);