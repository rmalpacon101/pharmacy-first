import { LitElement, html, css } from 'lit';

export class InfectedInsectBitesService extends LitElement {
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

    .bite-types {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin: 2rem 0;
    }

    .bite-type-card {
      background: #f7fafc;
      padding: 2rem;
      border-radius: 12px;
      border-left: 4px solid #4299e1;
    }

    .bite-type-title {
      font-weight: 700;
      color: #2d3748;
      margin-bottom: 1rem;
      font-size: 1.25rem;
    }

    .treatment-list, .prevention-list {
      background: #f7fafc;
      padding: 2rem;
      border-radius: 12px;
      margin: 2rem 0;
    }

    .treatment-list ul, .prevention-list ul {
      list-style: none;
      padding: 0;
    }

    .treatment-list li, .prevention-list li {
      padding: 0.75rem 0;
      padding-left: 2rem;
      position: relative;
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
  `;

  render() {
    return html`
      <div class="container">
        <section class="content-section">
          <div class="section-content">
            <p>Simply, an insect bite is a rash, sting, or mark from an insect. In the UK, the most common types of bites are from creatures like bees, wasps, hornets, mosquitos, ticks, horseflies, midges, mites, and fleas.</p>
            <p>Usually, at-home remedies can ease the symptoms of an insect bite. However, if the bite begins to look/feel worse or infected, you can now see a pharmacist for advanced advice and treatment.</p>
          </div>
        </section>

        <section class="content-section">
          <h2 class="section-title">What does an infected insect bite look like?</h2>
          <div class="section-content">
            <p>Each bite from an insect will look different. Some will look worse than others, and some can cause serious health implications, so it is important to understand what each insect bite looks like. No matter the insect your bite is from, if the bite starts to swell and feel painful it is likely it has become infected.</p>
          </div>

          <div class="bite-types">
            <div class="bite-type-card">
              <div class="bite-type-title">🐝 Bees, hornets, and wasps</div>
              <p>A sting from either a bee, hornet or wasp will look like a small mark where the stinger has entered the skin. In some cases, the stinger can get stuck, so it is crucial you never pull it as you could potentially squeeze out the poison instead. Rather, brush the stinger sideways with your fingernail or with a bank card and wash the area with soapy water.</p>
            </div>

            <div class="bite-type-card">
              <div class="bite-type-title">🦟 Mosquito</div>
              <p>A mosquito bite typically appears as a small spot, causing the skin to raise. In addition, this spot will also become irritably itchy.</p>
            </div>

            <div class="bite-type-card">
              <div class="bite-type-title">🕷️ Tick</div>
              <p>When you are bitten by a tick, the insect will still be attached to your skin. Therefore, you must use fine-tipped tweezers to carefully grab the tick as close to the skin and pull it upwards. Once you have gently removed the tick, dispose of it, and clean the bite with antiseptic or soapy water.</p>
              <div class="warning-box">
                <strong>Warning:</strong> If your skin starts to show a rash that looks like a bullseye, it is likely you have caught Lyme disease, which can be caused by a tick bite. For this, visit your local pharmacy for treatment and advice.
              </div>
            </div>

            <div class="bite-type-card">
              <div class="bite-type-title">🪰 Horsefly</div>
              <p>Horsefly bites are uncomfortable and look unpleasant. These bites are large, painful and can sometimes bleed. Quite often a horsefly bite can be infected, so it is important to treat this bite as soon as possible.</p>
            </div>

            <div class="bite-type-card">
              <div class="bite-type-title">🪰 Midge</div>
              <p>Midge bites show up as small marks that cause the skin to raise in a form of clusters.</p>
            </div>

            <div class="bite-type-card">
              <div class="bite-type-title">🕷️ Mite</div>
              <p>When bitten by a mite, itchy lumps will appear on the skin. Sometimes these lumps can develop into sore blisters.</p>
            </div>

            <div class="bite-type-card">
              <div class="bite-type-title">🪲 Fleas</div>
              <p>Unlike any other bites, a flea bite will be found in groups below the knees. These will appear as red marks and can feel lumpy.</p>
            </div>
          </div>
        </section>

        <section class="content-section">
          <h2 class="section-title">Who can be affected?</h2>
          <div class="section-content">
            <p>Insect bites can happen to anyone at any given time, however those who spend their time engaging in outdoor activities like camping and hiking are at a higher risk. Getting an infection from an insect bite can occur when a bite or sting is not carefully removed, cleaned, or treated.</p>
          </div>
        </section>

        <section class="content-section">
          <h2 class="section-title">How to treat an insect bite before it becomes infected?</h2>
          <div class="section-content">
            <p>To lower the chance of an infection occurring, it is important to clear your skin first from any insect or stinger and wash yourself with soap and water. However, there are further at-home remedies you can do to lower the risk of an insect bite and to ease your symptoms:</p>
          </div>

          <div class="treatment-list">
            <h3>At-home treatment:</h3>
            <ul>
              <li>Keep the area affected raised</li>
              <li>Take painkillers like paracetamol and ibuprofen (only if painful)</li>
              <li>Put an ice pack or wrap the bite/sting with a cold, clean cloth for 20 minutes (only if swollen)</li>
            </ul>
          </div>

          <div class="section-content">
            <p>If your bite has become infected, a pharmacist can best advise you on what medications would help ease your symptoms the best.</p>
          </div>
        </section>

        <section class="content-section">
          <h2 class="section-title">When does an infected insect bite go away?</h2>
          <div class="section-content">
            <p>In just a few days an insect bite or sting will start to improve and look better. However, an infected insect bite will need advice and treatment from a pharmacist, who can prescribe you with antibiotics or other medications that will increase and speed recovery.</p>
          </div>
        </section>

        <div class="pharmacy-first-info">
          <h2>Why do I need Pharmacy First?</h2>
          <p>Pharmacy First enables those with an infected insect bite in the UK, to receive immediate medical attention, advice and treatment from a pharmacist at their nearest pharmacy. At our pharmacies, our pharmacists can advise and prescribe you with medications like painkillers, antihistamines, steroid creams and more to treat your infection.</p>
          <p>This service is accessible to anyone aged 1 years and older, providing quick and easy support to those wanting to avoid booking and waiting to see their GP.</p>
          
          <div class="age-requirement">
            <strong>Age requirement:</strong> This service is available for anyone aged 1 year and above
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
          <h2 class="section-title">Infected Insect Bites FAQ's</h2>
          
          <div class="faq-item">
            <div class="faq-question">What will happen if I leave my infected insect bite untreated?</div>
            <div class="faq-answer">Sometimes this can lead to a serious allergic reaction. If you begin to develop an allergic reaction, we advise you to seek urgent medical help such as ringing 111 or calling for an urgent GP appointment.</div>
          </div>

          <div class="faq-item">
            <div class="faq-question">Should I try removing stingers or insects from my skin?</div>
            <div class="faq-answer">For bee stings, brush the stinger sideways with your fingernail or bank card - never pull it out as this can release more poison. For ticks, use fine-tipped tweezers to grab as close to the skin as possible and pull straight up. Always clean the area afterwards with antiseptic or soapy water.</div>
          </div>

          <div class="faq-item">
            <div class="faq-question">Is it best to keep my insect bite covered up?</div>
            <div class="faq-answer">It depends on the bite. Generally, keeping the bite clean and dry is most important. If the bite is oozing or bleeding, a loose, clean dressing can help protect it. However, many bites heal better when exposed to air. Your pharmacist can advise on the best approach for your specific situation.</div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('infected-insect-bites-service', InfectedInsectBitesService);