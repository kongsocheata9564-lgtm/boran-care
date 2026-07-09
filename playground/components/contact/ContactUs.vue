<template>
  <section class="contact-us">
    <h2 class="contact-us__title">CONTACT US</h2>

    <div class="contact-us__grid">
      <!-- Form -->
      <form class="contact-us__form contact-us__card" @submit.prevent="handleSubmit">
        <div class="contact-us__row">
          <div class="field">
            <label for="first_name">First Name</label>
            <input
              id="first_name"
              v-model="form.first_name"
              type="text"
              name="first_name"
              placeholder="Your first name"
              required
            />
          </div>
          <div class="field">
            <label for="last_name">Last Name</label>
            <input
              id="last_name"
              v-model="form.last_name"
              type="text"
              name="last_name"
              placeholder="Your last name"
              required
            />
          </div>
        </div>

        <div class="contact-us__row">
          <div class="field">
            <label for="email">Email Address</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              name="email"
              placeholder="you@gmail.com"
              required
            />
          </div>
          <div class="field">
            <label for="phone">Phone Number</label>
            <input
              id="phone"
              v-model="form.phone"
              type="tel"
              name="phone"
              placeholder="+855 XX XXX XXXX"
            />
          </div>
        </div>

        <div class="field">
          <label for="topic">Topic</label>
          <select id="topic" v-model="form.topic" name="topic" required>
            <option value="" disabled>Select your topic</option>
            <option value="Product Inquiry">Product Inquiry</option>
            <option value="OEM/ODM Partnership">OEM/ODM Partnership</option>
            <option value="Support">Support</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div class="field">
          <label for="message">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            name="message"
            rows="5"
            placeholder="Write your message here"
            required
          />
        </div>

        <button type="submit" class="contact-us__submit" :disabled="status === 'sending'">
          <span>{{ status === 'sending' ? 'Sending...' : 'Send Message' }}</span>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
            <path d="M3 12l18-8-8 18-2-8-8-2z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" />
          </svg>
        </button>

        <p v-if="status === 'success'" class="contact-us__note contact-us__note--ok">
          Thanks! Your message has been sent.
        </p>
        <p v-if="status === 'error'" class="contact-us__note contact-us__note--error">
          Something went wrong. Please try again.
        </p>
      </form>

      <!-- Info panel -->
      <div class="contact-us__info">
        <h3>Get in Touch</h3>
        <p>
          We would love to hear from you. Whether you have questions, need
          support, or want to learn more about our products, our team is
          here to help.
        </p>

        <ul class="contact-us__list">
          <li>
            <span class="icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.7 21 3 13.3 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" />
              </svg>
            </span>
            <span>+855 12 973 500</span>
          </li>
          <li>
            <span class="icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.4" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.4" />
                <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0V12a9 9 0 1 0-3.5 7.1" stroke="currentColor" stroke-width="1.4" />
              </svg>
            </span>
            <span>ceo@borancare.com</span>
          </li>
          <li>
            <span class="icon icon--location">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                <path d="M12 21s7-6.3 7-11.5A7 7 0 0 0 5 9.5C5 14.7 12 21 12 21z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" />
                <circle cx="12" cy="9.5" r="2.3" stroke="currentColor" stroke-width="1.4" />
              </svg>
            </span>
            <span>Pongro Village, Sangkat Kampong Svay, Sarei Saophoan City, Banteay Meanchey Province</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Map -->
    <div class="contact-us__map">
      <iframe
        title="Office location"
        src="https://www.google.com/maps?q=BORAN+CARE+ASIA+Co.,+LTD.,+Serei+Saophoan,+Cambodia&z=16&output=embed"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
      <div class="contact-us__map-card">
        <span class="icon">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
            <path d="M12 21s7-6.3 7-11.5A7 7 0 0 0 5 9.5C5 14.7 12 21 12 21z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" />
            <circle cx="12" cy="9.5" r="2.3" stroke="currentColor" stroke-width="1.4" />
          </svg>
        </span>
        <div>
          <strong>Our Office</strong>
          <p>Pongro Village, Sarei Saophoan City,<br />Banteay Meanchey</p>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=BORAN+CARE+ASIA+Co.,+LTD.,+Serei+Saophoan,+Cambodia"
            target="_blank"
            rel="noopener"
          >Get Directions →</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const WEB3FORMS_ACCESS_KEY = 'e5d9ca62-cfb2-4eed-b7c8-ddfd488f3e7d'

const form = reactive({
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  topic: '',
  message: ''
})

const status = ref('idle') // idle | sending | success | error

async function handleSubmit() {
  status.value = 'sending'

  try {
    const res = await $fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `New Contact Form Submission - ${form.topic || 'General'}`,
        from_name: `${form.first_name} ${form.last_name}`.trim(),
        name: `${form.first_name} ${form.last_name}`.trim(),
        email: form.email,
        phone: form.phone,
        topic: form.topic,
        message: form.message
      }
    })

    if (res.success) {
      status.value = 'success'
      Object.assign(form, {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        topic: '',
        message: ''
      })
    } else {
      status.value = 'error'
    }
  } catch (err) {
    status.value = 'error'
  }
}
</script>

