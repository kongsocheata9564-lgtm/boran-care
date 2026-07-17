<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { Search, ChevronDown, Menu, X, Globe } from "lucide-vue-next";

import logo from "~/assets/images/boran_care_logo-removebg-preview.png";

const { locale, setLocale, t, getLocaleMessage } = useI18n();
const router = useRouter();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();

const mobileMenu = ref(false);
const productOpen = ref(false);
const aboutOpen = ref(false);

const mobileProductOpen = ref(false);
const mobileAboutOpen = ref(false);
const languageOpen = ref(false);

const searchQuery = ref("");
const mobileSearchQuery = ref("");

const languages = computed(() => [
  { code: "en", label: t("header.english") },
  { code: "km", label: t("header.khmer") },
]);

const currentLangLabel = computed(() => {
  return languages.value.find((l) => l.code === locale.value)?.label ?? locale.value.toUpperCase();
});
const route = useRoute();

const isProductActive = computed(
  () => productOpen.value || route.path.includes("/product")
);

const isAboutActive = computed(
  () => aboutOpen.value || abouts.some((a) => route.path.includes(a.link))
);

const isContactActive = computed(() => route.path.includes("/contact-us"));

const products = [
  {
    key: "header.facialCare",
    link: { path: "/product", query: { category: "FACIAL CARE" } },
  },
  {
    key: "header.hairCare",
    link: { path: "/product", query: { category: "HAIR CARE" } },
  },
  {
    key: "header.skinCare",
    link: { path: "/product", query: { category: "SKIN CARE" } },
  },
  {
    key: "header.personalCare",
    link: { path: "/product", query: { category: "PERSONAL CARE" } },
  },
  {
    key: "header.makeup",
    link: { path: "/product", query: { category: "MAKEUP" } },
  },
];

const abouts = [
  { key: "header.story", link: "/our-story" },
  { key: "header.vision", link: "/vision-mission" },
  { key: "header.founder", link: "/founder" },
  { key: "header.csr", link: "/csr" },
  { key: "header.media", link: "/our-midea" },
];

// --- Search: match across product categories, about pages, contact,
// in both English and Khmer, regardless of which language is active ---
const translateAllLocales = (key) => {
  return ["en", "km"]
    .map((loc) => {
      try {
        const parts = key.split(".");
        let value = getLocaleMessage(loc);
        for (const part of parts) value = value?.[part];
        return typeof value === "string" ? value : null;
      } catch {
        return null;
      }
    })
    .filter(Boolean);
};

const EXTRA_KEYWORDS = {
  "header.facialCare": ["facial care", "facial"],
  "header.hairCare": ["hair care", "hair"],
  "header.skinCare": ["skin care", "skin"],
  "header.personalCare": ["personal care", "personal"],
  "header.makeup": ["makeup", "make up"],
  "header.story": ["our story", "story"],
  "header.vision": [
    "vision",
    "mission",
    "vision mission",
    "our vision",
    "core values",
    "mission core values",
  ],
  "header.founder": ["founder", "our founder"],
  "header.csr": ["csr", "our csr"],
  "header.media": ["media", "video", "our media", "media and video"],
  "header.about": ["about", "about us"],
  "header.contact": ["contact", "contact us"],
};

const searchTargets = computed(() => {
  const items = products.map((p) => ({
    keywords: [
      ...translateAllLocales(p.key),
      ...(EXTRA_KEYWORDS[p.key] ?? []),
      p.link.query?.category,
    ],
    to: p.link,
  }));

  abouts.forEach((a) => {
    items.push({
      keywords: [...translateAllLocales(a.key), ...(EXTRA_KEYWORDS[a.key] ?? [])],
      to: a.link,
    });
  });

  items.push({
    keywords: [
      ...translateAllLocales("header.about"),
      ...EXTRA_KEYWORDS["header.about"],
    ],
    to: abouts[0]?.link ?? "/our-story",
  });

  items.push({
    keywords: [
      ...translateAllLocales("header.contact"),
      ...EXTRA_KEYWORDS["header.contact"],
    ],
    to: "/contact-us",
  });

  return items;
});

