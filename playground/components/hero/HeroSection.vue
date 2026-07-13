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
          <div class="absolute inset-0 z-10 flex items-center justify-center px-3">
            <h2 class="hero-title uppercase text-white text-center whitespace-nowrap">
              {{ panel.text }}
            </h2>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import cocoonsImg from '~/assets/images/dn1.jpg'
import herbsImg from '~/assets/images/kroch-serj.jpg'
import templeImg from '~/assets/images/br1.jpg'
import aloeImg from '~/assets/images/p3.png'
import turmericImg from '~/assets/images/lap.jpg'

const panels = [
  {
    id: 1,
    image: cocoonsImg,
    alt: 'Silk cocoons',
    text: 'INSPIRED'
  },
  {
    id: 2,
    image: herbsImg,
    alt: 'Bergamot and Khmer herbs',
    text: 'BY NATURE'
  },
  {
    id: 3,
    image: templeImg,
    alt: 'Bayon temple face carving',
    text: 'PERFECTED'
  },
  {
    id: 4,
    image: aloeImg,
    alt: 'Aloe vera plant',
    text: 'BY'
  },
  {
    id: 5,
    image: turmericImg,
    alt: 'Fresh turmeric root',
    text: 'INNOVATION'
  }
]
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

  transform: translateY(18vh);

  text-shadow:
    2px 2px 8px rgba(0, 0, 0, 0.7),
    0 0 12px rgba(0, 0, 0, 0.4);

  transition:
    transform 0.3s ease,
    font-size 0.3s ease;
}

@media (max-width: 1024px) {
  .hero-title {
    transform: translateY(16vh);
  }
}

@media (max-width: 640px) {
  .hero-title {
    transform: translateY(14vh);
  }
}
</style>