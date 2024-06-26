<template>
  <a-card class="r-card">
    <template #title>
      <span style="font-size: 18px;color: #fab301">区块&nbsp;</span>
      <span style="font-size: 18px;color: #f14545">{{ height }}</span>
    </template>
    <a-form :labelCol="{ span: 3 }" :wrapperCol="{ span: 21 }">
      <a-form-item label="高度">
        <a-input-number disabled v-model:value="height" style="width: 100%" min="1" @change="changeHash">
          <template #addonBefore>
            <span>#</span>
          </template>
        </a-input-number>
      </a-form-item>
      <a-form-item label="随机数">
        <a-input-number v-model:value="nonce" min="1" max="500000" style="width: 100%" @change="changeHash"/>
      </a-form-item>
      <a-form-item label="数据">
        <a-textarea :rows="6" v-model:value="data" @change="changeHash"/>
      </a-form-item>
      <a-form-item label="前指针">
        <a-input disabled v-model:value="hash" style="font-size: 12px"/>
      </a-form-item>
      <a-form-item label="哈希">
        <a-input disabled v-model:value="hash" style="font-size: 12px"/>
      </a-form-item>
    </a-form>
  </a-card>
</template>
<script setup lang="ts">
import {ref} from "vue";
import CryptoJS from "crypto-js"

const height = ref(1)
const hash = ref("0000f727854b50bb95c054b39c1fe5c92e5ebcfa4bcb5dc279f56aa96a365e5a")
const nonce = ref(72608)
const data = ref("")
/**
 * 初始化难度
 */
let difficulty = 4;
let pattern = '0'.repeat(difficulty);
console.log(pattern)


const changeHash = () => {
  let str = height.value + nonce.value + data.value;
  hash.value = CryptoJS.SHA256(str).toString();
}

</script>

<style lang="scss">
.r-card {
  border-color: #fab301;
  width: 620px;
  margin-bottom: 10px;
}
</style>