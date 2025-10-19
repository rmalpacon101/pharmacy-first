import { LitElement, html, css } from 'lit';

export class PharmacyAbout extends LitElement {
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
    if (!this.content.about) return html``;

    return html`
      <section id="about" class="py-20 bg-gray-50">
        <div class="container-max section-padding">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <!-- Content -->
            <div>
              <h2 class="text-4xl font-bold text-gray-900 mb-6">${this.content.about.title}</h2>
              <p class="text-lg text-gray-600 mb-8">${this.content.about.description}</p>
              
              <div class="bg-primary-50 rounded-xl p-6 mb-8">
                <h3 class="text-xl font-bold text-primary-800 mb-4">Our Mission</h3>
                <p class="text-primary-700">${this.content.about.mission}</p>
              </div>

              <!-- Key Features -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div class="flex items-start">
                  <div class="bg-pharmacy-green rounded-lg p-2 mr-4">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900">Professional Service</h4>
                    <p class="text-gray-600 text-sm">Qualified pharmacists providing expert advice</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="bg-pharmacy-blue rounded-lg p-2 mr-4">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900">Community Focused</h4>
                    <p class="text-gray-600 text-sm">Dedicated to serving Loughborough residents</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="bg-pharmacy-green rounded-lg p-2 mr-4">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900">Convenient Hours</h4>
                    <p class="text-gray-600 text-sm">Extended opening times for your convenience</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="bg-pharmacy-blue rounded-lg p-2 mr-4">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900">NHS Services</h4>
                    <p class="text-gray-600 text-sm">Full range of NHS pharmacy services available</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Testimonials -->
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-8">What Our Customers Say</h3>
              <div class="space-y-6">
                ${this.content.testimonials?.map(testimonial => html`
                  <div class="bg-white rounded-xl p-6 shadow-md">
                    <div class="flex items-center mb-4">
                      <div class="flex text-yellow-400">
                        ${Array(5).fill(0).map(() => html`
                          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        `)}
                      </div>
                    </div>
                    <p class="text-gray-600 mb-4 italic">"${testimonial.text}"</p>
                    <p class="text-sm font-semibold text-gray-900">- ${testimonial.author}</p>
                  </div>
                `)}
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('pharmacy-about', PharmacyAbout);