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

// Type declarations would go here if using TypeScript