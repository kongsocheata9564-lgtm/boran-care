<template>
 <section
  class="w-full bg-white py-10 sm:py-14 md:py-16 px-4 sm:px-6"
  style="font-family: 'Inter', sans-serif"
>
  <!-- Heading -->
  <div class="max-w-3xl mx-auto text-center mb-6 sm:mb-8">
    <h2
      class="text-3xl sm:text-4xl tracking-wide text-amber-600"
      style="font-family: 'Bebas Neue', sans-serif ;color: #A57E45"
    >
      FOUNDER &amp; CEO
    </h2>
    <p
      class="mt-2 text-teal-800/80 text-sm sm:text-base"
    >
      Our Chairwoman of the Boran Care Company
    </p>
  </div>

  <!-- Card -->
  <div
    class="max-w-4xl mx-auto rounded-2xl border border-amber-200 shadow-sm p-5 sm:p-6 md:p-8"
  >
    <div class="flex flex-col sm:flex-row gap-5 sm:gap-8 items-start">
      <!-- Left: photo + name (name centered under photo) -->
      <div class="w-full sm:w-56 shrink-0">
        <div class="rounded-xl overflow-hidden aspect-square">
          <img
            :src="founder.photo"
            :alt="founder.name"
            class="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <h3
          class="text-xl sm:text-2xl tracking-wide text-amber-600 mt-3 text-center"
          style="font-family: 'Bebas Neue', sans-serif ;color: #A57E45"
        >
          {{ founder.name }}
        </h3>
      </div>

      <!-- Right: quote paragraph -->
      <div class="flex-1 pt-1">
        <h3
          class="text-xl sm:text-2xl tracking-wide text-amber-600 mb-8"
          style="font-family: 'Bebas Neue', sans-serif ;color: #A57E45"
        >
          QUOTE of founder
        </h3>
        <p class="text-teal-800 text-sm sm:text-sm                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          leading-relaxed">
          {{ founder.quote }}
        </p>
      </div>
    </div>
  </div>
</section>
</template>

<script setup>
const founder = {
  name: "Nhim sorida",
  photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTia1knsdXgOh8XgYTK3nYhrGDExt7TyExI3dZ9JHRkaafCXz-sx05_vYmU&s=10",
  quote:
    " A genuine Cambodian brand should never rely on pity or understanding by casting itself as the underdog. Rather, it should be founded on confidence and command authentic respect .",
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap');
</style>