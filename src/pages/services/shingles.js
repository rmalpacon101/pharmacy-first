import { LitElement, html } from 'lit';

export class ShinglesService extends LitElement {
  // Override to use light DOM and enable global styles
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="service-container">
        <section class="service-content-section">
          <div class="service-section-content">
            <p>More commonly known as shingles, herpes zoster is an infection triggering a painful rash across the body. In the past, medical advice has been to call 111 or book an urgent appointment with your GP, however with the new Pharmacy First scheme this is no longer necessary.</p>
          </div>
        </section>

        <section class="service-content-section">
          <h2 class="service-section-title">What is shingles?</h2>
          <div class="service-section-content">
            <p>Shingles is a red rash that typically appears on one side of the body. As this infection worsens, it is important to recognise what each stage of shingles looks like:</p>
            
            <div class="service-info-box">
              <h3>Stages of shingles:</h3>
              
              <div class="cause-item">
                <h4 class="cause-title">🟡 Stage 1: Early symptoms</h4>
                <p class="cause-description">The first stage of shingles is a tingling or painful sensation to the skin. Yet, sometimes this can start out as a headache or feeling unwell.</p>
              </div>

              <div class="cause-item">
                <h4 class="cause-title">🔴 Stage 2: Rash appears</h4>
                <p class="cause-description">In just a few days, a rash will appear on one side of the body and will often show up in a form of clusters. This is commonly found around the chest, tummy, eye, face, and genitals.</p>
              </div>

              <div class="cause-item">
                <h4 class="cause-title">🟤 Stage 3: Blisters and scabs</h4>
                <p class="cause-description">Then, the rash will then turn into itchy blisters, full of liquid and ready to dry out and scab. This will happen just a few days after.</p>
              </div>
            </div>
          </div>
        </section>

        <section class="service-content-section">
          <h2 class="service-section-title">Who can get shingles?</h2>
          <div class="service-section-content">
            <p>Those at risk of developing shingles are only those who have previously experienced chickenpox. The reason for this is because shingles is caused by the chickenpox virus.</p>
            <p>Whilst this infection is not contagious, it is crucial to avoid those who have previously not had, been exposed to, or received the chickenpox vaccine. Additionally, it is best to avoid:</p>
          </div>

          <div class="avoid-list">
            <h3>People to avoid when you have shingles:</h3>
            <ul class="service-list service-symptoms-list">
              <li>Babies less than one years old</li>
              <li>Anyone who is pregnant and has not yet had chickenpox</li>
              <li>People with weak immune systems</li>
            </ul>
          </div>
        </section>

        <section class="service-content-section">
          <h2 class="service-section-title">Why do I need the shingles vaccine?</h2>
          <div class="service-section-content">
            <p>The shingles vaccine is there to prevent the risk of you attracting this unwelcome infection.</p>
            <p>Through the NHS, there is a list of age groups who are eligible to access the shingles vaccine free of charge. These age groups are:</p>
          </div>

          <div class="vaccine-eligible">
            <h3>Eligible for free shingles vaccine:</h3>
            <ul class="service-list service-symptoms-list">
              <li>65-year-olds who have reached 65 on or after the 1st of September 2023</li>
              <li>70-79-year-olds who have not yet been vaccinated</li>
              <li>50-year-olds and over who have a severe weak immune system</li>
            </ul>
          </div>

          <div class="vaccine-info">
            <p><strong>Why the vaccine is important:</strong> The reason as to why this vaccine is needed, is to not only avoid shingles itself, but because of the numerous complications it can cause. From muscle weakness to the potential loss of sight, visiting your pharmacy and seeking treatment as soon as you start to feel/experience symptoms, can reduce the chances of these extra problems arising.</p>
          </div>
        </section>

        <section class="service-content-section">
          <h2 class="service-section-title">When does shingles go away?</h2>
          <div class="service-section-content">
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

        <section class="service-content-section">
          <h2 class="service-section-title">Where do I go for help?</h2>
          <div class="service-section-content">
            <p>Wherever you are, whether it be at home or the park, you can easily find your nearest pharmacy on our website by typing in your postcode. Once you have entered in your location, our map will zoom in and show our nearest pharmacy to you. There is no need to worry about booking an appointment or giving us a heads up before your visit, as with Pharmacy First, our pharmacists will be ready to assist you.</p>
            <a href="#contact" class="service-cta-button">Find Your Nearest Pharmacy</a>
          </div>
        </section>

        <div class="service-faq-section">
          <h2 class="service-section-title">Shingles FAQ's</h2>
          
          <div class="service-faq-item">
            <div class="service-faq-question">Should I go to work or school if I have shingles?</div>
            <div class="service-faq-answer">If your rash is weeping (oozing fluid) and therefore cannot be covered, it is best to stay off school and work until it has dried out. Shingles can spread to others when the rash is oozing fluid, so if this happens it is best to cover the rash loosely or with a non-sticky dressing.</div>
          </div>

          <div class="service-faq-item">
            <div class="service-faq-question">If I have shingles, is it too late to have the vaccine?</div>
            <div class="service-faq-answer">The shingles vaccine is primarily used for prevention rather than treatment. If you currently have shingles, the vaccine won't help with your current outbreak, but it may help prevent future episodes. Speak to your pharmacist about when it would be appropriate to have the vaccine after recovery.</div>
          </div>

          <div class="service-faq-item">
            <div class="service-faq-question">What kind of treatment can I receive at the pharmacy for shingles?</div>
            <div class="service-faq-answer">Our pharmacists can provide antiviral medications, pain relief, and topical treatments to help manage symptoms and speed recovery. They can also provide advice on managing the condition and when to seek further medical attention if complications arise.</div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('shingles-service', ShinglesService);