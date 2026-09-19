const topbar = document.querySelector('#topbar');
const sections = [...document.querySelectorAll('main section[id]')];
const links = [...document.querySelectorAll('nav a')];

window.addEventListener('scroll', () => {
  topbar.classList.toggle('scrolled', window.scrollY > 32);
  const y = window.scrollY + 130;
  let current = sections.findLast(section => section.offsetTop <= y)?.id;
  links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
});

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) entry.target.classList.add('visible');
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

