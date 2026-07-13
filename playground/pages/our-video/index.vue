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

const videoItems = [
  { video: video1, date: "March 12, 2025", title: "Opening Ceremony" },
  { video: video2, date: "March 12, 2025", title: "Opening Ceremony" },
  { video: video3, date: "March 12, 2025", title: "Opening Ceremony" },
  { video: video4, date: "March 12, 2025", title: "Opening Ceremony" },
  { video: video5, date: "March 12, 2025", title: "Opening Ceremony" },
  { video: video6, date: "March 12, 2025", title: "Opening Ceremony" },
];

const goMedia = () => {
  router.push("/media");
};
</script>

<template>
  <Header />

  <section class="min-h-screen bg-white pt-[110px] pb-20 px-5 md:px-10">

    <!-- Title -->
    <div class="text-center max-w-3xl mx-auto">

      <h1
        class="text-[#A47B3B] text-4xl md:text-5xl font-semibold tracking-wider"
      >
        VIDEO
      </h1>

      <p
        class="mt-5 text-[#155B43] text-sm md:text-base leading-8 max-w-2xl mx-auto"
      >
        At BORAN CARE ASIA, we share our journey through videos,
        showcasing our innovative skincare solutions inspired by Khmer
        nature and modern science.
      </p>


      <!-- Buttons -->
      <div class="flex justify-center gap-5 mt-8">

        <button
          @click="goMedia"
          class="border border-[#AC8544] text-[#AC8544] hover:bg-[#AC8544] hover:text-white px-10 py-3 rounded-lg font-medium transition"
        >
          MEDIA
        </button>

        <button
          class="bg-[#AC8544] hover:bg-[#AC8544] text-white px-10 py-3 rounded-lg font-medium transition"
        >
          VIDEO
        </button>

      </div>

    </div>


    <!-- Video Grid -->
    <div
      class="max-w-6xl mx-auto mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >

      <div
        v-for="(item,index) in videoItems"
        :key="index"
        class="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
      >

        <div class="relative h-[300px] overflow-hidden">


          <!-- Video -->
          <video
            :src="item.video"
            controls
            class="w-full h-full object-cover"
          ></video>


          <!-- Play Icon -->
          

          
            class="absolute bottom-0 left-0 w-full bg-[#A77B3C]/95 text-white px-5 py-4"
          >

            <div class="flex items-center gap-2 text-xs opacity-95">

              <CalendarDays :size="14"/>

              <span>
                {{ item.date }}
              </span>

            </div>


            <h3 class="mt-1 text-xl font-semibold">
              {{ item.title }}
            </h3>

          </div>

        </div>

      </div>

    </div>

  </section>


  <Footer />
</template>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600&family=Poppins:wght@300;400;500;600;700&display=swap");

h1,
button {
  font-family: "Oswald", sans-serif;
}

p,
h3 {
  font-family: "Poppins", sans-serif;
}
</style>