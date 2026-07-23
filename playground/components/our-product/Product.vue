<template>
  <div class="font-inter min-h-screen text-[#2C3E2B] px-4 sm:px-32">
    <main class="max-w-6xl mx-auto pt-8 sm:pt-8 pb-8 sm:pb-12">
      <h2 class="font-oswald text-center text-3xl sm:text-4xl text-[#AC8544] uppercase tracking-wider mb-8">
        {{ t('productPage.ourProducts') }}
      </h2>

      <div class="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3 sm:gap-8 mb-10 w-full max-w-4xl mx-auto">
        <button
          v-for="(catKey, index) in categories"
          :key="catKey"
          @click="toggleCategory(catKey)"
          :class="[
            'font-oswald px-3 py-2.5 sm:px-5 sm:py-2.5 rounded-xl text-sm sm:text-base font-normal tracking-wider uppercase border transition-all text-center whitespace-nowrap sm:basis-auto sm:min-w-[140px]',
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
          class="group relative bg-white rounded-xl border border-[#AC8544] overflow-hidden flex flex-col cursor-pointer shadow-[0_4px_20px_rgba(172,133,68,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(172,133,68,0.18)] hover:border-[#AC8544] active:translate-y-0 active:shadow-sm tap-transparent"
          @click="openProduct(product)"
        >
          <div class="relative aspect-[4/3.7] bg-[#F3F1ED] overflow-hidden rounded-b-xl ">
            <img v-if="product.image" :src="product.image" :alt="product.name" class="w-full h-full object-cover" />
            <span v-else class="font-oswald text-xs text-gray-400 flex items-center justify-center w-full h-full">{{ t('productPage.noImage') }}</span>
            <div class="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          <div class="relative px-5 pb-3.5 pt-3.5">
            <div class="flex items-center justify-between gap-2 mb-3">
              <h3 class="font-oswald text-base sm:text-lg text-[#AC8544] font-normal tracking-wide leading-snug">
                {{ product.badge }}
              </h3>
              <p class="font-oswald text-sm text-[#AC8544] tracking-wide shrink-0 px-3 py-1.5 rounded-lg border border-[#AC8544]/70 bg-[#FAF6EC]/0">
                {{ product.type }}
              </p>
            </div>

            <div class="flex items-center justify-between">
              <span class="font-oswald text-[15px] font-normal text-[#145A3A] tracking-wide transition-colors group-hover:text-[#AC8544]">
                {{ t('productPage.viewDetails') }}
              </span>
             <span class="w-7 h-7 rounded-full border border-[#145A3A] group-hover:border-[#AC8544] flex items-center justify-center text-[#145A3A] transition-all duration-300 group-hover:bg-[#AC8544] group-hover:text-white group-hover:translate-x-1">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
            </div>
          </div>
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
              <div class="mb-2">
                <span class="font-oswald inline-block bg-[#AC8544] text-white text-[14px] font-normal uppercase tracking-wider px-3 py-1 rounded-lg mb-3">
                  {{ selectedProduct.type }}
                </span>
                <h2 class="font-oswald text-[20px] sm:text-[24px] text-[#AC8544] font-normal tracking-wider">
                  {{ selectedProduct.name }}
                </h2>
              </div>

              <p class="font-oswald text-[#145A3A] pt-4 text-[16px] leading-relaxed tracking-wide">
                {{ selectedProduct.description }}
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 pt-8 border-t border-[#EBE7E0]">
            <div>
              <h3 class="font-oswald text-[21px] text-[#AC8544] font-normal tracking-wider mb-4">{{ t('productPage.benefits') }}</h3>
              <ul class="space-y-3">
                <li
                  v-for="(benefit, i) in selectedProduct.benefits"
                  :key="i"
                  class="font-oswald flex items-start gap-2.5 text-[16px] text-[#145A3A] tracking-wide"
                >
                  <span class="text-[#145A3A] text-[16px] mt-0.5">•</span>
                  <span>{{ benefit }}</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="font-oswald text-[21px] text-[#AC8544] font-normal tracking-wider mb-4">{{ t('productPage.keyIngredients') }}</h3>
              <ul class="space-y-3">
                <li
                  v-for="(ing, i) in selectedProduct.ingredients"
                  :key="i"
                  class="font-oswald flex items-start gap-2.5 text-[16px] text-[#145A3A] tracking-wide"
                >
                  <span class="text-[#145A3A] text-[16px] mt-0.5">•</span>
                  <span><strong class="font-normal text-[#145A3A]">{{ ing.name }}</strong> — {{ ing.desc }}</span>
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
import imgSoap9 from '~/assets/images/b34.jpeg'
import imgSoap10 from '~/assets/images/b43.jpeg'
import imgSoap11 from '~/assets/images/b44.jpeg'
import imgSoap12 from '~/assets/images/b45.jpeg'
import imgSoap13 from '~/assets/images/b46.jpeg'
import imgSoap14 from '~/assets/images/b47.jpeg'
import imgSoap15 from '~/assets/images/b48.jpeg'
import imgSoap16 from '~/assets/images/b66.jpeg'
import imgSoap17 from '~/assets/images/b67.jpeg'

import imgSink1 from '~/assets/images/b24.jpeg'
import imgSink2 from '~/assets/images/b22.jpeg'
import imgSink3 from '~/assets/images/b39.jpeg'
import imgSink4 from '~/assets/images/b38.jpeg'

import imgHair1 from '~/assets/images/b8.jpeg'
import imgHair2 from '~/assets/images/b11.jpeg'
import imgHair3 from '~/assets/images/b13.jpeg'
import imgHair4 from '~/assets/images/b23.jpeg'
import imgHair5 from '~/assets/images/b53.jpeg'
import imgHair6 from '~/assets/images/b54.jpeg'
import imgHair7 from '~/assets/images/b55.jpeg'
import imgHair8 from '~/assets/images/b56.jpeg'
import imgHair9 from '~/assets/images/b57.jpeg'
import imgHair10 from '~/assets/images/b58.jpeg'
import imgHair11 from '~/assets/images/b65.jpeg'
import imgHair12 from '~/assets/images/b72.jpeg'
import imgHair13 from '~/assets/images/b73.jpeg'
import imgHair14 from '~/assets/images/b74.jpeg'
import imgHair15 from '~/assets/images/b75.jpeg'
import imgHair16 from '~/assets/images/b80.jpeg'




import imgMake1 from '~/assets/images/b17.jpeg'
import imgMake2 from '~/assets/images/b37.jpeg'
import imgMake3 from '~/assets/images/b35.jpeg'
import imgMake4 from '~/assets/images/b36.jpeg'
import imgMake5 from '~/assets/images/b78.jpeg'
import imgMake6 from '~/assets/images/b79.jpeg'


import imgScrub1 from '~/assets/images/b14.jpeg'
import imgScrub2 from '~/assets/images/b19.jpeg'
import imgScrub3 from '~/assets/images/b31.jpeg'
import imgScrub4 from '~/assets/images/b32.jpeg'
import imgScrub5 from '~/assets/images/b33.jpeg'
import imgScrub6 from '~/assets/images/b40.jpeg'
import imgScrub7 from '~/assets/images/b41.jpeg'
import imgScrub8 from '~/assets/images/b42.jpeg'
import imgScrub9 from '~/assets/images/b49.jpeg'
import imgScrub10 from '~/assets/images/b50.jpeg'
import imgScrub11 from '~/assets/images/b51.jpeg'
import imgScrub12 from '~/assets/images/b52.jpeg'
import imgScrub13 from '~/assets/images/b59.jpeg'
import imgScrub14 from '~/assets/images/b60.jpeg'
import imgScrub15 from '~/assets/images/b61.jpeg'
import imgScrub16 from '~/assets/images/b62.jpeg'
import imgScrub17 from '~/assets/images/b63.jpeg'
import imgScrub18 from '~/assets/images/b64.jpeg'
import imgScrub19 from '~/assets/images/b68.jpeg'
import imgScrub20 from '~/assets/images/b69.jpeg'
import imgScrub21 from '~/assets/images/b70.jpeg'
import imgScrub22 from '~/assets/images/b71.jpeg'
import imgScrub23 from '~/assets/images/b76.jpeg'
import imgScrub24 from '~/assets/images/b77.jpeg'



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
    image: imgHair16,
    images: [imgHair16, imgHair4, imgHair3, imgHair1]
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
    image: imgMake4,
    images: [imgMake4, imgMake6, imgMake3, imgMake1]
  },
  



  {
    id: 2,
    key: 'p2',
    category: 'FACIAL_CARE',
    image: imgSoap5,
    images: [imgSoap5, imgSoap6, imgSoap7, imgSoap8]
  },
  {
    id: 9,
    key: 'p9',
    category: 'FACIAL_CARE',
    image: imgSoap10,
    images: [imgSoap10, imgSoap11, imgSoap9, imgSoap12]
  },
  {
    id: 13,
    key: 'p13',
    category: 'FACIAL_CARE',
    image: imgSoap13,
    images: [imgSoap13, imgSoap13, imgSoap14, imgSoap15]
  },
 
  {
    id: 20,
    key: 'p20',
    category: 'FACIAL_CARE',
    image: imgSoap17,
    images: [imgSoap17, imgSoap17, imgSoap17, imgSoap17]
  },
  
  {
    id: 14,
    key: 'p14',
    category: 'HAIR_CARE',
    image: imgHair6,
    images: [imgHair6, imgHair5, imgHair7, imgHair5]
  },
  {
    id: 18,
    key: 'p18',
    category: 'HAIR_CARE',
    image: imgHair11,
    images: [imgHair11, imgHair11, imgHair11, imgHair11]
  },
  {
    id: 15,
    key: 'p15',
    category: 'HAIR_CARE',
    image: imgHair12,
    images: [imgHair12, imgHair13, imgHair10, imgHair9]
  },
  
  {
    id: 24,
    key: 'p24',
    category: 'HAIR_CARE',
    image: imgHair14,
    images: [imgHair14, imgHair15, imgHair14, imgHair15]
  },
  {
    id: 4,
    key: 'p4',
    category: 'PERSONAL_CARE',
    image: imgScrub1,
    images: [imgScrub1, b16, b15, imgScrub1]
  },
  {
    id: 8,
    key: 'p8',
    category: 'PERSONAL_CARE',
    image: imgScrub7,
    images: [imgScrub7, imgScrub6,imgScrub8, imgScrub5]
  },
  {
    id: 12,
    key: 'p12',
    category: 'PERSONAL_CARE',
    image: imgScrub10,
    images: [imgScrub10, imgScrub11,imgScrub9, imgScrub12]
  },
  {
    id: 16,
    key: 'p16',
    category: 'PERSONAL_CARE',
    image: imgScrub13,
    images: [imgScrub13, imgScrub14,imgScrub15, imgScrub16]
  },
  {
    id: 17,
    key: 'p17',
    category: 'PERSONAL_CARE',
    image: imgScrub17,
    images: [imgScrub17, imgScrub18,imgScrub17, imgScrub18]
  },
  {
    id: 21,
    key: 'p21',
    category: 'PERSONAL_CARE',
    image: imgScrub19,
    images: [imgScrub19, imgScrub19,imgScrub19, imgScrub19]
  },
  {
    id: 23,
    key: 'p23',
    category: 'PERSONAL_CARE',
    image: imgScrub20,
    images: [imgScrub20, imgScrub21,imgScrub22, imgScrub20]
  },
  {
    id: 25,
    key: 'p25',
    category: 'PERSONAL_CARE',
    image: imgScrub24,
    images: [imgScrub24, imgScrub23,imgScrub24, imgScrub23]
  },


  {
    id: 10,
    key: 'p10',
    category: 'SKIN_CARE',
    image: imgSink3,
    images: [imgSink2, imgSink2, imgSink2, imgSink3]
  },
  {
    id: 11,
    key: 'p11',
    category: 'SKIN_CARE',
    image: imgSink4,
    images: [imgSink2, imgSink2, imgSink2, imgSink4]
  },

  {
    id: 22,
    key: 'p22',
    category: 'MAKEUP',
    image: imgMake2,
    images: [imgMake2, imgMake5, imgMake3, imgMake4]
  },
  

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