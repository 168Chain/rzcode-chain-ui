<template>
  <a-card class="block-card-container">
    <template #title>
      <span style="font-size: 18px;color: #fab301">区块</span>
    </template>
    <a-form :labelCol="{ span: 4 }" :wrapperCol="{ span: 20 }" class="r-form">
      <a-form-item label="高度">
        <a-input-number v-model:value="block.height" style="width: 100%" min="1" @change="changeHash">
          <template #addonBefore>
            <span>#</span>
          </template>
        </a-input-number>
      </a-form-item>
      <a-form-item label="随机数">
        <a-input-number
            v-model:value="block.nonce"
            min="1"
            max="500000"
            style="width: 100%"
        />
      </a-form-item>
      <a-form-item label="数据">
        <a-textarea :rows="4" v-model:value="block.data"/>
      </a-form-item>
      <a-form-item label="前指针">
        <a-textarea
            :row="2" disabled
            v-model:value="block.previous"
            style="font-size: 12px"
        />
      </a-form-item>
      <a-form-item label="哈希">
        <a-textarea
            :row="2" disabled
            v-model:value="block.hash"
            style="font-size: 12px"
        />
      </a-form-item>
    </a-form>
  </a-card>
</template>
<script lang="ts" setup>
import {defineProps} from "vue";
import {Block} from "@/types/block";

const {block} = defineProps<{ block: Block }>();

</script>
<style lang="scss">
.block-card-container {
  min-width: 400px;
}
</style>