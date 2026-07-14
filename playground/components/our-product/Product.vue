<template>
  
  <div class="min-h-screen  text-[#2C3E2B] font-['Inter'] px-4 sm:px-32">
    <main class="max-w-7xl mx-auto pt-8 sm:pt-10 pb-8 sm:pb-12">
      <!-- Section Title -->
      <h2 class="text-center font-['Oswald'] text-3xl sm:text-4xl text-[#AC8544] uppercase tracking-widest mb-8">Our Products</h2>

      <!-- Category Filter Tabs -->
      <div class="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 w-full max-w-3xl mx-auto">
        <button
          v-for="product in categories"
          :key="product"
          @click="toggleCategory(product)"
          :class="[
            'basis-[calc(40%-0.25rem)] sm:basis-[calc(33.333%-0.5rem)] md:basis-auto md:min-w-[140px] px-3 py-2 sm:px-5 sm:py-2.5 rounded-xl text-[11px] sm:text-xs font-medium tracking-wider uppercase border transition-all text-center whitespace-nowrap font-[\'Oswald\']',
            activeCategory === product? 'bg-[#AC8544] text-white border-[#AC8544]' : 'bg-white text-[#AC8544] border-[#AC8544] hover:bg-[#FAF9F6]'
          ]"
        >
          {{ product}}
        </button>
      </div>

      <!-- Product Cards Grid Matrix -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-[1198px] mx-auto gap-5 sm:gap-8 ">
        <div
          v-for="product in filteredProducts"
          :key="product.id"
          class="bg-white rounded-2xl shadow-sm border border-[#EBE7E0] overflow-hidden flex flex-col group cursor-pointer hover:shadow-md transition-all duration-300"
          @click="openProduct(product)"
        >
          <!-- Product Image Container -->
          <div class="relative aspect-square   bg-[#F3F1ED] overflow-hidden  flex items-center justify-center">
            <span class="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#AC8544]/70 backdrop-blur-sm text-white text-[10px] sm:text-[15px] font-['Oswald'] font-bold uppercase px-2 py-1 sm:px-2.5 sm:py-1.5 rounded shadow-sm z-10 tracking-wider min-w-[90px] sm:min-w-[155px] text-center inline-block">
              {{ product.category }}
            </span>
            <img v-if="product.image" :src="product.image" :alt="product.name" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <span v-else class="text-xs text-gray-400">No Image</span>
          </div>

          <!-- Card Actions Row -->
          <div class="p-5 flex justify-between items-center mt-auto border-t border-[#F5F2EC]">
            <span class="text-[#145A3A] font-medium tracking-wide text-base group-hover:text-[#8C7654] transition-colors">
              View Details
            </span>
            <svg class="w-5 h-5 text-[#145A3A] transform transition-transform group-hover:translate-x-1.5 group-hover:text-[#8C7654] duration-300" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </div>
        </div>
      </div>
    </main>

    <!-- BEAUTIFIED PRODUCT DETAIL MODAL -->
    <div
      v-if="isModalOpen"
      class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-3 sm:p-4 animate-fade-in"
      @click.self="isModalOpen = false"
    >
      <div class="bg-white rounded-3xl w-full max-w-3xl relative max-h-[95vh] sm:max-h-[92vh] overflow-y-auto shadow-2xl border border-[#EBE7E0]">
        
        <!-- Standard Close Button Minimalist Icon -->
        <button
          @click="isModalOpen = false"
          class="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors z-10"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        
        <div class=" p-6 sm:p-10">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            <!-- Left Side: Interactive Gallery Viewports -->
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

            <!-- Right Side: Structured Specifications Content -->
            <div class="flex flex-col h-full justify-start pt-2">
              <div class="mb-3">
                <span class="inline-block bg-[#AC8544] text-white text-[11px] font-['Oswald'] font-semibold uppercase tracking-wider px-3 py-1 rounded">
                  {{ selectedProduct.type }}
                </span>
              </div>

              <h2 class="font-['Oswald'] text-2xl sm:text-3xl text-[#AC8544] font-medium tracking-wide mb-2">
                {{ selectedProduct.name }}
              </h2>

              <p class="text-[#145A3A] pt-4 text-sm">
                {{ selectedProduct.description }}
              </p>
            </div>
          </div>

          <!-- Grid Separator Block -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 pt-8 border-t border-[#EBE7E0]">
            <!-- Left Grid Pane: Benefits -->
            <div>
              <h3 class="font-['Oswald'] text-lg text-[#AC8544] font-medium mb-4">Benefits</h3>
              <ul class="space-y-3">
                <li
                  v-for="(benefit, i) in selectedProduct.benefits"
                  :key="i"
                  class="flex items-start gap-2.5 text-sm text-[#145A3A]"
                >
                  <span class="text-[#145A3A] text-xs mt-0.5">•</span>
                  <span>{{ benefit }}</span>
                </li>
              </ul>
            </div>

            <!-- Right Grid Pane: Ingredients Profiles -->
            <div>
              <h3 class="font-['Oswald'] text-lg text-[#AC8544] font-medium mb-4">Key Ingredients</h3>
              <ul class="space-y-3">
                <li
                  v-for="(ing, i) in selectedProduct.ingredients"
                  :key="i"
                  class="flex items-start gap-2.5 text-sm text-[#145A3A]"
                >
                  <span class="text-[#145A3A] text-xs mt-0.5">•</span>
                  <span><strong class="font-medium text-[#145A3A]">{{ ing.name }}</strong> — {{ ing.desc }}</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";

// 1. IMPORT ALL YOUR NEW PICTURES HERE:
import imgSoap1 from '~/assets/images/b6.jpeg'
import imgSoap2 from '~/assets/images/b18.jpeg'
import imgSink1 from '~/assets/images/b24.jpeg'
import imgSink2 from '~/assets/images/b22.jpeg'
import imgHair1 from '~/assets/images/b8.jpeg'
import imgHair2 from '~/assets/images/b11.jpeg'
import imgHair3 from '~/assets/images/b13.jpeg'
import imgHair4 from '~/assets/images/b23.jpeg'
import imgMake1 from '~/assets/images/b17.jpeg'
import imgScrub1 from '~/assets/images/b14.jpeg'
import imgScrub2 from '~/assets/images/b19.jpeg'
import b15 from '~/assets/images/b15.jpeg'
import b16 from '~/assets/images/16.jpeg'
import b23 from '~/assets/images/b23.jpeg'


const activeCategory = ref('')
const route = useRoute();
const isModalOpen = ref(false)
const selectedProduct = ref(null)
const activeImage = ref(null)

// how many products to show by default, before a category is picked
const DEFAULT_VISIBLE_COUNT = 5

const categories = ['FACIAL CARE', 'HAIR CARE', 'SKIN CARE', 'PERSONAL CARE', 'MAKEUP' ]

watch(
  () => route.query.category,
  (category) => {
    if (category && categories.includes(category)) {
      activeCategory.value = category;
    } else {
      activeCategory.value = "";
    }
  },
  { immediate: true }
);

// 2. DATA PRODUCTS ARRAY
const products = ref([
  {
    id: 1,
    name: 'Natural Mini Soap 100g',
    category: 'FACIAL CARE',
    type: 'FACIAL CARE',
    image: imgSoap1,
    images: [imgSoap1, imgSoap1, imgSoap1, imgSoap1],
    description: 'Handmade using 100% natural, sustainably sourced ingredients. Made in Banteay Meanchey, Cambodia by Boran Care, a women-led brand built on a formulation philosophy of natural, safety, efficiency, and sustainability.',
    benefits: ['100% natural ingredients', 'Free from harsh chemicals', 'Suitable for everyday use', 'Handmade in Cambodia'],
    ingredients: [
      { name: 'Local botanical oils', desc: 'sustainably farmed by the community' },
      { name: 'Natural saponified base', desc: 'no synthetic detergents' }
    ]
  },
  
  
  {
    id: 3,
    name: 'Natural Shampoo 300ml',
    category: 'HAIR CARE',
    type: 'HAIR CARE',
    image: imgHair1,
    images: [imgHair3, imgHair4, imgHair3, imgHair2],
    description: 'BORAN CARE Herbal Shampoo is developed to gently cleanse the scalp while helping maintain healthy-looking hair. The formula combines natural ingredients with modern cosmetic science to provide a refreshing cleansing experience suitable for regular use.',
    benefits: ['Gently removes dirt and excess oil.', 'Leaves hair feeling soft and refreshed.', 'Suitable for daily hair care.', 'Made in Cambodia.'],
    ingredients: [
      { name: 'Natural plant extracts', desc: 'nourishes scalp and strands' },
      { name: 'Silk-inspired formulation', desc: 'inspired by Boran Care’s silk sericin research' }
    ]
  },

  {
    id: 7,
    name: 'Anti Wrinkle Cream',
    category: 'SKIN CARE',
    type: 'SKIN CARE',
    image: imgSink1,
    images: [imgSink2, imgSink2, imgSink2, imgSink1],
    description: "BORAN CARE Anti-Wrinkle Cream is designed to help nourish and moisturize the skin while supporting a smoother-looking complexion. The lightweight formula is suitable for daily skincare routines and reflects the company's focus on combining science with natural ingredients.",
    benefits: ['Helps moisturize the skin.', 'Supports smoother-looking skin.', 'Lightweight texture.', 'Suitable for daily use.'],
    ingredients: [
      { name: 'Hyaluronic Acid', desc: 'A powerful humectant that draws deep moisture into the skin barrier, keeping it plump and highly hydrated.' },
      { name: 'Collagen', desc: "Works to support the skin's natural framework, visibly improving firmness, springiness, and texture." },
      { name: 'Silk Cocoon Extract (SOURINA Line)', desc: 'Rich in natural sericin protein to form a protective moisture shield and noticeably soften aging skin.' }
    ]
  },


   {
    id: 5,
    name: 'Kaffir Lime Scrub 300ml',
    category: 'PERSONAL CARE',
    type: 'PERSONAL CARE',
    image: imgScrub2,
    images: [b16, imgScrub2, b15 , imgScrub2],
    description: ' EK Beauty Kaffir Lime Body Scrub combines the potent cleansing power of natural Cambodian kaffir lime with skin-polishing botanical extracts. It naturally lifts away dead skin cells, targets uneven tone, and reveals intensely soft, glowing skin with a lingering fresh, refreshing herbal aroma.',
    benefits: ['Gently exfoliates dead skin cells.', 'Leaves skin feeling soft', 'Refreshing coffee aroma', 'Suitable for regular body care'],
    ingredients: [
      { name: 'Kaffir Lime Peel & Extract:', desc: 'High in volatile oils and natural AHAs to safely brighten, deeply cleanse, and refine skin texture.' },
      { name: 'Honey: ', desc: 'Actively locks in hydration, acts as a natural antibacterial barrier, and ensures the skin feels silky post-scrub.' },
      { name: 'Botanical Seed Oils: ', desc: 'Deeply nourishes the skin layer so it feels intensely conditioned and flexible, rather than stripped or tight.' }
    ]
  },

  
  {
    id: 6,
    name: 'natural Lip Balm 5g',
    category: 'MAKEUP',
    type: 'MAKEUP',
    image: imgMake1,
    images: [imgMake1, imgMake1, imgMake1, imgMake1],
    description: 'BORAN CARE Lipstick delivers vibrant color with a smooth finish while helping keep lips comfortable throughout the day. The formula is designed for easy application and everyday wear',
    benefits: ['Built around silk sericin extract', 'Lab-tested and formulated in Cambodia', 'Targets anti-aging and skin renewal', 'Backed by ITC lab quality testing'],
    ingredients: [
      { name: 'Vitamin E', desc: 'Helps keep lips soft and moisturized.' },
      { name: 'Natural waxes', desc: 'Provide a smooth texture and comfortable application.' },
      { name: 'Plant-based oils', desc: 'Help prevent lips from feeling dry.' }
    ]
  },


 

  

 






  {
    id: 2,
    name: 'SILK SOAP 100g',
    category: 'FACIAL CARE',
    type: 'Handmade Soap',
    image: imgSoap2,
    images: [imgSoap2, imgSoap2, imgSoap2, imgSoap2],
    description: "Silk Soap is a handcrafted facial cleansing bar formulated with naturally derived ingredients to gently cleanse, refresh, and soften the skin. Its rich, creamy lather removes impurities while helping maintain the skin's natural moisture, leaving your complexion feeling clean, smooth, and revitalized after every wash.",
    benefits: ['Gentle cleansing for daily facial care.', 'Helps remove dirt, oil, and impurities.', 'Leaves skin feeling soft and smooth.', 'Maintains the skins natural moisture balance.' ,'Suitable for most skin types.', 'Made with naturally derived ingredients.'],
    ingredients: [
      { name: 'Natural Soap Base', desc: 'Gently cleanses the skin without harsh detergents.' },
      { name: 'Silk Extract', desc: 'Helps keep the skin feeling soft and smooth.' },
      { name: 'Natural Plant Oils', desc: 'Nourish and moisturize the skin.' },
      { name: 'Glycerin', desc: 'Helps retain moisture and prevent dryness.' }
    ]
  },

   {
    id: 4,
    name: 'Natural Conditioner 300ml',
    category: 'PERSONAL CARE',
    type: 'Conditioner',
    image: imgScrub1,
    images: [b16, imgScrub1, b15 , imgScrub1],
    description: ' A rich, energizing scrub that buffs away dull skin and leaves your body feeling silky smooth. A rich, energizing scrub that buffs away dull skin and leaves your body feeling silky smooth.',
    benefits: ['Exfoliates dead skin cells', 'Boosts circulation & reduces cellulite appearance', 'Deeply moisturizes & brightens skin', 'Leaves skin soft, smooth & glowing'],
    ingredients: [
      { name: 'Ground Coffee', desc: 'natural exfoliant, stimulates blood flow' },
      { name: 'Coconut Oil ', desc: 'deep moisture & skin softening' },
      { name: 'Brown Sugar ', desc: 'gentle secondary exfoliant' },
      { name: 'Vanilla Extract ', desc: 'antioxidant & soothing scent' }
    ]
  },
  
])

// Default view: only show the first N products.
// Once a category is active, show ALL products in that category.
const filteredProducts = computed(() => {
  if (!activeCategory.value) return products.value.slice(0, DEFAULT_VISIBLE_COUNT)
  return products.value.filter(p => p.category === activeCategory.value)
})

function toggleCategory(cat) {
  activeCategory.value = activeCategory.value === cat ? '' : cat
}

function openProduct(product) {
  selectedProduct.value = {
    ...product,
    type: product.type || 'Natural Care',
    description: product.description || `Premium selection for your ${product.category.toLowerCase()} routine.`,
    benefits: product.benefits || ['Nourishes deep layers', 'Protects skin barrier', '100% Organic ingredients'],
    ingredients: product.ingredients || [{ name: 'Natural Extracts', desc: 'Sourced organically' }],
    image: product.image,
    images: product.images || [product.image, product.image, product.image, product.image]
  }
  activeImage.value = selectedProduct.value.image
  isModalOpen.value = true
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600&family=Inter:wght@400;500&display=swap");

.animate-fade-in {
  animation: fadeIn 0.25s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>