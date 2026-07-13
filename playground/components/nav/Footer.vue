<script setup>
import { useRouter } from "vue-router";
import {
  Facebook,
  Instagram,
  Linkedin,
  Send,
} from "lucide-vue-next";

const router = useRouter();

const quickLinks = [
  { name: "Products", path: "/products" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
];

const products = [
  { name: "Facial Care" },
  { name: "Skin Care" },
  { name: "Hair Care" },
  { name: "Personal Care" },
  { name: "Make Up" },
];

const aboutLinks = [
  { name: "Our Mission", path: "/mission" },
  { name: "Our Vision", path: "/vision" },
  { name: "Our History", path: "/history" },
  { name: "CSR", path: "/csr" },
];

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/share/1Edy6i8RrF/?mibextid=wwXIfr",
  },
  {
    name: "TikTok",
    custom: true,
    url: "https://www.tiktok.com/@borancare_official?_r=1&_t=ZS-97z9X813f76",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/borancarekh?igsh=MWdlbzZlYWg1OGNmZA== ",
  },
  {
    name: "Telegram",
    icon: Send,
    url: "https://telegram.org/",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/company/borancareasia",
  },
];

const goTo = (path) => {
  router.push(path);
};

const openLink = (url) => {
  window.open(url, "_blank");
};
</script>

<template>
  <footer
    class="w-full bg-white border-t border-[#E8DFC8]"
    style="font-family: 'Poppins', sans-serif"
  >
    <!-- Main Footer -->
    <div
      class="max-w-[1280px] mx-auto px-8 py-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-start"
    >
      <!-- Logo -->
      <div class="col-span-2 sm:col-span-3 lg:col-span-1 flex justify-center lg:justify-start">
        <img
          src="assets/images/logo.png"
          alt="Boran Care"
          class="w-[160px] object-contain"
        />
      </div>

      <!-- Quick Links -->
      <div class="text-center lg:text-left">
        <h3
          class="uppercase text-[20px] font-semibold tracking-wide text-[#B88A33] mb-3"
          style="font-family: 'Oswald', sans-serif"
        >
          Quick Links
        </h3>

        <ul class="space-y-1">
          <li v-for="item in quickLinks" :key="item.name">
            <button
              @click="goTo(item.path)"
              class="text-[13px] text-[#9B7B3A] hover:text-[#C99A2C] transition-all duration-300 rounded-md"
            >
              {{ item.name }}
            </button>
          </li>
        </ul>
      </div>

      <!-- Products -->
      <div class="text-center lg:text-left">
        <h3
          class="uppercase text-[20px] font-semibold tracking-wide text-[#B88A33] mb-3"
          style="font-family: 'Oswald', sans-serif"
        >
          Products
        </h3>

        <ul class="space-y-1">
          <li v-for="item in products" :key="item.name">
            <button
              class="text-[13px] text-[#9B7B3A] hover:text-[#C99A2C] transition-all duration-300 rounded-md"
            >
              {{ item.name }}
            </button>
          </li>
        </ul>
      </div>

      <!-- About -->
      <div class="text-center lg:text-left">
        <h3
          class="uppercase text-[20px] font-semibold tracking-wide text-[#B88A33] mb-3"
          style="font-family: 'Oswald', sans-serif"
        >
          About Us
        </h3>

        <ul class="space-y-1">
          <li v-for="item in aboutLinks" :key="item.name">
            <button
              @click="goTo(item.path)"
              class="text-[13px] text-[#9B7B3A] hover:text-[#C99A2C] transition-all duration-300 rounded-md"
            >
              {{ item.name }}
            </button>
          </li>
        </ul>
      </div>
      <!-- Follow -->
      <div class="col-span-2 sm:col-span-1 text-center lg:text-left">
        <h3
          class="uppercase text-[20px] font-semibold tracking-wide text-[#B88A33] mb-10"
          style="font-family: 'Oswald', sans-serif"
        >
          Follow Us
        </h3>
        <div class="flex justify-center lg:justify-start items-center gap-4">
          <button
            v-for="social in socialLinks"
            :key="social.name"
            @click="openLink(social.url)"
            class="text-[#B88A33] hover:text-[#D6A03B] hover:scale-110 transition-all duration-300"
          >
            <!-- Lucide Icons -->
            <component
              v-if="!social.custom"
              :is="social.icon"
              :size="18"
            />

            <!-- TikTok SVG -->
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.68h-3.17v13.57a2.9 2.9 0 1 1-2.9-2.9c.23 0 .45.03.66.08V9.55a6.08 6.08 0 1 0 6.08 6.03V9.2a8.04 8.04 0 0 0 4.69 1.5V6.69h-1.59z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="bg-[#B89A67]">
      <div
        class="max-w-[1280px] mx-auto min-h-[50px] px-8 flex flex-col md:flex-row items-center justify-between text-white text-[14px]"
      >
        <div class="py-2 md:py-0">
          © 2026 Boran Care. All Rights Reserved
        </div>

        <div class="flex items-center gap-2 py-2 md:py-0">
          <button
            @click="goTo('/privacy')"
            class="hover:underline transition-all duration-300"
          >
            Privacy Policy
          </button>

          <span>|</span>

          <button
            @click="goTo('/terms')"
            class="hover:underline transition-all duration-300"
          >
            Term Condition
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

