import { loadFragment } from '../fragment/fragment.js';

export default async function decorate(block) {
  const fragment = await loadFragment('/customer/sidebar-fragment');
  const sidebarItemsConfig = fragment.querySelectorAll('.default-content-wrapper > ol > li');

  const sidebarItems = Array.from(sidebarItemsConfig).map((item) => {
    const itemParams = item.querySelectorAll('ol > li');
    const itemConfig = {
      itemTitle: item.childNodes[0].textContent.trim(),
      itemSubtitle: itemParams[0].innerText,
      itemLink: itemParams[1].innerText,
      itemIcon: itemParams[2].innerText,
    };
    itemConfig.isItemActive = window.location.href.includes(itemConfig.itemLink);

    const wrapperEl = document.createElement('a');
    wrapperEl.classList.add('commerce-account-sidebar-container__wrapper');
    wrapperEl.href = itemConfig.itemLink;

    if (window.location.href.includes(itemConfig.itemLink)) {
      wrapperEl.classList.add('commerce-account-sidebar-container__wrapper--selected')
    }

    const titleEl = document.createElement('p');
    titleEl.classList.add('commerce-account-sidebar-container__title');
    titleEl.innerText = itemConfig.itemTitle;

    const subtitleEl = document.createElement('p');
    subtitleEl.classList.add('commerce-account-sidebar-container__subtitle');
    subtitleEl.innerText = itemConfig.itemSubtitle;

    wrapperEl.appendChild(titleEl);
    wrapperEl.appendChild(subtitleEl);

    return wrapperEl;
  });

  block.innerHTML = '';

  sidebarItems.forEach((el) => {
    block.appendChild(el);
  });
}
