<template>
  <section
    class="w-full bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6"
    style="font-family: 'Inter', sans-serif"
  >
    <!-- Heading -->
    <div class="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
      <h2
        class="text-4xl sm:text-5xl tracking-wide text-amber-600"
        style="font-family: 'Bebas Neue', sans-serif; color: #A57E45  "
      >
        ABOUT US
      </h2>
      <p
        class="mt-3 sm:mt-4 text-teal-800/80 text-sm sm:text-base md:text-lg leading-relaxed"
      >
        We work with entrepreneurs, brands, and organizations to bring their
        product ideas to life through a structured and scalable manufacturing
        process.
      </p>
      <div class="w-14 h-px bg-amber-300 mx-auto mt-6 sm:mt-8" />
    </div>

    <!-- Card -->
    <div
      class="max-w-5xl mx-auto rounded-2xl sm:rounded-3xl border border-amber-200 shadow-sm p-5 sm:p-8 md:p-10"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
        <!-- Left: text + icons -->
        <div class="order-2 md:order-1">
          <p class="text-teal-800 text-sm sm:text-base leading-relaxed">
            <span class="font-semibold">BORAN CARE ASIA</span> is a
            Cambodia-based green beauty OEM/ODM manufacturer, turning natural
            ingredients and science-driven formulation into scalable
            skincare, body care, hair care, and facial care products —
            helping brands bring their vision to life since 2019.
          </p>

          <div class="flex flex-wrap gap-6 sm:gap-8 md:gap-10 mt-6 sm:mt-8">
            <div
              v-for="item in features"
              :key="item.label"
              class="flex flex-col items-center gap-2 w-16 sm:w-20"
            >
              <div
                class="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden flex items-center justify-center shrink-0"
                :class="item.wrapperClass"
              >
                <img
                  :src="item.image"
                  :alt="item.label"
                  class="w-full h-full object-cover"
                />
              </div>
              <span
                class="text-xs sm:text-sm text-teal-800/80 text-center leading-tight"
              >
                {{ item.label }}
              </span>
            </div>
          </div>
        </div>

        <!-- Right: image -->
        <div class="order-1 md:order-2">
          <div
            class="rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11]"
          >
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
// Adjust these paths/filenames to match your actual photos in assets/images/
import peoplePhoto from "assets/images/people.png";
import healthPhoto from "assets/images/pajamas_nature.png";
import futurePhoto from "assets/images/Frame 121.png";

const features = [
  {
    label: "People",
    image: peoplePhoto,
    wrapperClass: "bg-orange-50 border border-orange-200",
  },
  {
    label: "Health",
    image: healthPhoto,
    wrapperClass: "bg-green-50 border border-green-200",
  },
  {
    label: "Better future",
    image: futurePhoto,
    wrapperClass: "bg-orange-50 border border-orange-200",
  },
];
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap');
</style>