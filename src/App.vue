<template lang="pug">
.app
  .text-6xl.text-red-900.underline.font-bold {{ title }}
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

const App = defineComponent({
  setup() {
    const title = ref('Hello World');

    return {
      title,
    };
  },
});

export default App;
</script>

<style lang="scss">
// .app {}
</style>
