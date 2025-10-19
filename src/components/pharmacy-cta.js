import { LitElement, html, css } from 'lit';

export class PharmacyCTA extends LitElement {
  constructor() {
    super();
    this.content = {};
  }

  // Disable Shadow DOM
  createRenderRoot() {
    return this;
  }

  async connectedCallback() {
    super.connectedCallback();
    await this.loadContent();
  }

  async loadContent() {
    try {
      const response = await fetch('/content.json');
      this.content = await response.json();
      this.requestUpdate(); // Trigger re-render after content loads
    } catch (error) {
      console.error('Failed to load content:', error);
    }
  }

  getButtonAction(action) {
    switch (action) {
      case 'contact':
        return '#contact';
      case 'prescriptions':
        return '#services';
      default:
        return action;
    }
  }

  getButtonStyles(type) {
    switch (type) {
      case 'urgent':
        return 'bg-red-600 hover:bg-red-700 text-white';
      case 'primary':
        return 'bg-primary-600 hover:bg-primary-700 text-white';
      case 'secondary':
        return 'bg-white hover:bg-gray-50 text-primary-600 border border-primary-600';
      default:
        return 'bg-gray-600 hover:bg-gray-700 text-white';
    }
  }

  render() {
    if (!this.content.callToActions) return html``;

    return html`
      <section class="py-20 bg-white">
        <div class="container-max section-padding">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-gray-900 mb-4">How Can We Help You Today?</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the service that best fits your needs and get the professional care you deserve
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            ${this.content.callToActions.map(cta => html`
              <div class="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <h3 class="text-2xl font-bold text-gray-900 mb-4">${cta.title}</h3>
                <p class="text-gray-600 mb-8">${cta.description}</p>
                <a 
                  href="${this.getButtonAction(cta.buttonAction)}"
                  class="inline-flex items-center justify-center font-medium py-3 px-6 rounded-lg transition-colors duration-200 ${this.getButtonStyles(cta.type)}"
                >
                  ${cta.buttonText}
                </a>
              </div>
            `)}
          </div>

          <!-- Emergency Notice -->
          <div class="mt-16 bg-red-50 border border-red-200 rounded-xl p-6 text-center">
            <div class="flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-red-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
              <h3 class="text-lg font-bold text-red-800">Emergency?</h3>
            </div>
            <p class="text-red-700 mb-4">
              For medical emergencies, please call 999. For urgent out-of-hours pharmacy needs, contact NHS 111.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:999" class="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                Call 999 - Emergency
              </a>
              <a href="tel:111" class="bg-red-100 hover:bg-red-200 text-red-800 font-medium py-2 px-4 rounded-lg transition-colors">
                Call 111 - NHS Urgent Care
              </a>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('pharmacy-cta', PharmacyCTA);