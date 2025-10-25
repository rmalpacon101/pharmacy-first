import { LitElement, html } from 'lit';
import './pharmacy-footer.js';

export class ServicePageFooter extends LitElement {
    createRenderRoot() { return this; }
    
    render() {
        return html`<pharmacy-footer></pharmacy-footer>`;
    }
}

customElements.define('service-page-footer', ServicePageFooter);