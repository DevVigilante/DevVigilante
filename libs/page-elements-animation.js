export default function animator(elements, visible) {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const onEntry = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(visible);
        observer.unobserve(entry.target);
      }
    });
  }
  
  function startElementsAnimation() {
    const observer = new IntersectionObserver(onEntry, observerOptions);
    [...elements].forEach(el => {
      observer.observe(el);
    });
  }
  startElementsAnimation();
}