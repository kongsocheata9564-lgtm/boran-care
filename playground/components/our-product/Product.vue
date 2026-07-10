<template>
  <div class="min-h-screen bg-[#FAF9F6] text-[#2C3E2B] font-sans p-4 sm:p-6">
    <main class="max-w-7xl mx-auto py-8 sm:py-12">
      <!-- Section Title -->
      <h2 class="text-center font-serif text-3xl sm:text-4xl text-[#9F7A45] uppercase tracking-widest mb-8">Our Products</h2>

      <!-- Category Filter Tabs -->
      <div class="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-12 w-full max-w-3xl mx-auto">
        <button
          v-for="product in categories"
          :key="product"
          @click="toggleCategory(product)"
          :class="[
            'basis-[calc(40%-0.25rem)] sm:basis-[calc(33.333%-0.5rem)] md:basis-auto md:min-w-[140px] px-3 py-2 sm:px-5 sm:py-2.5 rounded-xl text-[11px] sm:text-xs font-medium tracking-wider uppercase border transition-all text-center whitespace-nowrap',
            activeCategory === product? 'bg-[#8C7654] text-white border-[#8C7654]' : 'bg-white text-[#8C7654] border-[#9F7A45] hover:bg-[#FAF9F6]'
          ]"
        >
          {{ product}}
        </button>
      </div>

      <!-- Product Cards Grid Matrix -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <div
          v-for="product in filteredProducts"
          :key="product.id"
          class="bg-white rounded-2xl shadow-sm border border-[#EBE7E0] overflow-hidden flex flex-col group cursor-pointer hover:shadow-md transition-all duration-300"
          @click="openProduct(product)"
        >
          <!-- Product Image Container -->
          <div class="relative aspect-square bg-[#F3F1ED] overflow-hidden flex items-center justify-center">
            <span class="absolute top-4 left-4 bg-[#9F7A45]/70 backdrop-blur-sm text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded shadow-sm z-10 tracking-wider min-w-[100px] text-center inline-block">
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
      <div class="bg-white rounded-3xl w-full max-w-3xl relative max-h-[92vh] overflow-y-auto shadow-2xl border border-[#EBE7E0]">
        
        <!-- Standard Close Button Minimalist Icon -->
        <button
          @click="isModalOpen = false"
          class="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors z-10"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        
        <div class=" p-12 sm:p-10">
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
                <span class="inline-block bg-[#8C7654] text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                  {{ selectedProduct.type }}
                </span>
              </div>

              <h2 class="font-serif text-2xl sm:text-3xl text-[#9F7A45] font-medium tracking-wide mb-2">
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
              <h3 class="font-serif text-lg text-[#9F7A45] font-medium mb-4">Benefits</h3>
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
              <h3 class="font-serif text-lg text-[#9F7A45] font-medium mb-4">Key Ingredients</h3>
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
import { ref, computed } from 'vue'

// 1. IMPORT ALL YOUR NEW PICTURES HERE:
import imgSoap1 from '~/assets/images/b6.jpeg'
import imgSoap2 from '~/assets/images/b18.jpeg'
import imgSpray2 from '~/assets/images/b7.jpeg'
import imgHair1 from '~/assets/images/b8.jpeg'
import imgHair2 from '~/assets/images/b11.jpeg'
import imgHair3 from '~/assets/images/b13.jpeg'
import imgScrub1 from '~/assets/images/b14.jpeg'
import imgScrub2 from '~/assets/images/b19.jpeg'
import imgMake1 from '~/assets/images/b17.jpeg'
import b15 from '~/assets/images/b15.jpeg'
import b16 from '~/assets/images/16.jpeg'

const activeCategory = ref('')
const isModalOpen = ref(false)
const selectedProduct = ref(null)
const activeImage = ref(null)

const categories = ['FACIAL CARE', 'HAIR CARE', 'MAKEUP', 'PERSONAL CARE','SKIN CARE' ]

