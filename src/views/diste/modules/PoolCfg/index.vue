<template>
  <a-card style="min-height: 370px">
    <template #title>
      <span style="font-size: 18px;color: #f14545;">配置</span>
    </template>
    <a-form>
      <a-row justify="space-between">
        <a-col :span="7">
          <a-form-item label="电脑A">
            <a-select
                v-model:value="aGpu"
                :options="computers"
                @change="() => handleChange('a')"
            />
          </a-form-item>
        </a-col>
        <a-col :span="7">
          <a-form-item label="电脑B">
            <a-select
                v-model:value="bGpu"
                :options="computers"
                @change="() => handleChange('b')"
            />
          </a-form-item>
        </a-col>
        <a-col :span="7">
          <a-form-item label="电脑C">
            <a-select
                v-model:value="cGpu"
                :options="computers"
                @change="() => handleChange('c')"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-form-item label="数据" style="margin-top: 10px">
        <a-textarea :rows="7" v-model:value="data" @change="changeData"/>
      </a-form-item>
    </a-form>
  </a-card>
</template>
<script lang="ts" setup>
import {ref} from "vue";

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
const reset = () => data.value = null;
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

const changeData = () => emit('fetch-data', data)

defineExpose({
  reset
})
</script>

<style lang="scss">
.r-card {
  border-color: #fab301;
  margin-bottom: 10px;

  .yellow-btn {
    border-color: #fab301;
    color: #fab301;
  }
}
</style>