<template>
  <div class="chain-container">
    <a-row :gutter="24">
      <!--区块链展示区-->
      <a-col :span="12" class="left">
        <a-card style="display: flex;flex-direction: column">
          <template #title>
            <span style="font-size: 18px;color: #f14545;">公链区</span>
          </template>
          <template #extra>
            <a-button plain @click="add" class="green-btn">新增节点</a-button>
          </template>
          <div class="card-box">
            <Block class="block"/>
            <Block class="block"/>
          </div>
        </a-card>
      </a-col>
      <!--工作区-->
      <a-col :span="8" class="right">
        <x-data class="x-data"/>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import Block from './module/Block.vue';
import XData from './module/XData.vue'

const add = () => {

}

</script>

<style lang="scss">
.chain-container {
  margin: auto;
  flex-direction: column;
  min-width: 1000px;
  max-width: 1540px;

  .left {
    margin-top: 25px;

    .card-box {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      height: 75vh;
      overflow-y: auto;
    }
  }

  .right {
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .x-data {
      margin-left: 80px;
    }
  }
}
</style>
