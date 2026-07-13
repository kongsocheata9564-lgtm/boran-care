<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { Search, ChevronDown, Menu, X } from "lucide-vue-next";

// Import logo
import logo from "~/assets/images/boran_care_logo-removebg-preview.png";

const mobileMenu = ref(false);
// Desktop
const productOpen = ref(false);
const aboutOpen = ref(false);

// Mobile
const mobileProductOpen = ref(false);
const mobileAboutOpen = ref(false);
const languageOpen = ref(false);

const language = ref("EN");

const languages = ["EN", "KH"];

const products = [
  { name: "Facial Care", link: "/products/facial-care" },
  { name: "Skin Care", link: "/products/skin-care" },
  { name: "Hair Care", link: "/products/hair-care" },
  { name: "Personal Care", link: "/products/personal-care" },
  { name: "Make Up", link: "/products/make-up" },
];

const abouts = [
  { name: "Our History", link: "/Story" },
  { name: "Our Vision Mission & Core Value", link: "/vision-mission" },
  { name: "Our Founder", link: "/our-founder" },
  { name: "Our CSR", link: "/our-csr" },
  { name: "Media", link: "/media" },
];

// Close dropdowns when clicking outside
const onClickOutside = (e) => {
  const target = e.target;
  if (!target.closest("[data-dropdown]")) {
    productOpen.value = false;
    aboutOpen.value = false;
    languageOpen.value = false;
  }
};


