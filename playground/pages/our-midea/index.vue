<script setup>
import { useRouter } from "vue-router";
import { CalendarDays } from "lucide-vue-next";

// Import images/videos
import media1 from "~/assets/images/media1.jpg";
import media2 from "~/assets/images/media2.jpg";
import media3 from "~/assets/images/media3.jpg";
import media4 from "~/assets/images/media4.jpg";
import media5 from "~/assets/images/media5.jpg";
import media6 from "~/assets/images/media6.jpg";

const router = useRouter();

const mediaItems = [
  {
    image: media1,
    type: "image",
    date: "March 12, 2025",
    title: "Opening Ceremony",
  },
  {
    image: media2,
    type: "image",
    date: "March 12, 2025",
    title: "Opening Ceremony",
  },
  {
    image: media3,
    type: "image",
    date: "March 12, 2025",
    title: "Opening Ceremony",
  },
  {
    image: media4,
    type: "image",
    date: "March 12, 2025",
    title: "Opening Ceremony",
  },
  {
    image: media5,
    type: "image",
    date: "March 12, 2025",
    title: "Opening Ceremony",
  },
  {
    image: media6,
    type: "image",
    date: "March 12, 2025",
    title: "Opening Ceremony",
  },
];

const goVideo = () => {
  router.push("/our-video");
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
        MEDIA
      </h1>


      <p
        class="mt-5 text-[#155B43] text-sm md:text-base leading-8 max-w-2xl mx-auto"
      >
        At BORAN CARE ASIA, we are committed to creating innovative,
        high-quality, and sustainable skincare solutions inspired by Khmer
        nature and backed by modern science.
      </p>


      <!-- Buttons -->
      <div class="flex justify-center gap-5 mt-8">

        <button
          class="bg-[#AC8544] text-white px-10 py-3 rounded-lg font-medium transition"
        >
          MEDIA
        </button>


        <button
          @click="goVideo"
          class="border border-[#AC8544] text-[#AC8544] hover:bg-[#AC8544] hover:text-white px-10 py-3 rounded-lg font-medium transition"
        >
          VIDEO
        </button>

      </div>

    </div>



    <!-- Media Grid -->
    <div
      class="max-w-6xl mx-auto mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >

      <div
        v-for="(item,index) in mediaItems"
        :key="index"
        class="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
      >

        <div class="relative h-[300px] overflow-hidden">


          <!-- Video -->
          <video
            v-if="item.type === 'video'"
            :src="item.image"
            controls
            class="w-full h-full object-cover"
          ></video>


          <!-- Image -->
          <img
            v-else
            :src="item.image"
            :alt="item.title"
            class="w-full h-full object-cover hover:scale-105 transition duration-500"
          />


          <!-- Bottom Overlay -->
          <div
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