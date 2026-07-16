<template>
  <section
    class="w-full bg-white py-10 sm:py-14 md:py-16 px-4 sm:px-6"
    style="font-family: 'Inter', sans-serif"
  >

    <!-- Heading -->
    <div class="max-w-3xl mx-auto text-center mb-8">
      <h2
        class="text-3xl sm:text-4xl tracking-wide text-amber-600"
        style="font-family:'Bebas Neue', sans-serif; color:#A57E45;"
      >
        {{ $t('founder.heading') }}
      </h2>

      <p class="mt-3 text-teal-800/80 text-sm sm:text-base">
        {{ $t('founder.subHeading') }}
      </p>
    </div>


    <!-- Card -->
    <div
      class="mx-auto w-full max-w-4xl rounded-2xl border border-amber-200 shadow-md p-6 sm:p-8"
    >

      <div
        class="flex flex-col sm:flex-row items-center sm:items-start gap-8"
      >

        <!-- Left Image -->
        <div
          class="w-full sm:w-56 flex flex-col items-center shrink-0"
        >

          <div
            class="w-full aspect-square rounded-xl overflow-hidden"
          >
            <img
              :src="founder.photo"
              :alt="founder.name"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>


          <h3
            class="mt-3 text-xl sm:text-2xl text-center tracking-[0.15em]"
            style="font-family:'Bebas Neue', sans-serif; color:#A57E45;"
          >
            {{ founder.name }}
          </h3>

        </div>


        <!-- Right Content -->
        <div
          class="flex-1 w-full text-center sm:text-left"
        >

          <h3
            class="text-xl sm:text-2xl tracking-wide text-amber-600 mb-5"
            style="font-family:'Bebas Neue', sans-serif; color:#A57E45;"
          >
            {{ $t('founder.quoteTitle') }}
          </h3>


          <p
            class="text-teal-800 text-sm sm:text-base leading-relaxed"
          >
            {{ founder.quote }}
          </p>

        </div>

      </div>

    </div>

  </section>
</template>


<script setup>
const { t } = useI18n()

const founder = computed(() => ({
  name: t('founder.name'),
  photo:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTia1knsdXgOh8XgYTK3nYhrGDExt7TyExI3dZ9JHRkaafCXz-sx05_vYmU&s=10",
  quote: t('founder.quote')
}))
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap');
</style>