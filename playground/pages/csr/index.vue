<template>
  <section
    class="w-full bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6"
    style="font-family: 'Inter', sans-serif"
  >
    <!-- ABOUT US Heading -->
    <div class="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
      <h2
        class="text-3xl sm:text-4xl tracking-wider"
        style="font-family: 'Oswald', sans-serif; color: #A57E45"
      >
        {{ $t('csr.aboutHeading') }}
      </h2>
      <p class="font-oswald mt-3 text-teal-800/80 text-sm sm:text-base leading-relaxed tracking-wide">
        {{ $t('csr.aboutDescription') }}
      </p>
    </div>

    <!-- CSR Subheading -->
    <div class="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
      <h3
        class="text-3xl sm:text-3xl tracking-wider text-amber-600 mb-3"
        style="font-family: 'Oswald', sans-serif; color: #A57E45"
      >
        {{ $t('csr.heading') }}
      </h3>
      <p class="font-oswald text-teal-800/80 text-sm sm:text-base leading-relaxed tracking-wide">
        {{ $t('csr.description') }}
      </p>
    </div>

    <!-- Alternating Image/Text Rows -->
    <div class="max-w-5xl mx-auto flex flex-col gap-10 sm:gap-14">
      <div
        v-for="(item, index) in csrItems"
        :key="index"
        class="group grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center rounded-2xl p-4 sm:p-6 transition-all duration-300 ease-out hover:bg-amber-50/40"
      >
        <!-- Image Container -->
        <div
          class="rounded-xl overflow-hidden aspect-[4/3] border border-transparent shadow-sm transition-all duration-300 ease-out group-hover:shadow-lg group-hover:border-amber-200"
          :class="index % 2 === 0 ? 'md:order-1' : 'md:order-2'"
        >
          <!-- Applied 'group-hover:animate-bounce-in' here -->
          <img
            :src="item.image"
            :alt="item.alt"
            class="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:animate-bounce-in"
            loading="lazy"
          />
        </div>

        <!-- Text -->
        <div :class="index % 2 === 0 ? 'md:order-2' : 'md:order-1'">
          <p class="font-oswald text-teal-800 text-sm sm:text-base leading-relaxed mb-4 tracking-wide">
            {{ item.text1 }}
          </p>
          <p class="font-oswald text-teal-800 text-sm sm:text-base leading-relaxed tracking-wide">
            {{ item.text2 }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n()
const csrText =
'Care & Share" event represents a local business giving back to the community by providing students with essential school supplies, educational materials, or care packages to support their learning and well-being.';

const csrItems = computed(() => [
  {
    image: "https://i.postimg.cc/xdw7rcpR/Borancare-csr.jpg",
    alt: t("csr.items.0.alt"),
    text1: t("csr.items.0.text1"),
    text2: t("csr.items.0.text2"),
  },
  {
    image: "https://i.postimg.cc/8P1dNXg5/p1.jpg",
    alt: t("csr.items.1.alt"),
    text1: t("csr.items.1.text1"),
    text2: t("csr.items.1.text2"),
  },
  {
    image: "https://i.postimg.cc/25Qd6y87/borancare-csr2.jpg",
    alt: t("csr.items.2.alt"),
    text1: t("csr.items.2.text1"),
    text2: t("csr.items.2.text2"),
  }
])
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald&family=Inter:wght@400;500;600;700&display=swap');

.font-oswald {
  font-family: 'Oswald', sans-serif;
}

/* Custom Springy Bounce-In Zoom Animation */
@keyframes bounceInZoom {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08); /* Scales up slightly past target */
  }
  70% {
    transform: scale(1.03); /* Pulls back a tiny bit */
  }
  100% {
    transform: scale(1.05); /* Settles neatly at final zoom size */
  }
}

.group-hover\:animate-bounce-in {
  animation: bounceInZoom 0.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}
</style>