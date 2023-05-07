function scrollAnchors(e: any) {
  const distanceToTop = (el: any) => Math.floor(el.getBoundingClientRect().top);
  e.preventDefault();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const [, id] = this.getAttribute('href').split('#');
  const targetID = `#${id}`;
  const targetAnchor = document.querySelector(targetID);
  if (!targetAnchor) return;
  const originalTop = distanceToTop(targetAnchor);
  const offsetTop = 80;
  window.scrollBy({ top: originalTop - offsetTop, left: 0, behavior: 'smooth' });
  const checkIfDone = setInterval(() => {
    const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
    if (distanceToTop(targetAnchor) === offsetTop || atBottom) {
      window.history.pushState('', '', targetID);
      clearInterval(checkIfDone);
    }
  }, 100);
}

export const initialize = () => {
  if (typeof document !== 'undefined') {
    const navLinks = document.querySelectorAll('.nl');
    navLinks.forEach(link => {
      link.addEventListener('click', scrollAnchors);
    });
  }
};