const normalize = (str) => str.toLowerCase().trim();

const findMatch = (query) => {
  const q = normalize(query);
  return searchTargets.value.find((item) =>
    item.keywords.some((k) => k && normalize(k).includes(q))
  );
};

const goToSearchResult = (query) => {
  const trimmed = query.trim();
  if (!trimmed) return;
  const match = findMatch(trimmed);
  if (match) {
    router.push(localePath(match.to));
  } else {
    router.push(localePath({ path: "/product", query: { search: trimmed } }));
  }
};

const handleSearch = () => goToSearchResult(searchQuery.value);
const handleMobileSearch = () => {
  mobileMenu.value = false;
  goToSearchResult(mobileSearchQuery.value);
};

// Switch language: navigate to the equivalent URL in the new locale
// (e.g. /contact-us <-> /en/contact-us), then close whichever dropdown triggered it
const switchLocale = async (code) => {
  const path = switchLocalePath(code);
  await setLocale(code);
  if (path) {
    router.push(path);
  }
  languageOpen.value = false;
  mobileMenu.value = false;
};

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
      class="fixed top-0 left-0 w-full z-50  border-t border-b border-[white] shadow-sm bg-[#AC8544]"
    >
      <div
        class="w-full h-[70px] flex items-center justify-between"
        style="padding-left: clamp(1rem, 4vw, 3rem); padding-right: clamp(1rem, 4vw, 3rem);"
      >
        <!-- Logo -->
        <NuxtLink :to="localePath('/')" class="flex items-center">
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
              class="flex items-center gap-1 uppercase font-normal tracking-wide  text-[white]"
            >
              <NuxtLink
               class="relative inline-block text-white font-normal uppercase
                     after:content-['']
                     after:absolute
                     after:left-0
                     after:-bottom-1
                     after:h-[2px]
                     after:bg-white
                     after:transition-all
                     after:duration-300"
               :class="isProductActive ? 'after:w-full' : 'after:w-0'"
             >
               {{ t('header.product') }}
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
                  :key="item.key"
                  :to="localePath(item.link)"
                  class="block px-5 py-3 text-sm text-white hover:text-[#f5dfb5] transition-colors"
                >
                  {{ t(item.key) }}
                </NuxtLink>
              </div>
            </Transition>
          </div>

          <!-- About -->
          <div class="relative" data-dropdown>
            <button
              @click.stop="aboutOpen = !aboutOpen; productOpen = false; languageOpen = false"
              class="flex items-center gap-1 uppercase font-normal tracking-wide  text-[white]"
            >
             <NuxtLink
               class="relative inline-block text-white font-normal uppercase
                     after:content-['']
                     after:absolute
                     after:left-0
                     after:-bottom-1
                     after:h-[2px]
                     after:bg-white
                     after:transition-all
                     after:duration-300"
               :class="isAboutActive ? 'after:w-full' : 'after:w-0'"
             >
               {{ t('header.about') }}
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
                  :key="item.key"
                  :to="localePath(item.link)"
                  class="block px-5 py-3 text-sm text-white hover:text-[#f5dfb5] transition-colors"
                >
                  {{ t(item.key) }}
                </NuxtLink>
              </div>
            </Transition>
          </div>

            <NuxtLink
               :to="localePath('/contact-us')"
               class="relative inline-block text-white font-normal uppercase
                     after:content-['']
                     after:absolute
                     after:left-0
                     after:-bottom-1
                     after:h-[2px]
                     after:bg-white
                     after:transition-all
                     after:duration-300"
               :class="isContactActive ? 'after:w-full' : 'after:w-0'"
             >
               {{ t('header.contact') }}
             </NuxtLink>
        </nav>

        <!-- Desktop Right -->
        <div class="hidden lg:flex items-center gap-8">
          <div class="flex items-center border border-[white] rounded-full px-6 py-2">
            <button
              type="button"
              @click="handleSearch"
              class="shrink-0"
              :aria-label="t('header.search')"
            >
              <Search :size="18" class=" text-[white] " />
            </button>
            <input
              v-model="searchQuery"
              type="text"
              :placeholder="t('header.search')"
              @keyup.enter="handleSearch"
              class="ml-3 outline-none bg-transparent w-32  text-[white] text-[15px]"
            />
          </div>

          <div class="relative" data-dropdown>
            <button
              @click.stop="languageOpen = !languageOpen; productOpen = false; aboutOpen = false"
              class="w-[110px] h-[42px] rounded-full border border-[white] flex justify-center items-center gap-1.5 text-[white] font-normal"
            >
              <Globe :size="16" class="text-white" />
              {{ currentLangLabel }}
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
                  :key="lang.code"
                  @click="switchLocale(lang.code)"
                  class="block w-full py-1 hover:text-[#f5dfb5] text-white transition-colors rounded-[10px]"
                >
                  {{ lang.label }}
                </button>
              </div>
            </Transition>
          </div>
        </div>

        <!-- Mobile Logo + Button -->
