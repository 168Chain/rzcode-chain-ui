<template>
  <div class="container">
    <div class="contain">
      <p class="title" style="color: #fab301">开启您的区块链学习旅途!</p>
      <a-card class="r-card">
        <template #title>
          <span style="font-size: 18px;color: #fab301">SHA256</span>
        </template>
        <a-form :labelCol="{ span: 2 }" :wrapperCol="{ span: 22 }" class="r-form">
          <a-form-item label="数据">
            <a-textarea :rows="6" v-model:value="data" @change="onChange"/>
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


const hash = ref("e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855")
const data = ref("")

const onChange = () => hash.value = CryptoJS.SHA256(data.value).toString();

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
      min-width: 620px;
    }
  }


}
</style>
