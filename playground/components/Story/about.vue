<template>
  <section
    class="w-full bg-white py-6 sm:py-8 md:py-10 px-4 sm:px-6"
    style="font-family: 'Inter', sans-serif"
  >
    <!-- Heading -->
    <div class="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
      <h2
        class="text-center text-3xl sm:text-4xl font-normal mb-12 tracking-wider text-[#A57E45]"
        style="font-family: 'Oswald', sans-serif"
      >
        {{ t('about.heading') }}
      </h2>
      <p class="mt-3 sm:mt-4 text-[#145A3A] text-sm sm:text-base md:text-lg leading-relaxed">
        {{ t('about.intro') }}
      </p>
    </div>

    <!-- Card -->
    <div class="max-w-6xl mx-auto rounded-2xl sm:rounded-3xl border border-amber-200 shadow-sm p-5 sm:p-8 md:p-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
        <!-- Left: text + icons -->
        <div class="order-2 md:order-1">
          <p class="text-[#145A3A] text-sm sm:text-base leading-relaxed">
            <span class="font-semibold">BORAN CARE ASIA</span>
            {{ t('about.description') }}
          </p>

          <div class="flex items-center justify-center gap-6 sm:gap-8 mt-8 sm:mt-10">
            <div
              v-for="item in features"
              :key="item.key"
              class="flex flex-col items-center gap-2 w-16 sm:w-20"
            >
              <div
                class="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden flex items-center justify-center shrink-0"
                :class="item.wrapperClass"
              >
                <img
                  :src="item.image"
                  :alt="item.label"
                  class="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                />
              </div>
              <span class="text-xs sm:text-sm text-[#145A3A] text-center leading-tight">
                {{ item.label }}
              </span>
            </div>
          </div>
        </div>

        <!-- Right: image -->
        <div class="order-1 md:order-2">
          <div class="rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11]">
            <img
              src="~/assets/images/boran care our history picture.jpeg"
              alt="BORAN CARE ASIA team"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import peoplePhoto from "assets/images/Frame 122.png";
import healthPhoto from "assets/images/healthy.png";
import futurePhoto from "assets/images/better future.png";

const { t } = useI18n()

// computed so labels update reactively when the user switches language
const features = computed(() => [
  {
    key: "people",
    label: t('about.features.people'),
    image: peoplePhoto,
    wrapperClass: "bg-green-50 border border-green-200",
  },
  {
    key: "health",
    label: t('about.features.health'),
    image: healthPhoto,
    wrapperClass: "bg-green-50 border border-green-200",
  },
  {
    key: "future",
    label: t('about.features.future'),
    image: futurePhoto,
    wrapperClass: "bg-green-50 border border-green-200",
  },
])
</script>