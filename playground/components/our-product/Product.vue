<template>
  <div class="font-inter min-h-screen text-[#2C3E2B] px-4 sm:px-32">
    <main class="max-w-7xl mx-auto pt-8 sm:pt-10 pb-8 sm:pb-12">
      <h2 class="font-oswald text-center text-3xl sm:text-4xl text-[#AC8544] uppercase tracking-widest mb-8">
        {{ t('productPage.ourProducts') }}
      </h2>

      <div class="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3 sm:gap-5 mb-10 w-full max-w-4xl mx-auto">
        <button
          v-for="(catKey, index) in categories"
          :key="catKey"
          @click="toggleCategory(catKey)"
          :class="[
            'font-oswald px-3 py-2.5 sm:px-5 sm:py-2.5 rounded-xl text-sm sm:text-base  tracking-wider uppercase border transition-all text-center whitespace-nowrap sm:basis-auto sm:min-w-[140px]',
            index === categories.length - 1 && categories.length % 2 !== 0 ? 'col-span-2 sm:col-span-1' : '',
            activeCategory === catKey ? 'bg-[#AC8544] text-white border-[#AC8544]' : 'bg-white text-[#AC8544] border-[#AC8544] hover:bg-[#FAF9F6]'
          ]"
        >
          {{ getCategoryLabel(catKey) }}
        </button>
      </div>

      <div :class="['grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-[1198px] mx-auto gap-5 sm:gap-8', isModalOpen ? 'pointer-events-none' : '']">
        <div
          v-for="product in filteredProducts"
          :key="product.id"
          class="bg-white rounded-2xl border border-[#AC8544] overflow-hidden flex flex-col group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl   active:translate-y-0 active:shadow-sm active:ring-0 tap-transparent"
          @click="openProduct(product)"
        >
          <div class="relative aspect-square bg-[#F3F1ED] overflow-hidden flex items-center justify-center">
            <span class="font-oswald absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#AC8544]/70 backdrop-blur-sm text-white text-sm font-medium uppercase px-3 py-2 rounded shadow-sm z-10 tracking-wide text-center leading-snug flex items-center justify-center w-[150px] sm:w-[160px] min-h-[38px]">
              {{ product.badge }}
            </span>
            <img v-if="product.image" :src="product.image" :alt="product.name" class="w-full h-full object-cover" />
            <span v-else class="text-xs text-gray-400">{{ t('productPage.noImage') }}</span>
          </div>

          <!-- <div class="p-5 flex justify-between items-center mt-auto border-t border-[#F5F2EC]">
            <span class="text-[#145A3A] font-medium tracking-wide text-base group-hover:text-[#8C7654] transition-colors">
             {{ t('productPage.viewDetails') }}
            </span>
            <svg class="w-5 h-5 text-[#145A3A] transform transition-transform group-hover:translate-x-1.5 group-hover:text-[#8C7654] duration-300" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </div> -->
          
        </div>
      </div>
    </main>

    <div
      v-if="isModalOpen && selectedProduct"
      class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-3 sm:p-4 animate-fade-in"
      @click.self="isModalOpen = false"
    >
      <div class="bg-white rounded-3xl w-full max-w-3xl relative max-h-[95vh] sm:max-h-[92vh] overflow-hidden shadow-2xl border border-[#EBE7E0] flex flex-col">

        <button
          @click="isModalOpen = false"
          class="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors z-20 bg-white/80 backdrop-blur-sm"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="overflow-y-auto">
        <div class="p-8 sm:p-10">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            <div>
              <div class="aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden bg-[#F3F1ED] shadow-sm">
                <img :src="activeImage" :alt="selectedProduct.name" class="w-full h-full object-cover" />
              </div>

              <div class="flex gap-3 mt-4 overflow-x-auto pb-1">
                <button
                  v-for="(img, i) in selectedProduct.images"
                  :key="i"
                  @click="activeImage = img"
                  class="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 bg-[#F3F1ED] shadow-sm hover:opacity-90"
                  :class="activeImage === img ? 'border-[#8C7654] scale-95' : 'border-transparent'"
                >
                  <img :src="img" class="w-full h-full object-cover" />
                </button>
              </div>
            </div>

            <div class="flex flex-col h-full justify-start pt-2">
              <div class="mb-3">
                <span class="font-oswald inline-block bg-[#AC8544] text-white text-[16px] font-semibold uppercase tracking-wider px-3 py-1 rounded">
                  {{ selectedProduct.type }}
                </span>
              </div>

              <h2 class="font-oswald text-[20px] sm:text-[24px] text-[#AC8544] font-medium tracking-wide mb-2">
                {{ selectedProduct.name }}
              </h2>

              <p class="text-[#145A3A] pt-4 text-[16px] leading-relaxed">
                {{ selectedProduct.description }}
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 pt-8 border-t border-[#EBE7E0]">
            <div>
              <h3 class="font-oswald text-[21px] text-[#AC8544] font-medium mb-4">{{ t('productPage.benefits') }}</h3>
              <ul class="space-y-3">
                <li
                  v-for="(benefit, i) in selectedProduct.benefits"
                  :key="i"
                  class="flex items-start gap-2.5 text-[16px] text-[#145A3A]"
                >
                  <span class="text-[#145A3A] text-[16px] mt-0.5">•</span>
                  <span>{{ benefit }}</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="font-oswald text-[21px] text-[#AC8544] font-medium mb-4">{{ t('productPage.keyIngredients') }}</h3>
              <ul class="space-y-3">
                <li
                  v-for="(ing, i) in selectedProduct.ingredients"
                  :key="i"
                  class="flex items-start gap-2.5 text-[16px] text-[#145A3A]"
                >
                  <span class="text-[#145A3A] text-[16px] mt-0.5">•</span>
                  <span><strong class="font-medium text-[#145A3A]">{{ ing.name }}</strong> — {{ ing.desc }}</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useI18n } from 'vue-i18n';


