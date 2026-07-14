<template>
  <section class="w-full !p-0 !m-0 -mx-[calc((100vw-100%)/2)] w-[100vw] overflow-hidden">
    <div class="relative w-full h-[45dvh] min-h-[260px] sm:h-dvh">
      <!-- Image Strip -->
      <div class="absolute inset-0 flex">
        <div
          v-for="(panel, i) in panels"
          :key="panel.id"
          class="relative flex-1 overflow-hidden group"
          :class="i !== panels.length - 1 ? 'border-r-[3px] border-[#c9a45c]' : ''"
        >
          <!-- Background Image -->
          <img
            :src="panel.image"
            :alt="panel.alt"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            :class="i === 0 ? 'object-[75%_center]' : 'object-center'"
          />

          <!-- Dark Overlay -->
          <div class="absolute inset-0 bg-black/20"></div>

          <!-- Text -->
          <div class="absolute inset-0 z-10 flex items-center justify-center px-2">
            <h2 class="hero-title uppercase text-white text-center">
              {{ panel.text }}
            </h2>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

import { computed } from 'vue'

import cocoonsImg from '~/assets/images/dn1.jpg'
import herbsImg from '~/assets/images/kroch-serj.jpg'
import templeImg from '~/assets/images/br1.jpg'
import aloeImg from '~/assets/images/p3.png'
import turmericImg from '~/assets/images/lap.jpg'


const { t } = useI18n()


const panels = computed(() => [
  {
    id: 1,
    image: cocoonsImg,
    alt: 'Silk cocoons',
    text: t('hero.panels.inspired')
  },

  {
    id: 2,
    image: herbsImg,
    alt: 'Bergamot and Khmer herbs',
    text: t('hero.panels.nature')
  },

  {
    id: 3,
    image: templeImg,
    alt: 'Bayon temple',
    text: t('hero.panels.perfected')
  },

  {
    id: 4,
    image: aloeImg,
    alt: 'Aloe vera',
    text: t('hero.panels.by')
  },

  {
    id: 5,
    image: turmericImg,
    alt: 'Turmeric',
    text: t('hero.panels.innovation')
  }
])

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Oswald:wght@500;600;700&display=swap');

.hero-title {
  font-family: 'Oswald', 'Inter', sans-serif;
  font-weight: 600;
  font-size: clamp(1.5rem, 4vw, 4rem);
  line-height: 1;
  letter-spacing: 0.02em;
  white-space: nowrap;

  /* Desktop position (same as your original) */
  transform: translateY(18vh);

  text-shadow:
    2px 2px 8px rgba(0, 0, 0, 0.7),
    0 0 12px rgba(0, 0, 0, 0.4);

  transition:
    transform .3s ease,
    font-size .3s ease;
}

/* Laptop */
@media (max-width: 1024px) {
  .hero-title {
    transform: translateY(16vh);
    font-size: clamp(1.2rem, 3vw, 3rem);
  }
}

/* Mobile */
@media (max-width: 640px) {
  .hero-title {
    /* Much smaller font */
    font-size: clamp(0.55rem, 2.5vw, 0.8rem);

    /* Allow wrapping */
    white-space: normal;
    overflow-wrap: break-word;
    word-break: break-word;

    /* Fit inside each narrow panel */
    max-width: 90%;
    line-height: 1.15;
    letter-spacing: 0.01em;

    /* Move text a little higher */
    transform: translateY(11vh);
  }
}
</style>