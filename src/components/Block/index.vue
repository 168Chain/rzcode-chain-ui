<template>
  <a-card class="r-card" title="区块">
    <template #extra>
      <a-button type="primary" @click="mine" :loading="loading">挖矿</a-button>
    </template>
    <a-form :labelCol="{ span: 3 }" :wrapperCol="{ span: 21 }" class="r-form">
      <a-form-item label="区块">
        <a-input-number v-model:value="height" style="width: 100%" min="1" @change="changeHash">
          <template #addonBefore>
            <span>#</span>
          </template>
        </a-input-number>
      </a-form-item>
      <a-form-item label="随机数">
        <a-input-number
            v-model:value="nonce"
            min="1"
            max="500000"
            style="width: 100%"
            @change="changeHash"
        />
      </a-form-item>
      <a-form-item label="数据">
        <a-textarea :rows="6" v-model:value="data" @change="changeHash"/>
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
const difficulty = ref(1)
const maxNonce = 500000;
const pattern = ref('0')
for (let x = 0; x < difficulty.value; x++) {
  pattern.value += '';
}

const changeHash = () => {
  let str = height.value + nonce.value + data.value;
  hash.value = CryptoJS.SHA256(str).toString();
}


const loading = ref(false);

const mine = () => {
  loading.value = true
  let heightStr = height.value.toString();
  for (let i = 0; i <= maxNonce; i++) {
    let encryption = CryptoJS.SHA256(heightStr + i.toString() + data.value).toString();
    console.log("开始挖矿" + encryption)
    let substr = encryption.substring(0, difficulty.value)
    if (substr === pattern.value) {
      debugger
      nonce.value = i;
      hash.value = encryption;
      debugger
      loading.value = false
      break;
    }
  }
}


</script>
<style lang="scss">

.r-card {
  margin-top: 10vh;
  min-width: 620px;
}

</style>
