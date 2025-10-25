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
        const badgeStyle = isEmergencyContraception
            ? 'display: inline-flex; align-items: center; background: rgba(239, 68, 68, 0.2); color: #ffffff; padding: 0.5rem 1rem; border-radius: 25px; margin-top: 1rem; font-weight: 600; border: 2px solid rgba(239, 68, 68, 0.3);'
            : 'display: inline-flex; align-items: center; background: rgba(255, 255, 255, 0.2); padding: 0.5rem 1rem; border-radius: 25px; margin-top: 1rem; font-weight: 600;';
        
        return html`
            <pharmacy-header></pharmacy-header>
            <div class="service-header" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 4rem 2rem 2rem; text-align: center;">
                <div class="container" style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
                    <h1 class="service-title" style="font-size: 3rem; font-weight: 700; margin-bottom: 1rem;">${this.serviceTitle || 'Service'}</h1>
                    <p class="service-subtitle" style="font-size: 1.25rem; opacity: 0.9; max-width: 600px; margin: 0 auto 1rem;">${this.serviceSubtitle || 'NHS Pharmacy First Service'}</p>
                    <div class="service-badge" style="${badgeStyle}">
                        ${badgeContent}
                    </div>
                    <div style="margin-top: 2rem;">
                        <a href="./services.html" class="btn-outline" style="display: inline-block; color: white; border: 2px solid white; padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none; font-weight: 600; transition: all 0.2s;">
                            ← Back to Services
                        </a>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('service-page-header', ServicePageHeader);