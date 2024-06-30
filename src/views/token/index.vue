<template>
  <div class="diste-container">
    <!--工作区-->
    <a-row justify="space-between" style="margin-top: 25px">
      <a-col :span="9">
        <pool-cfg class="x-data" ref="poolCfg" @fetch-gpu="changeGpu" @fetch-tx="changeTx"/>
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
        <span>&nbsp;&nbsp;</span>
        <a-button plain @click="reset">重置</a-button>
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
import {Tx, TxBlock} from '@/types/block';
import {reactive, ref} from "vue";
import CryptoJS from "crypto-js";
import {message, StepProps} from "ant-design-vue";

const loading = ref(false)
const maxNonce = 500000;
const txs = reactive<Tx[]>([]);
const aGpu = ref("1");
const bGpu = ref("2");
const cGpu = ref("3");

const board = reactive([
  {
    title: '电脑A',
    steps: [
      {
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
      }
    ] as StepProps[]
  },
  {
    title: '电脑B',
    steps: [
      {
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
      }
    ] as StepProps[]
  },
  {
    title: '电脑C',
    steps: [
      {
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
      }
    ] as StepProps[]
  }
])


const blocks = reactive(<TxBlock[]>[
  {
    height: 1,
    nonce: 49691,
    txs: [{fm: "Bridge", to: "Martin", amt: 168.168}] as Tx[],
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
  message.info("模拟挖矿开始运行......");
  await resetStep();
  const height: number = blocks.length + 1;
  try {
    await Promise.all([
      mineATask(height).then(() => console.error("挖矿失败.....")),
      mineBTask(height).then(() => console.error("挖矿失败.....")),
      mineCTask(height).then(() => console.error("挖矿失败....."))
    ]);
  } catch (error) {
    console.error("挖矿过程中出现未知错误:", error);
  } finally {
    loading.value = false;
    message.success("模拟挖矿结束......")
  }
}
/**
 * 重置步骤条
 */
const resetStep = async () => {
  board.forEach(computer => {
    computer.steps = [{
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
    }];
  });
};

/**
 * 电脑A开始挖矿
 */
const mineATask = async (height: number) => {
  let steps: StepProps[] = board[0].steps;
  await start(steps);
  let lastBlock = blocks[blocks.length - 1];
  let blockToAdd: TxBlock | null = await pkg(lastBlock, steps);
  blockToAdd = await compute(blockToAdd, aGpu.value, steps);
  let flag: boolean | void = await sync(blockToAdd, height, steps)
  if (flag) {
    await stop(steps);
  }
}


/**
 * 电脑B开始挖矿
 */
const mineBTask = async (height: number) => {
  let steps: StepProps[] = board[1].steps;
  await start(steps);
  let lastBlock = blocks[blocks.length - 1];
  let blockToAdd: TxBlock | null = await pkg(lastBlock, steps);
  blockToAdd = await compute(blockToAdd, bGpu.value, steps);
  let flag: boolean | void = await sync(blockToAdd, height, steps);
  if (flag) {
    await stop(steps);
  }
}

/**
 * 电脑C开始挖矿
 */
const mineCTask = async (height: number) => {
  let steps: StepProps[] = board[2].steps;
  await start(steps);
  let lastBlock = blocks[blocks.length - 1];
  let blockToAdd: TxBlock | null = await pkg(lastBlock, steps);
  blockToAdd = await compute(blockToAdd, cGpu.value, steps);
  let flag: boolean | void = await sync(blockToAdd, height, steps);
  if (flag) {
    await stop(steps);
  }
}

/**
 * 开始
 */
const start = async (steps: StepProps[]) => {
  await new Promise(resolve => setTimeout(resolve, 2000))
  steps[0].status = 'process';
  await new Promise(resolve => setTimeout(resolve, 2000))
  steps[0].status = 'finish'
}

/**
 * 开始打包
 */
const pkg = async (lastBlock: TxBlock, steps: StepProps[]) => {
  await new Promise(resolve => setTimeout(resolve, 2000))
  steps[1].status = 'process';
  let {height, hash} = lastBlock;
  let blockToAdd: TxBlock = {height: height + 1, nonce: 0, txs: txs, hash: "", previous: hash};
  await new Promise(resolve => setTimeout(resolve, 2000))
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
const compute = async (blockToAdd: TxBlock, gpu: String, steps: StepProps[]) => {
  await new Promise(resolve => setTimeout(resolve, 2000))
  steps[2].status = 'process';
  if (gpu === "1") {
    await new Promise(resolve => setTimeout(resolve, 9000));
  }
  if (gpu === "2") {
    await new Promise(resolve => setTimeout(resolve, 6000));
  }
  if (gpu === "3") {
    await new Promise(resolve => setTimeout(resolve, 3000));
  }
  const {height, txs} = blockToAdd;
  let zipTxs = txs.map(tx => `${tx.fm},${tx.to},${tx.amt}`).join(';');
  for (let nonce = 0; nonce < maxNonce; nonce++) {
    const input = `${height}${nonce}${zipTxs}`;
    const encryption = CryptoJS.SHA256(input).toString();
    if (encryption.startsWith(pattern)) {
      blockToAdd.nonce = nonce;
      blockToAdd.hash = encryption;
      await new Promise(resolve => setTimeout(resolve, 2000));
      steps[2].status = 'finish';
      return blockToAdd;
    }
  }
  return null;
}


/**
 * 开始同步
 */
const sync = async (blockToAdd: TxBlock | null, height: number, steps: StepProps[]) => {
  steps[3].status = 'process';
  await new Promise(resolve => setTimeout(resolve, 2000))
  if (blocks.length === height) {
    steps[3].status = 'error';
    return false;
  }
  if (blockToAdd !== null) {
    blocks.push(blockToAdd);
  }
  steps[3].status = 'finish';
  return true;
}

/**
 * 结束
 */
const stop = async (steps: StepProps[]) => {
  await new Promise(resolve => setTimeout(resolve, 2000))
  steps[4].status = 'finish';
}

/**
 * 选择GPU
 * @param res
 */
const changeGpu = (res: any) => {
  const {machine, gpu} = res;
  if (machine === 'a') {
    aGpu.value = gpu;
  }
  if (machine === 'b') {
    bGpu.value = gpu;
  }
  if (machine === 'c') {
    cGpu.value = gpu;
  }
};

/**
 * 改变数据
 * @param res
 */
const changeTx = (res: Tx[]) => {
  Object.assign(txs, {value: res});
  console.log("此处的:", txs)
}
/**
 * 重置
 */
const poolCfg = ref();
const reset = () => {
  blocks.splice(0, blocks.length, {
    height: 1,
    nonce: 49691,
    txs: [
      {fm: "Bridge", to: "Martin", amt: 168.168},
      {fm: "Adam", to: "Wick", amt: 1.68},
      {fm: "Tomas", to: "Tina", amt: 8.61},
      {fm: "Mike", to: "Eric", amt: 16.8},
      {fm: "Still", to: "Worth", amt: 0.0168}
    ] as Tx[],
    previous: '0000000000000000000000000000000000000000000000000000000000000000',
    hash: '0000b61c8bb61a6faa7c46e4872623b6e4caac5a0ae3a3b416849b216d0d62f6'
  });
  poolCfg.value.reset();
  resetStep();

}

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
