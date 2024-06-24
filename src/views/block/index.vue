<template>
  <div class="container">
    <div class="contain">
      <Block/>
    </div>
  </div>
</template>
<script setup lang="ts">
import Block from '@/components/Block/index.vue'

</script>
<style lang="scss">
.container {
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .contain {
    margin-top: 15vh;
  }


}
</style>
