<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const quickLinks = [
  { name: "Products", path: "/product" },
  { name: "About Us", path: "/our-story" },
  { name: "Contact Us", path: "/contact-us" },
];

const products = [
  {
    name: "Facial Care",
    link: {
      path: "/product",
      query: {
        category: "FACIAL CARE",
      },
    },
  },

  {
    name: "Hair Care",
    link: {
      path: "/product",
      query: {
        category: "HAIR CARE",
      },
    },
  },

  {
    name: "Skin Care",
    link: {
      path: "/product",
      query: {
        category: "SKIN CARE",
      },
    },
  },

  {
    name: "Personal Care",
    link: {
      path: "/product",
      query: {
        category: "PERSONAL CARE",
      },
    },
  },

  {
    name: "Make Up",
    link: {
      path: "/product",
      query: {
        category: "MAKEUP",
      },
    },
  },
];

const aboutLinks = [
  { name: "Our History", path: "/our-story" },
  { name: "Our Vision Mission & Core Value", path: "/vision-mission" },
  { name: "Our Founder", path: "/founder" },
  { name: "Our CSR", path: "/csr" },
  { name: "Our Media & Video", path: "/our-midea" },
];


const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/share/1Edy6i8RrF/?mibextid=wwXIfr",
    icon: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M14 8h3V4h-3c-3.3 0-5 1.7-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.7.3-1 1-1z"/>
    </svg>
    `,
  },

  {
    name: "TikTok",
    url: "https://www.tiktok.com/@borancare_official?_r=1&_t=ZS-97z9X813f76",
    icon: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.5 8.2c-1.8 0-3.4-.8-4.5-2v8.1a5.8 5.8 0 1 1-5-5.7v3a2.8 2.8 0 1 0 2 2.7V2h3c.2 2.1 1.9 3.8 4 4v2.2z"/>
    </svg>
    `,
  },

  {
    name: "Instagram",
    url: "https://www.instagram.com/borancarekh?igsh=MWdlbzZlYWg1OGNmZA==",
    icon: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5.5A5.5 5.5 0 1 0 17.5 13 5.5 5.5 0 0 0 12 7.5zm0 2A3.5 3.5 0 1 1 8.5 13 3.5 3.5 0 0 1 12 9.5zM17.5 6a1.2 1.2 0 1 0 1.2 1.2A1.2 1.2 0 0 0 17.5 6z"/>
    </svg>
    `,
  },

  {
    name: "Telegram",
    url: "https://telegram.org/",
    icon: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.5 3.5 18 20c-.3 1.2-1 1.5-2 .9l-5.5-4.1-2.7 2.6c-.3.3-.6.6-1.2.6l.4-5.6 10.2-9.2c.5-.4-.1-.7-.7-.3L3.7 12.8.2 11.7c-1.2-.4-1.2-1.2.3-1.8L20 2.7c.9-.3 1.7.2 1.5.8z"/>
    </svg>
    `,
  },

  {
  name: "LinkedIn",
  url: "https://www.linkedin.com/company/borancareasia",
  icon: `
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.9h3.42v1.58h.05c.48-.91 1.65-1.86 3.39-1.86 3.63 0 4.3 2.39 4.3 5.5v6.33zM5.34 7.32a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V8.9h3.56v11.55zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z"/>
  </svg>
  `,
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
class="w-full bg-[#AC8544] border-t border-[#E8DFC8]"
style="font-family:'Poppins',sans-serif"
>


<div
class="max-w-[1280px] mx-auto px-8 py-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8"
>

        <ul class="space-y-1">
          <li v-for="item in products" :key="item.name">
            <button
              @click="goTo(item.link)"
              class="text-[13px] text-[#9B7B3A] hover:text-[#C99A2C] transition-all duration-300 rounded-md"
            >
              {{ item.name }}
            </button>
          </li>
        </ul>
      </div>

<!-- Logo -->
<!-- Logo -->
<div class="col-span-2 sm:col-span-3 lg:col-span-1 flex items-start justify-center lg:justify-start pt-1">

  <img
    src="assets/images/boran_care_logo-removebg-preview.png"
    alt="Boran Care"
    class="w-[160px] object-contain"
  />

</div>



<!-- Quick Links -->
<div class="text-center lg:text-left">

<h3 class="uppercase text-[20px] font-semibold text-white mb-3"
style="font-family:'Oswald',sans-serif">
Quick Links
</h3>


<ul class="space-y-1">

<li v-for="item in quickLinks" :key="item.name">

<button
  @click="goTo(item.path)"
  class="relative text-[13px] text-white transition
         after:absolute after:left-0 after:-bottom-1
         after:h-[1px] after:w-0
         after:bg-white
         after:transition-all after:duration-300
         hover:after:w-full"
>
  {{ item.name }}
</button>

</li>

</ul>

</div>



<!-- Products -->
<div class="text-center lg:text-left">

<h3 class="uppercase text-[20px] font-semibold text-white mb-3"
style="font-family:'Oswald',sans-serif">
Products
</h3>


<ul class="space-y-1">

<li v-for="item in products" :key="item.name">

<button
  @click="goTo(item.path)"
  class="relative text-[13px] text-white transition
         after:absolute after:left-0 after:-bottom-1
         after:h-[1px] after:w-0
         after:bg-white
         after:transition-all after:duration-300
         hover:after:w-full"
>
  {{ item.name }}
</button>

</li>

</ul>

</div>




<!-- About -->

<div class="text-center lg:text-left">

<h3 class="uppercase text-[20px] font-semibold text-white mb-3"
style="font-family:'Oswald',sans-serif">
About Us
</h3>


<ul class="space-y-1">

<li v-for="item in aboutLinks" :key="item.name">

<button
  @click="goTo(item.path)"
  class="relative text-[13px] text-white transition
         after:absolute after:left-0 after:-bottom-1
         after:h-[1px] after:w-0
         after:bg-white
         after:transition-all after:duration-300
         hover:after:w-full"
>
  {{ item.name }}
</button>

</li>

</ul>

</div>




<!-- Social -->

<div class="col-span-2 sm:col-span-1 text-center lg:text-left">


<h3 class="uppercase text-[20px] font-semibold text-white mb-3"
style="font-family:'Oswald',sans-serif">
Follow Us
</h3>


<div class="flex justify-center lg:justify-start gap-3">


<button
v-for="social in socialLinks"
:key="social.name"
@click="openLink(social.url)"

class="
w-9 h-9 rounded-full
flex items-center justify-center
bg-[#F8F1E3]
text-[#B88A33]
hover:bg-[#AC8544]
hover:text-white
hover:-translate-y-1
hover:scale-110
hover:shadow-lg
hover:shadow-[#B88A33]/30
transition-all duration-300
"

>

<span
class="w-5 h-5"
v-html="social.icon"
></span>


</button>


</div>

</div>

<!-- Bottom -->

<div class="bg-[#AC8544] border">


<div
class="max-w-[1280px] mx-auto px-8 min-h-[50px] flex flex-col md:flex-row items-center justify-between text-white text-[14px]"
>


<div>
© 2026 Boran Care. All Rights Reserved
</div>


<div class="flex gap-2">

<button
@click="goTo('/privacy')"
class="hover:underline"
>
Privacy Policy
</button>


<span>|</span>


<button
@click="goTo('/terms')"
class="hover:underline"
>
Term Condition
</button>


</div>


</div>


</div>


</footer>

</template>