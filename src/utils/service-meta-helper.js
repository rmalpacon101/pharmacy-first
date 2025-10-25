import { servicesMeta, baseUrl, commonMeta } from '../config/services.js';

export class ServiceMetaHelper {
    static updatePageMeta(serviceName) {
        const config = servicesMeta[serviceName];
        if (!config) {
            console.warn(`Service configuration not found for: ${serviceName}`);
            return;
        }

        // Update page title
        document.title = config.title;

        // Update meta description
        this.updateMetaTag('description', config.description);

        // Update meta keywords
        this.updateMetaTag('keywords', config.keywords);

        // Update Open Graph tags
        this.updateMetaProperty('og:type', commonMeta.ogType);
        this.updateMetaProperty('og:url', `${baseUrl}/${config.fileName}`);
        this.updateMetaProperty('og:title', config.title);
        this.updateMetaProperty('og:description', config.description);

        // Update Twitter tags
        this.updateMetaProperty('twitter:card', commonMeta.twitterCard);
        this.updateMetaProperty('twitter:url', `${baseUrl}/${config.fileName}`);
        this.updateMetaProperty('twitter:title', config.title);
        this.updateMetaProperty('twitter:description', config.description);
    }

    static updateMetaTag(name, content) {
        let meta = document.querySelector(`meta[name="${name}"]`);
        if (meta) {
            meta.content = content;
        } else {
            meta = document.createElement('meta');
            meta.name = name;
            meta.content = content;
            document.head.appendChild(meta);
        }
    }

    static updateMetaProperty(property, content) {
        let meta = document.querySelector(`meta[property="${property}"]`);
        if (meta) {
            meta.content = content;
        } else {
            meta = document.createElement('meta');
            meta.setAttribute('property', property);
            meta.content = content;
            document.head.appendChild(meta);
        }
    }

    static getServiceConfig(serviceName) {
        return servicesMeta[serviceName];
    }

    static getAllServices() {
        return servicesMeta;
    }
}