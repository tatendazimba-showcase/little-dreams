<template>
  <div class="container">
    <hero
      :title="'Music Matters'"
      :subtitle="'Live Online Tribute'"
      :description="
        'In honour of Stevie Wonder’s 70th birthday, Bang & Olufsen is presenting an online tribute ' +
          'concert with Benjamin Koppel & Friends. The show is transmitted live from the Audo on Wednesday, ' +
          'May 13 at 8 PM.'
      "
    />
  </div>
</template>

<script>
import Hero from '~/components/hero/';

export default {
  components: {
    Hero
  }
};
</script>
<style></style>