<style scoped>
.contact-us {
  --gold: #b8863e;
  --gold-dark: #9c6f2e;
  --brown-dark: #4a3222;
  --brown-text: #33241a;
  --cream: #fbf6ec;
  --green: #145a3a;
  --green-dark: #0e4029;
  background: var(--cream);
  padding: 4rem 1.5rem;
  font-family: 'Inter', sans-serif;
  color: var(--brown-text);
}

.contact-us__title {
  text-align: center;
  color: var(--gold);
  font-weight: 800;
  letter-spacing: 0.06em;
  font-size: 2.6rem;
  margin-bottom: 3rem;
  position: relative;
}

.contact-us__grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 2.5rem;
  max-width: 1100px;
  margin: 0 auto;
  align-items: start;
}

@media (max-width: 860px) {
  .contact-us__grid {
    grid-template-columns: 1fr;
  }
}

.contact-us__card {
  background: #fff;
  border-radius: 18px;
  padding: 2.25rem;
  box-shadow: 0 12px 32px rgba(74, 50, 34, 0.08);
  border: 1px solid #f0e6d2;
}


.contact-us__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

@media (max-width: 500px) {
  .contact-us__row {
    grid-template-columns: 1fr;
  }
}

.field {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.25rem;
}

.field label {
  font-size: 0.82rem;
  font-weight: 600;
  margin-bottom: 0.45rem;
  color: var(--green);
}

.field input,
.field select,
.field textarea {
  border: 1px solid #e8ddc7;
  background: #fbf9f4;
  border-radius: 10px;
  padding: 0.75rem 0.95rem;
  font-size: 0.9rem;
  color: var(--brown-text);
  font-family: inherit;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.field input::placeholder,
.field textarea::placeholder {
  color: #b6a88e;
}

.field input:hover,
.field select:hover,
.field textarea:hover {
  border-color: #ddccaa;
}

.field input:focus,
.field select:focus,
.field textarea:focus {
  outline: none;
  border-color: var(--gold);
  background: #fff;
  box-shadow: 0 0 0 3px rgba(184, 134, 62, 0.15);
}

.field textarea {
  resize: vertical;
  line-height: 1.5;
}

.contact-us__submit {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  background: var(--gold);
  color: #fff;
  border: none;
  padding: 0.85rem 2rem;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  box-shadow: 0 8px 18px rgba(184, 134, 62, 0.3);
  transition: background 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease;
}

.contact-us__submit svg {
  transition: transform 0.2s ease;
}

.contact-us__submit:hover:not(:disabled) {
  background: var(--gold-dark);
  box-shadow: 0 8px 18px rgba(156, 111, 46, 0.35);
  transform: translateY(-1px);
}

.contact-us__submit:hover:not(:disabled) svg {
  transform: translate(2px, -2px);
}

.contact-us__submit:active:not(:disabled) {
  transform: translateY(0);
}

.contact-us__submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.contact-us__note {
  margin-top: 0.75rem;
  font-size: 0.85rem;
}

.contact-us__note--ok {
  color: #2f6a3f;
}

.contact-us__note--error {
  color: #a33a2a;
}

.contact-us__info h3 {
  color: var(--gold);
  font-weight: 800;
  font-size: 1.35rem;
  margin-bottom: 0.85rem;
}

.contact-us__info p {
  font-size: 0.92rem;
  line-height: 1.6;
  margin-bottom: 1.75rem;
  color: var(--green);
}

.contact-us__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.35rem;
}

.contact-us__list li {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid #ecdfc4;
  font-size: 0.9rem;
}

.contact-us__list li:last-child {
  border-bottom: none;
  align-items: flex-start;
}

.icon {
  flex-shrink: 0;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #f1e4cc;
  color: var(--gold);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
}

.icon:hover {
  background: var(--gold);
  color: #fff;
  transform: scale(1.08);
}

.contact-us__map {
  position: relative;
  max-width: 1100px;
  margin: 3.5rem auto 0;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 16px 36px rgba(74, 50, 34, 0.1);
}

.contact-us__map iframe {
  width: 100%;
  height: 340px;
  border: 0;
  display: block;
}

.contact-us__map-card {
  position: absolute;
  left: 1.5rem;
  bottom: 1.5rem;
  width: 260px;
  background: #fff;
  border-radius: 14px;
  padding: 1.25rem;
  display: flex;
  gap: 0.75rem;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.14);
}

.contact-us__map-card strong {
  display: block;
  margin-bottom: 0.3rem;
  color: var(--brown-dark);
}

.contact-us__map-card p {
  font-size: 0.82rem;
  line-height: 1.4;
  margin: 0 0 0.6rem;
  color: #6b5c4a;
}

.contact-us__map-card a {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--gold);
  text-decoration: none;
  transition: color 0.2s ease;
}

.contact-us__map-card a:hover {
  color: var(--green-dark);
}

@media (max-width: 640px) {
  .contact-us__map-card {
    position: static;
    width: auto;
    margin: 1rem;
  }
}
</style>