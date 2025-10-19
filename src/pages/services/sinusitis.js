import { LitElement, html, css } from 'lit';

export class SinusitisService extends LitElement {
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

    .symptoms-list, .treatment-list, .medications-list {
      background: #f7fafc;
      padding: 2rem;
      border-radius: 12px;
      margin: 2rem 0;
    }

    .symptoms-list ul, .treatment-list ul, .medications-list ul {
      list-style: none;
      padding: 0;
    }

    .symptoms-list li, .treatment-list li, .medications-list li {
      padding: 0.75rem 0;
      padding-left: 2rem;
      position: relative;
    }

    .symptoms-list li::before {
      content: "🤧";
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
    }

    .recovery-info {
      background: #f0fff4;
      border-left: 4px solid #48bb78;
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
      <div class="service-header">
        <div class="container">
          <h1 class="service-title">Sinusitis</h1>
          <p class="service-subtitle">Professional treatment for sinus infections through Pharmacy First</p>
          <div class="free-service-badge">
            🆓 Free NHS Service
          </div>
        </div>
      </div>

      <div class="container">
        <section class="content-section">
          <div class="section-content">
            <p>Small cavities, filled with air, behind your cheekbones and forehead make up your sinuses. Sinusitis occurs when these areas are swelled, causing an infection, and is therefore quite a common ailment after the cold or flu.</p>
            <p>Previously, help would have only been accessible through a GP, but with Pharmacy First those suffering with sinusitis can seek advice and treatment from a local pharmacist.</p>
          </div>
        </section>

        <section class="content-section">
          <h2 class="section-title">What is sinusitis?</h2>
          <div class="section-content">
            <p>Sinusitis constitutes of many symptoms that affects numerous areas in the body. However, this mostly disrupts the mucus from draining out of your nose and throat properly, along with other symptoms like:</p>
          </div>
          
          <div class="symptoms-list">
            <h3>Symptoms of sinusitis:</h3>
            <ul>
              <li>Pain, swelling or tender sensations around your sinuses (cheeks, eyes, or forehead)</li>
              <li>A blocked or runny nose</li>
              <li>A reduced sense of smell</li>
              <li>Green or yellow mucus from your nose</li>
              <li>A high temperature</li>
              <li>Headache</li>
              <li>Toothache</li>
              <li>Bad breath</li>
              <li>A cough</li>
              <li>Pressure in the ears</li>
            </ul>
          </div>
        </section>

        <section class="content-section">
          <h2 class="section-title">Who can get sinusitis?</h2>
          <div class="section-content">
            <p>Sinusitis can affect anyone at any age however, the frequency of experiencing this infection varies. Mild cases can be treated with medication or with at-home remedies, compared to those who may need specialist treatment due to experiencing this infection on a regular basis.</p>
          </div>
        </section>

        <section class="content-section">
          <h2 class="section-title">Why do I get sinusitis?</h2>
          <div class="section-content">
            <p>The root cause of sinusitis is the common cold and flu spreading through the sinuses. Rarely, is this infection caused by a bacterium however, it is still considered to be a cause.</p>
          </div>
        </section>

        <section class="content-section">
          <h2 class="section-title">When does sinusitis go away?</h2>
          <div class="section-content">
            <p>As this sinus infection is regarded as a common ailment, it can naturally heal without the need of treatment. However, this will typically occur within four weeks. Yet, if you are feeling as though you are taking too long to recover, there are a variety of treatments available that can boost recovery.</p>
          </div>

          <div class="recovery-info">
            <p><strong>Natural recovery time:</strong> Sinusitis typically heals naturally within 4 weeks without treatment.</p>
          </div>

          <div class="treatment-list">
            <h3>At-home remedies for mild sinusitis:</h3>
            <ul>
              <li>Plenty of sleep</li>
              <li>Drinking lots of fluids</li>
              <li>Taking painkillers – paracetamol and ibuprofen</li>
              <li>Avoiding what can trigger your allergies</li>
              <li>Not smoking</li>
              <li>Cleaning your nose with a saltwater solution</li>
              <li>Staying at home and avoiding contact with other people</li>
            </ul>
          </div>
        </section>

        <div class="pharmacy-first-info">
          <h2>How can Pharmacy First help?</h2>
          <p>Pharmacy First enables individuals who are 12 years and older, to consult with a pharmacist for advice on medication that is appropriate, based on the severity of the infection. For instance, at our pharmacies our pharmacists can recommend medication like a nasal spray, drops or solutions.</p>
          <p>Further advice and treatment are available to you at your nearest pharmacy without the need for an appointment, or the wait to be seen.</p>
          
          <div class="age-requirement">
            <strong>Age requirement:</strong> This service is available for individuals aged 12 years and above
          </div>
        </section>

        <section class="content-section">
          <h2 class="section-title">Available treatments</h2>
          <div class="medications-list">
            <h3>Medications available through Pharmacy First:</h3>
            <ul>
              <li>Decongestant nasal sprays or drops for unclogging your nose</li>
              <li>Salt water nasal sprays or solutions to rinse out the inside of the nose</li>
              <li>Pain relief medications</li>
              <li>Anti-inflammatory treatments</li>
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
          <h2 class="section-title">Sinusitis FAQ's</h2>
          
          <div class="faq-item">
            <div class="faq-question">Is sinusitis contagious?</div>
            <div class="faq-answer">If you are experiencing symptoms of sinusitis such as a high temperature or generally feeling unwell enough to complete everyday activities, it is best to stay at home. Sinusitis is usually not contagious, however avoiding contact with other people can prevent any germs from spreading.</div>
          </div>

          <div class="faq-item">
            <div class="faq-question">What is the difference between a cold and sinusitis?</div>
            <div class="faq-answer">A cold typically lasts 7-10 days and primarily affects the nose and throat. Sinusitis involves inflammation of the sinus cavities and often develops after a cold. Sinusitis symptoms include facial pain/pressure, thick colored mucus, and reduced sense of smell, which are less common with a simple cold.</div>
          </div>

          <div class="faq-item">
            <div class="faq-question">Can I experience sinusitis long term?</div>
            <div class="faq-answer">Yes, some people experience chronic sinusitis, which lasts for more than 12 weeks or keeps recurring. If you have frequent episodes of sinusitis, it's important to speak to a healthcare professional about potential underlying causes and long-term management strategies.</div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('sinusitis-service', SinusitisService);