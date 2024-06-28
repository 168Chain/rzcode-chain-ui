<template>
  <div class="blockchain-container">
    <BlockCard class="block-card"/>
    <BlockCard class="block-card"/>
    <BlockCard class="block-card"/>
    <BlockCard class="block-card"/>
    <BlockCard class="block-card"/>
    <BlockCard class="block-card"/>
    <BlockCard class="block-card"/>
    <BlockCard class="block-card"/>
    <BlockCard class="block-card"/>
  </div>
</template>
<script setup lang="ts">
import BlockCard from "../BlockCard/index.vue";
</script>
<style lang="scss">
.blockchain-container {
  width: 95%;
  display: flex;
  background: #f1f1f1;
  overflow-x: auto;
  scroll-snap-type: x mandatory; /* 启用滚动捕捉效果，可选 */

  .block-card {
    margin: 10px;
  }

  .green-btn {
    border-color: #00b300;
    color: #00b300;
  }
}
</style>
