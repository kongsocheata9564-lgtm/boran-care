<template>
  <section class="bg-[#F8F3E7] py-16 px-4 sm:px-6 lg:px-8" style="font-family: 'Inter', sans-serif;">
    <div class="max-w-6xl mx-auto">
      <h1
        class="text-center text-4xl sm:text-5xl font-extrabold mb-12"
        style="font-family: 'Oswald', sans-serif; color: #A57E45; letter-spacing: 0.08em;"
      >
        {{ $t('contact.title') }}
      </h1>

      <div class="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 items-start">
        <!-- Form Card -->
        <div class="bg-white rounded-[18px] shadow-[0_12px_32px_rgba(74,50,34,0.08)] border border-[#f0e6d2] px-6 py-7 sm:px-9 sm:py-10">
          <form @submit.prevent="handleSubmit">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label class="block text-[0.82rem] font-semibold mb-2" style="color: #A57E45;">{{ $t('contact.firstName') }}</label>
                <input
                  v-model="form.firstName"
                  type="text"
                  required
                  :placeholder="$t('contact.yourFirstName')"
                  class="w-full rounded-[10px] border border-[#e8ddc7] bg-[#fbf9f4] px-4 py-3 text-[0.9rem] text-[#33241a] placeholder-[#b6a88e] hover:border-[#ddccaa] focus:outline-none focus:border-[#b8863e] focus:bg-white focus:ring-[3px] focus:ring-[rgba(184,134,62,0.15)] transition-all duration-200"
                  style="font-family: 'Inter', sans-serif;"
                />
              </div>
              <div>
                <label
                  class="block text-[0.82rem] font-semibold mb-2"
                  style="color: #A57E45;"
                >
                  {{ $t('contact.lastName') }}
                </label>
                <input
                  v-model="form.lastName"
                  type="text"
                  required
                  :placeholder="$t('contact.yourLastName')"
                  class="w-full rounded-[10px] border border-[#e8ddc7] bg-[#fbf9f4] px-4 py-3 text-[0.9rem] text-[#33241a] placeholder-[#b6a88e] hover:border-[#ddccaa] focus:outline-none focus:border-[#b8863e] focus:bg-white focus:ring-[3px] focus:ring-[rgba(184,134,62,0.15)] transition-all duration-200"
                  style="font-family: 'Inter', sans-serif;"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label class="block text-[0.82rem] font-semibold mb-2" style="color: #A57E45;">{{ $t('contact.email') }}</label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  :placeholder="$t('contact.yourEmail')"
                  class="w-full rounded-[10px] border border-[#e8ddc7] bg-[#fbf9f4] px-4 py-3 text-[0.9rem] text-[#33241a] placeholder-[#b6a88e] hover:border-[#ddccaa] focus:outline-none focus:border-[#b8863e] focus:bg-white focus:ring-[3px] focus:ring-[rgba(184,134,62,0.15)] transition-all duration-200"
                  style="font-family: 'Inter', sans-serif;"
                />
              </div>
              <div>
                <label class="block text-[0.82rem] font-semibold mb-2" style="color: #A57E45;">{{ $t('contact.phone') }}</label>
                <input
                  v-model="form.phone"
                  type="tel"
                  :placeholder="$t('contact.yourPhone')"
                  class="w-full rounded-[10px] border border-[#e8ddc7] bg-[#fbf9f4] px-4 py-3 text-[0.9rem] text-[#33241a] placeholder-[#b6a88e] hover:border-[#ddccaa] focus:outline-none focus:border-[#b8863e] focus:bg-white focus:ring-[3px] focus:ring-[rgba(184,134,62,0.15)] transition-all duration-200"
                  style="font-family: 'Inter', sans-serif;"
                />
              </div>
            </div>

            <div class="mb-5">
              <label class="block text-[0.82rem] font-semibold mb-2" style="color: #A57E45;">{{ $t('contact.topic') }}</label>
              <select
                v-model="form.topic"
                required
                class="w-full rounded-[10px] border border-[#e8ddc7] bg-[#fbf9f4] px-4 py-3 text-[0.9rem] text-[#33241a] hover:border-[#ddccaa] focus:outline-none focus:border-[#b8863e] focus:bg-white focus:ring-[3px] focus:ring-[rgba(184,134,62,0.15)] transition-all duration-200"
                style="font-family: 'Inter', sans-serif;"
              >
                <option value="" disabled selected>{{ $t('contact.selectTopic') }}</option>
                <option value="Product Inquiry">{{ $t('contact.topicProduct') }}</option>
                <option value="OEM/ODM Partnership">{{ $t('contact.topicPartnership') }}</option>
                <option value="Support">{{ $t('contact.topicSupport') }}</option>
                <option value="Other">{{ $t('contact.topicOther') }}</option>
              </select>
            </div>

            <div class="mb-7">
              <label class="block text-[0.82rem] font-semibold mb-2" style="color: #A57E45;">{{ $t('contact.message') }}</label>
              <textarea
                v-model="form.message"
                required
                rows="5"
                :placeholder="$t('contact.writeMessage')"
                class="w-full rounded-[10px] border border-[#e8ddc7] bg-[#fbf9f4] px-4 py-3 text-[0.9rem] text-[#33241a] placeholder-[#b6a88e] hover:border-[#ddccaa] focus:outline-none focus:border-[#b8863e] focus:bg-white focus:ring-[3px] focus:ring-[rgba(184,134,62,0.15)] resize-y leading-relaxed transition-all duration-200"
                style="font-family: 'Inter', sans-serif;"
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="status === 'sending'"
              class="inline-flex items-center gap-2.5 rounded-full bg-[#A57E45] px-8 py-3.5 text-white text-[0.95rem] font-semibold shadow-[0_8px_18px_rgba(165,126,69,0.3)] hover:bg-[#8d6a37] hover:shadow-[0_12px_28px_rgba(141,106,55,0.4)] hover:-translate-y-0.5 hover:scale-[1.05] active:translate-y-0 active:scale-[0.98] active:shadow-[0_4px_12px_rgba(141,106,55,0.3)] transition-all duration-200 disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:scale-100 disabled:hover:shadow-[0_8px_18px_rgba(165,126,69,0.3)]"
              style="font-family: 'Inter', sans-serif;"
            >
              {{ status === 'sending'
                ? $t('contact.sending')
                : $t('contact.send')
                }}
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" class="transition-transform duration-200">
                <path d="M3 12l18-8-8 18-2-8-8-2z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" />
              </svg>
            </button>

            <p v-if="status === 'success'" class="mt-3 text-[0.85rem] text-[#2f6a3f]">
              {{ $t('contact.success') }}
            </p>
            <p v-if="status === 'error'" class="mt-3 text-[0.85rem] text-[#a33a2a]">
              {{ $t('contact.error') }}
            </p>
          </form>
        </div>

        <!-- Contact Info Card -->
        <div class="bg-white rounded-[18px] shadow-[0_12px_32px_rgba(74,50,34,0.08)] border border-[#f0e6d2] px-6 py-7 sm:px-8">
          <div class="space-y-0 divide-y divide-[#f0e6d2]">
            <div class="flex items-center gap-4 py-3.5 first:pt-0 group cursor-pointer">
              <span class="flex-shrink-0 w-11 h-11 rounded-full bg-[#F2E4C4] flex items-center justify-center group-hover:bg-[#A57E45] group-hover:shadow-lg group-hover:shadow-[#A57E45]/25 group-hover:scale-110 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#A57E45] group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/>
                </svg>
              </span>
              <div>
                <p class="text-[0.75rem] font-medium text-[#b6a88e] mb-0.5" style="font-family: 'Inter', sans-serif;">{{ $t('contact.phone') }}</p>
                <a href="tel:+85512973500" class="text-[#1F3A2E] font-semibold group-hover:text-[#A57E45] transition-colors duration-300" style="font-family: 'Inter', sans-serif;">+855 12 973 500</a>
              </div>
            </div>

            <div class="flex items-center gap-4 py-3.5 group cursor-pointer">
              <span class="flex-shrink-0 w-11 h-11 rounded-full bg-[#F2E4C4] flex items-center justify-center group-hover:bg-[#A57E45] group-hover:shadow-lg group-hover:shadow-[#A57E45]/25 group-hover:scale-110 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#A57E45] group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 6-10 7L2 6"/>
                </svg>
              </span>
              <div>
                <p class="text-[0.75rem] font-medium text-[#b6a88e] mb-0.5" style="font-family: 'Inter', sans-serif;">{{ $t('contact.email') }}</p>
                <a href="mailto:ceo@borancare.com" class="text-[#1F3A2E] font-semibold group-hover:text-[#A57E45] transition-colors duration-300" style="font-family: 'Inter', sans-serif;">ceo@borancare.com</a>
              </div>
            </div>

            <div class="flex items-start gap-4 py-3.5 last:pb-0 group cursor-pointer">
              <span class="flex-shrink-0 w-11 h-11 rounded-full bg-[#F2E4C4] flex items-center justify-center group-hover:bg-[#A57E45] group-hover:shadow-lg group-hover:shadow-[#A57E45]/25 group-hover:scale-110 transition-all duration-300 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#A57E45] group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </span>
              <div>
                <p class="text-[0.75rem] font-medium text-[#b6a88e] mb-0.5" style="font-family: 'Inter', sans-serif;">{{ $t('contact.location') }}</p>
                <p class="text-[#1F3A2E] font-semibold group-hover:text-[#A57E45] transition-colors duration-300 leading-snug" style="font-family: 'Inter', sans-serif;">
                  {{ $t('contact.address') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Map -->
      <div class="relative mt-10 rounded-2xl overflow-hidden shadow-sm h-[420px]">
        <iframe
          class="w-full h-full border-0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Boran+Care+Asia+Co.,+Ltd,+Serei+Saophoan,+Cambodia&output=embed"
        ></iframe>

        <div class="absolute left-4 bottom-4 bg-white rounded-xl shadow-lg p-4 max-w-[260px]">
          <div class="flex items-start gap-3">
            <span class="flex-shrink-0 w-9 h-9 rounded-full bg-[#F2E4C4] flex items-center justify-center mt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#A57E45]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </span>
            <div>
              <h3 class="font-semibold text-[#1F3A2E] mb-1" style="font-family: 'Inter', sans-serif;">{{ $t('contact.office') }}</h3>
              <p class="text-sm text-[#1F3A2E]/80 leading-snug mb-2" style="font-family: 'Inter', sans-serif;">
                {{ $t('contact.address') }}
              </p>
              <a
                :href="directionsUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm font-semibold hover:underline"
                style="color: #A57E45; font-family: 'Inter', sans-serif;"
              >
                {{ $t('contact.direction') }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const WEB3FORMS_ACCESS_KEY = 'e5d9ca62-cfb2-4eed-b7c8-ddfd488f3e7d'

const directionsUrl =
  'https://www.google.com/maps/dir/?api=1&destination=' +
  encodeURIComponent(
    'Boran Care Asia Co., Ltd, Pongro Village, Sangkat Kampong Svay, Serei Saophoan City, Banteay Meanchey Province, Cambodia'
  )

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  topic: '',
  message: '',
})

const status = ref('idle')

async function handleSubmit() {
  status.value = 'sending'
  try {
    const res = await $fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: {
        access_key: WEB3FORMS_ACCESS_KEY,
        name: `${form.firstName} ${form.lastName}`.trim(),
        email: form.email,
        phone: form.phone,
        subject: form.topic ? `New Contact Topic: ${form.topic}` : 'New Contact Message',
        message: form.message,
      },
    })

    if (res?.success) {
      status.value = 'success'
      form.firstName = ''
      form.lastName = ''
      form.email = ''
      form.phone = ''
      form.topic = ''
      form.message = ''
    } else {
      status.value = 'error'
    }
  } catch (e) {
    status.value = 'error'
  }
}
</script>