onMounted(() => {
  document.addEventListener("click", onClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", onClickOutside);
});
</script>

<template>
  <div data-dropdown>
    <header
      class="fixed top-0 left-0 w-full z-50  border-t border-b border-[#b78542] shadow-sm bg-[#AC8544]"
    >
      <div class="max-w-7xl mx-auto h-[70px] px-4 lg:px-10 flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center">
          <img
            :src="logo"
            alt="BORAN CARE"
            class="h-14 object-contain "
          />
        </NuxtLink>

        <!-- Desktop Menu -->
        <nav class="hidden lg:flex items-center gap-14 text-[#A87533]">
          <!-- Products -->
          <div class="relative" data-dropdown>
            <button
              @click.stop="productOpen = !productOpen; aboutOpen = false; languageOpen = false"
              class="flex items-center gap-1 uppercase font-semibold tracking-wide  text-[white]"
            >
               <NuxtLink
              
               class="relative inline-block text-white font-semibold uppercase
                     after:content-['']
                     after:absolute
                     after:left-0
                     after:-bottom-1
                     after:w-0
                     after:h-[2px]
                     after:bg-white
                     after:transition-all
                     after:duration-300
                     hover:after:w-full"
             >
               PRODUCTS
             </NuxtLink>
              <ChevronDown
                :size="16"
                class="duration-300"
                :class="{ 'rotate-180': productOpen }"
              />
            </button>

            <Transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="opacity-0 -translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-2"
            >
              <div
                v-if="productOpen"
                class="absolute left-0 mt-5 w-56 bg-[#AC8544] rounded-xl shadow-xl border border-[#ecd9b8] overflow-hidden"
                data-dropdown
              >
                <NuxtLink
                  v-for="item in products"
                  :key="item.name"
                  :to="item.link"
                  class="block px-5 py-3 text-sm text-white hover:text-[#f5dfb5] transition-colors"
                >
                  {{ item.name }}
                </NuxtLink>
              </div>
            </Transition>
          </div>

          <!-- About -->
          <div class="relative" data-dropdown>
            <button
              @click.stop="aboutOpen = !aboutOpen; productOpen = false; languageOpen = false"
              class="flex items-center gap-1 uppercase font-semibold tracking-wide  text-[white]"
            >
             <NuxtLink
               
               class="relative inline-block text-white font-semibold uppercase
                     after:content-['']
                     after:absolute
                     after:left-0
                     after:-bottom-1
                     after:w-0
                     after:h-[2px]
                     after:bg-white
                     after:transition-all
                     after:duration-300
                     hover:after:w-full"
             >
               ABOUT US
             </NuxtLink>
              <ChevronDown
                :size="16"
                class="duration-300"
                :class="{ 'rotate-180': aboutOpen }"
              />
            </button>

            <Transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="opacity-0 -translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-2"
            >
              <div
                v-if="aboutOpen"
                class="absolute left-0 mt-5 w-56 bg-[#AC8544] rounded-xl shadow-xl border border-[#ecd9b8] overflow-hidden"
                data-dropdown
              >
                <NuxtLink
                  v-for="item in abouts"
                  :key="item.name"
                  :to="item.link"
                  class="block px-5 py-3 text-sm text-white hover:text-[#f5dfb5] transition-colors"
                >
                  {{ item.name }}
                </NuxtLink>
              </div>
            </Transition>
          </div>

            <NuxtLink
               to="/contact"
               class="relative inline-block text-white font-semibold uppercase
                     after:content-['']
                     after:absolute
                     after:left-0
                     after:-bottom-1
                     after:w-0
                     after:h-[2px]
                     after:bg-white
                     after:transition-all
                     after:duration-300
                     hover:after:w-full"
             >
               CONTACT US
             </NuxtLink>
        </nav>

        <!-- Desktop Right -->
        <div class="hidden lg:flex items-center gap-8">
          <div class="flex items-center border border-[white] rounded-full px-6 py-2">
            <Search :size="18" class=" text-[white] " />
            <input
              type="text"
              placeholder="Search products"
              class="ml-3 outline-none bg-transparent w-32  text-[white] text-[15px]"
            />
          </div>

          <div class="relative" data-dropdown>
            <button
              @click.stop="languageOpen = !languageOpen; productOpen = false; aboutOpen = false"
              class="w-[100px] h-[42px] rounded-full border border-[white] flex justify-center items-center gap-1 text-[white] font-semibold"
            >
              {{ language }}
              <ChevronDown
                :size="15"
                class="duration-300"
                :class="{ 'rotate-180': languageOpen }"
              />
            </button>

            <Transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="opacity-0 -translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-2"
            >
              <div
                v-if="languageOpen"
                class="absolute right-0 mt-3 w-24 bg-[#AC8544] rounded-xl shadow-lg border border-[#ecd9b8]"
                data-dropdown
              >
                <button
                  v-for="lang in languages"
                  :key="lang"
                  @click="language = lang; languageOpen = false"
                  class="block w-full py-1 hover:text-[#f5dfb5] text-white transition-colors rounded-[10px]"
                >
                  {{ lang }}
                </button>
              </div>
            </Transition>
          </div>
        </div>

        <!-- Mobile Logo + Button -->
<div class="flex lg:hidden items-center gap-4">

  <!-- Mobile Logo -->
  <!-- Desktop Logo -->
<NuxtLink to="/" class="hidden lg:flex items-center">
  <img
    :src="logo"
    alt="BORAN CARE"
    class="h-16 object-contain"
  />
</NuxtLink>

  <!-- Menu Button -->
  <button
    @click="mobileMenu = !mobileMenu"
  >
    <Menu
      v-if="!mobileMenu"
      :size="28"
      class="text-white"
    />
    <X
      v-else
      :size="28"
      class="text-white"
    />
  </button>

</div>
      </div>
    </header>

    <!-- ✅ This spacer pushes all page content below the fixed header -->
    <div class="h-[70px]"></div>
  </div>

  <!-- ✅ Mobile Menu Panel -->
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 -translate-x-full"
    enter-to-class="opacity-100 translate-x-0"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 translate-x-0"
    leave-to-class="opacity-0 -translate-x-full"
  >
    <div
      v-if="mobileMenu"
        class="fixed inset-0 z-[60] lg:hidden"    >
      <!-- Overlay -->
      <div
        class="absolute inset-0 bg-black/30"
        @click="
          mobileMenu = false;
          mobileProductOpen = false;
          mobileAboutOpen = false;
          "
      ></div>

      <!-- Panel -->
      <div class="absolute top-0 left-0 h-full w-80 bg-[#AC8544] shadow-2xl overflow-y-auto">
        <div class="h-[70px] px-6 flex items-center justify-between border-b border-white/30">
          <img :src="logo" alt="BORAN CARE" class="h-16 object-contain" />
          <button @click="mobileMenu = false">
            <X :size="24" class="text-white" />
          </button>
        </div>

        <nav class="p-6 space-y-1">
          <!-- Products -->
          <div>
            <button
              @click.stop="
                mobileProductOpen = !mobileProductOpen;
                mobileAboutOpen = false;
                "
              class="w-full flex items-center justify-between py-3 text-white font-semibold uppercase tracking-wide"
            >
              Products
              <ChevronDown
  :size="16"
  class="duration-300 text-white"
  :class="{ 'rotate-180': mobileProductOpen }"
/>
            </button>
              <div
                  v-if="mobileProductOpen"
                  class="pl-4 pb-2 space-y-1"
              >    
               <NuxtLink
  v-for="item in products"
  :key="item.name"
  :to="item.link"
  @click="mobileMenu = false"
  class="block py-2.5 text-sm text-white hover:text-[#f5dfb5] transition-colors"
>
  {{ item.name }}
</NuxtLink>
            </div>
          </div>

          <!-- About -->
          <div>
            <button
              @click.stop="
              mobileAboutOpen = !mobileAboutOpen;
              mobileProductOpen = false;
              "
              class="w-full flex items-center justify-between py-3 text-white font-semibold uppercase tracking-wide"
            >
              About Us
              <ChevronDown
  :size="16"
  class="duration-300 text-white"
  :class="{ 'rotate-180': mobileAboutOpen }"
/>
            </button>
              <div
                  v-if="mobileAboutOpen"
                  class="pl-4 pb-2 space-y-1"
              >              <NuxtLink
                v-for="item in abouts"
                :key="item.name"
                :to="item.link"
                @click="mobileMenu = false"
                class="block py-2.5 text-sm text-white hover:text-[#f5dfb5] transition-colors"
              >
                {{ item.name }}
              </NuxtLink>
            </div>
          </div>

          <!-- Contact -->
          <NuxtLink
            to="/contact"
            @click="mobileMenu = false"
            class="block py-3 text-white font-semibold uppercase tracking-wide hover:text-[#f5dfb5] transition-colors"
          >
            Contact Us
          </NuxtLink>

          <!-- Divider -->
          <div class="border-t border-white/30 my-4"></div>

          <!-- Search -->
          <div class="flex items-center border border-white rounded-full px-4 py-2.5">
            <Search :size="18" class="text-white" />
            <input
              type="text"
              placeholder="Search"
              class="ml-3 outline-none bg-transparent w-full text-sm text-white"
            />
          </div>

          <!-- Language -->
          <div class="flex items-center gap-3 pt-2">
            <button
              v-for="lang in languages"
              :key="lang"
              @click="language = lang"
              class="px-5 py-2 rounded-full text-sm font-semibold transition-colors"
              :class="
 language === lang
 ? 'bg-white text-[#AC8544]'
 : 'border border-white text-white hover:text-white/20'
"
            >
              {{ lang }}
            </button>
          </div>
        </nav>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600&family=Inter:wght@400;500&display=swap");

header {
  font-family: "Inter", sans-serif;
}

nav,
button,
a {
  font-family: "Oswald", sans-serif;
}

input::placeholder {
  color: white;
  opacity: 0.8;
}
</style>