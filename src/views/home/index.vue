<template>
  <div class="container">
    <div class="contain">
      <p class="title">开启您的区块链学习旅途!</p>
      <a-card class="r-card" title="SHA256">
        <template #extra>
          <a-button type="primary" @click="doSubmit">确认</a-button>
        </template>
        <a-form :labelCol="{ span: 3 }" :wrapperCol="{ span: 22 }" class="r-form">
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


const hash = ref("e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855")

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
      min-width: 750px;

      .r-form {
        padding: 10px 30px;
      }
    }
  }


}
</style>
