<template>
  <a-card class="block-card-container">
    <template #title>
      <span style="font-size: 18px;color: #fab301">区块</span>
    </template>
    <a-form :labelCol="{ span: 3 }" :wrapperCol="{ span: 21 }" class="r-form">
      <a-form-item label="高度">
        <a-input-number v-model:value="block.height" style="width: 100%" min="1">
          <template #addonBefore>
            <span>#</span>
          </template>
        </a-input-number>
      </a-form-item>
      <a-form-item label="随机数">
        <a-input-number v-model:value="block.nonce" min="1" max="500000" style="width: 100%"/>
      </a-form-item>
      <a-form-item label="TX" class="tx">
        <div class="rows">
          <a-row v-for="(tx,i) in txs" :key="i" class="record">
            <a-col :span="7">
              <a-input addon-before="从:" size="small" v-model:value="tx.fm"/>
            </a-col>
            <a-col :span="7">
              <a-input addon-before="到" size="small" v-model:value="tx.to"/>
            </a-col>
            <a-col :span="10">
              <a-input-number addon-before="U" size="small" min="0" v-model:value="tx.amt"/>
            </a-col>
          </a-row>
        </div>
      </a-form-item>
      <a-form-item label="前指针">
        <a-textarea :row="2" disabled v-model:value="block.previous" style="font-size: 12px"/>
      </a-form-item>
      <a-form-item label="哈希">
        <a-textarea :row="2" disabled v-model:value="block.hash" style="font-size: 12px"/>
      </a-form-item>
    </a-form>
  </a-card>
</template>
<script lang="ts" setup>
import {defineProps, reactive} from "vue";
import {TxBlock} from "@/types/block";

const {block} = defineProps<{ block: TxBlock }>();
const txs = reactive([
  {
    fm: "Bridge",
    to: "Martin",
    amt: 168.168
  },
  {
    fm: "Adam",
    to: "Wick",
    amt: 1.68
  },
  {
    fm: "Tomas",
    to: "Tina",
    amt: 8.61
  }, {
    fm: "Mike",
    to: "Eric",
    amt: 16.8
  },
  {
    fm: "Still",
    to: "Worth",
    amt: 0.0168
  }
])
</script>
<style lang="scss">
.block-card-container {
  max-width: 450px;

  .tx {
    .rows {
      padding: 10px 5px;
      border: solid 1px #f1f1f1;

      .record {
        margin-bottom: 5px;
      }
    }
  }

}
</style>