// Import all product images
import imgSoap1 from '~/assets/images/b6.jpeg'
import imgSoap2 from '~/assets/images/b29.jpeg'
import imgSoap3 from '~/assets/images/b27.jpeg'
import imgSoap4 from '~/assets/images/b28.jpeg'

import imgSoap5 from '~/assets/images/b18.jpeg'
import imgSoap6 from '~/assets/images/30.jpeg'
import imgSoap7 from '~/assets/images/31.jpeg'
import imgSoap8 from '~/assets/images/b30.jpeg'


import imgSink1 from '~/assets/images/b24.jpeg'
import imgSink2 from '~/assets/images/b22.jpeg'
import imgHair1 from '~/assets/images/b8.jpeg'
import imgHair2 from '~/assets/images/b11.jpeg'
import imgHair3 from '~/assets/images/b13.jpeg'
import imgHair4 from '~/assets/images/b23.jpeg'
import imgMake1 from '~/assets/images/b17.jpeg'
import imgScrub1 from '~/assets/images/b14.jpeg'
import imgScrub2 from '~/assets/images/b19.jpeg'
import imgScrub3 from '~/assets/images/b31.jpeg'
import imgScrub4 from '~/assets/images/b32.jpeg'
import b15 from '~/assets/images/b15.jpeg'
import b16 from '~/assets/images/16.jpeg'

const { t, tm } = useI18n();
const route = useRoute();
const router = useRouter();
const localePath = useLocalePath(); // <--- ADDED THIS


const activeCategory = ref('');
const isModalOpen = ref(false);
const selectedProductId = ref(null);
const activeImage = ref(null);

const DEFAULT_VISIBLE_COUNT = 5;

// Unified Category IDs corresponding to translation key mappings
const categories = ['FACIAL_CARE', 'HAIR_CARE', 'SKIN_CARE', 'PERSONAL_CARE', 'MAKEUP'];

// Shared key mapping used by both label helpers below
const CATEGORY_KEY_MAP = {
  'FACIAL_CARE': 'facialCare',
  'HAIR_CARE': 'hairCare',
  'SKIN_CARE': 'skinCare',
  'PERSONAL_CARE': 'personalCare',
  'MAKEUP': 'makeup'
};

// Label used on the CATEGORY FILTER BUTTONS (e.g. "Facial Care")
const getCategoryLabel = (catKey) => {
  return t(`productPage.categories.${CATEGORY_KEY_MAP[catKey] || 'facialCare'}`);
};


// NEW
watch(
  () => route.query.category,
  (category) => {
    if (category && categories.includes(category)) {
      activeCategory.value = category;
    } else {
      activeCategory.value = "";
    }
    // Ensure we start at top whenever the category changes — client only
    if (import.meta.client) {
      nextTick(() => window.scrollTo({ top: 0, behavior: "smooth" }));
    }
  },
  { immediate: true }
);

