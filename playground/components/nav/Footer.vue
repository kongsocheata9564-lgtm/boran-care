<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute(); // <-- Added useRoute to track the current path
const { t, locale, setLocale } = useI18n(); // Added setLocale
const localePath = useLocalePath();

const openSection = ref(null);
const toggleSection = (name) => {
  openSection.value = openSection.value === name ? null : name;
};

// ---- Language switcher ----
const languages = [
  { code: "en", label: "English" },
  { code: "km", label: "ខ្មែរ" }
];

const isLangOpen = ref(false);
const toggleLangMenu = () => {
  isLangOpen.value = !isLangOpen.value;
};

const currentLanguage = computed(
  () => languages.find((l) => l.code === locale.value) || languages[0]
);

const setLanguage = (code) => {
  setLocale(code); // Use Nuxt i18n's setLocale instead of mutating directly
  isLangOpen.value = false;
};

// Added missing openLink function
const openLink = (url) => {
  if (process.client) {
    window.open(url, "_blank");
  }
};

const quickLinks = [
  { key: "footer.quick.products", path: "/product" },
  { key: "footer.quick.about", path: "/our-story" },
  { key: "footer.quick.contact", path: "/contact-us" }
];

const products = [
  {
    key: "footer.facialCare",
    link: { path: "/product", query: { category: "FACIAL_CARE" } }
  },
  {
    key: "footer.hairCare",
    link: { path: "/product", query: { category: "HAIR_CARE" } }
  },
  {
    key: "footer.skinCare",
    link: { path: "/product", query: { category: "SKIN_CARE" } }
  },
  {
    key: "footer.personalCare",
    link: { path: "/product", query: { category: "PERSONAL_CARE" } }
  },
  {
    key: "footer.makeup",
    link: { path: "/product", query: { category: "MAKEUP" } }
  }
];

const aboutLinks = [
  { key: "footer.about.history", path: "/our-story" },
  { key: "footer.about.vision", path: "/vision-mission" },
  { key: "footer.about.founder", path: "/founder" },
  { key: "footer.about.csr", path: "/csr" },
  { key: "footer.about.media", path: "/our-midea" }
];

