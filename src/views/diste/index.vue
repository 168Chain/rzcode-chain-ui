<template>
  <div class="diste-container">
    <!--工作区-->
    <a-row justify="space-between" style="margin-top: 25px">
      <a-col :span="9">
        <pool-cfg class="x-data" ref="xData" @fetch-data="calback"/>
      </a-col>
      <a-col :span="15">
        <workflow :items="items"/>
      </a-col>
    </a-row>
    <!--区块链展示区-->
    <a-card style="display: flex;flex-direction: column;margin-top: 10px">
      <template #title>
        <span style="font-size: 18px;color: #f14545;">公链区</span>
      </template>
      <template #extra>
        <a-button plain @click="mine" :loading="loading" danger>挖矿</a-button>
      </template>
      <a-list class="list">
        <a-list-item>
          <a-list-item-meta>
            <template #avatar>
              <span class="meta">电脑A</span>
            </template>
          </a-list-item-meta>
          <block-chain :blocks="aBlocks" ref="aBlockChain"/>
        </a-list-item>
        <a-list-item>
          <a-list-item-meta>
            <template #avatar>
              <span class="meta">电脑B</span>
            </template>
          </a-list-item-meta>
          <block-chain :blocks="bBlocks" ref="bBlockChain"/>
        </a-list-item>
        <a-list-item>
          <a-list-item-meta>
            <template #avatar>
              <span class="meta">电脑C</span>
            </template>
          </a-list-item-meta>
          <block-chain :blocks="cBlocks" ref="cBlockChain"/>
        </a-list-item>
      </a-list>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import BlockChain from './modules/BlockChain/index.vue';
import PoolCfg from './modules/PoolCfg/index.vue';
import Workflow from './modules/Workflow/index.vue';
import {Block} from '@/types/block';
import {reactive, ref} from "vue";
import CryptoJS from "crypto-js";

const loading = ref(false)
const xData = ref()
const maxNonce = 500000;
const data = ref("");

const items = reactive([
  {
    title: '电脑A',
    steps: [{
      title: '开始',
      status: 'wait',
    }, {
      title: '结束',
      status: 'wait',
    }]
  },
  {
    title: '电脑A',
    steps: [
      {
        title: '开始',
        status: 'wait',
      },
      {
        title: '结束',
        status: 'wait',
      }
    ]
  },
  {
    title: '电脑A',
    steps: [
      {
        title: '开始',
        status: 'wait',
      },
      {
        title: '结束',
        status: 'wait',
      }
    ]
  }
])

const aBlocks = reactive([
  {
    height: 1,
    nonce: 49691,
    data: '第一笔交易记录数据',
    previous: '0000000000000000000000000000000000000000000000000000000000000000',
    hash: '0000b61c8bb61a6faa7c46e4872623b6e4caac5a0ae3a3b416849b216d0d62f6'
  }
])

const bBlocks = reactive([
  {
    height: 1,
    nonce: 49691,
    data: '第一笔交易记录数据',
    previous: '0000000000000000000000000000000000000000000000000000000000000000',
    hash: '0000b61c8bb61a6faa7c46e4872623b6e4caac5a0ae3a3b416849b216d0d62f6'
  }
])

const cBlocks = reactive([
  {
    height: 1,
    nonce: 49691,
    data: '第一笔交易记录数据',
    previous: '0000000000000000000000000000000000000000000000000000000000000000',
    hash: '0000b61c8bb61a6faa7c46e4872623b6e4caac5a0ae3a3b416849b216d0d62f6'
  }
])

/**
 * 初始化难度
 */
let difficulty = 4;
let pattern = '0'.repeat(difficulty);

/**
 * 开始挖矿
 */
const mine = async () => {
  mineATask();
  mineBTask();
  mineCTask();
}

/**
 * 电脑A开始挖矿
 */
const mineATask = () => {

}

/**
 * 电脑B开始挖矿
 */
const mineBTask = () => {

}

/**
 * 电脑C开始挖矿
 */
const mineCTask = () => {

}
// const mine = async () => {
//   loading.value = true;
//   console.log("mine start .......")
//   // 延迟2秒模拟挖矿过程
//   await new Promise(resolve => setTimeout(resolve, 2000));
//   // 获取最新区块信息和待写入的数据
//   const lastBlock = blocks[blocks.length - 1];
//   const blockToAdd = findValidBlock(lastBlock, data.value);
//   if (blockToAdd) {
//     blocks.push(blockToAdd);
//     loading.value = false;
//   }
// }

// 寻找有效的区块
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
.diste-container {
  margin: auto;
  flex-direction: column;
  max-width: 1540px;

  .list {
    border: #fed60b 1px solid;

    .meta {
      color: #00b300;
      font-weight: bold;
    }

  }
}
</style>
