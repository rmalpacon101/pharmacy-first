import { LitElement, html, css } from 'lit';

export class ShinglesService extends LitElement {
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

    .stages-list, .vaccine-eligible, .avoid-list {
      background: #f7fafc;
      padding: 2rem;
      border-radius: 12px;
      margin: 2rem 0;
    }

    .stages-list ul, .vaccine-eligible ul, .avoid-list ul {
      list-style: none;
      padding: 0;
    }

    .stages-list li, .vaccine-eligible li, .avoid-list li {
      padding: 0.75rem 0;
      padding-left: 2rem;
      position: relative;
    }

    .stages-list li::before {
      content: "📅";
      position: absolute;
      left: 0;
    }

    .vaccine-eligible li::before {
      content: "💉";
      position: absolute;
      left: 0;
    }

    .avoid-list li::before {
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

    .vaccine-info {
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
          <h1 class="service-title">Shingles</h1>
          <p class="service-subtitle">Professional treatment for herpes zoster (shingles) through Pharmacy First</p>
          <div class="free-service-badge">
            🆓 Free NHS Service
          </div>
        </div>
      </div>

      <div class="container">
        <section class="content-section">
          <div class="section-content">
            <p>More commonly known as shingles, herpes zoster is an infection triggering a painful rash across the body. In the past, medical advice has been to call 111 or book an urgent appointment with your GP, however with the new Pharmacy First scheme this is no longer necessary.</p>
          </div>
        </section>

        <section class="content-section">
          <h2 class="section-title">What is shingles?</h2>
          <div class="section-content">
            <p>Shingles is a red rash that typically appears on one side of the body. As this infection worsens, it is important to recognise what each stage of shingles looks like:</p>
          </div>
          
          <div class="stages-list">
            <h3>Stages of shingles:</h3>
            <ul>
              <li><strong>Stage 1:</strong> The first stage of shingles is a tingling or painful sensation to the skin. Yet, sometimes this can start out as a headache or feeling unwell.</li>
              <li><strong>Stage 2:</strong> In just a few days, a rash will appear on one side of the body and will often show up in a form of clusters. This is commonly found around the chest, tummy, eye, face, and genitals.</li>
              <li><strong>Stage 3:</strong> Then, the rash will then turn into itchy blisters, full of liquid and ready to dry out and scab. This will happen just a few days after.</li>
            </ul>
          </div>
        </section>

        <section class="content-section">
          <h2 class="section-title">Who can get shingles?</h2>
          <div class="section-content">
            <p>Those at risk of developing shingles are only those who have previously experienced chickenpox. The reason for this is because shingles is caused by the chickenpox virus.</p>
            <p>Whilst this infection is not contagious, it is crucial to avoid those who have previously not had, been exposed to, or received the chickenpox vaccine. Additionally, it is best to avoid:</p>
          </div>

          <div class="avoid-list">
            <h3>People to avoid when you have shingles:</h3>
            <ul>
              <li>Babies less than one years old</li>
              <li>Anyone who is pregnant and has not yet had chickenpox</li>
              <li>People with weak immune systems</li>
            </ul>
          </div>
        </section>

        <section class="content-section">
          <h2 class="section-title">Why do I need the shingles vaccine?</h2>
          <div class="section-content">
            <p>The shingles vaccine is there to prevent the risk of you attracting this unwelcome infection.</p>
            <p>Through the NHS, there is a list of age groups who are eligible to access the shingles vaccine free of charge. These age groups are:</p>
          </div>

          <div class="vaccine-eligible">
            <h3>Eligible for free shingles vaccine:</h3>
            <ul>
              <li>65-year-olds who have reached 65 on or after the 1st of September 2023</li>
              <li>70-79-year-olds who have not yet been vaccinated</li>
              <li>50-year-olds and over who have a severe weak immune system</li>
            </ul>
          </div>

          <div class="vaccine-info">
            <p><strong>Why the vaccine is important:</strong> The reason as to why this vaccine is needed, is to not only avoid shingles itself, but because of the numerous complications it can cause. From muscle weakness to the potential loss of sight, visiting your pharmacy and seeking treatment as soon as you start to feel/experience symptoms, can reduce the chances of these extra problems arising.</p>
          </div>
        </section>

        <section class="content-section">
          <h2 class="section-title">When does shingles go away?</h2>
          <div class="section-content">
            <p>It can take up to four weeks for a shingles rash to disappear. However, in some cases even after the rash has gone away, the skin can still feel painful for a few weeks.</p>
            <p>Because of this, we advise you seek immediate medical attention to prevent long-term complications and ensure a quick recovery.</p>
          </div>
        </section>

        <div class="pharmacy-first-info">
          <h2>How can Pharmacy First help?</h2>
          <p>Before Pharmacy First, those dealing with shingles would have needed to book an emergency GP appointment or call 111. Whereas now, pharmacists can provide the same service as a GP, due to the Pharmacy First service.</p>
          <p>Those who are 18 years and older can turn up to their nearest pharmacy and speak to a pharmacist for immediate medical advice and treatment. So, there is no need to panic!</p>
          <p>If you are experiencing shingles, our team of professionals are ready to provide you with the help you need when you need it.</p>
          
          <div class="age-requirement">
            <strong>Age requirement:</strong> This service is available for adults aged 18 years and above
          </div>
        </div>

        <section class="content-section">
          <h2 class="section-title">Where do I go for help?</h2>
          <div class="section-content">
            <p>Wherever you are, whether it be at home or the park, you can easily find your nearest pharmacy on our website by typing in your postcode. Once you have entered in your location, our map will zoom in and show our nearest pharmacy to you. There is no need to worry about booking an appointment or giving us a heads up before your visit, as with Pharmacy First, our pharmacists will be ready to assist you.</p>
            <a href="#contact" class="cta-button">Find Your Nearest Pharmacy</a>
          </div>
        </section>

        <div class="faq-section">
          <h2 class="section-title">Shingles FAQ's</h2>
          
          <div class="faq-item">
            <div class="faq-question">Should I go to work or school if I have shingles?</div>
            <div class="faq-answer">If your rash is weeping (oozing fluid) and therefore cannot be covered, it is best to stay off school and work until it has dried out. Shingles can spread to others when the rash is oozing fluid, so if this happens it is best to cover the rash loosely or with a non-sticky dressing.</div>
          </div>

          <div class="faq-item">
            <div class="faq-question">If I have shingles, is it too late to have the vaccine?</div>
            <div class="faq-answer">The shingles vaccine is primarily used for prevention rather than treatment. If you currently have shingles, the vaccine won't help with your current outbreak, but it may help prevent future episodes. Speak to your pharmacist about when it would be appropriate to have the vaccine after recovery.</div>
          </div>

          <div class="faq-item">
            <div class="faq-question">What kind of treatment can I receive at the pharmacy for shingles?</div>
            <div class="faq-answer">Our pharmacists can provide antiviral medications, pain relief, and topical treatments to help manage symptoms and speed recovery. They can also provide advice on managing the condition and when to seek further medical attention if complications arise.</div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('shingles-service', ShinglesService);