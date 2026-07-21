<template>
  <section class="w-full !p-0 !m-0 -mx-[calc((100vw-100%)/2)] w-[100vw] overflow-hidden">
    <div class="relative w-full h-[60dvh] min-h-[380px] sm:h-dvh">
      <!-- Image Grid / Strip -->
      <div class="absolute inset-0 grid grid-cols-6 grid-rows-2 sm:flex sm:flex-row">
        <div
          v-for="(panel, i) in panels"
          :key="panel.id"
          class="relative overflow-hidden group border-[#c9a45c]"
          :class="panel.gridClass"
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
            <h2
              class="uppercase text-center text-white
                     [font-family:'Oswald','Noto_Sans_Khmer','Inter',sans-serif]
                     font-semibold tracking-wider leading-[1.2]
                     whitespace-normal break-words [word-break:break-word]
                     max-w-[92%] px-2
                     translate-y-[18vh]
                     text-[length:clamp(1rem,2.6vw,2.4rem)]
                     [text-shadow:2px_2px_8px_rgba(0,0,0,0.7),0_0_12px_rgba(0,0,0,0.4)]
                     transition-[transform,font-size] duration-300 ease-[ease]
                     max-lg:translate-y-[16vh] max-lg:text-[length:clamp(0.85rem,2.2vw,1.8rem)]
                     max-sm:whitespace-nowrap max-sm:overflow-visible max-sm:[word-break:normal]
                     max-sm:text-[length:clamp(0.55rem,4.2vw,0.95rem)] max-sm:font-bold
                     max-sm:max-w-[98%] max-sm:leading-[1.1] max-sm:px-[0.15rem]
                     max-sm:translate-y-0
                     max-[380px]:text-[length:clamp(0.5rem,4vw,0.8rem)]"
            >
              {{ $t(panel.textKey) }}
            </h2>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import cocoonsImg from "~/assets/images/dn1.jpg";
import herbsImg from "~/assets/images/kroch-serj.jpg";
import templeImg from "~/assets/images/br1.jpg";
import aloeImg from "~/assets/images/p3.png";
import turmericImg from "~/assets/images/lap.jpg";

const panels = [
  {
    id: 1,
    image: cocoonsImg,
    alt: "Silk cocoons",
    textKey: "hero.panels.inspired",
    // top row, 1st of 3
    gridClass:
      "row-start-1 col-start-1 col-span-2 border-r-[3px] border-b-[3px] sm:border-b-0 sm:row-auto sm:col-auto sm:flex-1",
  },
  {
    id: 2,
    image: herbsImg,
    alt: "Bergamot and Khmer herbs",
    textKey: "hero.panels.nature",
    // top row, 2nd of 3
    gridClass:
      "row-start-1 col-start-3 col-span-2 border-r-[3px] border-b-[3px] sm:border-b-0 sm:row-auto sm:col-auto sm:flex-1",
  },
  {
    id: 3,
    image: templeImg,
    alt: "Bayon temple",
    textKey: "hero.panels.perfected",
    // top row, 3rd of 3 (no right border on mobile since it's last in row, but needs one on desktop since it's mid-row there)
    gridClass:
      "row-start-1 col-start-5 col-span-2 border-b-[3px] sm:border-b-0 sm:border-r-[3px] sm:row-auto sm:col-auto sm:flex-1",
  },
  {
    id: 4,
    image: aloeImg,
    alt: "Aloe vera",
    textKey: "hero.panels.by",
    // bottom row, 1st of 2
    gridClass: "row-start-2 col-start-1 col-span-3 border-r-[3px] sm:row-auto sm:col-auto sm:flex-1",
  },
  {
    id: 5,
    image: turmericImg,
    alt: "Turmeric",
    textKey: "hero.panels.innovation",
    // bottom row, 2nd of 2 (last overall, no border)
    gridClass: "row-start-2 col-start-4 col-span-3 sm:row-auto sm:col-auto sm:flex-1",
  },
];
</script>