// 2. DATA PRODUCTS ARRAY
const products = ref([
  {
    id: 1,
    name: 'Natural Mini Soap 100g',
    category: 'FACIAL CARE',
    type: 'Handmade Soap',
    image: imgSoap1,
    images: [imgSoap1, imgSpray2, imgSoap1, imgSoap1],
    description: 'Handmade using 100% natural, sustainably sourced ingredients. Made in Banteay Meanchey, Cambodia by Boran Care, a women-led brand built on a formulation philosophy of natural, safety, efficiency, and sustainability.',
    benefits: ['100% natural ingredients', 'Free from harsh chemicals', 'Gently cleanses without stripping skin', 'Handcrafted in small batches'],
    ingredients: [
      { name: 'Local botanical oils', desc: 'sustainably farmed by the community' },
      { name: 'Natural saponified base', desc: 'no synthetic detergents' }
    ]
  },
  {
    id: 1,
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
    id: 2,
    name: 'Natural Shampoo 300ml',
    category: 'HAIR CARE',
    type: 'Shampoo',
    image: imgHair1,
    images: [imgHair3, imgHair2, imgHair3, imgHair2],
    description: 'A natural shampoo formulated by Boran Care’s in-house team under certified organic skincare formulator Nhim Sorida, part of the hair care line transitioning under the brand’s SOURINA formulations.',
    benefits: ['Naturally derived cleansing agents', 'Gentle on scalp and hair fibers', 'Free from harsh sulfates', 'Formulated and lab-tested'],
    ingredients: [
      { name: 'Natural plant extracts', desc: 'nourishes scalp and strands' },
      { name: 'Silk-inspired formulation', desc: 'inspired by Boran Care’s silk sericin research' }
    ]
  },

  {
    id: 3,
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
  {
    id: 3,
    name: 'Natural Conditioner 300ml',
    category: 'PERSONAL CARE',
    type: 'Conditioner',
    image: imgScrub2,
    images: [b16, imgScrub2, b15 , imgScrub2],
    description: ' A rich, energizing scrub that buffs away dull skin and leaves your body feeling silky smooth. A rich, energizing scrub that buffs away dull skin and leaves your body feeling silky smooth.',
    benefits: ['Exfoliates dead skin cells', 'Boosts circulation & reduces cellulite appearance', 'Deeply moisturizes & brightens skin', 'Leaves skin soft, smooth & glowing'],
    ingredients: [
      { name: 'Ground Coffee', desc: 'natural exfoliant, stimulates blood flow' },
      { name: 'Coconut Oil ', desc: 'deep moisture & skin softening' },
      { name: 'Brown Sugar ', desc: 'gentle secondary exfoliant' },
      { name: 'Vanilla Extract ', desc: 'antioxidant & soothing scent' }
    ]
  },

  {
    id: 4,
    name: 'SOURINA Silk Face Serum',
    category: 'MAKEUP',
    type: 'Serum',
    image: imgMake1,
    images: [imgMake1, imgMake1, imgMake1, imgMake1],
    description: 'Part of SOURINA, Boran Care’s dedicated silk-cocoon skincare range built around Silk Sericin — a locally sourced ingredient the brand has invested years of research into processing for skincare use.',
    benefits: ['Built around silk sericin extract', 'Lab-tested and formulated in Cambodia', 'Targets anti-aging and skin renewal', 'Backed by ITC lab quality testing'],
    ingredients: [
      { name: 'Silk Sericin extract', desc: 'Boran Care’s signature natural active' },
      { name: 'High-performance plant oils', desc: 'science-based botanical formulation' }
    ]
  },

  {
    id: 5,
    name: 'Natural Mosquito Repellent 120ml',
    category: 'SKIN CARE',
    type: 'Repellent Spray',
    image: imgSpray2,
    images: [imgSpray2, imgSpray2, imgSpray2, imgSpray2],
    description: 'A natural insect-repellent spray formulated with essential oils instead of synthetic chemicals, part of Boran Care’s range of everyday natural household and personal care products.',
    benefits: ['Plant-based active ingredients', 'No harsh synthetic chemicals', 'Lightweight, non-greasy spray', 'Everyday outdoor protection'],
    ingredients: [
      { name: 'Essential oil blend', desc: 'natural insect-deterring botanicals' },
      { name: 'Aqueous base', desc: 'lightweight, fast-drying finish' }
    ]
  },
  
])

const filteredProducts = computed(() => {
  if (!activeCategory.value) return products.value
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
.animate-fade-in {
  animation: fadeIn 0.25s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>