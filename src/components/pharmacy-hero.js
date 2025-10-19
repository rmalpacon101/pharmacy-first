import { LitElement, html, css } from 'lit';

export class PharmacyHero extends LitElement {
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
    if (!this.content.hero) return html``;

    return html`
      <section id="home" class="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div class="container-max section-padding py-20 lg:py-32">
          <div class="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-16 items-start">
            <!-- Content -->
            <div class="order-2 xl:order-1">
              <h1 class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
                ${this.content.hero.title}
              </h1>
              <p class="text-xl lg:text-2xl mb-8 text-primary-100">
                ${this.content.hero.subtitle}
              </p>
              
              <!-- CTA Buttons -->
              <div class="flex flex-col sm:flex-row gap-4">
                <a href="#contact" class="btn-outline">
                  ${this.content.hero.cta.text}
                </a>
                <a href="tel:${this.content.pharmacy?.contact?.phone}" class="btn-secondary">
                  Call ${this.content.pharmacy?.contact?.phone}
                </a>
              </div>

              <!-- Quick Info -->
              <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div class="flex items-center">
                  <div class="bg-white bg-opacity-20 rounded-lg p-3 mr-4">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold">NHS Services</h3>
                    <p class="text-primary-100">Pharmacy First available</p>
                  </div>
                </div>
                
                <div class="flex items-center">
                  <div class="bg-white bg-opacity-20 rounded-lg p-3 mr-4">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold">Extended Hours</h3>
                    <p class="text-primary-100">Open 6 days a week</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Contact Information Card -->
            <div class="order-1 xl:order-2 mb-8 xl:mb-0">
              <div class="bg-white bg-opacity-15 rounded-2xl p-6 lg:p-8 backdrop-blur-sm border border-white border-opacity-20 max-w-md mx-auto xl:max-w-none">
                <div class="text-5xl mb-4 text-center">🏥</div>
                <h3 class="text-xl font-bold mb-4 text-center">Your Local Pharmacy</h3>
                <p class="text-primary-100 mb-6 text-center leading-relaxed text-sm">Professional healthcare services in the heart of Loughborough</p>
                
                <!-- Contact Details -->
                <div class="space-y-3">
                  <!-- Address -->
                  <div class="flex items-center justify-center">
                    <div class="bg-white bg-opacity-20 rounded-lg p-2 mr-3 flex-shrink-0">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <div class="text-left">
                      <p class="font-medium text-white text-sm leading-tight">${this.content.pharmacy?.address?.street}</p>
                      <p class="text-primary-100 text-xs">${this.content.pharmacy?.address?.city} ${this.content.pharmacy?.address?.postcode}</p>
                    </div>
                  </div>
                  
                  <!-- Phone -->
                  <div class="flex items-center justify-center">
                    <div class="bg-white bg-opacity-20 rounded-lg p-2 mr-3 flex-shrink-0">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div class="text-left">
                      <p class="font-medium text-white text-sm">${this.content.pharmacy?.contact?.phone}</p>
                    </div>
                  </div>
                  
                  <!-- Opening Hours -->
                  <div class="flex items-center justify-center">
                    <div class="bg-white bg-opacity-20 rounded-lg p-2 mr-3 flex-shrink-0">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <div class="text-left">
                      <p class="font-medium text-white text-sm">Opening Hours</p>
                      <p class="text-primary-100 text-xs leading-tight">Mon-Fri: ${this.content.pharmacy?.hours?.monday_friday}</p>
                      <p class="text-primary-100 text-xs leading-tight">Saturday: ${this.content.pharmacy?.hours?.saturday}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

// Define the custom element
customElements.define('pharmacy-hero', PharmacyHero);