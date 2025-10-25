import { LitElement, html, css } from 'lit';

export class PharmacyHeader extends LitElement {
  constructor() {
    super();
    this.content = {};
    this.mobileMenuOpen = false;
    this.servicesDropdownOpen = false;
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

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    this.requestUpdate();
  }

  toggleServicesDropdown() {
    this.servicesDropdownOpen = !this.servicesDropdownOpen;
    this.requestUpdate();
  }

  closeDropdown() {
    // Add a small delay to allow clicking on links
    setTimeout(() => {
      this.servicesDropdownOpen = false;
      this.requestUpdate();
    }, 150);
  }

  handleDropdownClick(event) {
    // Don't close dropdown when clicking inside it
    event.stopPropagation();
  }

  render() {
    if (!this.content.pharmacy) return html``;

    return html`
      <header class="bg-white shadow-sm sticky top-0 z-50">
        <nav class="container-max section-padding">
          <div class="flex justify-between items-center h-16">
            <!-- Logo -->
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <a href="/" class="block">
                  <h1 class="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors cursor-pointer">
                    ${this.content.pharmacy.name}
                  </h1>
                </a>
              </div>
            </div>

            <!-- Desktop Navigation -->
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-8">
                <a href="/" class="text-gray-900 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
                
                <!-- Services Dropdown -->
                <div class="relative">
                  <button 
                    @click=${this.toggleServicesDropdown}
                    class="text-gray-900 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors flex items-center"
                  >
                    Services
                    <svg class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  ${this.servicesDropdownOpen ? html`
                    <div 
                      class="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg py-2 z-50 border"
                      @click=${this.handleDropdownClick}
                    >
                      <a href="./services.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-semibold border-b">
                        📋 All Pharmacy First Services
                      </a>
                      <a href="./earache.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        👂 Earache (Ages 1-17)
                      </a>
                      <a href="./impetigo.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        🔴 Impetigo (Ages 1+)
                      </a>
                      <a href="./infected-insect-bites.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        🐛 Infected Insect Bites (Ages 1+)
                      </a>
                      <a href="./shingles.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        ⚡ Shingles (Ages 18+)
                      </a>
                      <a href="./sinusitis.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        🤧 Sinusitis (Ages 12+)
                      </a>
                      <a href="./sore-throat.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        🤒 Sore Throat (Ages 5+)
                      </a>
                      <a href="./uti.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        🚺 UTI in Women (Ages 16-64)
                      </a>
                      <div class="border-t my-1"></div>
                      <a href="./contraception.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        💊 Contraception Service
                      </a>
                      <a href="./emergency-contraception.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-red-600 font-semibold">
                        🚨 Emergency Contraception (Urgent)
                      </a>
                    </div>
                  ` : ''}
                </div>
                
                <a href="/#about" class="text-gray-900 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">About</a>
                <a href="/#contact" class="text-gray-900 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
                <a href="tel:${this.content.pharmacy.contact.phone}" class="btn-primary">
                  Call Now
                </a>
              </div>
            </div>

            <!-- Mobile menu button -->
            <div class="md:hidden">
              <button 
                @click=${this.toggleMobileMenu}
                class="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                <span class="sr-only">Open main menu</span>
                ${this.mobileMenuOpen ? html`
                  <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ` : html`
                  <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                `}
              </button>
            </div>
          </div>

          <!-- Mobile Navigation -->
          ${this.mobileMenuOpen ? html`
            <div class="md:hidden">
              <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <a href="/" class="text-gray-900 hover:text-primary-600 block px-3 py-2 text-base font-medium">Home</a>
                
                <!-- Mobile Services Menu -->
                <div class="border-b pb-2 mb-2">
                  <p class="text-gray-500 text-xs uppercase tracking-wide px-3 py-1 font-semibold">Pharmacy First Services</p>
                  <a href="./services.html" class="text-primary-600 hover:text-primary-700 block px-3 py-2 text-sm font-medium">
                    📋 View All Services
                  </a>
                  <a href="./earache.html" class="text-gray-700 hover:text-primary-600 block px-6 py-1 text-sm">👂 Earache</a>
                  <a href="./impetigo.html" class="text-gray-700 hover:text-primary-600 block px-6 py-1 text-sm">🔴 Impetigo</a>
                  <a href="./infected-insect-bites.html" class="text-gray-700 hover:text-primary-600 block px-6 py-1 text-sm">🐛 Infected Insect Bites</a>
                  <a href="./shingles.html" class="text-gray-700 hover:text-primary-600 block px-6 py-1 text-sm">⚡ Shingles</a>
                  <a href="./sinusitis.html" class="text-gray-700 hover:text-primary-600 block px-6 py-1 text-sm">🤧 Sinusitis</a>
                  <a href="./sore-throat.html" class="text-gray-700 hover:text-primary-600 block px-6 py-1 text-sm">🤒 Sore Throat</a>
                  <a href="./uti.html" class="text-gray-700 hover:text-primary-600 block px-6 py-1 text-sm">🚺 UTI in Women</a>
                  <div class="border-t my-1 mx-3"></div>
                  <a href="./contraception.html" class="text-gray-700 hover:text-primary-600 block px-6 py-1 text-sm">💊 Contraception Service</a>
                  <a href="./emergency-contraception.html" class="text-red-600 hover:text-red-700 block px-6 py-1 text-sm font-semibold">🚨 Emergency Contraception</a>
                </div>
                
                <a href="/#about" class="text-gray-900 hover:text-primary-600 block px-3 py-2 text-base font-medium">About</a>
                <a href="/#contact" class="text-gray-900 hover:text-primary-600 block px-3 py-2 text-base font-medium">Contact</a>
                <a href="tel:${this.content.pharmacy.contact.phone}" class="btn-primary w-full mt-4">
                  Call Now
                </a>
              </div>
            </div>
          ` : ''}
        </nav>
      </header>
    `;
  }
}

// Define the custom element
customElements.define('pharmacy-header', PharmacyHeader);