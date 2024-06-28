<template>
  <a-card class="r-card">
    <template #title>
      <span style="font-size: 18px;color: #fab301">区块&nbsp;</span>
      <span style="font-size: 18px;color: #f14545">{{ block.height }}</span>
    </template>
    <a-form :labelCol="{ span: 3 }" :wrapperCol="{ span: 21 }">
      <a-form-item label="高度">
        <a-input-number disabled v-model:value="block.height" style="width: 100%">
          <template #addonBefore>
            <span>#</span>
          </template>
        </a-input-number>
      </a-form-item>
      <a-form-item label="随机数">
        <a-input-number disabled v-model:value="block.nonce" min="1" max="500000" style="width: 100%"/>
      </a-form-item>
      <a-form-item label="数据">
        <a-textarea disabled :rows="6" v-model:value="block.data"/>
      </a-form-item>
      <a-form-item label="前指针">
        <a-input disabled v-model:value="block.previous" style="font-size: 12px"/>
      </a-form-item>
      <a-form-item label="哈希">
        <a-input disabled v-model:value="block.hash" style="font-size: 12px"/>
      </a-form-item>
    </a-form>
  </a-card>
</template>
<script setup lang="ts">
import {defineProps} from 'vue';
import {Block} from '@/types/block';

const {block} = defineProps<{ block: Block }>();

</script>

<style lang="scss">
.r-card {
  border-color: #fab301;
  width: 620px;
  margin-bottom: 10px;
}
</style>
