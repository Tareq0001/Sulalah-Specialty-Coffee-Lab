import './style.css';
import { getLanguage, setLanguage, toggleLanguage, onLanguageChange, t } from './ui/i18n';
import { renderHero } from './ui/hero-view';
import { brewingLab } from './ui/brewing-lab-view';
import { flavorRadar } from './ui/flavor-radar-view';
import { originsAtlas } from './ui/origins-atlas-view';
import { waterView } from './ui/water-view';
import { boutiqueView } from './ui/boutique-view';
import { cartDrawer } from './ui/cart-drawer';
import { BeanCrop } from './data/beans';

function initApp(): void {
  // Theme state
  const savedTheme = localStorage.getItem('sulalah_theme') || 'light';
  if (savedTheme === 'dark') {
    document.body.classList.add('theme-dark');
  } else {
    document.body.classList.remove('theme-dark');
  }

  // Language state
  const savedLang = (localStorage.getItem('sulalah_lang') || 'ar') as 'ar' | 'en';
  setLanguage(savedLang);

  // Initial renders
  renderAllSections();

  // Bind Navbar Controls
  bindNavbarEvents();

  // Listen to language changes
  onLanguageChange((lang) => {
    localStorage.setItem('sulalah_lang', lang);
    updateNavbarTranslations();
    renderAllSections();
  });

  // Listen to keyboard escape for closing drawers/modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      cartDrawer.close();
      const prodModal = document.querySelector('#product-modal-container');
      if (prodModal) prodModal.innerHTML = '';
      const receiptModal = document.querySelector('#receipt-modal-container');
      if (receiptModal) receiptModal.innerHTML = '';
    }
  });
}

function renderAllSections(): void {
  // 1. Hero
  const heroContainer = document.querySelector('#hero-container');
  if (heroContainer) {
    heroContainer.innerHTML = renderHero();
  }

  // 2. Brewing Lab
  const labContainer = document.querySelector('#brewing-lab-container');
  if (labContainer) {
    labContainer.innerHTML = brewingLab.render();
    brewingLab.bindEvents(labContainer as HTMLElement);
  }

  // 3. Flavor Radar
  const radarContainer = document.querySelector('#flavor-radar-container');
  if (radarContainer) {
    radarContainer.innerHTML = flavorRadar.render();
    flavorRadar.bindEvents(radarContainer as HTMLElement, (bean: BeanCrop) => {
      // User clicked "Calibrate in Lab" inside radar
      brewingLab.setBeanQuickBrew(bean.recommendedMethods[0] || 'v60', 18, bean.roastLevel === 'omni' ? 'light' : bean.roastLevel);
    });
  }

  // 4. Origins Atlas
  const atlasContainer = document.querySelector('#origins-atlas-container');
  if (atlasContainer) {
    atlasContainer.innerHTML = originsAtlas.render();
    originsAtlas.bindEvents(
      atlasContainer as HTMLElement,
      (bean: BeanCrop) => {
        // Calibrate in Lab
        brewingLab.setBeanQuickBrew(bean.recommendedMethods[0] || 'v60', 18, bean.roastLevel === 'omni' ? 'light' : bean.roastLevel);
      },
      (beanId: string) => {
        // Explore in Radar
        flavorRadar.setBean(beanId);
      },
      (productId: string) => {
        // Open Product Modal
        boutiqueView.openProductModal(productId);
      }
    );
  }

  // 5. Water Chemistry
  const waterContainer = document.querySelector('#water-chem-container');
  if (waterContainer) {
    waterContainer.innerHTML = waterView.render();
    waterView.bindEvents(waterContainer as HTMLElement);
  }

  // 6. Boutique Store
  const boutiqueContainer = document.querySelector('#boutique-container');
  if (boutiqueContainer) {
    boutiqueContainer.innerHTML = boutiqueView.render();
    boutiqueView.bindEvents(boutiqueContainer as HTMLElement);
  }

  // 7. Update Cart Badge
  cartDrawer.updateBadge();
}

function bindNavbarEvents(): void {
  // Theme Toggle
  const themeBtn = document.querySelector('#theme-toggle-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const isDark = document.body.classList.toggle('theme-dark');
      localStorage.setItem('sulalah_theme', isDark ? 'dark' : 'light');
      updateThemeIcon(isDark);
      // Re-render radar to adapt canvas contrast
      const radarContainer = document.querySelector('#flavor-radar-container');
      if (radarContainer) {
        flavorRadar.bindEvents(radarContainer as HTMLElement);
      }
    });
  }

  // Language Toggle
  const langBtn = document.querySelector('#lang-toggle-btn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      toggleLanguage();
    });
  }

  // Cart Button
  const cartBtn = document.querySelector('#nav-cart-btn');
  if (cartBtn) {
    cartBtn.addEventListener('click', () => {
      cartDrawer.toggle();
    });
  }

  updateNavbarTranslations();
  updateThemeIcon(document.body.classList.contains('theme-dark'));
}

function updateThemeIcon(isDark: boolean): void {
  const svg = document.querySelector('#theme-icon-svg');
  if (svg) {
    if (isDark) {
      // Moon icon
      svg.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
    } else {
      // Sun icon
      svg.innerHTML = '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
    }
  }
}

function updateNavbarTranslations(): void {
  const lang = getLanguage();
  const langLabel = document.querySelector('#lang-label');
  if (langLabel) {
    langLabel.textContent = lang === 'ar' ? 'English' : 'العربية';
  }

  // Update nav links with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      el.textContent = t(key as any);
    }
  });
}

// Kick off when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
