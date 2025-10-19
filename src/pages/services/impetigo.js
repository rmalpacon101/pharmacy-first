import { LitElement, html, css } from 'lit';

export class ImpetigoService extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    .service-header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 4rem 2rem 2rem;
      text-align: center;
    }

    .service-title {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    .service-subtitle {
      font-size: 1.25rem;
      opacity: 0.9;
      max-width: 600px;
      margin: 0 auto;
    }

    .free-service-badge {
      display: inline-flex;
      align-items: center;
      background: rgba(255, 255, 255, 0.2);
      padding: 0.5rem 1rem;
      border-radius: 25px;
      margin-top: 1rem;
      font-weight: 600;
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

    .symptoms-list, .prevention-list, .precautions-list {
      background: #f7fafc;
      padding: 2rem;
      border-radius: 12px;
      margin: 2rem 0;
    }

    .symptoms-list ul, .prevention-list ul, .precautions-list ul {
      list-style: none;
      padding: 0;
    }

    .symptoms-list li, .prevention-list li, .precautions-list li {
      padding: 0.75rem 0;
      padding-left: 2rem;
      position: relative;
    }

    .symptoms-list li::before {
      content: "🔴";
      position: absolute;
      left: 0;
    }

    .prevention-list li::before {
      content: "🛡️";
      position: absolute;
      left: 0;
    }

    .precautions-list li::before {
      content: "⚠️";
      position: absolute;
      left: 0;
    }

    .pharmacy-first-info {
      background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%);
      color: white;
      padding: 3rem 2rem;
      border-radius: 12px;
      margin: 3rem 0;
      text-align: center;
    }

    .age-requirement {
      background: #e6fffa;
      border-left: 4px solid #38b2ac;
      padding: 1.5rem;
      margin: 2rem 0;
      border-radius: 0 8px 8px 0;
    }

    .warning-box {
      background: #fed7d7;
      border-left: 4px solid #e53e3e;
      padding: 1.5rem;
      margin: 2rem 0;
      border-radius: 0 8px 8px 0;
    }

    .cta-button {
      display: inline-block;
      background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
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

    .recovery-signs {
      background: #f0fff4;
      border-left: 4px solid #48bb78;
      padding: 1.5rem;
      margin: 2rem 0;
      border-radius: 0 8px 8px 0;
    }
  `;

  render() {
    return html`
      <div class="service-header">
        <div class="container">
          <h1 class="service-title">Impetigo</h1>
          <p class="service-subtitle">Professional treatment for this contagious skin infection through Pharmacy First</p>
          <div class="free-service-badge">
            🆓 Free NHS Service
          </div>
        </div>
      </div>

      <div class="container">
        <section class="content-section">
          <div class="section-content">
            <p>Impetigo is an extremely contagious and often painful skin infection, that starts off as red sores and blisters. Previously, those suffering with impetigo would have needed to book an appointment to see their GP. However, with the NHS Pharmacy First scheme, instant advice and treatment is now available at any pharmacy, like us.</p>
          </div>
        </section>

        <section class="content-section">
          <h2 class="section-title">What does impetigo look like?</h2>
          <div class="section-content">
            <p>Impetigo blisters, unlike cold sores, spread beyond the mouth and the fluid inside of them appears yellowish in colour. For those who are squeamish, here is a brief description of what this skin infection looks like:</p>
          </div>
          
          <div class="symptoms-list">
            <h3>Appearance of impetigo:</h3>
            <ul>
              <li>Red sores and blistering that quickly bursts, leaving the skin crusty</li>
              <li>When the skin crusts, it develops into golden-brown patches, looking like cornflakes</li>
            </ul>
          </div>

          <div class="section-content">
            <p>Not only does impetigo look unpleasant but it can feel extremely painful, as it spreads to other parts of the body and becomes irritably itchy.</p>
          </div>
        </section>

        <section class="content-section">
          <h2 class="section-title">Who can be affected?</h2>
          <div class="section-content">
            <p>Anyone can be exposed to this infection however, impetigo mostly affects younger children (particularly those who are school-aged).</p>
            <p>It is crucial for those dealing with impetigo to:</p>
          </div>

          <div class="precautions-list">
            <h3>Important precautions:</h3>
            <ul>
              <li>Avoid work or school</li>
              <li>Avoid close contact with others, particularly those with diabetes and weak immune systems</li>
              <li>Not exercise in public, like the gym or contact sports</li>
              <li>Not share towels, blankets, and flannels</li>
              <li>Not prepare food for other people</li>
            </ul>
          </div>
        </section>

        <section class="content-section">
          <h2 class="section-title">Why do I have impetigo?</h2>
          <div class="section-content">
            <p>The culprit to all of this is the germ, bacterium. The three types of bacterial infections that cause impetigo are known as staphylococcus aureus, streptococcus pyogenes and meticillin-resistant staphylococcus aureus.</p>
            <p>No matter how hard you try to rid your skin of bacteria, impetigo can attack both healthy and 'broken' skin, for example eczema and psoriasis.</p>
          </div>
        </section>

        <section class="content-section">
          <h2 class="section-title">When does impetigo go away?</h2>
          <div class="section-content">
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

        <section class="content-section">
          <h2 class="section-title">Prevention tips</h2>
          <div class="prevention-list">
            <h3>How to avoid getting impetigo:</h3>
            <ul>
              <li>Keep minor injuries clean and wash with warm water</li>
              <li>Get appropriate treatment for existing skin conditions</li>
              <li>Maintain good personal hygiene</li>
              <li>Avoid sharing personal items like towels and clothing</li>
              <li>Wash hands regularly, especially after touching affected areas</li>
            </ul>
          </div>
        </section>

        <section class="content-section">
          <h2 class="section-title">Where do I go for help?</h2>
          <div class="section-content">
            <p>Wherever you are, whether it be at home or the park, you can easily find your nearest pharmacy on our website by typing in your postcode. Once you have entered in your location, our map will zoom in and show our nearest pharmacy to you. There is no need to worry about booking an appointment or giving us a heads up before your visit, as with Pharmacy First, our pharmacists will be ready to assist you.</p>
            <a href="#contact" class="cta-button">Find Your Nearest Pharmacy</a>
          </div>
        </section>

        <div class="faq-section">
          <h2 class="section-title">Impetigo FAQ's</h2>
          
          <div class="faq-item">
            <div class="faq-question">How to avoid getting impetigo?</div>
            <div class="faq-answer">Usually, this skin infection occurs in individuals who already have damaged skin. This can be a minor injury such as a cut, scratch, insect bite or other skin condition. Therefore, to protect your skin from impetigo, you must keep your minor injuries clean! For example, wash your skin properly with warm water or get appropriate treatment for your skin condition.</div>
          </div>

          <div class="faq-item">
            <div class="faq-question">If my impetigo starts to improve, do I need to complete my treatment?</div>
            <div class="faq-answer">Yes, it's important to complete the full course of treatment as prescribed by your pharmacist, even if symptoms start to improve. This helps prevent the infection from returning and reduces the risk of antibiotic resistance.</div>
          </div>

          <div class="faq-item">
            <div class="faq-question">What should I do if my impetigo keeps coming back?</div>
            <div class="faq-answer">If impetigo keeps recurring, you should speak to your pharmacist or GP as this may indicate an underlying condition that needs to be addressed or you may need a different treatment approach.</div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('impetigo-service', ImpetigoService);