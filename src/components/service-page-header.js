import { LitElement, html } from 'lit';
import './pharmacy-header.js';
import { ServiceMetaHelper } from '../utils/service-meta-helper.js';

export class ServicePageHeader extends LitElement {
    static get properties() {
        return {
            serviceName: { type: String, attribute: 'service-name' },
            serviceTitle: { type: String, attribute: 'service-title' },
            serviceSubtitle: { type: String, attribute: 'service-subtitle' }
        };
    }

    createRenderRoot() { return this; }

    connectedCallback() {
        super.connectedCallback();
        
        // If service-name is provided, use config to set title and subtitle
        if (this.serviceName) {
            const config = ServiceMetaHelper.getServiceConfig(this.serviceName);
            if (config) {
                this.serviceTitle = config.serviceTitle;
                this.serviceSubtitle = config.serviceSubtitle;
                // Update document meta tags
                ServiceMetaHelper.updatePageMeta(this.serviceName);
            }
        }
    }
    
    render() {
        return html`
            <pharmacy-header></pharmacy-header>
            <div class="bg-primary-600 text-white py-12 md:py-16">
                <div class="container-max section-padding">
                    <div class="flex flex-col md:flex-row justify-between items-start md:items-center">
                        <div>
                            <h1 class="text-3xl md:text-4xl font-bold mb-2">${this.serviceTitle || 'Service'}</h1>
                            <p class="text-primary-100 text-lg">${this.serviceSubtitle || 'NHS Pharmacy First Service'}</p>
                        </div>
                        <div class="mt-4 md:mt-0">
                            <a href="./services.html" class="btn-outline">
                                ← Back to Services
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('service-page-header', ServicePageHeader);