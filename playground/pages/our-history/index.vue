<template>
  <section class="about-grid">
    <div class="about-grid__container">
      <div
        v-for="item in items"
        :key="item.title"
        class="about-grid__item"
      >
        <h3 class="about-grid__title">{{ item.title }}</h3>
        <p class="about-grid__text">{{ item.text }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = [
  {
    title: 'OUR STORY',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis volutpat sapien, ac egestas ligula efficitur sit amet. Nam sed lacus velit. Integer tempor dictum tellus, ac pretium risus viverra posuere. Quisque nec consectetur libero, eu consectetur orci. Donec volutpat varius lorem non malesuada. Donec rhoncus velit ac pretium pretium. Curabitur finibus sem sem, mollis maximus orci ullamcorper at.',
  },
  {
    title: 'OUR TEAM',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis volutpat sapien, ac egestas ligula efficitur sit amet. Nam sed lacus velit. Integer tempor dictum tellus, ac pretium risus viverra posuere. Quisque nec consectetur libero, eu consectetur orci. Donec volutpat varius lorem non malesuada. Donec rhoncus velit ac pretium pretium. Curabitur finibus sem sem, mollis maximus orci ullamcorper at.',
  },
  {
    title: 'OUR HISTORY',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis volutpat sapien, ac egestas ligula efficitur sit amet. Nam sed lacus velit. Integer tempor dictum tellus, ac pretium risus viverra posuere. Quisque nec consectetur libero, eu consectetur orci. Donec volutpat varius lorem non malesuada. Donec rhoncus velit ac pretium pretium. Curabitur finibus sem sem, mollis maximus orci ullamcorper at.',
  },
  {
    title: 'OUR FUTURE',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis volutpat sapien, ac egestas ligula efficitur sit amet. Nam sed lacus velit. Integer tempor dictum tellus, ac pretium risus viverra posuere. Quisque nec consectetur libero, eu consectetur orci. Donec volutpat varius lorem non malesuada. Donec rhoncus velit ac pretium pretium. Curabitur finibus sem sem, mollis maximus orci ullamcorper at.',
  },
]
</script>

<style scoped>
.about-grid {
  width: 100%;
  padding: 4rem 1.5rem;
  font-family: 'Inter', sans-serif;
}

.about-grid__container {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 4rem;
  row-gap: 3rem;
}

.about-grid__title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.75rem;
  letter-spacing: 0.03em;
  color: #A57E45; /* boran brand color */
  margin-bottom: 1rem;
  font-weight: 400;
}

.about-grid__text {
  font-size: 0.95rem;
  line-height: 1.7;
  color: #4a4a4a;
}

@media (max-width: 768px) {
  .about-grid__container {
    grid-template-columns: 1fr;
    row-gap: 2.5rem;
  }
}
</style>