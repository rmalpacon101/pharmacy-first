import { LitElement, html } from 'lit';

export class ImpetigoService extends LitElement {
  // Override to use light DOM and enable global styles
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="service-container">
        <section class="service-content-section">
          <div class="service-section-content">
            <p>Impetigo is an extremely contagious and often painful skin infection, that starts off as red sores and blisters. Previously, those suffering with impetigo would have needed to book an appointment to see their GP. However, with the NHS Pharmacy First scheme, instant advice and treatment is now available at any pharmacy, like us.</p>
          </div>
        </section>

        <section class="service-content-section">
          <h2 class="service-section-title">What does impetigo look like?</h2>
          <div class="service-section-content">
            <p>Impetigo blisters, unlike cold sores, spread beyond the mouth and the fluid inside of them appears yellowish in colour. For those who are squeamish, here is a brief description of what this skin infection looks like:</p>
          </div>
          
          <div class="service-info-box">
            <h3>Appearance of impetigo:</h3>
            <ul class="service-list service-symptoms-list">
              <li>Red sores and blistering that quickly bursts, leaving the skin crusty</li>
              <li>When the skin crusts, it develops into golden-brown patches, looking like cornflakes</li>
            </ul>
          </div>

          <div class="service-section-content">
            <p>Not only does impetigo look unpleasant but it can feel extremely painful, as it spreads to other parts of the body and becomes irritably itchy.</p>
          </div>
        </section>

        <section class="service-content-section">
          <h2 class="service-section-title">Who can be affected?</h2>
          <div class="service-section-content">
            <p>Anyone can be exposed to this infection however, impetigo mostly affects younger children (particularly those who are school-aged).</p>
            <p>It is crucial for those dealing with impetigo to:</p>
          </div>

          <div class="precautions-list">
            <h3>Important precautions:</h3>
            <ul class="service-list service-symptoms-list">
              <li>Avoid work or school</li>
              <li>Avoid close contact with others, particularly those with diabetes and weak immune systems</li>
              <li>Not exercise in public, like the gym or contact sports</li>
              <li>Not share towels, blankets, and flannels</li>
              <li>Not prepare food for other people</li>
            </ul>
          </div>
        </section>

        <section class="service-content-section">
          <h2 class="service-section-title">Why do I have impetigo?</h2>
          <div class="service-section-content">
            <p>The culprit to all of this is the germ, bacterium. The three types of bacterial infections that cause impetigo are known as staphylococcus aureus, streptococcus pyogenes and meticillin-resistant staphylococcus aureus.</p>
            <p>No matter how hard you try to rid your skin of bacteria, impetigo can attack both healthy and 'broken' skin, for example eczema and psoriasis.</p>
          </div>
        </section>

        <section class="service-content-section">
          <h2 class="service-section-title">When does impetigo go away?</h2>
          <div class="service-section-content">
            <p>With treatment, impetigo tends to improve between seven to ten days, however, this may stop being infectious before then.</p>
          </div>

          <div class="recovery-signs">
            <h3>Signs that impetigo is no longer infectious:</h3>
            <ul style="list-style: none; padding: 0;">
              <li style="padding: 0.5rem 0;">✅ Treating the skin with hydrogen peroxide cream (this will only happen after 48 hours of use)</li>
              <li style="padding: 0.5rem 0;">✅ When the patches start to dry out and crust over (this happens if you decide to not use treatment)</li>
            </ul>
          </div>
        </section>

        <div class="pharmacy-first-info">
          <h2>How can Pharmacy First help?</h2>
          <p>Because of Pharmacy First, professional, and personalised advice along with treatment is accessible to anyone aged 1 year and above.</p>
          <p>Furthermore, with Pharmacy First, the frustrating wait to see your GP is over, as you no longer need to schedule an appointment. This allows you to access the help you need as soon as possible.</p>
          
          <div class="age-requirement">
            <strong>Age requirement:</strong> This service is available for anyone aged 1 year and above
          </div>
        </div>

        <section class="service-content-section">
          <h2 class="service-section-title">Prevention tips</h2>
          <div class="prevention-list">
            <h3>How to avoid getting impetigo:</h3>
            <ul class="service-list service-symptoms-list">
              <li>Keep minor injuries clean and wash with warm water</li>
              <li>Get appropriate treatment for existing skin conditions</li>
              <li>Maintain good personal hygiene</li>
              <li>Avoid sharing personal items like towels and clothing</li>
              <li>Wash hands regularly, especially after touching affected areas</li>
            </ul>
          </div>
        </section>

        <section class="service-content-section">
          <h2 class="service-section-title">Where do I go for help?</h2>
          <div class="service-section-content">
            <p>Wherever you are, whether it be at home or the park, you can easily find your nearest pharmacy on our website by typing in your postcode. Once you have entered in your location, our map will zoom in and show our nearest pharmacy to you. There is no need to worry about booking an appointment or giving us a heads up before your visit, as with Pharmacy First, our pharmacists will be ready to assist you.</p>
            <a href="/#contact" class="service-cta-button">Find Your Nearest Pharmacy</a>
          </div>
        </section>

        <div class="service-faq-section">
          <h2 class="service-section-title">Impetigo FAQ's</h2>
          
          <div class="service-faq-item">
            <div class="service-faq-question">How to avoid getting impetigo?</div>
            <div class="service-faq-answer">Usually, this skin infection occurs in individuals who already have damaged skin. This can be a minor injury such as a cut, scratch, insect bite or other skin condition. Therefore, to protect your skin from impetigo, you must keep your minor injuries clean! For example, wash your skin properly with warm water or get appropriate treatment for your skin condition.</div>
          </div>

          <div class="service-faq-item">
            <div class="service-faq-question">If my impetigo starts to improve, do I need to complete my treatment?</div>
            <div class="service-faq-answer">Yes, it's important to complete the full course of treatment as prescribed by your pharmacist, even if symptoms start to improve. This helps prevent the infection from returning and reduces the risk of antibiotic resistance.</div>
          </div>

          <div class="service-faq-item">
            <div class="service-faq-question">What should I do if my impetigo keeps coming back?</div>
            <div class="service-faq-answer">If impetigo keeps recurring, you should speak to your pharmacist or GP as this may indicate an underlying condition that needs to be addressed or you may need a different treatment approach.</div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('impetigo-service', ImpetigoService);