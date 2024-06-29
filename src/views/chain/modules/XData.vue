<template>
  <a-card class="r-card">
    <template #title>
      <span style="font-size: 18px;color: #f14545;">数据</span>
    </template>
    <template #extra>
      <div>
        <a-button @click="reset">重置</a-button>
      </div>
    </template>
    <a-textarea :rows="8" v-model:value="data" @change="change" placeholder="请输入数据!"/>
  </a-card>
</template>
<script setup lang="ts">
import {ref} from "vue";

const data = ref('')

const reset = () => {
  data.value = "";
  change();
}

const emit = defineEmits()
const change = async () => emit('fetch-data', data.value)
defineExpose({
  reset
})
</script>

<style lang="scss">
.r-card {
  border-color: #fab301;
  width: 620px;
  margin-bottom: 10px;

  .yellow-btn {
    border-color: #fab301;
    color: #fab301;
  }
}
</style>