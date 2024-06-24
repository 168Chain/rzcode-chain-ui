<template>
  <div class="container">
    <div class="chain-wrapper">
      <div class="chain">
        <Block class="block"/>
        <Block class="block"/>
        <Block class="block"/>
        <Block class="block"/>
        <Block class="block"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Block from '@/components/Block/index.vue';
</script>

<style lang="scss">
.container {
  display: flex;
  justify-content: center; /* 居中chain-wrapper */
  overflow-x: hidden; /* 隐藏容器本身的滚动条 */
}

.chain-wrapper {
  min-width: 1000px;
  max-width: 1540px;
  display: inline-flex; /* 使chain-wrapper成为行内Flex容器 */
  flex-direction: row;
  overflow-x: auto; /* 在chain-wrapper上设置滚动 */
}

.chain {
  display: flex; /* 应用Flex布局使Block水平排列 */
  flex-wrap: nowrap; /* 防止Block换行 */
}

.block {
  margin-left: 20px;
}
</style>
