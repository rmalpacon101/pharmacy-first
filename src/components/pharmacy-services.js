import { LitElement, html, css } from 'lit';

export class PharmacyServices extends LitElement {
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

  render() {
    if (!this.content.services) return html``;

    return html`
      <section id="services" class="py-20 bg-gray-50">
        <div class="container-max section-padding">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive healthcare services designed to meet all your pharmacy and wellness needs
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            ${this.content.services.map(service => html`
              <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div class="text-4xl mb-4">${service.icon}</div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">${service.title}</h3>
                <p class="text-gray-600 mb-6">${service.description}</p>
                
                <ul class="space-y-2">
                  ${service.features.map(feature => html`
                    <li class="flex items-center text-sm text-gray-600">
                      <svg class="w-4 h-4 text-pharmacy-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>
                      ${feature}
                    </li>
                  `)}
                </ul>
              </div>
            `)}
          </div>

          <!-- Pharmacy First Services Section -->
          <div class="mt-20">
            <div class="text-center mb-12">
              <h3 class="text-3xl font-bold text-gray-900 mb-4">Pharmacy First Services</h3>
              <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Get treatment for common conditions without visiting your GP. All services are free on the NHS and no appointment is needed.
              </p>
              <a href="./services.html" class="btn-primary inline-block">
                View All Pharmacy First Services
              </a>
            </div>

            <!-- Quick Access to Popular Services -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <a href="./earache.html" class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-blue-500">
                <div class="flex items-center">
                  <span class="text-3xl mr-4">👂</span>
                  <div>
                    <h4 class="font-bold text-gray-900">Earache</h4>
                    <p class="text-sm text-gray-600">Ages 1-17 years</p>
                  </div>
                </div>
              </a>
              
              <a href="./sore-throat.html" class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-red-500">
                <div class="flex items-center">
                  <span class="text-3xl mr-4">🤒</span>
                  <div>
                    <h4 class="font-bold text-gray-900">Sore Throat</h4>
                    <p class="text-sm text-gray-600">Ages 5+ years</p>
                  </div>
                </div>
              </a>
              
              <a href="./uti.html" class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-purple-500">
                <div class="flex items-center">
                  <span class="text-3xl mr-4">🚺</span>
                  <div>
                    <h4 class="font-bold text-gray-900">UTI in Women</h4>
                    <p class="text-sm text-gray-600">Ages 16-64 years</p>
                  </div>
                </div>
              </a>
              
              <a href="./contraception.html" class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-blue-500">
                <div class="flex items-center">
                  <span class="text-3xl mr-4">💊</span>
                  <div>
                    <h4 class="font-bold text-gray-900">Contraception Service</h4>
                    <p class="text-sm text-gray-600">NHS funded service</p>
                  </div>
                </div>
              </a>
              
              <a href="./emergency-contraception.html" class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-red-500">
                <div class="flex items-center">
                  <span class="text-3xl mr-4">🚨</span>
                  <div>
                    <h4 class="font-bold text-gray-900 text-red-600">Emergency Contraception</h4>
                    <p class="text-sm text-red-600 font-semibold">Time-sensitive service</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <!-- Call to Action Section -->
          <div class="mt-16">
            <div class="bg-primary-600 rounded-2xl p-8 lg:p-12 text-center text-white">
              <h3 class="text-3xl font-bold mb-4">Need Help with Any of Our Services?</h3>
              <p class="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Our experienced pharmacists are here to help. Contact us today for professional advice and exceptional service.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:${this.content.pharmacy?.contact?.phone}" class="btn-outline">
                  Call ${this.content.pharmacy?.contact?.phone}
                </a>
                <a href="mailto:${this.content.pharmacy?.contact?.email}" class="btn-secondary">
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('pharmacy-services', PharmacyServices);