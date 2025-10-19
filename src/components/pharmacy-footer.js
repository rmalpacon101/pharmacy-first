import { LitElement, html, css } from 'lit';

export class PharmacyFooter extends LitElement {
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
    if (!this.content.footer) return html``;

    return html`
      <footer class="bg-gray-900 text-white">
        <div class="container-max section-padding py-16">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <!-- Pharmacy Info -->
            <div>
              <h3 class="text-2xl font-bold mb-6">${this.content.pharmacy?.name}</h3>
              <p class="text-gray-300 mb-6">
                Your trusted local pharmacy providing professional healthcare services to the Loughborough community.
              </p>
              <div class="space-y-2 text-gray-300">
                <p class="flex items-center">
                  <span class="mr-2">📍</span>
                  ${this.content.pharmacy?.address?.street}<br>
                  <span class="ml-6">${this.content.pharmacy?.address?.city} ${this.content.pharmacy?.address?.postcode}</span>
                </p>
                <p class="flex items-center">
                  <span class="mr-2">📞</span>
                  <a href="tel:${this.content.pharmacy?.contact?.phone}" class="hover:text-white">
                    ${this.content.pharmacy?.contact?.phone}
                  </a>
                </p>
                <p class="flex items-center">
                  <span class="mr-2">✉️</span>
                  <a href="mailto:${this.content.pharmacy?.contact?.email}" class="hover:text-white">
                    ${this.content.pharmacy?.contact?.email}
                  </a>
                </p>
              </div>
            </div>

            <!-- Quick Links -->
            <div>
              <h4 class="text-lg font-semibold mb-6">Quick Links</h4>
              <ul class="space-y-3">
                ${this.content.footer.quickLinks?.map(link => html`
                  <li>
                    <a href="${link.link}" class="text-gray-300 hover:text-white transition-colors">
                      ${link.text}
                    </a>
                  </li>
                `)}
              </ul>
            </div>

            <!-- Services -->
            <div>
              <h4 class="text-lg font-semibold mb-6">Our Services</h4>
              <ul class="space-y-3">
                ${this.content.footer.services?.map(service => html`
                  <li>
                    <a href="${service.link}" class="text-gray-300 hover:text-white transition-colors">
                      ${service.text}
                    </a>
                  </li>
                `)}
              </ul>
            </div>

            <!-- Opening Hours -->
            <div>
              <h4 class="text-lg font-semibold mb-6">Opening Hours</h4>
              <div class="space-y-2 text-gray-300">
                <div>
                  <p class="font-medium">Monday - Friday</p>
                  <p class="text-sm">${this.content.pharmacy?.hours?.monday_friday}</p>
                </div>
                <div>
                  <p class="font-medium">Saturday</p>
                  <p class="text-sm">${this.content.pharmacy?.hours?.saturday}</p>
                </div>
                <div>
                  <p class="font-medium">Sunday</p>
                  <p class="text-sm">${this.content.pharmacy?.hours?.sunday}</p>
                </div>
              </div>
              
              <!-- Emergency Info -->
              <div class="mt-6 p-4 bg-red-900 bg-opacity-50 rounded-lg">
                <h5 class="font-semibold text-red-200 mb-2">Emergency?</h5>
                <p class="text-sm text-red-200 mb-2">For medical emergencies:</p>
                <div class="space-y-1">
                  <a href="tel:999" class="block text-sm text-red-200 hover:text-white">
                    📞 999 - Emergency Services
                  </a>
                  <a href="tel:111" class="block text-sm text-red-200 hover:text-white">
                    📞 111 - NHS Non-Emergency
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom Bar -->
          <div class="border-t border-gray-700 mt-12 pt-8">
            <div class="flex flex-col md:flex-row justify-between items-center">
              <div class="text-gray-300 text-sm mb-4 md:mb-0">
                <p>&copy; ${new Date().getFullYear()} ${this.content.pharmacy?.name}. All rights reserved.</p>
                <p class="mt-1">Registered Pharmacy. Professional services provided by qualified pharmacists.</p>
              </div>
              
              <div class="flex space-x-6">
                ${this.content.footer.legalLinks?.map(link => html`
                  <a href="${link.link}" class="text-gray-300 hover:text-white text-sm transition-colors">
                    ${link.text}
                  </a>
                `)}
              </div>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('pharmacy-footer', PharmacyFooter);