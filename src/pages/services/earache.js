import { LitElement, html, css } from 'lit';

export class EaracheService extends LitElement {
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

    .symptoms-list, .causes-list, .treatment-list {
      background: #f7fafc;
      padding: 2rem;
      border-radius: 12px;
      margin: 2rem 0;
    }

    .symptoms-list ul, .causes-list ul, .treatment-list ul {
      list-style: none;
      padding: 0;
    }

    .symptoms-list li, .causes-list li, .treatment-list li {
      padding: 0.75rem 0;
      padding-left: 2rem;
      position: relative;
    }

    .symptoms-list li::before {
      content: "🔹";
      position: absolute;
      left: 0;
    }

    .causes-list li::before {
      content: "⚠️";
      position: absolute;
      left: 0;
    }

    .treatment-list li::before {
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
          <h1 class="service-title">Earache</h1>
          <p class="service-subtitle">Professional treatment for ear pain through Pharmacy First</p>
          <div class="free-service-badge">
            🆓 Free NHS Service
          </div>
        </div>
      </div>

      <div class="container">
        <section class="content-section">
          <h2 class="section-title">What is earache?</h2>
          <div class="section-content">
            <p>Earache is simply, a sharp, dull, or burning feeling that causes pain to one or both of your ears. Often, these uncomfortable symptoms are consistent, but can often come and go. However, for different age groups earache can affect them differently, particularly in babies and young children.</p>
          </div>
        </section>

        <section class="content-section">
          <h2 class="section-title">Who can get earache?</h2>
          <div class="section-content">
            <p>Unfortunately, earache is a common ailment, and can impact anyone. However, ear pain tends to affect and be spotted differently in babies and young children, as they can experience more symptoms such as:</p>
          </div>
          
          <div class="symptoms-list">
            <h3>Symptoms in babies and young children:</h3>
            <ul>
              <li>They do not react to certain sounds</li>
              <li>Losing their balance</li>
              <li>Appear irritable and restless</li>
              <li>Have a high temperature (38C or above)</li>
              <li>They rub or pull at their ear</li>
              <li>Be off their food</li>
            </ul>
          </div>
        </section>

        <section class="content-section">
          <h2 class="section-title">Why do I have earache?</h2>
          <div class="section-content">
            <p>By now, you must be wondering what causes earache, or at least why does it occur? So, here is a list of five causes that often bring about earache:</p>
          </div>

          <div class="causes-list">
            <h3>Common causes of earache:</h3>
            <ul>
              <li><strong>Ear infection:</strong> Outer ear infection (otherwise known as otitis externa) can cause extreme pain to the ear along with itchiness or irritation around the ear canal. This results in redness and swelling as well as pressure inside your ear.</li>
              <li><strong>Earwax build-up:</strong> Usually, earwax tends to fall out on its own however, if you start to experience hearing loss, a sensation of your ears feeling blocked, dizziness, sickness or a ringing and pain in your ear, you must speak to a pharmacist for advice.</li>
              <li><strong>Toothache:</strong> When you experience toothache, it is likely you will also experience earache. This occurs because the pain from the tooth tends to radiate to surrounding areas like the ear, potentially triggering infections.</li>
              <li><strong>Flu:</strong> Adults tend to experience a variety of symptoms when they have the flu like headaches, a high temperature and a dry cough. But in younger children, earache as well as low energy tends to be a symptom of the flu.</li>
              <li><strong>Eustachian tube dysfunction:</strong> When the mucosal lining of the eustachian tube is swollen or unable to open and close properly, this can cause extreme pain to the ear. Unfortunately, this mostly affects young children, as their eustachian tubes are smaller therefore, it is harder for them to drain fluid out of their ear.</li>
            </ul>
          </div>
        </section>

        <section class="content-section">
          <h2 class="section-title">When does earache stop?</h2>
          <div class="section-content">
            <p>The time it takes for earache to improve, entirely depends on its cause, but usually this tends to be within a few days. However, here are a couple of at-home remedies you can do to quicken ear pain relief:</p>
          </div>

          <div class="treatment-list">
            <h3>At-home remedies:</h3>
            <ul>
              <li>Painkillers (paracetamol and ibuprofen)</li>
              <li>A warm or cold flannel on the ear</li>
            </ul>
          </div>
        </section>

        <div class="pharmacy-first-info">
          <h2>How can Pharmacy First help?</h2>
          <p>The NHS Pharmacy First scheme enables those aged 1-17 years to skip the GP and visit a pharmacist for advice and treatment. Now pharmacists, like ours, can provide you with advice on how to treat ear pain along with over-the-counter medication, for instance ear drops.</p>
          <p>But, if further treatment is needed, pharmacists can also provide you with prescription-only medications. This service is now available at Allied Pharmacies, putting an end to waiting for a GP appointment, as instant help is now at your fingertips.</p>
          
          <div class="age-requirement">
            <strong>Age requirement:</strong> This service is available for children aged 1-17 years
          </div>
        </div>

        <section class="content-section">
          <h2 class="section-title">Where do I go for help?</h2>
          <div class="section-content">
            <p>Wherever you are, whether it be at home or the park, you can easily find your nearest pharmacy on our website by typing in your postcode. Once you have entered in your location, our map will zoom in and show our nearest pharmacy to you. There is no need to worry about booking an appointment or giving us a heads up before your visit, as with the new Pharmacy First scheme our pharmacists will be ready to assist you.</p>
            <a href="#contact" class="cta-button">Find Your Nearest Pharmacy</a>
          </div>
        </section>

        <div class="faq-section">
          <h2 class="section-title">Earache FAQ's</h2>
          
          <div class="faq-item">
            <div class="faq-question">Why is earache common in young children?</div>
            <div class="faq-answer">Earache can be a common problem in young children due to bacteria being able to pass from the nose to the ears more easily. If your child is feeling discomfort or pain, visit your local pharmacy and speak to a pharmacist for help.</div>
          </div>

          <div class="faq-item">
            <div class="faq-question">Can I still visit a pharmacist for earache, even though I am not within the age criteria?</div>
            <div class="faq-answer">While the Pharmacy First service for earache is specifically for ages 1-17, pharmacists can still provide general advice and over-the-counter treatments for adults. For persistent or severe symptoms in adults, we recommend consulting your GP.</div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('earache-service', EaracheService);