<template>
  <a-card class="pool-cfg-card">
    <template #title>
      <span class="title">配置</span>
    </template>
    <a-form ref="formRef">
      <a-row justify="space-between">
        <a-col :span="7">
          <a-form-item label="电脑A">
            <a-select v-model:value="aGpu" :options="computers" @change="() => handleChange('a')"/>
          </a-form-item>
        </a-col>
        <a-col :span="7">
          <a-form-item label="电脑B">
            <a-select v-model:value="bGpu" :options="computers" @change="() => handleChange('b')"/>
          </a-form-item>
        </a-col>
        <a-col :span="7">
          <a-form-item label="电脑C">
            <a-select v-model:value="cGpu" :options="computers" @change="() => handleChange('c')"/>
          </a-form-item>
        </a-col>
      </a-row>
      <a-form-item label="Tx" class="tx">
        <div class="rows">
          <a-row v-for="(tx,i) in txs" :key="i" class="record">
            <a-col :span="8">
              <a-input addon-before="从:" size="small" v-model:value="tx.fm"/>
            </a-col>
            <a-col :span="8">
              <a-input addon-before="到" size="small" v-model:value="tx.to"/>
            </a-col>
            <a-col :span="8">
              <a-input-number addon-before="$" size="small" min="0" v-model:value="tx.amt"/>
            </a-col>
          </a-row>
        </div>
      </a-form-item>
    </a-form>
  </a-card>
</template>
<script lang="ts" setup>
import {reactive, ref} from "vue";

const computers = [{
  value: '1',
  label: "4核GPU"
}, {
  value: '2',
  label: "8核GPU"
}, {
  value: '3',
  label: "16核GPU"
}]
const aGpu = ref('1');
const bGpu = ref('2');
const cGpu = ref('3');


const data = ref(null)
const txs = reactive([
  {
    fm: "Bridge",
    to: "Martin",
    amt: 168.168
  },
  {
    fm: "Ivan",
    to: "Tina",
    amt: 1.68
  },
  {
    fm: "Tomas",
    to: "Brady",
    amt: 8.61
  }, {
    fm: "Wick",
    to: "Spring",
    amt: 16.8
  },
  {
    fm: "Still",
    to: "Worth",
    amt: 0.0168
  }
])
const reset = () => {
  data.value = null;
  aGpu.value = "1";
  bGpu.value = "2";
  cGpu.value = "3";
}
const emit = defineEmits()

const handleChange = (machine: 'a' | 'b' | 'c') => {
  let gpu = '';
  if (machine === 'a') {
    gpu = aGpu.value;
  }
  if (machine === 'b') {
    gpu = bGpu.value;
  }
  if (machine === 'c') {
    gpu = cGpu.value;
  }
  emit("fetch-gpu", {machine: machine, gpu: gpu});
};

defineExpose({
  reset
})
</script>

<style lang="scss">
.pool-cfg-card {
  min-height: 370px;

  .title {
    font-size: 18px;
    color: #f14545;
  }

  .tx {
    margin-top: 10px;

    .rows {
      padding: 10px 15px;
      border: solid 1px #f1f1f1;

      .record {
        margin-bottom: 5px;
      }
    }
  }

  .yellow-btn {
    border-color: #fab301;
    color: #fab301;
  }
}
</style>