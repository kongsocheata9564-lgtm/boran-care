<template>
  <section class="w-full !p-0 !m-0 -mx-[calc((100vw-100%)/2)] w-[100vw] overflow-hidden">
    <!-- Full screen on desktop, shorter on mobile; 100dvh ignores browser chrome & fixed headers -->
    <div class="relative w-full h-[45dvh] min-h-[260px] sm:h-dvh">
      <!-- image strip -->
      <div class="absolute inset-0 flex">
        <div
          v-for="(panel, i) in panels"
          :key="panel.id"
          class="relative flex-1 overflow-hidden group"
          :class="i !== panels.length - 1 ? 'border-r-[3px] border-[#c9a45c]' : ''"
        >
          <img
            :src="panel.image"
            :alt="panel.alt"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-black/10"></div>
        </div>
      </div>

      <!-- text overlay -->
      <div class="absolute inset-0 pointer-events-none">
        <span
          v-for="word in words"
          :key="word.order"
          class="absolute overflow-hidden"
          :style="{
            left: word.left,
            top: word.top,
            fontSize: 'clamp(0.75rem, 5.2vw, 4.2rem)',
            lineHeight: 1,
          }"
        >
          <span
            class="hero-word block uppercase text-white whitespace-nowrap"
            :class="visible ? 'reveal-in' : 'reveal-out'"
            :style="{
              transitionDelay: visible ? `${word.order * STEP_MS}ms` : '0ms',
              textShadow: '2px 2px 6px rgba(0,0,0,0.55), 0 0 2px rgba(0,0,0,0.4)',
            }"
          >
            {{ word.text }}
          </span>
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import cocoonsImg from '~/assets/images/dn1.jpg'
import herbsImg from '~/assets/images/kroch-serj.jpg'
import templeImg from '~/assets/images/br1.jpg'
import aloeImg from '~/assets/images/p3.png'
import turmericImg from '~/assets/images/lm.jpg'

const panels = [
  { id: 1, image: cocoonsImg, alt: "Silk cocoons" },
  { id: 2, image: herbsImg, alt: "Bergamot and Khmer herbs" },
  { id: 3, image: templeImg, alt: "Bayon temple face carving" },
  { id: 4, image: aloeImg, alt: "Aloe vera plant" },
  { id: 5, image: turmericImg, alt: "Fresh turmeric root" },
];

const words = [
  { order: 0, text: "Inspired", left: "1.4%",  top: "21.7%" },
  { order: 1, text: "By",       left: "20.6%", top: "34.1%" },
  { order: 2, text: "Nature",   left: "24.2%", top: "47.4%" },
  { order: 3, text: "For",      left: "52.3%", top: "48.3%" },
  { order: 4, text: "Skins",    left: "81.5%", top: "48.9%" },
  { order: 5, text: "Made",     left: "41.0%", top: "58.8%" },
  { order: 6, text: "Your",     left: "65.4%", top: "59.4%" },
];

const STEP_MS = 150
const REVEAL_MS = 850
const HOLD_MS = 1800
const HIDE_MS = 600
const GAP_MS = 400

const wordCount = words.length
const timeUntilHide = (wordCount - 1) * STEP_MS + REVEAL_MS + HOLD_MS
const totalCycle = timeUntilHide + HIDE_MS + GAP_MS

const visible = ref(false)
let hideTimer = null
let cycleTimer = null

function playCycle() {
  visible.value = true
  hideTimer = setTimeout(() => {
    visible.value = false
  }, timeUntilHide)
}

onMounted(() => {
  playCycle()
  cycleTimer = setInterval(playCycle, totalCycle)
})

onUnmounted(() => {
  clearTimeout(hideTimer)
  clearInterval(cycleTimer)
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

.hero-word {
  font-family: 'Anton', sans-serif;
  font-weight: 400;
  letter-spacing: -0.01em;
  transition: transform 0.85s cubic-bezier(0.16, 1, 0.3, 1),
              opacity 0.5s ease-out,
              filter 0.5s ease-out;
}

.reveal-out {
  transform: translateY(115%) scale(0.94);
  opacity: 0;
  filter: blur(6px);
}

.reveal-in {
  transform: translateY(0) scale(1);
  opacity: 1;
  filter: blur(0);
}
</style>