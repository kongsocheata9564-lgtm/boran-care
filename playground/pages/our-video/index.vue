<script setup>
import { useRouter } from "vue-router";
import { CalendarDays, Play } from "lucide-vue-next";

// Import videos
import video1 from "~/assets/videos/boran.mp4";
import video2 from "~/assets/videos/boran.mp4";
import video3 from "~/assets/videos/boran.mp4";
import video4 from "~/assets/videos/boran.mp4";
import video5 from "~/assets/videos/boran.mp4";
import video6 from "~/assets/videos/boran.mp4";

const router = useRouter();
const { t } = useI18n();
const localePath = useLocalePath();

const videoItems = [
  { video: video1, date: "videoPage.date1", title: "videoPage.products" },
  
  
];

const goMedia = () => {
  router.push(localePath("/our-midea"));
};
</script>

<template>
  <Header />

  <section class="min-h-screen bg-white pt-[110px] pb-20 px-5 md:px-10">
    <!-- Title -->
    <div class="text-center max-w-3xl mx-auto">
      <h1 class="text-[#A47B3B] text-3xl sm:text-4xl tracking-wider">
        {{ t("videoPage.title") }}
      </h1>

      <p class="mt-5 text-[#155B43] text-sm md:text-base leading-8 max-w-2xl mx-auto tracking-wide">
        {{ t("videoPage.description") }}
      </p>

      <!-- Buttons -->
      <div class="flex justify-center gap-5 mt-8">
        <button
          @click="goMedia"
          class="border border-[#AC8544] text-[#AC8544] hover:bg-[#AC8544] hover:text-white px-10 py-3 rounded-lg font-normal tracking-wider transition"
        >
          {{ t("videoPage.media") }}
        </button>

        <button
          class="bg-[#AC8544] hover:bg-[#AC8544] text-white px-10 py-3 rounded-lg font-normal tracking-wider transition"
        >
          {{ t("videoPage.title") }}
        </button>
      </div>
    </div>

    <!-- Video Grid -->
    <div
  class="max-w-6xl mx-auto mt-14 flex justify-center"
>
  <div
    v-for="(item, index) in videoItems"
    :key="index"
    class="w-full max-w-md bg-white rounded-xl border border-[#AC8544] overflow-hidden shadow-md hover:shadow-xl transition duration-300"
  >
    <div class="relative h-[300px] overflow-hidden">
      <video
        :src="item.video"
        controls
        class="w-full h-full object-cover"
      ></video>
    </div>

    <div class="px-5 py-4">
      <h3 class="text-xl tracking-wider text-[#AC8544]">
        {{ t(item.title) }}
      </h3>
    </div>
  </div>
</div>
  </section>

  <Footer />
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600&family=Poppins:wght@300;400;500;600;700&display=swap");

h1,
h3,
button,
p {
  font-family: "Oswald", sans-serif;
}
</style>