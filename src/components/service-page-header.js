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
        const isEmergencyContraception = this.serviceName === 'emergency-contraception';
        const badgeContent = isEmergencyContraception 
            ? '🚨 Time-Sensitive Service - Act Quickly'
            : '🆓 Free NHS Service';
        const badgeClasses = isEmergencyContraception
            ? 'inline-flex items-center bg-red-500 bg-opacity-20 text-white px-4 py-2 rounded-full mt-4 font-semibold border-2 border-red-500 border-opacity-30'
            : 'inline-flex items-center bg-white bg-opacity-20 text-white px-4 py-2 rounded-full mt-4 font-semibold';
        
        return html`
            <pharmacy-header></pharmacy-header>
            <div class="bg-primary-600 text-white py-16 text-center">
                <div class="container-max section-padding">
                    <h1 class="text-5xl font-bold mb-4">${this.serviceTitle || 'Service'}</h1>
                    <p class="text-xl text-primary-100 max-w-2xl mx-auto mb-4">${this.serviceSubtitle || 'NHS Pharmacy First Service'}</p>
                    <div class="${badgeClasses}">
                        ${badgeContent}
                    </div>
                    <div class="mt-8">
                        <a href="./services.html" class="btn-outline">
                            ← Back to Services
                        </a>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('service-page-header', ServicePageHeader);