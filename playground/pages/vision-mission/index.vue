<template>
  <div>
    <!-- ===================== VISION & MISSION ===================== -->
    <section class="w-full bg-white py-16 md:py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Heading -->
        <h2
          class="font-bebas text-3xl md:text-4xl tracking-wider text-center text-[#a97c34] mb-10 md:mb-14"
        >
           {{ $t('visionMission.visionSectionTitle') }}
        </h2>

        <!-- Cards Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          <div
            v-for="(item, index) in visionMission"
            :key="index"
            class="relative z-0 hover:z-10 flex flex-col items-center text-center bg-white border border-[#d9b878]/60 rounded-2xl px-6 py-10 sm:px-8 sm:py-12 shadow-sm hover:shadow-lg hover:scale-105 hover:border-[#a97c34] transition-all duration-300 ease-out cursor-pointer"
          >
            <!-- Icon -->
            <div class="mb-6" v-html="item.icon"></div>

            <!-- Title -->
            <h3
              class="font-bebas text-lg md:text-xl tracking-wide text-[#a97c34] mb-3"
            >
              {{ item.title }}
            </h3>

            <!-- Description -->
            <p class="font-inter text-sm leading-relaxed text-emerald-900/90 max-w-[260px]">
              {{ item.description }}
            </p>
          </div>
        </div>

      </div>
    </section>

    <!-- ===================== CORE VALUE ===================== -->
    <section class="w-full bg-white py-16 md:py-20">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Heading -->
        <h2
          class="font-bebas text-3xl md:text-4xl tracking-wider text-center text-[#a97c34] mb-10 md:mb-14"
        >
          {{ $t('visionMission.coreValueSectionTitle') }}
        </h2>

        <!-- Cards Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div
            v-for="(item, index) in coreValues"
            :key="index"
            class="relative z-0 hover:z-10 flex flex-col items-center text-center bg-white border border-[#d9b878]/60 rounded-2xl px-6 py-10 sm:px-8 sm:py-12 shadow-sm hover:shadow-lg hover:scale-105 hover:border-[#a97c34] transition-all duration-300 ease-out cursor-pointer"
          >
            <!-- Icon -->
            <div class="mb-6" v-html="item.icon"></div>

            <!-- Title -->
            <h3
              class="font-bebas text-lg md:text-xl tracking-wide text-[#a97c34] mb-3"
            >
              {{ item.title }}
            </h3>

            <!-- Description -->
            <p class="font-inter text-sm leading-relaxed text-emerald-900/90 max-w-[260px]">
              {{ item.description }}
            </p>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

.font-bebas {
  font-family: "Bebas Neue", sans-serif;
}
.font-inter {
  font-family: "Inter", sans-serif;                                                                                                                                                                                                                                                                                               
}
</style>
<script setup>
const { t } = useI18n()
/**
 * Inline SVG icons so they inherit no external assets.
 * Replace title/description per card as needed.
 */
const eyeIcon = `
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M32 16C18 16 7 24 3 32C7 40 18 48 32 48C46 48 57 40 61 32C57 24 46 16 32 16Z"
    stroke="#a97c34"
    stroke-width="3.5"
    stroke-linejoin="round"
  />
  <circle cx="32" cy="32" r="9" fill="#a97c34" />
  <circle cx="35" cy="29" r="2.2" fill="#ffffff" />
</svg>
`

const targetIcon = `
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="32" cy="32" r="19" stroke="#a97c34" stroke-width="3" />
  <circle cx="32" cy="32" r="12" stroke="#a97c34" stroke-width="3" />
  <circle cx="32" cy="32" r="4" fill="#a97c34" />
  <path
    d="M46 14 L50 10 L52 18 L60 20 L56 24 L36 32 L28 28 L46 14Z"
    fill="#a97c34"
  />
</svg>
`

const shieldIcon = `
<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M36 4 L64 14 V34 C64 52 52 64 36 70 C20 64 8 52 8 34 V14 Z"
    fill="#a97c34"
  />
  <path
    d="M24 36 L32 44 L48 26"
    stroke="#ffffff"
    stroke-width="5"
    stroke-linecap="round"
    stroke-linejoin="round"
    fill="none"
  />
</svg>
`

const leafIcon = `
<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M14 58C14 34 32 12 58 12C58 36 40 58 14 58Z"
    fill="#a97c34"
  />
  <path
    d="M18 54C28 44 38 34 54 18"
    stroke="#ffffff"
    stroke-width="4"
    stroke-linecap="round"
  />
</svg>
`

const handshakeIcon = `
<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="36" cy="36" r="32" fill="#a97c34" />
  <path
    d="M20 36 L30 46 L36 40 L42 46 L52 36"
    stroke="#ffffff"
    stroke-width="4"
    stroke-linecap="round"
    stroke-linejoin="round"
    fill="none"
  />
</svg>
`

const visionMission = computed(() => [
  {
    icon: eyeIcon,
    title: t('visionMission.vision.title'),
    description: t('visionMission.vision.description'),
  },
  {
    icon: targetIcon,
    title: t('visionMission.mission.title'),
    description: t('visionMission.mission.description'),
  },
  
])
const coreValues = computed(() => [
  {
    icon: leafIcon,
    title: t('visionMission.naturalPurity.title'),
    description: t('visionMission.naturalPurity.description'),
  },
  {
    icon: shieldIcon,
    title: t('visionMission.trustedQuality.title'),
    description: t('visionMission.trustedQuality.description'),
  },
  {
    icon: handshakeIcon,
    title: t('visionMission.partnershipGrowth.title'),
    description: t('visionMission.partnershipGrowth.description'),
  },
])
</script>

<style scoped>
.font-bebas {
  font-family: 'Bebas Neue', sans-serif;
}
.font-inter {
  font-family: 'Inter', sans-serif;
}
</style>