<template>
  <a-card class="r-card">
    <template #title>
      <span style="font-size: 18px;color: #f14545;">数据区</span>
    </template>
    <template #extra>
      <a-button @click="mine" class="green-btn">挖矿</a-button>
    </template>
    <a-form :labelCol="{ span: 3 }" :wrapperCol="{ span: 21 }">
      <a-form-item label="数据">
        <a-textarea :rows="8" v-model:value="data" @change="changeHash"/>
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

/**
 * 挖矿
 */
const mine = () => {

}
</script>

<style lang="scss">
.r-card {
  border-color: #fab301;
  width: 620px;
  margin-bottom: 10px;

  .green-btn {
    border-color: #00b300;
    color: #00b300;
  }
}
</style>