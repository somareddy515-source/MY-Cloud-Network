document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.grid article, .checklist div, .timeline li');

  items.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;

    setTimeout(() => {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }, 100 + index * 120);
  });
});
