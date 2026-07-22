<template>
  <section class="bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans" style="font-family: 'Inter', sans-serif;">
    <div class="max-w-6xl mx-auto">
      <h1
        class="text-center text-3xl sm:text-4xl font-normal mb-12 tracking-wider text-[#A57E45]"
        style="font-family: 'Oswald', sans-serif;"
      >
        {{ $t('contact.title') }}
      </h1>

      <div class="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 items-start">
        <!-- Form Card -->
        <div class="bg-white rounded-[18px] shadow-[0_12px_32px_rgba(74,50,34,0.08)] border border-[#f0e6d2] px-6 py-7 sm:px-9 sm:py-10">
          <form @submit.prevent="handleSubmit">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label class="font-oswald block text-[0.82rem] font-semibold mb-2 text-[#A57E45] tracking-wider">{{ $t('contact.firstName') }}</label>
                <input
                  v-model="form.firstName"
                  type="text"
                  required
                  :placeholder="$t('contact.yourFirstName')"
                  class="font-oswald w-full rounded-[10px] border border-[#e8ddc7] bg-[#fbf9f4] px-4 py-3 text-[0.9rem] text-[#33241a] placeholder-[#145A3A]/50 hover:border-[#ddccaa] focus:outline-none focus:border-[#b8863e] focus:bg-white focus:ring-[3px] focus:ring-[rgba(184,134,62,0.15)] transition-all duration-200"
                />
              </div>
              <div>
                <label class="font-oswald block text-[0.82rem] font-semibold mb-2 text-[#A57E45] tracking-wider">{{ $t('contact.lastName') }}</label>
                <input
                  v-model="form.lastName"
                  type="text"
                  required
                  :placeholder="$t('contact.yourLastName')"
                  class="font-oswald w-full rounded-[10px] border border-[#e8ddc7] bg-[#fbf9f4] px-4 py-3 text-[0.9rem] text-[#33241a] placeholder-[#145A3A]/50 hover:border-[#ddccaa] focus:outline-none focus:border-[#b8863e] focus:bg-white focus:ring-[3px] focus:ring-[rgba(184,134,62,0.15)] transition-all duration-200"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label class="font-oswald block text-[0.82rem] font-semibold mb-2 text-[#A57E45] tracking-wider">{{ $t('contact.email') }}</label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  :placeholder="$t('contact.yourEmail')"
                  class="font-oswald w-full rounded-[10px] border border-[#e8ddc7] bg-[#fbf9f4] px-4 py-3 text-[0.9rem] text-[#33241a] placeholder-[#145A3A]/50 hover:border-[#ddccaa] focus:outline-none focus:border-[#b8863e] focus:bg-white focus:ring-[3px] focus:ring-[rgba(184,134,62,0.15)] transition-all duration-200"
                />
              </div>
              <div>
                <label class="font-oswald block text-[0.82rem] font-semibold mb-2 text-[#A57E45] tracking-wider">{{ $t('contact.phone') }}</label>
                <input
                  v-model="form.phone"
                  type="tel"
                  :placeholder="$t('contact.yourPhone')"
                  class="font-oswald w-full rounded-[10px] border border-[#e8ddc7] bg-[#fbf9f4] px-4 py-3 text-[0.9rem] text-[#33241a] placeholder-[#145A3A]/50 hover:border-[#ddccaa] focus:outline-none focus:border-[#b8863e] focus:bg-white focus:ring-[3px] focus:ring-[rgba(184,134,62,0.15)] transition-all duration-200"
                />
              </div>
            </div>

            <div class="mb-5">
              <label class="font-oswald block text-[0.82rem] font-semibold mb-2 text-[#A57E45] tracking-wider">{{ $t('contact.topic') }}</label>
              <input
                v-model="form.topic"
                type="text"
                required
                :placeholder="$t('contact.selectTopic')"
                class="font-oswald w-full rounded-[10px] border border-[#e8ddc7] bg-[#fbf9f4] px-4 py-3 text-[0.9rem] text-[#33241a] placeholder-[#145A3A]/50 hover:border-[#ddccaa] focus:outline-none focus:border-[#b8863e] focus:bg-white focus:ring-[3px] focus:ring-[rgba(184,134,62,0.15)] transition-all duration-200"
              />
            </div>

            <div class="mb-7">
              <label class="font-oswald block text-[0.82rem] font-semibold mb-2 text-[#A57E45] tracking-wider">{{ $t('contact.message') }}</label>
              <textarea
                v-model="form.message"
                required
                rows="5"
                :placeholder="$t('contact.writeMessage')"
                class="font-oswald w-full rounded-[10px] border border-[#e8ddc7] bg-[#fbf9f4] px-4 py-3 text-[0.9rem] text-[#33241a] placeholder-[#145A3A]/50 hover:border-[#ddccaa] focus:outline-none focus:border-[#b8863e] focus:bg-white focus:ring-[3px] focus:ring-[rgba(184,134,62,0.15)] resize-y leading-relaxed transition-all duration-200"
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="status === 'sending'"
              class="font-oswald inline-flex items-center gap-2.5 rounded-full bg-[#A57E45] px-8 py-3.5 text-white text-[0.95rem] font-semibold shadow-[0_8px_18px_rgba(165,126,69,0.3)] hover:bg-[#8d6a37] hover:shadow-[0_12px_28px_rgba(141,106,55,0.4)] hover:-translate-y-0.5 hover:scale-[1.05] active:translate-y-0 active:scale-[0.98] active:shadow-[0_4px_12px_rgba(141,106,55,0.3)] transition-all duration-200 disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:scale-100 disabled:hover:shadow-[0_8px_18px_rgba(165,126,69,0.3)]"
            >
              {{ status === 'sending'
                ? $t('contact.sending')
                : $t('contact.send')
                }}
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" class="transition-transform duration-200">
                <path d="M3 12l18-8-8 18-2-8-8-2z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" />
              </svg>
            </button>

            <p v-if="status === 'success'" class="font-oswald mt-3 text-[0.85rem] text-[#2f6a3f] tracking-wide">
              {{ $t('contact.success') }}
            </p>
            <p v-if="status === 'error'" class="font-oswald mt-3 text-[0.85rem] text-[#a33a2a] tracking-wide">
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
                <p class="font-oswald text-[0.75rem] font-medium text-[#b6a88e] group-hover:text-[#A57E45] mb-0.5 transition-colors duration-300 tracking-wide">{{ $t('contact.phone') }}</p>
                <a href="tel:+85512973500" class="font-oswald font-normal text-[#145A3A] group-hover:text-[#A57E45] transition-colors duration-300">+855 12 973 500</a>
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
                <p class="font-oswald text-[0.75rem] font-medium text-[#b6a88e] group-hover:text-[#A57E45] mb-0.5 transition-colors duration-300 tracking-wide">{{ $t('contact.email') }}</p>
                <a href="mailto:ceo@borancare.com" class="font-oswald font-normal text-[#145A3A] group-hover:text-[#A57E45] transition-colors duration-300">ceo@borancare.com</a>
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
                <p class="font-oswald text-[0.75rem] font-medium text-[#b6a88e] group-hover:text-[#A57E45] mb-0.5 transition-colors duration-300 tracking-wide">{{ $t('contact.location') }}</p>

                <!-- whitespace-pre-line forces the text to break exactly where you put \n in your JSON file -->
                <p class="font-oswald font-normal text-[#145A3A] group-hover:text-[#A57E45] transition-colors duration-300 leading-snug whitespace-pre-line tracking-wide">
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
      </div>
    </div>
  </section>
</template>

<script setup>
const config = useRuntimeConfig()

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
        access_key: config.public.web3formsKey,
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');

.font-oswald {
  font-family: 'Oswald', sans-serif;
}
</style>