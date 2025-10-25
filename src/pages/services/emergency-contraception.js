import { LitElement, html, css } from 'lit';

export class EmergencyContraceptionService extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    .urgent-badge {
      display: inline-flex;
      align-items: center;
      background: rgba(239, 68, 68, 0.2);
      color: #ffffff;
      padding: 0.5rem 1rem;
      border-radius: 25px;
      margin-top: 1rem;
      font-weight: 600;
      border: 2px solid rgba(239, 68, 68, 0.3);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .content-section {
      padding: 3rem 0;
    }

    .section-title {
      font-size: 2rem;
      font-weight: 700;
      color: #2d3748;
      margin-bottom: 1.5rem;
    }

    .section-content {
      font-size: 1.125rem;
      line-height: 1.8;
      color: #4a5568;
      margin-bottom: 2rem;
    }

    .medication-types, .side-effects-list {
      background: #f7fafc;
      padding: 2rem;
      border-radius: 12px;
      margin: 2rem 0;
    }

    .medication-types ul, .side-effects-list ul {
      list-style: none;
      padding: 0;
    }

    .medication-types li, .side-effects-list li {
      padding: 0.75rem 0;
      padding-left: 2rem;
      position: relative;
    }

    .medication-types li::before {
      content: "💊";
      position: absolute;
      left: 0;
    }

    .side-effects-list li::before {
      content: "⚠️";
      position: absolute;
      left: 0;
    }

    .urgent-info {
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
      color: white;
      padding: 3rem 2rem;
      border-radius: 12px;
      margin: 3rem 0;
      text-align: center;
    }

    .time-limits {
      background: #fef2f2;
      border-left: 4px solid #ef4444;
      padding: 1.5rem;
      margin: 2rem 0;
      border-radius: 0 8px 8px 0;
    }

    .safety-info {
      background: #f0f9ff;
      border-left: 4px solid #3b82f6;
      padding: 1.5rem;
      margin: 2rem 0;
      border-radius: 0 8px 8px 0;
    }

    .cost-info {
      background: #fffbeb;
      border-left: 4px solid #f59e0b;
      padding: 1.5rem;
      margin: 2rem 0;
      border-radius: 0 8px 8px 0;
    }

    .cta-button {
      display: inline-block;
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
      color: white;
      padding: 1rem 2rem;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      margin-top: 1rem;
      transition: transform 0.2s;
    }

    .cta-button:hover {
      transform: translateY(-2px);
    }

    .faq-section {
      background: #f7fafc;
      padding: 3rem 2rem;
      border-radius: 12px;
      margin: 3rem 0;
    }

    .faq-item {
      margin-bottom: 2rem;
    }

    .faq-question {
      font-weight: 600;
      color: #2d3748;
      margin-bottom: 0.5rem;
    }

    .faq-answer {
      color: #4a5568;
      line-height: 1.6;
    }

