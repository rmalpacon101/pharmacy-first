import { LitElement, html } from 'lit';

export class EmergencyContraceptionService extends LitElement {
  // Override to use light DOM and enable global styles
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="service-container">
        <section class="service-content-section">
          <h2 class="service-section-title">What is the Emergency Hormonal Contraception service?</h2>
          <div class="service-section-content">
            <p>Emergency Hormonal Contraception is a service offering medication by a registered pharmacist, reducing the risk of unwanted pregnancy for individuals after having unprotected sex, or when protection has failed.</p>
            <p>Medication, provided within the Emergency Hormonal Contraception service is the emergency contraceptive pill (Levonelle or ellaOne).</p>
          </div>
        </section>

        <section class="service-content-section">
          <h2 class="service-section-title">How does the Emergency Hormonal Contraception service work?</h2>
          <div class="service-section-content">
            <p>If you feel as though there may be a chance you could fall pregnant after having unprotected/failed protected sex, it is important for you speak to a pharmacist as soon as possible - if you wish to eliminate any risk of pregnancy.</p>
            
            <div class="service-info-box">
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

            <p>This service includes a private consultation where you, the patient, may be signposted to an alternate service provider such as a GP or sexual health clinic that can potentially provide you with other emergency contraception like the intrauterine device.</p>
          </div>
        </section>

        <section class="service-content-section">
          <h2 class="service-section-title">Is the Emergency Hormonal Contraception service safe?</h2>
          <div class="service-section-content">
            <p>Taking emergency hormonal contraception, can come with risks. Frequently, using emergency contraception can increase the side effects that come from the medication.</p>
            <p>However, there are no serious or long-term side effects when taking the emergency contraceptive pill. But the side effects that may occur, include:</p>
          </div>

          <div class="service-recovery-info">
            <p><strong>Safety Note:</strong> There are no serious or long-term side effects when taking the emergency contraceptive pill when used as directed.</p>
          </div>

          <div class="service-info-box">
            <h3>Possible side effects:</h3>
            <ul class="service-list service-symptoms-list">
              <li>Stomach pain</li>
              <li>Headaches</li>
              <li>Changes to your period (can cause you to start earlier, later or the period to be more painful)</li>
              <li>Feeling or being sick (get medical attention if you have been sick or have diarrhoea within 2 hours of taking Levonelle or 3 hours after ellaOne)</li>
            </ul>
          </div>
        </section>

        <section class="service-content-section">
          <h2 class="service-section-title">Do I have to pay for this service?</h2>
          <div class="service-section-content">
            <p>At our pharmacies, anyone can access our Emergency Hormonal Contraception service at any age however a charge for medication may apply.</p>
            <p>It is unlikely that our pharmacies provide IUD fitting services. Therefore, in case of emergency, it is important you ring or get in touch with one of our pharmacies for information and assistance.</p>
          </div>

          <div class="age-requirement">
            <p><strong>Service Access:</strong> This service is available to anyone at any age, though medication charges may apply. Contact your local pharmacy for specific pricing information.</p>
          </div>
        </section>

        <div class="pharmacy-first-info">
          <h2>How can a pharmacist help?</h2>
          <p>With the Emergency Hormonal Contraception service being available at community pharmacies (like us), this has reduced the waiting time for a GP or doctor's prescription and therefore, increased the success of preventing unwanted pregnancies.</p>
          <p>At our pharmacies, our pharmacists can provide you with help and emergency contraception all within a period of 24 hours.</p>
        </div>

        <section class="service-content-section">
          <h2 class="service-section-title">Where can I access this service?</h2>
          <div class="service-section-content">
            <p>You can find a pharmacy that provides this service by entering your postcode. This will give you a list of nearby pharmacies with their addresses and opening hours.</p>
            <p>You can also contact your local pharmacy for any queries or information regarding our Emergency Hormonal Contraception service and more.</p>
            <a href="#contact" class="service-cta-button service-urgent-badge">Find Your Nearest Pharmacy - Urgent</a>
          </div>
        </section>

        <div class="service-faq-section">
          <h2>Emergency Hormonal Contraception FAQ's</h2>
          
          <div class="service-faq-item">
            <div class="service-faq-question">When should I take the emergency contraceptive pill?</div>
            <div class="service-faq-answer">When you visit us for this service, the members of our team can advise you on how to take emergency contraception. However, you will need to take one emergency contraceptive pill within three to five days of having sex. But this may be different depending on the type of pill.</div>
          </div>

          <div class="service-faq-item">
            <div class="service-faq-question">Who can take the emergency contraceptive pill?</div>
            <div class="service-faq-answer">Most people can take emergency contraceptive pills safely. However, certain medical conditions or medications may affect suitability. Our pharmacists will conduct a consultation to ensure the treatment is appropriate for you and discuss any potential interactions or contraindications.</div>
          </div>

          <div class="service-faq-item">
            <div class="service-faq-question">Do I need to use protection, even after taking the emergency contraceptive pill?</div>
            <div class="service-faq-answer">Yes, you should continue to use barrier contraception (such as condoms) for the rest of your cycle after taking emergency contraception. Emergency contraceptive pills only work for the instance of unprotected sex before taking the pill - they don't provide ongoing protection.</div>
          </div>

          <div class="service-faq-item">
            <div class="service-faq-question">Is this service confidential?</div>
            <div class="service-faq-answer">Yes, this service is completely confidential. All consultations with our pharmacists are conducted in private, and your personal information is protected according to NHS confidentiality guidelines. You can discuss your needs openly and honestly with our professional team.</div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('emergency-contraception-service', EmergencyContraceptionService);