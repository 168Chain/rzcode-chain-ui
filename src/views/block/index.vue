<template>
  <div class="container">
    <div class="contain">
      <a-card class="r-card" title="区块">
        <template #extra>
          <a-button type="primary" @click="doSubmit">挖矿</a-button>
        </template>
        <a-form :labelCol="{ span: 2 }" :wrapperCol="{ span: 22 }" class="r-form">
          <a-form-item label="区块">
            <a-input-number v-model:value="height" style="width: 100%">
              <template #addonBefore>
                <span>#</span>
              </template>
            </a-input-number>
          </a-form-item>
          <a-form-item label="随机数">
            <a-input v-model:value="nonce"/>
          </a-form-item>
          <a-form-item label="数据">
            <a-textarea :rows="6" v-model:value="data"/>
          </a-form-item>
          <a-form-item label="哈希">
            <a-input disabled v-model:value="hash"/>
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
const data = ref()
const doSubmit = () => hash.value = CryptoJS.SHA256(data.value).toString();
</script>
<style lang="scss">
.container {
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .contain {
    margin-top: 15vh;

    .title {
      text-align: center;
      font-size: 35px;
      font-weight: bold
    }

    .r-card {
      margin-top: 10vh;
      min-width: 650px;
    }
  }


}
</style>
