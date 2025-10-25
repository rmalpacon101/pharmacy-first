import { LitElement, html } from 'lit';

export class EaracheService extends LitElement {
  // Override to use light DOM and enable global styles
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="service-container">
        <section class="service-content-section">
          <h2 class="service-section-title">What is earache?</h2>
          <div class="service-section-content">
            <p>Earache is simply, a sharp, dull, or burning feeling that causes pain to one or both of your ears. Often, these uncomfortable symptoms are consistent, but can often come and go. However, for different age groups earache can affect them differently, particularly in babies and young children.</p>
          </div>
        </section>

        <section class="service-content-section">
          <h2 class="service-section-title">Who can get earache?</h2>
          <div class="service-section-content">
            <p>Unfortunately, earache is a common ailment, and can impact anyone. However, ear pain tends to affect and be spotted differently in babies and young children, as they can experience more symptoms such as:</p>
          </div>
          
          <div class="service-info-box">
            <h3>Symptoms in babies and young children:</h3>
            <ul class="service-list service-symptoms-list">
              <li>They do not react to certain sounds</li>
              <li>Losing their balance</li>
              <li>Appear irritable and restless</li>
              <li>Have a high temperature (38C or above)</li>
              <li>They rub or pull at their ear</li>
              <li>Be off their food</li>
            </ul>
          </div>
        </section>

        <section class="service-content-section">
          <h2 class="service-section-title">Why do I have earache?</h2>
          <div class="service-section-content">
            <p>By now, you must be wondering what causes earache, or at least why does it occur? So, here is a list of five causes that often bring about earache:</p>

            <div class="service-info-box">
              <h3>Common causes of earache:</h3>
              
              <div class="cause-item">
                <h4 class="cause-title">🦠 Ear infection</h4>
                <p class="cause-description">Outer ear infection (otherwise known as otitis externa) can cause extreme pain to the ear along with itchiness or irritation around the ear canal. This results in redness and swelling as well as pressure inside your ear.</p>
              </div>

              <div class="cause-item">
                <h4 class="cause-title">🧽 Earwax build-up</h4>
                <p class="cause-description">Usually, earwax tends to fall out on its own however, if you start to experience hearing loss, a sensation of your ears feeling blocked, dizziness, sickness or a ringing and pain in your ear, you must speak to a pharmacist for advice.</p>
              </div>

              <div class="cause-item">
                <h4 class="cause-title">🦷 Toothache</h4>
                <p class="cause-description">When you experience toothache, it is likely you will also experience earache. This occurs because the pain from the tooth tends to radiate to surrounding areas like the ear, potentially triggering infections.</p>
              </div>

              <div class="cause-item">
                <h4 class="cause-title">🤒 Flu</h4>
                <p class="cause-description">Adults tend to experience a variety of symptoms when they have the flu like headaches, a high temperature and a dry cough. But in younger children, earache as well as low energy tends to be a symptom of the flu.</p>
              </div>

              <div class="cause-item">
                <h4 class="cause-title">👂 Eustachian tube dysfunction</h4>
                <p class="cause-description">When the mucosal lining of the eustachian tube is swollen or unable to open and close properly, this can cause extreme pain to the ear. Unfortunately, this mostly affects young children, as their eustachian tubes are smaller therefore, it is harder for them to drain fluid out of their ear.</p>
              </div>
            </div>
          </div>
        </section>

        <section class="service-content-section">
          <h2 class="service-section-title">When does earache stop?</h2>
          <div class="service-section-content">
            <p>The time it takes for earache to improve, entirely depends on its cause, but usually this tends to be within a few days. However, here are a couple of at-home remedies you can do to quicken ear pain relief:</p>

            <div class="service-info-box">
              <h3>At-home remedies:</h3>
              <ul class="service-list service-treatment-list">
                <li>Painkillers (paracetamol and ibuprofen)</li>
                <li>A warm or cold flannel on the ear</li>
              </ul>
            </div>
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

        <section class="service-content-section">
          <h2 class="service-section-title">Where do I go for help?</h2>
          <div class="service-section-content">
            <p>Wherever you are, whether it be at home or the park, you can easily find your nearest pharmacy on our website by typing in your postcode. Once you have entered in your location, our map will zoom in and show our nearest pharmacy to you. There is no need to worry about booking an appointment or giving us a heads up before your visit, as with the new Pharmacy First scheme our pharmacists will be ready to assist you.</p>
            <a href="/#contact" class="service-cta-button">Contact us</a>
          </div>
        </section>

        <div class="service-faq-section">
          <h2>Earache FAQ's</h2>
          
          <div class="service-faq-item">
            <div class="service-faq-question">Why is earache common in young children?</div>
            <div class="service-faq-answer">Earache can be a common problem in young children due to bacteria being able to pass from the nose to the ears more easily. If your child is feeling discomfort or pain, visit your local pharmacy and speak to a pharmacist for help.</div>
          </div>

          <div class="service-faq-item">
            <div class="service-faq-question">Can I still visit a pharmacist for earache, even though I am not within the age criteria?</div>
            <div class="service-faq-answer">While the Pharmacy First service for earache is specifically for ages 1-17, pharmacists can still provide general advice and over-the-counter treatments for adults. For persistent or severe symptoms in adults, we recommend consulting your GP.</div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('earache-service', EaracheService);