import { LitElement, html } from 'lit';

export class UtiService extends LitElement {
  // Override to use light DOM and enable global styles
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="service-container">
        <section class="service-content-section">
          <div class="service-section-content">
            <p>Knowing the difference between a complicated vs an uncomplicated UTI can be...complicated. But with Pharmacy First, pharmacists can assess and provide you with advice and treatment at your earliest convenience.</p>
          </div>
        </section>

        <section class="service-content-section">
          <h2 class="service-section-title">What is an uncomplicated UTI?</h2>
          
          <div class="definition-box">
            <p><strong>Definition:</strong> Simply, an uncomplicated urinary tract infection is when bacterium creates an infection in the lower urinary tract, including the bladder and urethra. However, when this infection spreads to the kidneys, this is when a UTI is deemed complicated due to many severe health challenges this can create.</p>
          </div>

          <div class="service-section-content">
            <p>Therefore, it is important to recognise what a UTI is and feels like to enable quick intervention and the prevention of a complicated infection. So, below are the following symptoms that can help you spot a UTI early on:</p>
          </div>
          
          <div class="service-info-box">
            <h3>Symptoms of a UTI:</h3>
            <ul class="service-list service-symptoms-list">
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

        <section class="service-content-section">
          <h2 class="service-section-title">Who does it affect?</h2>
          <div class="service-section-content">
            <p>Anyone can face a UTI but a key difference between those who experience a complicated vs an uncomplicated UTI is the age and circumstances of those who are infected. For example, those who are classified as experiencing an uncomplicated urinary tract infection are:</p>
          </div>

          <div class="service-info-box">
            <h3>Uncomplicated UTI criteria:</h3>
            <ul class="service-list service-symptoms-list">
              <li>Women who are not pregnant</li>
              <li>People without a urinary catheter</li>
              <li>Those who do not regularly experience UTIs</li>
            </ul>
          </div>
        </section>

        <section class="service-content-section">
          <h2 class="service-section-title">Why do I get an uncomplicated UTI?</h2>
          <div class="service-section-content">
            <p>There are many factors as to what can bring about a UTI yet, this is caused by poo bacteria entering the urinary tract. This comes through the urethra, which is a small tube that carries pee out of the body.</p>
            <p>As women have a shorter urethra than men, they are more likely to experience a UTI and for the infection to reach their bladder and kidneys. Therefore, below are additional risks to be aware of that can increase the likelihood of a UTI:</p>
          </div>

          <div class="risk-factors">
            <h3>Risk factors for UTIs:</h3>
            <ul class="service-list service-symptoms-list">
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

        <section class="service-content-section">
          <h2 class="service-section-title">When does an uncomplicated UTI go?</h2>
          <div class="service-section-content">
            <p>When it comes to treating an uncomplicated UTI, adhering to the following at-home remedies can help quicken recovery:</p>
          </div>

          <div class="service-info-box">
            <h3>At-home treatment:</h3>
            <ul class="service-list service-symptoms-list">
              <li>Taking paracetamol up to four times a day (this will reduce pain and a high temperature)</li>
              <li>Resting and drinking enough fluids (this is to aid in passing pale urine regularly that day)</li>
              <li>Avoid having sex</li>
            </ul>
          </div>

          <div class="service-section-content">
            <p>Although there is no evidence to suggest cranberry drinks and products can prevent the occurrence of UTIs, other proving methods to deter a UTI include:</p>
          </div>

          <div class="prevention-list">
            <h3>Prevention methods:</h3>
            <ul class="service-list service-symptoms-list">
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

        <section class="service-content-section">
          <h2 class="service-section-title">Where do I go for help?</h2>
          <div class="service-section-content">
            <p>Wherever you are, whether it be at home or the park, you can easily find your nearest pharmacy on our website by typing in your postcode. Once you have entered in your location, our map will zoom in and show our nearest pharmacy to you. There is no need to worry about booking an appointment or giving us a heads up before your visit, as with Pharmacy First, our pharmacists will be ready to assist you.</p>
            <a href="#contact" class="service-cta-button">Find Your Nearest Pharmacy</a>
          </div>
        </section>

        <div class="service-faq-section">
          <h2 class="service-section-title">Uncomplicated UTI FAQ's</h2>
          
          <div class="service-faq-item">
            <div class="service-faq-question">Does cranberry juice help with UTIs?</div>
            <div class="service-faq-answer">One of the ways to prevent a UTI from coming back is through the likes of cranberry products such as juices or tablets. However, other prevention measures to adhere to are drinking plenty of water, peeing straight after sex and keeping your genital area clean.</div>
          </div>

          <div class="service-faq-item">
            <div class="service-faq-question">Can I visit a pharmacy for chronic UTIs?</div>
            <div class="service-faq-answer">If you experience frequent UTIs (more than 2-3 per year), this may indicate a complicated UTI or underlying condition that requires further investigation. While pharmacists can help with individual episodes, chronic UTIs typically need GP evaluation and specialist care.</div>
          </div>

          <div class="service-faq-item">
            <div class="service-faq-question">How long does a UTI last for?</div>
            <div class="service-faq-answer">With appropriate treatment, most uncomplicated UTIs start to improve within 24-48 hours and fully resolve within 3-5 days. However, it's important to complete any prescribed course of treatment even if symptoms improve earlier.</div>
          </div>

          <div class="service-faq-item">
            <div class="service-faq-question">Can men and women experience a UTI?</div>
            <div class="service-faq-answer">Yes, both men and women can experience UTIs, but they are much more common in women due to anatomy. The Pharmacy First service for uncomplicated UTIs is specifically for women aged 16-64. Men with UTI symptoms should see their GP as male UTIs are generally considered complicated.</div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('uti-service', UtiService);