(() => {
  const root = document.documentElement;
  const choose = (value) => {
    const lang = value === 'zh' ? 'zh' : 'en';
    root.dataset.lang = lang;
    root.lang = lang === 'zh' ? 'zh-CN' : 'en';
    const button = document.getElementById('language-toggle');
    if (button) button.setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : '切换为中文');
    try { localStorage.setItem('academic-homepage-language', lang); } catch (e) {}
  };
  try { choose(localStorage.getItem('academic-homepage-language') || 'en'); }
  catch (e) { choose('en'); }
  document.getElementById('language-toggle')?.addEventListener('click', () => choose(root.dataset.lang === 'en' ? 'zh' : 'en'));
})();