// Static Product Metadata
const productMetadata = [
  {
    id: 1,
    key: 'p1',
    category: 'FACIAL_CARE',
    image: imgSoap1,
    images: [imgSoap1, imgSoap3, imgSoap2, imgSoap4]
  },
  {
    id: 3,
    key: 'p3',
    category: 'HAIR_CARE',
    image: imgHair1,
    images: [imgHair1, imgHair4, imgHair3, imgHair2]
  },
  {
    id: 7,
    key: 'p7',
    category: 'SKIN_CARE',
    image: imgSink1,
    images: [imgSink2, imgSink2, imgSink2, imgSink1]
  },
  {
    id: 5,
    key: 'p5',
    category: 'PERSONAL_CARE',
    image: imgScrub2,
    images: [imgScrub2, imgScrub4, b15, imgScrub3]
  },
  {
    id: 6,
    key: 'p6',
    category: 'MAKEUP',
    image: imgMake1,
    images: [imgMake1, imgMake1, imgMake1, imgMake1]
  },


  {
    id: 2,
    key: 'p2',
    category: 'FACIAL_CARE',
    image: imgSoap5,
    images: [imgSoap5, imgSoap6, imgSoap7, imgSoap8]
  },
  {
    id: 4,
    key: 'p4',
    category: 'PERSONAL_CARE',
    image: imgScrub1,
    images: [imgScrub1, b16, b15, imgScrub1]
  }
];

// Computed translation data dynamic parsing to bypass AST nodes
const products = computed(() => {
  return productMetadata.map(p => {
    const rawBenefits = tm(`productPage.productsData.${p.key}.benefits`) || [];
    const rawIngredients = tm(`productPage.productsData.${p.key}.ingredients`) || [];

    // Safely map values into concrete string evaluations
    const benefits = Array.isArray(rawBenefits) 
      ? rawBenefits.map((_, index) => t(`productPage.productsData.${p.key}.benefits[${index}]`))
      : [];

    const ingredients = Array.isArray(rawIngredients)
      ? rawIngredients.map((_, index) => ({
          name: t(`productPage.productsData.${p.key}.ingredients[${index}].name`),
          desc: t(`productPage.productsData.${p.key}.ingredients[${index}].desc`)
        }))
      : [];

    return {
      id: p.id,
      category: p.category,
      image: p.image,
      images: p.images,
      name: t(`productPage.productsData.${p.key}.name`),
      type: t(`productPage.productsData.${p.key}.type`),
      badge: t(`productPage.productsData.${p.key}.badge`),
      description: t(`productPage.productsData.${p.key}.description`),
      benefits,
      ingredients
    };
  });
});

// Reactively resolves the active product upon language change
const selectedProduct = computed(() => {
  if (!selectedProductId.value) return null;
  return products.value.find(p => p.id === selectedProductId.value);
});

// Default filtering matrix behavior
const filteredProducts = computed(() => {
  if (!activeCategory.value) return products.value.slice(0, DEFAULT_VISIBLE_COUNT);
  return products.value.filter(p => p.category === activeCategory.value);
});

function toggleCategory(cat) {
  if (activeCategory.value === cat) {
    // Deselect — clear the query
    activeCategory.value = '';
    router.replace(localePath({ path: '/product', query: {} })); // <--- UPDATED THIS
  } else {
    // Select — push category into the URL
    activeCategory.value = cat;
    router.replace(localePath({ path: '/product', query: { category: cat } })); // <--- UPDATED THIS
  }
}

function openProduct(product) {
  selectedProductId.value = product.id;
  activeImage.value = product.image;
  isModalOpen.value = true;
}

// Reset tracker when modal is closed
watch(isModalOpen, (isOpen) => {
  if (!isOpen) {
    selectedProductId.value = null;
  }
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600&family=Inter:wght@400;500&display=swap");

.font-oswald {
  font-family: "Oswald", sans-serif;
}

.font-inter {
  font-family: "Inter", sans-serif;
}

.animate-fade-in {
  animation: fadeIn 0.25s ease-out forwards;
}

.tap-transparent {
  -webkit-tap-highlight-color: transparent;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>