<template>
  <div class="diste-container">
    <!--工作区-->
    <a-row justify="space-between" style="margin-top: 25px">
      <a-col :span="9">
        <pool-cfg class="x-data" ref="xData" @fetch-data="calback"/>
      </a-col>
      <a-col :span="15">
        <computer :items="board"/>
      </a-col>
    </a-row>
    <!--区块链展示区-->
    <a-card style="display: flex;flex-direction: column;margin-top: 10px">
      <template #title>
        <span style="font-size: 18px;color: #f14545;">公链</span>
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
          <block-chain :blocks="blocks" ref="aBlockChain"/>
        </a-list-item>
        <a-list-item>
          <a-list-item-meta>
            <template #avatar>
              <span class="meta">电脑B</span>
            </template>
          </a-list-item-meta>
          <block-chain :blocks="blocks" ref="bBlockChain"/>
        </a-list-item>
        <a-list-item>
          <a-list-item-meta>
            <template #avatar>
              <span class="meta">电脑C</span>
            </template>
          </a-list-item-meta>
          <block-chain :blocks="blocks" ref="cBlockChain"/>
        </a-list-item>
      </a-list>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import BlockChain from './modules/BlockChain/index.vue';
import PoolCfg from './modules/PoolCfg/index.vue';
import Computer from './modules/Computer/index.vue';
import {Block} from '@/types/block';
import {reactive, ref} from "vue";
import CryptoJS from "crypto-js";
import {StepProps} from "ant-design-vue";

const loading = ref(false)
const xData = ref()
const maxNonce = 500000;
const data = ref("");
const aGpu = ref("1");
const bGpu = ref("2");
const cGpu = ref("3");

const board = reactive([
  {
    title: '电脑A',
    steps: [{
      title: '开始',
      status: 'wait'
    }, {
      title: '打包',
      status: 'wait'
    }, {
      title: '计算',
      status: 'wait'
    }, {
      title: '同步',
      status: 'wait'
    }, {
      title: '结束',
      status: 'wait'
    }] as StepProps[]
  },
  {
    title: '电脑B',
    steps: [{
      title: '开始',
      status: 'wait'
    }, {
      title: '打包',
      status: 'wait'
    }, {
      title: '计算',
      status: 'wait'
    }, {
      title: '同步',
      status: 'wait'
    }, {
      title: '结束',
      status: 'wait'
    }] as StepProps[]
  },
  {
    title: '电脑C',
    steps: [{
      title: '开始',
      status: 'wait'
    }, {
      title: '打包',
      status: 'wait'
    }, {
      title: '计算',
      status: 'wait'
    }, {
      title: '同步',
      status: 'wait'
    }, {
      title: '结束',
      status: 'wait'
    }] as StepProps[]
  }
])

const blocks = reactive(<Block[]>[
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
  loading.value = true;
  mineATask().then(r => console.error("挖矿失败.....", r));
  mineBTask().then(r => console.error("挖矿失败.....", r));
  mineCTask().then(r => console.error("挖矿失败.....", r));
  loading.value = false;
}

/**
 * 电脑A开始挖矿
 */
const mineATask = async () => {
  let steps: StepProps[] = board[0].steps;
  await start(steps).then(r => console.log(r))
  let lastBlock = blocks[blocks.length - 1];
  let blockToAdd: Block | null = await pkg(lastBlock, steps);
  blockToAdd = await compute(blockToAdd, aGpu.value, steps);
  let height = 2;
  await sync(blockToAdd, height, steps).then(r => console.log(r));
  stop(steps).then(r => console.log(r));
}


/**
 * 电脑B开始挖矿
 */
const mineBTask = async () => {
  let steps: StepProps[] = board[1].steps;
  await start(steps).then(r => console.log(r))
  let lastBlock = blocks[blocks.length - 1];
  let blockToAdd: Block | null = await pkg(lastBlock, steps);
  blockToAdd = await compute(blockToAdd, bGpu.value, steps);
  let height = 2;
  await sync(blockToAdd, height, steps).then(r => console.log(r));
  stop(steps).then(r => console.log(r));
}

/**
 * 电脑C开始挖矿
 */
const mineCTask = async () => {
  let steps: StepProps[] = board[2].steps;
  await start(steps).then(r => console.log(r))
  let lastBlock = blocks[blocks.length - 1];
  let blockToAdd: Block | null = await pkg(lastBlock, steps);
  blockToAdd = await compute(blockToAdd, cGpu.value, steps);
  let height = 2;
  await sync(blockToAdd, height, steps).then(r => console.log(r));
  stop(steps).then(r => console.log(r));
}

/**
 * 开始
 */
const start = async (steps: StepProps[]) => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  steps[0].status = 'process';
  await new Promise(resolve => setTimeout(resolve, 1000))
  steps[0].status = 'finish'
}

/**
 * 开始打包
 */
const pkg = async (lastBlock: Block, steps: StepProps[]) => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  steps[1].status = 'process';
  let {height, hash} = lastBlock;
  let blockToAdd: Block = {height: height + 1, nonce: 0, data: "", hash: "", previous: hash};
  await new Promise(resolve => setTimeout(resolve, 1000))
  steps[1].status = 'finish';
  return blockToAdd;
}

/**
 * 异步计算函数，用于处理区块的添加操作。
 * @param blockToAdd 待添加的区块对象。
 * @param gpu 设备GPU字符串，用于指定计算资源。
 * @param steps
 * @returns 返回Promise，表示计算操作的完成。
 */
const compute = async (blockToAdd: Block, gpu: String, steps: StepProps[]) => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  steps[2].status = 'process';
  if (gpu === "1") {
    await new Promise(resolve => setTimeout(resolve, 8000));
  }
  if (gpu === "2") {
    await new Promise(resolve => setTimeout(resolve, 4000));
  }
  if (gpu === "2") {
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  const {height, data} = blockToAdd;
  for (let nonce = 0; nonce < maxNonce; nonce++) {
    const input = `${height}${nonce}${data}`;
    const encryption = CryptoJS.SHA256(input).toString();
    if (encryption.startsWith(pattern)) {
      blockToAdd.nonce = nonce;
      blockToAdd.hash = encryption;
      steps[2].status = 'finish';
      return blockToAdd;
    }
  }
  return null;
}

/**
 * 开始同步
 */
const sync = async (blockToAdd: Block | null, height: number, steps: StepProps[]) => {
  steps[3].status = 'process';
  await new Promise(resolve => setTimeout(resolve, 1000))
  if (blocks.length === height) {
    console.log("同步失败")
    steps[3].status = 'error';
    return;
  }
  if (blockToAdd !== null) {
    blocks.push(blockToAdd);
  }
  steps[3].status = 'finish';
}

/**
 * 结束
 */
const stop = async (steps: StepProps[]) => {
  steps[4].status = 'finish';
}

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
