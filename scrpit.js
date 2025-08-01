// Scroll to Top Button
const scrollBtn = document.getElementById('scrollTopBtn');
scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

// Dark Mode Toggle
const toggleBtn = document.getElementById('modeToggle');
toggleBtn.onclick = () => {
  document.body.classList.toggle('dark');
  toggleBtn.textContent = document.body.classList.contains('dark') ? '☀️ Light Mode' : '🌙 Dark Mode';
};