    .medication-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin: 2rem 0;
    }

    .medication-card {
      background: #f7fafc;
      padding: 2rem;
      border-radius: 12px;
      border-left: 4px solid #ef4444;
    }

    .medication-name {
      font-weight: 700;
      color: #2d3748;
      margin-bottom: 1rem;
      font-size: 1.25rem;
    }

    .time-limit {
      background: #fef2f2;
      color: #991b1b;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.875rem;
      font-weight: 600;
      display: inline-block;
      margin-top: 0.5rem;
    }
  `;

  render() {
    return html`
      <div class="container">
        <section class="content-section">
          <h2 class="section-title">What is the Emergency Hormonal Contraception service?</h2>
          <div class="section-content">
            <p>Emergency Hormonal Contraception is a service offering medication by a registered pharmacist, reducing the risk of unwanted pregnancy for individuals after having unprotected sex, or when protection has failed.</p>
            <p>Medication, provided within the Emergency Hormonal Contraception service is the emergency contraceptive pill (Levonelle or ellaOne).</p>
          </div>
        </section>

        <section class="content-section">
          <h2 class="section-title">How does the Emergency Hormonal Contraception service work?</h2>
          <div class="section-content">
            <p>If you feel as though there may be a chance you could fall pregnant after having unprotected/failed protected sex, it is important for you speak to a pharmacist as soon as possible - if you wish to eliminate any risk of pregnancy.</p>
          </div>

          <div class="time-limits">
            <p><strong>⏰ Critical Time Limits:</strong> The reason for urgency is based upon the time limit of when emergency contraception must be taken:</p>
          </div>

          <div class="medication-grid">
            <div class="medication-card">
              <div class="medication-name">💊 Levonelle</div>
              <p>Emergency contraceptive pill that must be taken within 3 days (72 hours) of unprotected sex.</p>
              <span class="time-limit">Within 3 days</span>
            </div>

            <div class="medication-card">
              <div class="medication-name">💊 ellaOne</div>
              <p>Emergency contraceptive pill that can be taken up to 5 days (120 hours) after unprotected sex.</p>
              <span class="time-limit">Within 5 days</span>
            </div>
          </div>

          <div class="section-content">
            <p>This service includes a private consultation where you, the patient, may be signposted to an alternate service provider such as a GP or sexual health clinic that can potentially provide you with other emergency contraception like the intrauterine device.</p>
          </div>
        </section>

        <section class="content-section">
          <h2 class="section-title">Is the Emergency Hormonal Contraception service safe?</h2>
          <div class="section-content">
            <p>Taking emergency hormonal contraception, can come with risks. Frequently, using emergency contraception can increase the side effects that come from the medication.</p>
            <p>However, there are no serious or long-term side effects when taking the emergency contraceptive pill. But the side effects that may occur, include:</p>
          </div>

          <div class="safety-info">
            <p><strong>Safety Note:</strong> There are no serious or long-term side effects when taking the emergency contraceptive pill when used as directed.</p>
          </div>

          <div class="side-effects-list">
            <h3>Possible side effects:</h3>
            <ul>
              <li>Stomach pain</li>
              <li>Headaches</li>
              <li>Changes to your period (can cause you to start earlier, later or the period to be more painful)</li>
              <li>Feeling or being sick (get medical attention if you have been sick or have diarrhoea within 2 hours of taking Levonelle or 3 hours after ellaOne)</li>
            </ul>
          </div>
        </section>

        <section class="content-section">
          <h2 class="section-title">Do I have to pay for this service?</h2>
          <div class="section-content">
            <p>At our pharmacies, anyone can access our Emergency Hormonal Contraception service at any age however a charge for medication may apply.</p>
            <p>It is unlikely that our pharmacies provide IUD fitting services. Therefore, in case of emergency, it is important you ring or get in touch with one of our pharmacies for information and assistance.</p>
          </div>

          <div class="cost-info">
            <p><strong>Service Access:</strong> This service is available to anyone at any age, though medication charges may apply. Contact your local pharmacy for specific pricing information.</p>
          </div>
        </section>

        <div class="urgent-info">
          <h2>How can a pharmacist help?</h2>
          <p>With the Emergency Hormonal Contraception service being available at community pharmacies (like us), this has reduced the waiting time for a GP or doctor's prescription and therefore, increased the success of preventing unwanted pregnancies.</p>
          <p>At our pharmacies, our pharmacists can provide you with help and emergency contraception all within a period of 24 hours.</p>
        </div>

        <section class="content-section">
          <h2 class="section-title">Where can I access this service?</h2>
          <div class="section-content">
            <p>You can find a pharmacy that provides this service by entering your postcode. This will give you a list of nearby pharmacies with their addresses and opening hours.</p>
            <p>You can also contact your local pharmacy for any queries or information regarding our Emergency Hormonal Contraception service and more.</p>
            <a href="#contact" class="cta-button">Find Your Nearest Pharmacy - Urgent</a>
          </div>
        </section>

        <div class="faq-section">
          <h2 class="section-title">Emergency Hormonal Contraception FAQ's</h2>
          
          <div class="faq-item">
            <div class="faq-question">When should I take the emergency contraceptive pill?</div>
            <div class="faq-answer">When you visit us for this service, the members of our team can advise you on how to take emergency contraception. However, you will need to take one emergency contraceptive pill within three to five days of having sex. But this may be different depending on the type of pill.</div>
          </div>

          <div class="faq-item">
            <div class="faq-question">Who can take the emergency contraceptive pill?</div>
            <div class="faq-answer">Most people can take emergency contraceptive pills safely. However, certain medical conditions or medications may affect suitability. Our pharmacists will conduct a consultation to ensure the treatment is appropriate for you and discuss any potential interactions or contraindications.</div>
          </div>

          <div class="faq-item">
            <div class="faq-question">Do I need to use protection, even after taking the emergency contraceptive pill?</div>
            <div class="faq-answer">Yes, you should continue to use barrier contraception (such as condoms) for the rest of your cycle after taking emergency contraception. Emergency contraceptive pills only work for the instance of unprotected sex before taking the pill - they don't provide ongoing protection.</div>
          </div>

          <div class="faq-item">
            <div class="faq-question">Is this service confidential?</div>
            <div class="faq-answer">Yes, this service is completely confidential. All consultations with our pharmacists are conducted in private, and your personal information is protected according to NHS confidentiality guidelines. You can discuss your needs openly and honestly with our professional team.</div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('emergency-contraception-service', EmergencyContraceptionService);