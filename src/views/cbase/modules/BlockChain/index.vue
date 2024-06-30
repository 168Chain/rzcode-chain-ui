<template>
  <div class="blockchain-container">
    <block-card v-for="block in blocks" :key="block.height" :block="block" class="block-card"/>
  </div>
</template>
<script setup lang="ts">
import BlockCard from "../BlockCard/index.vue";
import {defineProps} from "vue";
import {MiniBlock} from "@/types/block";

const {blocks} = defineProps<{ blocks: MiniBlock[] }>();

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
