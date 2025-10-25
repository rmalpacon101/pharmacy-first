import { LitElement, html } from 'lit';

export class SoreThroatService extends LitElement {
  // Override to use light DOM and enable global styles
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="service-container">
        <section class="service-content-section">
          <div class="service-section-content">
            <p>Sore throats are a common ailment that usually heals without the need for medication. However, there are times when a sore throat can be a cause of concern and the need for medical intervention is required. With Pharmacy First, any pharmacist can instantly assess your symptoms and provide you with appropriate advice and treatment.</p>
          </div>
        </section>

        <section class="service-content-section">
          <h2 class="service-section-title">What does a sore throat look like?</h2>
          <div class="service-section-content">
            <p>A sore throat can affect people in alternative ways. For example, some people may experience all or a few of the symptoms that cause a sore throat, like:</p>
          </div>
          
          <div class="service-info-box">
            <h3>Common symptoms:</h3>
            <ul class="service-list service-symptoms-list">
              <li>Pain when swallowing</li>
              <li>A scratchy or dry throat</li>
              <li>A red appearance in the back of the throat</li>
              <li>Bad breath</li>
              <li>A moderate cough</li>
              <li>Swollen glands in the neck</li>
            </ul>
          </div>

          <div class="service-section-content">
            <p>Children can experience similar symptoms, but in addition, they too can suffer with a high temperature and appear as less active.</p>
          </div>
        </section>

        <section class="service-content-section">
          <h2 class="service-section-title">Who can get a sore throat?</h2>
          <div class="service-section-content">
            <p>Anyone can experience a sore throat at any age or time in life. Often, a sore throat can be caused by tonsillitis, which mostly impacts children, however, is not limited to teenagers or adults.</p>
          </div>
        </section>

        <section class="service-content-section">
          <h2 class="service-section-title">Why do I have a sore throat?</h2>
          <div class="service-section-content">
            <p>There are many reasons as to why people get a sore throat, yet below are a few examples that can inflict this common ailment:</p>
          </div>

          <div class="service-info-box">
            <h3>Common causes:</h3>
            <ul class="service-list service-causes-list">
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

        <section class="service-content-section">
          <h2 class="service-section-title">When does a sore throat go away?</h2>
          <div class="service-section-content">
            <p>A sore throat can be an unnecessary nuisance bringing about pain and discomfort. Therefore, finding the best medicine or remedy to kill a sore throat is key!</p>
            <p>On its own a sore throat can be cured within a week, however with treatment this can quicken the time it takes to heal. Listed, are at-home treatments you can try to soothe a sore throat:</p>
          </div>

          <div class="service-recovery-info">
            <p><strong>Natural recovery time:</strong> A sore throat typically heals on its own within a week.</p>
          </div>

          <div class="service-info-box">
            <h3>At-home treatments:</h3>
            <ul class="service-list service-treatment-list">
              <li>Gargling warm and salty water in your mouth (it is advised that children should not do this)</li>
              <li>Up the amount of liquids, you drink</li>
              <li>Only eat soft or cool foods</li>
              <li>Stop smoking or avoid smoky surroundings</li>
              <li>Do not suck on ice cubes, lollies, or hard sweets (do not give this to young children as they could potentially choke)</li>
              <li>Lots of rest!</li>
            </ul>
          </div>

          <div class="service-warning-note">
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
        </div>

        <section class="service-content-section">
          <h2 class="service-section-title">Available treatments</h2>
          <div class="service-info-box">
            <h3>Medications available through Pharmacy First:</h3>
            <ul class="service-list service-medications-list">
              <li>Paracetamol and ibuprofen</li>
              <li>Medicated lozenges (this would contain a local anaesthetic, antiseptic or anti-inflammatory treatment)</li>
              <li>Anaesthetic spray</li>
              <li>Antibiotics (this is only given if you have a bacterial infection)</li>
            </ul>
          </div>
        </section>

        <section class="service-content-section">
          <h2 class="service-section-title">Where do I go for help?</h2>
          <div class="service-section-content">
            <p>Wherever you are, whether it be at home or the park, you can easily find your nearest pharmacy on our website by typing in your postcode. Once you have entered in your location, our map will zoom in and show our nearest pharmacies to you. There is no need to worry about booking an appointment or giving us a heads up before your visit, as with Pharmacy First, our pharmacists will be ready to assist you.</p>
            <a href="/#contact" class="service-cta-button">Find Your Nearest Pharmacy</a>
          </div>
        </section>

        <div class="service-faq-section">
          <h2>Sore Throat FAQ's</h2>
          
          <div class="service-faq-item">
            <div class="service-faq-question">Do you need antibiotics to treat a sore throat?</div>
            <div class="service-faq-answer">No, not usually. You will be prescribed with antibiotics if your sore throat is causing or has developed into a bacterial infection. When you visit your local pharmacy, a pharmacist will be able to determine if this line of treatment is suitable for your condition.</div>
          </div>

          <div class="service-faq-item">
            <div class="service-faq-question">What should I do if my sore throat keeps getting worse?</div>
            <div class="service-faq-answer">If your sore throat is getting worse, doesn't improve after a week, or you develop additional symptoms like high fever, difficulty swallowing, or breathing problems, you should seek further medical attention. Your pharmacist can advise whether you need to see a GP or seek urgent medical care.</div>
          </div>

          <div class="service-faq-item">
            <div class="service-faq-question">How can I tell if my sore throat is an infection?</div>
            <div class="service-faq-answer">Signs of a throat infection may include severe pain, high fever, swollen glands, white patches on the throat, or pus on the tonsils. A pharmacist can assess your symptoms and determine if you have a bacterial infection that requires antibiotic treatment, or if it's viral and will resolve with supportive care.</div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('sore-throat-service', SoreThroatService);