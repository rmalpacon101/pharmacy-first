import { LitElement, html, css } from 'lit';

export class PharmacyContact extends LitElement {
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
      const response = await fetch('./content.json');
      this.content = await response.json();
      this.requestUpdate(); // Trigger re-render after content loads
    } catch (error) {
      console.error('Failed to load content:', error);
    }
  }

  openMapInNewTab() {
    // Use the correct Google Maps link provided
    const mapsUrl = 'https://maps.app.goo.gl/q9ym9sZ635UTov9b7';
    window.open(mapsUrl, '_blank');
  }

  render() {
    if (!this.content.pharmacy) return html``;

    return html`
      <section id="contact" class="py-20 bg-white">
        <div class="container-max section-padding">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our friendly team for any questions or to book a consultation
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Contact Information -->
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h3>
              
              <div class="space-y-6">
                <!-- Phone -->
                <div class="flex items-start">
                  <div class="bg-primary-100 rounded-lg p-3 mr-4">
                    <svg class="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900">Phone</h4>
                    <p class="text-gray-600">${this.content.pharmacy.contact.phone}</p>
                    <a href="tel:${this.content.pharmacy.contact.phone}" class="text-primary-600 hover:text-primary-700 font-medium">
                      Call now
                    </a>
                  </div>
                </div>

                <!-- Email -->
                <div class="flex items-start">
                  <div class="bg-primary-100 rounded-lg p-3 mr-4">
                    <svg class="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900">Email</h4>
                    <p class="text-gray-600">${this.content.pharmacy.contact.email}</p>
                    <a href="mailto:${this.content.pharmacy.contact.email}" class="text-primary-600 hover:text-primary-700 font-medium">
                      Send email
                    </a>
                  </div>
                </div>

                <!-- Address -->
                <div class="flex items-start">
                  <div class="bg-primary-100 rounded-lg p-3 mr-4">
                    <svg class="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900">Address</h4>
                    <p class="text-gray-600">
                      ${this.content.pharmacy.address.street}<br>
                      ${this.content.pharmacy.address.city}<br>
                      ${this.content.pharmacy.address.postcode}
                    </p>
                    <a href="https://maps.app.goo.gl/q9ym9sZ635UTov9b7" 
                       target="_blank" 
                       class="text-primary-600 hover:text-primary-700 font-medium">
                      Get directions
                    </a>
                  </div>
                </div>
              </div>

              <!-- Opening Hours -->
              <div class="mt-12">
                <h3 class="text-2xl font-bold text-gray-900 mb-6">Opening Hours</h3>
                <div class="bg-gray-50 rounded-xl p-6">
                  <div class="space-y-3">
                    <div class="flex justify-between items-center">
                      <span class="font-medium text-gray-900">Monday - Friday</span>
                      <span class="text-gray-600">${this.content.pharmacy.hours.monday_friday}</span>
                    </div>
                    <div class="flex justify-between items-center">
                      <span class="font-medium text-gray-900">Saturday</span>
                      <span class="text-gray-600">${this.content.pharmacy.hours.saturday}</span>
                    </div>
                    <div class="flex justify-between items-center">
                      <span class="font-medium text-gray-900">Sunday</span>
                      <span class="text-gray-600">${this.content.pharmacy.hours.sunday}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Map/Contact Form Area -->
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-8">Visit Us</h3>
              
              <!-- Google Maps Embed -->
              <div class="rounded-xl overflow-hidden mb-8 shadow-lg relative cursor-pointer group" 
                   @click="${this.openMapInNewTab}">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2422.7691995947847!2d-1.2037866!3d52.7676841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48776238b0c7b0a7%3A0x9f8b6b8b8b8b8b8b!2s31%20Bridge%20St%2C%20Loughborough%20LE11%201NH%2C%20UK!5e0!3m2!1sen!2sus!4v1635789123456!5m2!1sen!2sus&gestureHandling=none&zoomControl=false&scrollwheel=false&disableDoubleClickZoom=true"
                  width="100%" 
                  height="300" 
                  style="border:0; pointer-events: none;" 
                  allowfullscreen="" 
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade"
                  title="Pharmacy First Location - 31 Bridge Street, Loughborough">
                </iframe>
                <!-- Click overlay for opening map -->
                <div class="absolute inset-0 bg-transparent group-hover:bg-black group-hover:bg-opacity-10 transition-all duration-200 flex items-center justify-center">
                  <div class="bg-white bg-opacity-90 px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span class="text-sm font-medium text-gray-900 flex items-center">
                      <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h4.59l-2.1 2.1a.75.75 0 101.06 1.06l3.5-3.5a.75.75 0 000-1.06l-3.5-3.5a.75.75 0 10-1.06 1.06l2.1 2.1H6.75z" clip-rule="evenodd" />
                      </svg>
                      View larger map
                    </span>
                  </div>
                </div>
              </div>

              <!-- Quick Contact -->
              <div class="bg-primary-50 rounded-xl p-6">
                <h4 class="text-xl font-bold text-primary-800 mb-4">Need Quick Help?</h4>
                <p class="text-primary-700 mb-6">
                  For immediate assistance, prescription queries, or emergency advice, don't hesitate to call us directly.
                </p>
                <div class="flex flex-col sm:flex-row gap-4">
                  <a href="tel:${this.content.pharmacy.contact.phone}" class="btn-primary flex-1">
                    Call ${this.content.pharmacy.contact.phone}
                  </a>
                  <a href="mailto:${this.content.pharmacy.contact.email}" class="btn-secondary flex-1">
                    Send Email
                  </a>
                </div>
              </div>

              <!-- Directions -->
              <div class="mt-8">
                <h4 class="text-lg font-bold text-gray-900 mb-4">How to Find Us</h4>
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-center">
                    <span class="mr-2">🚗</span>
                    Located on Bridge Street in Loughborough town center
                  </li>
                  <li class="flex items-center">
                    <span class="mr-2">🚌</span>
                    Multiple bus routes stop nearby
                  </li>
                  <li class="flex items-center">
                    <span class="mr-2">🅿️</span>
                    Public parking available on surrounding streets
                  </li>
                  <li class="flex items-center">
                    <span class="mr-2">♿</span>
                    Wheelchair accessible entrance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('pharmacy-contact', PharmacyContact);