<div class="flex lg:hidden items-center gap-4">

<NuxtLink :to="localePath('/')" class="hidden lg:flex items-center">
  <img
    :src="logo"
    alt="BORAN CARE"
    class="h-16 object-contain"
  />
</NuxtLink>

  <button
    v-if="!mobileMenu"
    @click="mobileMenu = !mobileMenu"
  >
    <Menu
      :size="28"
      class="text-white"
    />
  </button>

</div>
      </div>
    </header>

    <div class="h-[70px]"></div>
  </div>

  <!-- Mobile Menu Panel -->
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
      <div
        class="absolute inset-0 bg-black/30"
        @click="
          mobileMenu = false;
          mobileProductOpen = false;
          mobileAboutOpen = false;
          "
      ></div>

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
              {{ t('header.product') }}
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
  :key="item.key"
  :to="localePath(item.link)"
  @click="mobileMenu = false"
  class="block py-2.5 text-sm text-white hover:text-[#f5dfb5] transition-colors"
>
  {{ t(item.key) }}
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
              {{ t('header.about') }}
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
                :key="item.key"
                :to="localePath(item.link)"
                @click="mobileMenu = false"
                class="block py-2.5 text-sm text-white hover:text-[#f5dfb5] transition-colors"
              >
                {{ t(item.key) }}
              </NuxtLink>
            </div>
          </div>

          <!-- Contact -->
          <NuxtLink
            :to="localePath('/contact-us')"
            @click="mobileMenu = false"
            class="block py-3 text-white font-semibold uppercase tracking-wide hover:text-[#f5dfb5] transition-colors"
          >
            {{ t('header.contact') }}
          </NuxtLink>

          <div class="border-t border-white/30 my-4"></div>

          <!-- Search -->
          <div class="flex items-center border border-white rounded-full px-4 py-2.5">
            <button
              type="button"
              @click="handleMobileSearch"
              :aria-label="t('header.search')"
            >
              <Search :size="18" class="text-white" />
            </button>
            <input
              v-model="mobileSearchQuery"
              type="text"
              :placeholder="t('header.search')"
              @keyup.enter="handleMobileSearch"
              class="ml-3 outline-none bg-transparent w-full text-sm text-white"
            />
          </div>

          <!-- Language -->
          <div class="pt-4">
            <div class="flex items-center gap-2 text-white mb-2">
              <Globe :size="16" class="text-white" />
              <span class="text-sm font-semibold uppercase tracking-wide">{{ t('header.language') }}</span>
            </div>
            <div class="flex items-center gap-3">
              <button
                v-for="lang in languages"
                :key="lang.code"
                @click="switchLocale(lang.code)"
                class="px-5 py-2 rounded-full text-sm font-semibold transition-colors"
                :class="
   locale === lang.code
   ? 'bg-white text-[#AC8544]'
   : 'border border-white text-white hover:text-white/20'
  "
              >
                {{ lang.label }}
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600&family=Inter:wght@400;500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Khmer:wght@500;600;700&display=swap");

header {
  font-family: "Inter", sans-serif;
}

nav,
button,
a {
  font-family: "Oswald", 'Noto Sans Khmer', sans-serif;
}

input::placeholder {
  color: white;
  opacity: 0.8;
}
</style>