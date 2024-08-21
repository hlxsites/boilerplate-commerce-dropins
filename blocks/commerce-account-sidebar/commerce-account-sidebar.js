import { loadFragment } from '../fragment/fragment.js';

export default async function decorate(block) {
  const fragment = await loadFragment('/drafts/atw86530/test');
  const x = fragment.querySelectorAll('.default-content-wrapper > ol > li');

  const y = Array.from(x).map((sidebarLinkConfig) => {
    const linkEl = document.createElement('a');
    const linkParams = sidebarLinkConfig.querySelectorAll('ol > li');

    linkEl.innerText = sidebarLinkConfig.childNodes[0].textContent.trim();
    linkEl.href = linkParams[0].innerText;

    return linkEl;
  });

  block.innerHTML = '';

  y.forEach((el) => {
    block.appendChild(el);
  });
}
