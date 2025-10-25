import { LitElement, html } from 'lit';

export class ContraceptionService extends LitElement {
  // Override to use light DOM and enable global styles
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="service-container">
        <section class="service-content-section">
          <h2 class="service-section-title">What is the Pharmacy Contraception service?</h2>
          <div class="service-section-content">
            <p>As of April 2023, the Pharmacy Contraception service enables easy and accessible contraceptive help and treatment. From December 2023, this service expanded to include the initiation of oral contraception.</p>
            <p>This change furthered the need for pharmacy help, as pharmacists play a major role in consulting, prescribing and managing patients on-going supply of oral contraception.</p>
          </div>

          <div class="service-expansion">
            <p><strong>Service Expansion:</strong> From December 2023, this service now includes initiation of oral contraception, making it easier than ever to start your contraceptive journey.</p>
          </div>
        </section>

        <section class="service-content-section">
          <h2 class="service-section-title">Who can access this service?</h2>
          <div class="service-section-content">
            <p>Those who can access the Pharmacy Contraception service, are individuals who are looking to start oral contraception (OC) and are already on OC and looking for a further on-going supply.</p>
            <p>However, it is important to note that each oral contraceptive has an age limit. Therefore, this restricts the group of people eligible for this service:</p>
          </div>

          <div class="contraceptive-types">
            <div class="contraceptive-card">
              <div class="contraceptive-title">💊 Combined Oral Contraceptive</div>
              <p>Available for those from the age of menarche to 49 years old</p>
            </div>

            <div class="contraceptive-card">
              <div class="contraceptive-title">💊 Progestogen-only Pill</div>
              <p>Available for those from the age of menarche to 54 years old</p>
            </div>
          </div>
        </section>

        <section class="service-content-section">
          <h2 class="service-section-title">What extra is available to me with the Pharmacy Contraception service?</h2>
          <div class="service-section-content">
            <p>Prior to the change in December, individuals wishing to start oral contraception would have needed to speak to a GP or visit a sexual health clinic first. Now, the Pharmacy Contraception service allows patients to skip the GP and speak to a pharmacist to start their contraceptive journey.</p>
            <p>Not only does the Pharmacy Contraception service reduce waiting times, but it offers immediate pharmacist help!</p>
          </div>

          <div class="service-info-box">
            <h3>Service benefits:</h3>
            <ul class="service-list service-symptoms-list">
              <li>Skip GP appointments for starting contraception</li>
              <li>Immediate pharmacist consultation</li>
              <li>Reduced waiting times</li>
              <li>Ongoing supply management</li>
              <li>Professional contraceptive advice</li>
            </ul>
          </div>
        </section>

        <section class="service-content-section">
          <h2 class="service-section-title">Will I need to pay for this service?</h2>
          <div class="service-section-content">
            <p>As this is an NHS service, the combined oral contraceptive and the progesterone only pills are available free of charge. However, it is important to speak to one of our pharmacists for further details on your treatment and receive professional advice.</p>
          </div>

          <div class="age-requirement">
            <strong>Free NHS Service:</strong> Both combined oral contraceptives and progestogen-only pills are available at no cost through this NHS service.
          </div>
        </section>

        <div class="pharmacy-first-info">
          <h2>How can a pharmacist help?</h2>
          <p>At our pharmacies, our pharmacists can be of assistance in a variety of ways. With the patient's consent, our pharmacists can share relevant information to their GP, so details are appropriately logged into their own personal medical records.</p>
        </div>

        <section class="service-content-section">
          <h2 class="service-section-title">Pharmacist assistance includes:</h2>
          <div class="service-info-box">
            <ul class="service-list service-symptoms-list">
              <li>Identify a person who may be suitable for the service and appropriately highlight this</li>
              <li>Hold confidential consultations and assist patients with their current or on-going contraception</li>
              <li>Provide contraceptive help and treatment</li>
              <li>Share relevant information with your GP (with consent)</li>
              <li>Ensure details are logged in your personal medical records</li>
            </ul>
          </div>
        </section>

        <section class="service-content-section">
          <h2 class="service-section-title">Where can I access this service?</h2>
          <div class="service-section-content">
            <p>You can find a pharmacy that provides this service by entering your postcode. This will give you a list of nearby pharmacies with their addresses and opening hours.</p>
            <p>You can also contact your local pharmacy for any queries or information regarding our Pharmacy Contraception service and more.</p>
            <a href="/#contact" class="service-cta-button">Contact us</a>
          </div>
        </section>

        <div class="service-faq-section">
          <h2 class="service-section-title">Pharmacy Contraception Service FAQ's</h2>
          
          <div class="service-faq-item">
            <div class="service-faq-question">What should I do if I miss my dose?</div>
            <div class="service-faq-answer">If you have missed a pill, it is best to contact your local pharmacy as you will be directed as to what steps you should take next. However, if you have only missed one pill (within a 48-hour period) the advice given would be to take the pill you missed now. It is important to note that this entirely depends on the type of contraception you are taking.</div>
          </div>

          <div class="service-faq-item">
            <div class="service-faq-question">What are the benefits of oral contraception?</div>
            <div class="service-faq-answer">Oral contraception provides highly effective pregnancy prevention when taken correctly. Additional benefits may include more regular, lighter periods, reduced menstrual pain, and in some cases, improved acne. Your pharmacist can discuss the specific benefits that may apply to your chosen contraceptive.</div>
          </div>

          <div class="service-faq-item">
            <div class="service-faq-question">What are the potential side effects of taking oral contraception?</div>
            <div class="service-faq-answer">Side effects vary depending on the type of contraceptive pill and individual response. Common side effects may include nausea, breast tenderness, mood changes, or breakthrough bleeding. Most side effects are mild and often resolve after the first few months. Your pharmacist will discuss potential side effects during your consultation and help you choose the most suitable option.</div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('contraception-service', ContraceptionService);