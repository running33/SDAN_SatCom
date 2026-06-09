const revealTargets = document.querySelectorAll(
  ".section-heading, .challenge-grid article, .flow-panel div, .pipeline article, .feature-card, .result-summary article, .result-section, .result-figures figure, .mini-table div, .contribution-list li, .complexity-note, .paper-panel"
);

revealTargets.forEach((node) => node.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealTargets.forEach((node) => observer.observe(node));
