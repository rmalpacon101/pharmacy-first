import { LitElement, html, css } from 'lit';

export class UtiService extends LitElement {
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

    .symptoms-list, .risk-factors, .treatment-list, .prevention-list {
      background: #f7fafc;
      padding: 2rem;
      border-radius: 12px;
      margin: 2rem 0;
    }

    .symptoms-list ul, .risk-factors ul, .treatment-list ul, .prevention-list ul {
      list-style: none;
      padding: 0;
    }

    .symptoms-list li, .risk-factors li, .treatment-list li, .prevention-list li {
      padding: 0.75rem 0;
      padding-left: 2rem;
      position: relative;
    }

    .symptoms-list li::before {
      content: "🚨";
      position: absolute;
      left: 0;
    }

    .risk-factors li::before {
      content: "⚠️";
      position: absolute;
      left: 0;
    }

    .treatment-list li::before {
      content: "💊";
      position: absolute;
      left: 0;
    }

    .prevention-list li::before {
      content: "🛡️";
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

    .definition-box {
      background: #ebf8ff;
      border-left: 4px solid #4299e1;
      padding: 1.5rem;
      margin: 2rem 0;
      border-radius: 0 8px 8px 0;
    }

    .children-symptoms {
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

    .criteria-list {
      background: #f0fff4;
      padding: 2rem;
      border-radius: 12px;
      margin: 2rem 0;
    }

    .criteria-list ul {
      list-style: none;
      padding: 0;
    }

    .criteria-list li {
      padding: 0.75rem 0;
      padding-left: 2rem;
      position: relative;
    }

    .criteria-list li::before {
      content: "✅";
      position: absolute;
      left: 0;
    }
  `;

  render() {
    return html`
      <div class="service-header">
        <div class="container">
          <h1 class="service-title">Uncomplicated UTI in Women</h1>
          <p class="service-subtitle">Professional treatment for uncomplicated urinary tract infections through Pharmacy First</p>
          <div class="free-service-badge">
            🆓 Free NHS Service
          </div>
        </div>
      </div>

      <div class="container">
        <section class="content-section">
          <div class="section-content">
            <p>Knowing the difference between a complicated vs an uncomplicated UTI can be...complicated. But with Pharmacy First, pharmacists can assess and provide you with advice and treatment at your earliest convenience.</p>
          </div>
        </section>

        <section class="content-section">
          <h2 class="section-title">What is an uncomplicated UTI?</h2>
          
          <div class="definition-box">
            <p><strong>Definition:</strong> Simply, an uncomplicated urinary tract infection is when bacterium creates an infection in the lower urinary tract, including the bladder and urethra. However, when this infection spreads to the kidneys, this is when a UTI is deemed complicated due to many severe health challenges this can create.</p>
          </div>

          <div class="section-content">
            <p>Therefore, it is important to recognise what a UTI is and feels like to enable quick intervention and the prevention of a complicated infection. So, below are the following symptoms that can help you spot a UTI early on:</p>
          </div>
          
          <div class="symptoms-list">
            <h3>Symptoms of a UTI:</h3>
            <ul>
              <li>Needing to pee more than usual (this also includes during the night)</li>
              <li>Pain or a burning sensation when peeing</li>
              <li>Smelly or cloudy pee</li>
              <li>A high temperature</li>
              <li>An extremely low temperature (below 36C)</li>
              <li>Pain in your back, lower tummy or underneath your ribs</li>
              <li>Blood in your pee</li>
              <li>Needing to suddenly pee</li>
            </ul>
          </div>

          <div class="children-symptoms">
            <p><strong>Note for children:</strong> However, in children these symptoms may differ as they can experience wetting the bed (or themselves), being sick or feeling unwell.</p>
          </div>
        </section>

        <section class="content-section">
          <h2 class="section-title">Who does it affect?</h2>
          <div class="section-content">
            <p>Anyone can face a UTI but a key difference between those who experience a complicated vs an uncomplicated UTI is the age and circumstances of those who are infected. For example, those who are classified as experiencing an uncomplicated urinary tract infection are:</p>
          </div>

          <div class="criteria-list">
            <h3>Uncomplicated UTI criteria:</h3>
            <ul>
              <li>Women who are not pregnant</li>
              <li>People without a urinary catheter</li>
              <li>Those who do not regularly experience UTIs</li>
            </ul>
          </div>
        </section>

        <section class="content-section">
          <h2 class="section-title">Why do I get an uncomplicated UTI?</h2>
          <div class="section-content">
            <p>There are many factors as to what can bring about a UTI yet, this is caused by poo bacteria entering the urinary tract. This comes through the urethra, which is a small tube that carries pee out of the body.</p>
            <p>As women have a shorter urethra than men, they are more likely to experience a UTI and for the infection to reach their bladder and kidneys. Therefore, below are additional risks to be aware of that can increase the likelihood of a UTI:</p>
          </div>

          <div class="risk-factors">
            <h3>Risk factors for UTIs:</h3>
            <ul>
              <li>Having sex</li>
              <li>Pregnancy</li>
              <li>Having a weakened immune system</li>
              <li>Not drinking enough liquids</li>
              <li>Not keeping the genital area clean and dry</li>
              <li>Urinary catheters</li>
              <li>Health conditions that block the urinary tract – like kidney stones</li>
              <li>Health conditions that hinder the bladder from emptying – like enlarged prostate (in men) and constipation (in children)</li>
            </ul>
          </div>
        </section>

        <section class="content-section">
          <h2 class="section-title">When does an uncomplicated UTI go?</h2>
          <div class="section-content">
            <p>When it comes to treating an uncomplicated UTI, adhering to the following at-home remedies can help quicken recovery:</p>
          </div>

          <div class="treatment-list">
            <h3>At-home treatment:</h3>
            <ul>
              <li>Taking paracetamol up to four times a day (this will reduce pain and a high temperature)</li>
              <li>Resting and drinking enough fluids (this is to aid in passing pale urine regularly that day)</li>
              <li>Avoid having sex</li>
            </ul>
          </div>

          <div class="section-content">
            <p>Although there is no evidence to suggest cranberry drinks and products can prevent the occurrence of UTIs, other proving methods to deter a UTI include:</p>
          </div>

          <div class="prevention-list">
            <h3>Prevention methods:</h3>
            <ul>
              <li>Peeing straight away after sex</li>
              <li>Drinking plenty of fluids – especially water</li>
              <li>Keeping the genital area clean and dry</li>
              <li>Wiping from front to back when you use the toilet</li>
              <li>Washing the skin around the vagina with water before and after sex</li>
              <li>Changing nappies or disposing soiled incontinence pads</li>
            </ul>
          </div>
        </section>

        <div class="pharmacy-first-info">
          <h2>How does Pharmacy First help?</h2>
          <p>Women between the age of 16-64 years can visit their local pharmacy for advice and treatment from a pharmacist. At the pharmacy, the pharmacist will ask questions related to your situation and point you to the right direction for treatment. This can include self-care, pain relief or a referral to a GP, sexual health clinic and other providers best matched to your infection.</p>
          <p>Breaking the ice, can be awkward and scary but having a professional and confidential conversation with a pharmacist, like ours, is the best service you can begin with for advice and treatment for your uncomplicated urinary tract infection.</p>
          
          <div class="age-requirement">
            <strong>Age requirement:</strong> This service is available for women aged 16-64 years
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
          <h2 class="section-title">Uncomplicated UTI FAQ's</h2>
          
          <div class="faq-item">
            <div class="faq-question">Does cranberry juice help with UTIs?</div>
            <div class="faq-answer">One of the ways to prevent a UTI from coming back is through the likes of cranberry products such as juices or tablets. However, other prevention measures to adhere to are drinking plenty of water, peeing straight after sex and keeping your genital area clean.</div>
          </div>

          <div class="faq-item">
            <div class="faq-question">Can I visit a pharmacy for chronic UTIs?</div>
            <div class="faq-answer">If you experience frequent UTIs (more than 2-3 per year), this may indicate a complicated UTI or underlying condition that requires further investigation. While pharmacists can help with individual episodes, chronic UTIs typically need GP evaluation and specialist care.</div>
          </div>

          <div class="faq-item">
            <div class="faq-question">How long does a UTI last for?</div>
            <div class="faq-answer">With appropriate treatment, most uncomplicated UTIs start to improve within 24-48 hours and fully resolve within 3-5 days. However, it's important to complete any prescribed course of treatment even if symptoms improve earlier.</div>
          </div>

          <div class="faq-item">
            <div class="faq-question">Can men and women experience a UTI?</div>
            <div class="faq-answer">Yes, both men and women can experience UTIs, but they are much more common in women due to anatomy. The Pharmacy First service for uncomplicated UTIs is specifically for women aged 16-64. Men with UTI symptoms should see their GP as male UTIs are generally considered complicated.</div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('uti-service', UtiService);