// Used only by the mobile accordion (Style 4)
const mobileSections = [
  {
    name: "quickLinks",
    labelKey: "footer.quickLinks",
    items: quickLinks,
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M9 15 15 9"/><path d="M10.5 6.5 12 5a3.5 3.5 0 0 1 5 5l-1.5 1.5"/><path d="M13.5 17.5 12 19a3.5 3.5 0 0 1-5-5l1.5-1.5"/></svg>`
  },
  {
    name: "products",
    labelKey: "footer.products",
    items: products,
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 8 12 3 3 8v8l9 5 9-5V8Z"/><path d="M3 8l9 5 9-5"/><path d="M12 13v8"/></svg>`
  },
  {
    name: "aboutUs",
    labelKey: "footer.aboutUs",
    items: aboutLinks,
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="3.2"/><path d="M5 20c1.2-3.6 4-5.5 7-5.5s5.8 1.9 7 5.5"/></svg>`
  }
];

const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/share/1Edy6i8RrF/?mibextid=wwXIfr",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3c-3.3 0-5 1.7-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.7.3-1 1-1z"/></svg>`
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@borancare_official?_r=1&_t=ZS-97z9X813f76",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.5 8.2c-1.8 0-3.4-.8-4.5-2v8.1a5.8 5.8 0 1 1-5-5.7v3a2.8 2.8 0 1 0 2 2.7V2h3c.2 2.1 1.9 3.8 4 4v2.2z"/></svg>`
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/borancarekh?igsh=MWdlbzZlYWg1OGNmZA==",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5.5A5.5 5.5 0 1 0 17.5 13 5.5 5.5 0 0 0 12 7.5zm0 2A3.5 3.5 0 1 1 8.5 13 3.5 3.5 0 0 1 12 9.5zM17.5 6a1.2 1.2 0 1 0 1.2 1.2A1.2 1.2 0 0 0 17.5 6z"/></svg>`
  },
  {
    name: "Telegram",
    url: "https://t.me/ChanthaSok",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.5 3.5 18 20c-.3 1.2-1 1.5-2 .9l-5.5-4.1-2.7 2.6c-.3.3-.6.6-1.2.6l.4-5.6 10.2-9.2c.5-.4-.1-.7-.7-.3L3.7 12.8.2 11.7c-1.2-.4-1.2-1.2.3-1.8L20 2.7c.9-.3 1.7.2 1.5.8z"/></svg>`
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/borancareasia",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.9h3.42v1.58h.05c.48-.91 1.65-1.86 3.39-1.86 3.63 0 4.3 2.39 4.3 5.5v6.33zM5.34 7.32a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V8.9h3.56v11.55zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z"/></svg>`
  }
];
const socialLinksTopRow = computed(() => socialLinks.slice(0, 2));
const socialLinksBottomRow = computed(() => socialLinks.slice(2, 5));

// Helper function to check if the current item is active
const isActive = (item) => {
  const target = item.link || item.path;
  if (!target) return false;

  const targetPath = typeof target === "string" ? target : target.path;
  const targetQuery = typeof target === "string" ? {} : (target.query || {});

  // If paths don't match, it's not active
  if (route.path !== targetPath) return false;

  // If paths match, check if the queries match
  for (const key in targetQuery) {
    if (String(route.query[key]) !== String(targetQuery[key])) {
      return false;
    }
  }
  return true;
};

const goTo = async (item) => {
  if (!item) return;

  // 1. Update the route/query first
  if (typeof item === "string") {
    await router.push(localePath(item));
  } else {
    await router.push(localePath({
      path: item.path,
      query: item.query
    }));
  }

  // 2. Wait for Vue to actually finish re-rendering the new category
  await nextTick();

  // 3. Jump to top smoothly
  window.scrollTo({ top: 0, behavior: "smooth" });

  // 4. Close any open mobile menus
  openSection.value = null;
};
</script>

<template>

  <!-- =========================================================
       MOBILE FOOTER (Style 4) — visible below sm breakpoint
  ========================================================== -->
  <footer
    class="sm:hidden w-full bg-[#AC8544] border-t border-[#C9A86A]"
    style="font-family:'Oswald',sans-serif"
  >
    <div class="max-w-[480px] mx-auto px-6 pt-10 pb-6">

      <div class="flex justify-center py-3">
        <img
          src="assets/images/boran_care_logo-removebg-preview.png"
          alt="Boran Care"
          class="w-[150px] object-contain"
        />
      </div>

      <div class="h-px w-full bg-[#C9A86A]"></div>

      <div class="divide-y divide-[#C9A86A]">
        <div v-for="section in mobileSections" :key="section.name" class="py-1">
          <button
            @click="toggleSection(section.name)"
            class="w-full flex items-center justify-between py-2 text-left"
          >
            <span class="flex items-center gap-3 text-[15px] text-white tracking-widest">
              <span class="w-5 h-5 shrink-0 text-white" v-html="section.icon"></span>
              <span class="shrink-0">{{ t(section.labelKey) }}</span>
            </span>
            <span
              class="text-white shrink-0 transition-transform duration-300"
              :class="{ 'rotate-90': openSection === section.name }"
            >
              &#8250;
            </span>
          </button>

          <div v-show="openSection === section.name" class="pl-8 pb-3 space-y-2">
            <button
              v-for="item in section.items"
              :key="item.key"
              @click="goTo(item.link || item.path)"
              class="block text-sm tracking-wider transition text-left"
              :class="isActive(item) ? 'text-white' : 'text-white/85 hover:text-white'"
            >
              {{ t(item.key) }}
            </button>
          </div>
        </div>
      </div>

      <div class="mt-8 text-center">
        <h3 class="uppercase text-[13px] tracking-widest text-white mb-4">
          {{ t('footer.followUs') }}
        </h3>

        <div class="flex justify-center gap-3 mb-3">
          <button
            v-for="social in socialLinksTopRow"
            :key="social.name"
            @click="openLink(social.url)"
            class="w-10 h-10 shrink-0 rounded-full flex items-center justify-center
              bg-transparent border border-white text-white
              hover:bg-white hover:text-[#AC8544]
              hover:-translate-y-1 hover:scale-110
              transition-all duration-300"
          >
            <span class="w-5 h-5" v-html="social.icon"></span>
          </button>
        </div>
        <div class="flex justify-center gap-3">
          <button
            v-for="social in socialLinksBottomRow"
            :key="social.name"
            @click="openLink(social.url)"
            class="w-10 h-10 shrink-0 rounded-full flex items-center justify-center
              bg-transparent border border-white text-white
              hover:bg-white hover:text-[#AC8544]
              hover:-translate-y-1 hover:scale-110
              transition-all duration-300"
          >
            <span class="w-5 h-5" v-html="social.icon"></span>
          </button>
        </div>
      </div>

      <!-- Language Switcher -->

    </div>

    <div class="border-t border-[#C9A86A]">
      <div class="max-w-[480px] mx-auto px-6 py-4 text-center text-white/85 text-[12px] tracking-wide space-y-1">
        <div>{{ t('footer.copyright') }}</div>
        <div class="flex justify-center gap-2">
          <span class="text-white">{{ t('footer.privacy') }}</span>
          <span>|</span>
          <span class="text-white">{{ t('footer.terms') }}</span>
        </div>
      </div>
    </div>
  </footer>

  <!-- =========================================================
       DESKTOP / TABLET FOOTER (original design) — sm and up
  ========================================================== -->
  <footer
    class="hidden sm:block w-full bg-[#AC8544] border-t border-[#E8DFC8]"
    style="font-family:'Oswald',sans-serif"
  >
    <div
      class="max-w-[1280px] mx-auto
      px-5 sm:px-8 lg:px-10
      py-12 sm:py-14
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-5
      gap-y-10
      gap-x-8"
    >
      <!-- Logo -->
      <div class="flex items-start justify-center sm:justify-start lg:justify-start pb-4 sm:pb-0">
        <img
          src="assets/images/boran_care_logo-removebg-preview.png"
          alt="Boran Care"
          class="w-[140px] sm:w-[165px] lg:w-[180px] object-contain"
        />
      </div>

      <!-- Quick Links -->
      <div class="text-center sm:text-left">
        <h3 class="uppercase tracking-widest text-[18px] sm:text-[20px] text-white mb-4">
          {{ t('footer.quickLinks') }}
        </h3>
        <ul class="space-y-2">
          <li v-for="item in quickLinks" :key="item.key">
            <button
              @click="goTo(item.path)"
              class="relative tracking-wider text-sm text-white transition
              after:absolute after:left-0 after:-bottom-1
              after:h-[1px] after:bg-white
              after:transition-all after:duration-300"
              :class="isActive(item) ? 'after:w-full' : 'after:w-0 hover:after:w-full'"
            >
              {{ t(item.key) }}
            </button>
          </li>
        </ul>
      </div>

      <!-- Products -->
      <div class="text-center sm:text-left">
        <h3 class="uppercase tracking-widest text-[20px] text-white mb-3">
          {{ t('footer.products') }}
        </h3>
        <ul class="space-y-2">
          <li v-for="item in products" :key="item.key">
            <button
              @click="goTo(item.link)"
              class="relative tracking-wider text-sm text-white transition
              after:absolute after:left-0 after:-bottom-1
              after:h-[1px] after:bg-white
              after:transition-all after:duration-300"
              :class="isActive(item) ? 'after:w-full' : 'after:w-0 hover:after:w-full'"
            >
              {{ t(item.key) }}
            </button>
          </li>
        </ul>
      </div>

      <!-- About -->
      <div class="text-center lg:text-left">
        <h3 class="uppercase tracking-widest text-[20px] text-white mb-3">
          {{ t('footer.aboutUs') }}
        </h3>
        <ul class="space-y-1">
          <li v-for="item in aboutLinks" :key="item.key">
            <button
              @click="goTo(item.path)"
              class="relative tracking-wider text-sm text-white transition
              after:absolute after:left-0 after:-bottom-1
              after:h-[1px] after:bg-white
              after:transition-all after:duration-300"
              :class="isActive(item) ? 'after:w-full' : 'after:w-0 hover:after:w-full'"
            >
              {{ t(item.key) }}
            </button>
          </li>
        </ul>
      </div>

      <!-- Social -->
      <div class="text-center">
        <h3 class="uppercase tracking-widest text-[20px] text-white mb-3">
          {{ t('footer.followUs') }}
        </h3>
        <!-- Row 1: 2 icons, centered -->
        <div class="flex justify-center gap-3 mb-3">
          <button
            v-for="social in socialLinksTopRow"
            :key="social.name"
            @click="openLink(social.url)"
            class="w-9 h-9 shrink-0 rounded-full
              flex items-center justify-center
              bg-[#F8F1E3]
              text-[#B88A33]
              hover:bg-[#AC8544]
              hover:text-white
              hover:-translate-y-1
              hover:scale-110
              hover:shadow-lg
              hover:shadow-[#B88A33]/30
              transition-all duration-300"
          >
            <span class="w-5 h-5" v-html="social.icon"></span>
          </button>
        </div>
        <!-- Row 2: 3 icons, centered -->
        <div class="flex justify-center gap-3">
          <button
            v-for="social in socialLinksBottomRow"
            :key="social.name"
            @click="openLink(social.url)"
            class="w-9 h-9 shrink-0 rounded-full
              flex items-center justify-center
              bg-[#F8F1E3]
              text-[#B88A33]
              hover:bg-[#AC8544]
              hover:text-white
              hover:-translate-y-1
              hover:scale-110
              hover:shadow-lg
              hover:shadow-[#B88A33]/30
              transition-all duration-300"
          >
            <span class="w-5 h-5" v-html="social.icon"></span>
          </button>
        </div>
      </div>
    </div>

    <!-- Bottom -->
    <div class="bg-[#AC8544] border">
      <div
        class="max-w-[1280px] mx-auto
        px-5 sm:px-8
        py-5
        flex flex-col
        md:flex-row
        items-center
        justify-between
        gap-3
        text-white
        text-center
        md:text-left
        text-[13px]
        sm:text-[14px]
        tracking-wide"
      >
        <div>{{ t('footer.copyright') }}</div>
        <div class="flex flex-wrap justify-center gap-2">
          <span>{{ t('footer.privacy') }}</span>
          <span>|</span>
          <span>{{ t('footer.terms') }}</span>
        </div>
      </div>
    </div>
  </footer>

</template>