import { LitElement, html, css } from 'lit';

export class SoreThroatService extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
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

    .symptoms-list, .causes-list, .treatment-list, .medications-list {
      background: #f7fafc;
      padding: 2rem;
      border-radius: 12px;
      margin: 2rem 0;
    }

    .symptoms-list ul, .causes-list ul, .treatment-list ul, .medications-list ul {
      list-style: none;
      padding: 0;
    }

    .symptoms-list li, .causes-list li, .treatment-list li, .medications-list li {
      padding: 0.75rem 0;
      padding-left: 2rem;
      position: relative;
    }

    .symptoms-list li::before {
      content: "🤒";
      position: absolute;
      left: 0;
    }

    .causes-list li::before {
      content: "🦠";
      position: absolute;
      left: 0;
    }

    .treatment-list li::before {
      content: "🏠";
      position: absolute;
      left: 0;
    }

    .medications-list li::before {
      content: "💊";
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
      color: #2d3748;
    }

    .recovery-info {
      background: #f0fff4;
      border-left: 4px solid #48bb78;
      padding: 1.5rem;
      margin: 2rem 0;
      border-radius: 0 8px 8px 0;
    }

    .warning-note {
      background: #fff5f5;
      border-left: 4px solid #fc8181;
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
  `;

  render() {
    return html`
      <div class="container">
        <section class="content-section">
          <div class="section-content">
            <p>Sore throats are a common ailment that usually heals without the need for medication. However, there are times when a sore throat can be a cause of concern and the need for medical intervention is required. With Pharmacy First, any pharmacist can instantly assess your symptoms and provide you with appropriate advice and treatment.</p>
          </div>
        </section>

        <section class="content-section">
          <h2 class="section-title">What does a sore throat look like?</h2>
          <div class="section-content">
            <p>A sore throat can affect people in alternative ways. For example, some people may experience all or a few of the symptoms that cause a sore throat, like:</p>
          </div>
          
          <div class="symptoms-list">
            <h3>Common symptoms:</h3>
            <ul>
              <li>Pain when swallowing</li>
              <li>A scratchy or dry throat</li>
              <li>A red appearance in the back of the throat</li>
              <li>Bad breath</li>
              <li>A moderate cough</li>
              <li>Swollen glands in the neck</li>
            </ul>
          </div>

          <div class="section-content">
            <p>Children can experience similar symptoms, but in addition, they too can suffer with a high temperature and appear as less active.</p>
          </div>
        </section>

        <section class="content-section">
          <h2 class="section-title">Who can get a sore throat?</h2>
          <div class="section-content">
            <p>Anyone can experience a sore throat at any age or time in life. Often, a sore throat can be caused by tonsillitis, which mostly impacts children, however, is not limited to teenagers or adults.</p>
          </div>
        </section>

        <section class="content-section">
          <h2 class="section-title">Why do I have a sore throat?</h2>
          <div class="section-content">
            <p>There are many reasons as to why people get a sore throat, yet below are a few examples that can inflict this common ailment:</p>
          </div>

          <div class="causes-list">
            <h3>Common causes:</h3>
            <ul>
              <li>Smoking</li>
              <li>Viruses like the cold or flu</li>
              <li>Laryngitis (caused by allergies, acid reflux, coughing and clearing your throat over extended periods of time)</li>
              <li>Tonsillitis</li>
              <li>Strep throat (caused by Streptococcus A, a form of bacteria infecting the tonsils and throat)</li>
              <li>Glandular fever (caused by the Epstein-Barr virus spread through saliva)</li>
              <li>Covid-19</li>
            </ul>
          </div>
        </section>

        <section class="content-section">
          <h2 class="section-title">When does a sore throat go away?</h2>
          <div class="section-content">
            <p>A sore throat can be an unnecessary nuisance bringing about pain and discomfort. Therefore, finding the best medicine or remedy to kill a sore throat is key!</p>
            <p>On its own a sore throat can be cured within a week, however with treatment this can quicken the time it takes to heal. Listed, are at-home treatments you can try to soothe a sore throat:</p>
          </div>

          <div class="recovery-info">
            <p><strong>Natural recovery time:</strong> A sore throat typically heals on its own within a week.</p>
          </div>

          <div class="treatment-list">
            <h3>At-home treatments:</h3>
            <ul>
              <li>Gargling warm and salty water in your mouth (it is advised that children should not do this)</li>
              <li>Up the amount of liquids, you drink</li>
              <li>Only eat soft or cool foods</li>
              <li>Stop smoking or avoid smoky surroundings</li>
              <li>Do not suck on ice cubes, lollies, or hard sweets (do not give this to young children as they could potentially choke)</li>
              <li>Lots of rest!</li>
            </ul>
          </div>

          <div class="warning-note">
            <p><strong>Important note for children:</strong> Children should not gargle salt water, and hard sweets/ice cubes should not be given to young children due to choking risk.</p>
          </div>
        </section>

        <div class="pharmacy-first-info">
          <h2>How does Pharmacy First help?</h2>
          <p>With the NHS Pharmacy First scheme, pharmacists can be your first point of call for help and relief from a sore throat. If you feel you require further treatment, pharmacists are available to provide you with over the counter or prescription-only medications.</p>
          <p>Those who are aged 5 years and above can access this new service by heading down to your nearest pharmacy for instant advice and treatment.</p>
          
          <div class="age-requirement">
            <strong>Age requirement:</strong> This service is available for individuals aged 5 years and above
          </div>
        </section>

        <section class="content-section">
          <h2 class="section-title">Available treatments</h2>
          <div class="medications-list">
            <h3>Medications available through Pharmacy First:</h3>
            <ul>
              <li>Paracetamol and ibuprofen</li>
              <li>Medicated lozenges (this would contain a local anaesthetic, antiseptic or anti-inflammatory treatment)</li>
              <li>Anaesthetic spray</li>
              <li>Antibiotics (this is only given if you have a bacterial infection)</li>
            </ul>
          </div>
        </section>

        <section class="content-section">
          <h2 class="section-title">Where do I go for help?</h2>
          <div class="section-content">
            <p>Wherever you are, whether it be at home or the park, you can easily find your nearest pharmacy on our website by typing in your postcode. Once you have entered in your location, our map will zoom in and show our nearest pharmacies to you. There is no need to worry about booking an appointment or giving us a heads up before your visit, as with Pharmacy First, our pharmacists will be ready to assist you.</p>
            <a href="#contact" class="cta-button">Find Your Nearest Pharmacy</a>
          </div>
        </section>

        <div class="faq-section">
          <h2 class="section-title">Sore Throat FAQ's</h2>
          
          <div class="faq-item">
            <div class="faq-question">Do you need antibiotics to treat a sore throat?</div>
            <div class="faq-answer">No, not usually. You will be prescribed with antibiotics if your sore throat is causing or has developed into a bacterial infection. When you visit your local pharmacy, a pharmacist will be able to determine if this line of treatment is suitable for your condition.</div>
          </div>

          <div class="faq-item">
            <div class="faq-question">What should I do if my sore throat keeps getting worse?</div>
            <div class="faq-answer">If your sore throat is getting worse, doesn't improve after a week, or you develop additional symptoms like high fever, difficulty swallowing, or breathing problems, you should seek further medical attention. Your pharmacist can advise whether you need to see a GP or seek urgent medical care.</div>
          </div>

          <div class="faq-item">
            <div class="faq-question">How can I tell if my sore throat is an infection?</div>
            <div class="faq-answer">Signs of a throat infection may include severe pain, high fever, swollen glands, white patches on the throat, or pus on the tonsils. A pharmacist can assess your symptoms and determine if you have a bacterial infection that requires antibiotic treatment, or if it's viral and will resolve with supportive care.</div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('sore-throat-service', SoreThroatService);