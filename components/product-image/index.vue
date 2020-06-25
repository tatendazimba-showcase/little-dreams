<template>
  <section class="product-image">
    <div class="img-container">
      <img
        :src="image_url || '~/assets/placeholder.png'"
        :alt="title + ' ' + description"
      />
    </div>
  </section>
</template>
<script src="./product-image.js"></script>
<style src="./product-image.scss" scoped lang="scss"></style>
