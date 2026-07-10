<script setup>
import { ref } from "vue";
import { Search, ChevronDown, Menu, X } from "lucide-vue-next";

// Import logo
import logo from "~/assets/images/logo.png";

const mobileMenu = ref(false);
const productOpen = ref(false);
const aboutOpen = ref(false);
const languageOpen = ref(false);

const language = ref("ENG");

const languages = ["ENG", "KH"];

const products = [
  { name: "Facial Care", link: "/products/facial-care" },
  { name: "Skin Care", link: "/products/skin-care" },
  { name: "Hair Care", link: "/products/hair-care" },
  { name: "Personal Care", link: "/products/personal-care" },
  { name: "Make Up", link: "/products/make-up" },
];

const abouts = [
  { name: "Our History", link: "/our-history" },
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

if (typeof window !== "undefined") {
  document.addEventListener("click", onClickOutside);
}
</script>

<template>
  <div data-dropdown>
    <header
      class="fixed top-0 left-0 w-full z-50 bg-white border-t border-b border-[#b78542] shadow-sm"
    >
      <div
        class="max-w-7xl mx-auto h-[70px] px-6 lg:px-10 flex items-center justify-between"
      >
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center">
          <img
            :src="logo"
            alt="BORAN CARE"
            class="h-12 object-contain"
          />
        </NuxtLink>

        <!-- Desktop Menu -->
        <nav class="hidden lg:flex items-center gap-14 text-[#A87533]">
          <!-- Products -->
          <div class="relative" data-dropdown>
            <button
              @click.stop="productOpen = !productOpen; aboutOpen = false; languageOpen = false"
              class="flex items-center gap-1 uppercase font-semibold tracking-wide hover:text-[#8d632d]"
            >
              PRODUCTS
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
                class="absolute left-0 mt-5 w-56 bg-white rounded-xl shadow-xl border border-[#ecd9b8] overflow-hidden"
                data-dropdown
              >
                <NuxtLink
                  v-for="item in products"
                  :key="item.name"
                  :to="item.link"
                  class="block px-5 py-3 text-sm text-[#7d5a23] hover:bg-[#f8f5ef] transition-colors"
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
              class="flex items-center gap-1 uppercase font-semibold tracking-wide hover:text-[#8d632d]"
            >
              ABOUT US
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
                class="absolute left-0 mt-5 w-56 bg-white rounded-xl shadow-xl border border-[#ecd9b8] overflow-hidden"
                data-dropdown
              >
                <NuxtLink
                  v-for="item in abouts"
                  :key="item.name"
                  :to="item.link"
                  class="block px-5 py-3 text-sm text-[#7d5a23] hover:bg-[#f8f5ef] transition-colors"
                >
                  {{ item.name }}
                </NuxtLink>
              </div>
            </Transition>
          </div>

          <NuxtLink
            to="/contact"
            class="font-semibold hover:text-[#8d632d] transition-colors"
          >
            CONTACT US
          </NuxtLink>
        </nav>

        <!-- Desktop Right -->
        <div class="hidden lg:flex items-center gap-8">
          <div class="flex items-center border border-[#B88B3D] rounded-full px-4 py-2">
            <Search :size="18" class="text-[#B88B3D]" />
            <input
              type="text"
              placeholder="Search"
              class="ml-3 outline-none bg-transparent w-32"
            />
          </div>

          <div class="relative" data-dropdown>
            <button
              @click.stop="languageOpen = !languageOpen; productOpen = false; aboutOpen = false"
              class="w-[80px] h-[42px] rounded-full border border-[#B98A49] flex justify-center items-center gap-1 text-[#A87533] font-semibold"
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
                class="absolute right-0 mt-3 w-24 bg-white rounded-xl shadow-lg border border-[#ecd9b8]"
                data-dropdown
              >
                <button
                  v-for="lang in languages"
                  :key="lang"
                  @click="language = lang; languageOpen = false"
                  class="block w-full py-3 hover:bg-[#faf4ec] text-[#A87533] transition-colors"
                >
                  {{ lang }}
                </button>
              </div>
            </Transition>
          </div>
        </div>

        <!-- Mobile Button -->
        <button
          class="lg:hidden"
          @click="mobileMenu = !mobileMenu"
        >
          <Menu
            v-if="!mobileMenu"
            :size="28"
            class="text-[#A87533]"
          />
          <X
            v-else
            :size="28"
            class="text-[#A87533]"
          />
        </button>
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
      class="fixed inset-0 z-40 lg:hidden"
    >
      <!-- Overlay -->
      <div
        class="absolute inset-0 bg-black/30"
        @click="mobileMenu = false"
      ></div>

      <!-- Panel -->
      <div class="absolute top-0 left-0 h-full w-80 bg-white shadow-2xl overflow-y-auto">
        <div class="h-[70px] px-6 flex items-center justify-between border-b border-[#ecd9b8]">
          <img :src="logo" alt="BORAN CARE" class="h-10 object-contain" />
          <button @click="mobileMenu = false">
            <X :size="24" class="text-[#A87533]" />
          </button>
        </div>

        <nav class="p-6 space-y-1">
          <!-- Products -->
          <div>
            <button
              @click="productOpen = !productOpen; aboutOpen = false"
              class="w-full flex items-center justify-between py-3 text-[#A87533] font-semibold uppercase tracking-wide"
            >
              Products
              <ChevronDown
                :size="16"
                class="duration-300"
                :class="{ 'rotate-180': productOpen }"
              />
            </button>
            <div v-if="productOpen" class="pl-4 pb-2 space-y-1">
              <NuxtLink
                v-for="item in products"
                :key="item.name"
                :to="item.link"
                @click="mobileMenu = false"
                class="block py-2.5 text-sm text-[#7d5a23] hover:text-[#A87533] transition-colors"
              >
                {{ item.name }}
              </NuxtLink>
            </div>
          </div>

          <!-- About -->
          <div>
            <button
              @click="aboutOpen = !aboutOpen; productOpen = false"
              class="w-full flex items-center justify-between py-3 text-[#A87533] font-semibold uppercase tracking-wide"
            >
              About Us
              <ChevronDown
                :size="16"
                class="duration-300"
                :class="{ 'rotate-180': aboutOpen }"
              />
            </button>
            <div v-if="aboutOpen" class="pl-4 pb-2 space-y-1">
              <NuxtLink
                v-for="item in abouts"
                :key="item.name"
                :to="item.link"
                @click="mobileMenu = false"
                class="block py-2.5 text-sm text-[#7d5a23] hover:text-[#A87533] transition-colors"
              >
                {{ item.name }}
              </NuxtLink>
            </div>
          </div>

          <!-- Contact -->
          <NuxtLink
            to="/contact"
            @click="mobileMenu = false"
            class="block py-3 text-[#A87533] font-semibold uppercase tracking-wide hover:text-[#8d632d] transition-colors"
          >
            Contact Us
          </NuxtLink>

          <!-- Divider -->
          <div class="border-t border-[#ecd9b8] my-4"></div>

          <!-- Search -->
          <div class="flex items-center border border-[#B88B3D] rounded-full px-4 py-2.5">
            <Search :size="18" class="text-[#B88B3D]" />
            <input
              type="text"
              placeholder="Search"
              class="ml-3 outline-none bg-transparent w-full text-sm"
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
                  ? 'bg-[#A87533] text-white'
                  : 'border border-[#B98A49] text-[#A87533] hover:bg-[#faf4ec]'
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
  color: #c7a97a;
}
</style>