<template>
  <div class="block-container">
    <div class="contain">
      <a-card class="r-card">
        <template #title>
          <span style="font-size: 18px;color: #fab301">区块</span>
        </template>
        <template #extra>
          <a-button @click="mine" :loading="loading" class="green-btn">挖矿</a-button>
        </template>
        <a-form :labelCol="{ span: 3 }" :wrapperCol="{ span: 21 }" class="r-form">
          <a-form-item label="高度">
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
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";
import CryptoJS from "crypto-js"

const height = ref(1)
const hash = ref("0000f727854b50bb95c054b39c1fe5c92e5ebcfa4bcb5dc279f56aa96a365e5a")
const nonce = ref(72608)
const data = ref("")
const maxNonce = 500000;
/**
 * 初始化难度
 */
let difficulty = 4;
let pattern = '0'.repeat(difficulty);

const changeHash = () => {
  let str = height.value + nonce.value + data.value;
  hash.value = CryptoJS.SHA256(str).toString();
}


const loading = ref<boolean>(false);

/**
 * 挖矿
 */
const mine = async () => {
  loading.value = true;
  // 延时2s
  await new Promise(resolve => setTimeout(resolve, 2000));
  let val = data.value;
  for (let i = 0; i <= maxNonce; i++) {
    let input = `${height}${i}${val}`;
    let encryption = CryptoJS.SHA256(input).toString();
    let substr = encryption.substring(0, difficulty)
    if (substr === pattern) {
      nonce.value = i;
      hash.value = encryption;
      loading.value = false;
      break;
    }
  }
}


</script>
<style lang="scss">
.block-container {
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .contain {
    margin-top: 15vh;

    .r-card {
      margin-top: 10vh;
      min-width: 620px;
      border-color: #fab301;
    }

    .green-btn {
      border-color: #00b300;
      color: #00b300;
    }

  }


}
</style>
