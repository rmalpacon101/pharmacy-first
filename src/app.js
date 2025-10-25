import { LitElement, html, css } from 'lit';

// Import all components
import './components/pharmacy-header.js';
import './components/pharmacy-hero.js';
import './components/pharmacy-services.js';
import './components/pharmacy-cta.js';
import './components/pharmacy-about.js';
import './components/pharmacy-contact.js';
import './components/pharmacy-footer.js';

export class PharmacyApp extends LitElement {
  // Disable Shadow DOM
  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    // Handle URL fragments after the page loads
    this.handleUrlFragment();
  }

  handleUrlFragment() {
    // Wait for components to render before attempting to scroll
    setTimeout(() => {
      const hash = window.location.hash;
      if (hash) {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          targetElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    }, 500); // Give components time to fully render
  }

  render() {
    return html`
      <pharmacy-header></pharmacy-header>
      <main>
        <pharmacy-hero></pharmacy-hero>
        <pharmacy-services></pharmacy-services>
        <pharmacy-cta></pharmacy-cta>
        <pharmacy-about></pharmacy-about>
        <pharmacy-contact></pharmacy-contact>
      </main>
      <pharmacy-footer></pharmacy-footer>
    `;
  }
}

// Define the custom element
customElements.define('pharmacy-app', PharmacyApp);

// Add global handler for smooth scrolling to anchors
document.addEventListener('DOMContentLoaded', () => {
  // Handle hash changes (when clicking anchor links)
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash;
    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });

  // Handle direct anchor links clicked on the page
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"], a[href^="/#"]');
    if (link) {
      e.preventDefault();
      const href = link.getAttribute('href');
      const hash = href.startsWith('/#') ? href.substring(1) : href;
      
      if (hash) {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          // Update URL
          window.history.pushState(null, null, hash);
          // Smooth scroll
          targetElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    }
  });
});

// Type declarations would go here if using TypeScript