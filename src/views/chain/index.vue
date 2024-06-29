<template>
  <div class="chain-container">
    <a-row :gutter="24">
      <!--区块链展示区-->
      <a-col :span="12" class="left">
        <a-card style="display: flex;flex-direction: column">
          <template #title>
            <span style="font-size: 18px;color: #f14545;">公链</span>
          </template>
          <template #extra>
            <a-button plain @click="mine" :loading="loading" danger>挖矿</a-button>
            <span>&nbsp;&nbsp;</span>
            <a-button plain @click="reset">重置</a-button>
          </template>
          <div class="card-box">
            <block-card v-for="item in blocks" :block="item" :key="item.height" class="block"/>
          </div>
        </a-card>
      </a-col>
      <!--工作区-->
      <a-col :span="8" class="right">
        <x-data class="x-data" ref="xData" @fetch-data="calback"/>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import BlockCard from '@/views/chain/modules/BlockCard.vue';
import XData from '@/views/chain/modules/XData.vue'
import {Block} from '@/types/block';
import {reactive, ref} from "vue";
import CryptoJS from "crypto-js";

const loading = ref(false)
const xData = ref()

/**
 * 初始化区块信息函数
 */
const blocks = reactive([
  {
    height: 1,
    nonce: 49691,
    data: '第一笔交易记录数据',
    previous: '0000000000000000000000000000000000000000000000000000000000000000',
    hash: '0000b61c8bb61a6faa7c46e4872623b6e4caac5a0ae3a3b416849b216d0d62f6'
  }
])

const maxNonce = 500000;
const data = ref("");

/**
 * 初始化难度
 */
let difficulty = 4;
let pattern = '0'.repeat(difficulty);

const mine = async () => {
  loading.value = true;
  console.log("mine start .......")
  // 延迟2秒模拟挖矿过程
  await new Promise(resolve => setTimeout(resolve, 2000));
  // 获取最新区块信息和待写入的数据
  const lastBlock = blocks[blocks.length - 1];
  const blockToAdd = findValidBlock(lastBlock, data.value);
  if (blockToAdd) {
    blocks.push(blockToAdd);
    loading.value = false;
  }
}

/**
 * 寻找有效的区块
 * @param lastBlock
 * @param newData
 */
const findValidBlock = (lastBlock: Block, newData: string) => {
  const height = lastBlock.height + 1;
  const previous = lastBlock.hash;
  for (let nonce = 0; nonce <= maxNonce; nonce++) {
    const input = `${height}${nonce}${newData}`;
    const encryption = CryptoJS.SHA256(input).toString();
    if (encryption.startsWith(pattern)) {
      return {
        height,
        nonce,
        data: newData,
        previous,
        hash: encryption
      };
    }
  }
  return null;
}


const reset = () => {
  blocks.splice(0, blocks.length, {
    height: 1,
    nonce: 49691,
    data: '第一笔交易记录数据',
    previous: '0000000000000000000000000000000000000000000000000000000000000000',
    hash: '0000b61c8bb61a6faa7c46e4872623b6e4caac5a0ae3a3b416849b216d0d62f6'
  });
  xData.value.reset();
};

const calback = (res: string) => data.value = res


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
