<template>
  <a-card style="min-height: 370px">
    <template #title>
      <span style="font-size: 18px;color: #f14545;">操作区</span>
    </template>
    <template #extra>
      <a-button plain @click="reset">重置</a-button>
    </template>
    <a-form>
      <a-row justify="space-between">
        <a-col :span="7">
          <a-form-item label="电脑A">
            <a-select v-model:value="aGpu" :options="computers"/>
          </a-form-item>
        </a-col>
        <a-col :span="7">
          <a-form-item label="电脑B">
            <a-select v-model:value="bGpu" :options="computers"/>
          </a-form-item>
        </a-col>
        <a-col :span="7">
          <a-form-item label="电脑C">
            <a-select v-model:value="cGpu" :options="computers"/>
          </a-form-item>
        </a-col>
      </a-row>
      <a-form-item label="数据" style="margin-top: 10px">
        <a-textarea :rows="7" v-model:value="data" @change="change"/>
      </a-form-item>
    </a-form>
  </a-card>
</template>
<script lang="ts" setup>
import {ref} from "vue";

const data = ref('')

const reset = () => {

}
const aGpu = ref('3');
const bGpu = ref('2');
const cGpu = ref('1');

const computers = [{
  value: '1',
  label: "4核GPU"
}, {
  value: '2',
  label: "8h核GPU"
}, {
  value: '3',
  label: "16核GPU"
}]

const emit = defineEmits()
const change = async () => emit('fetch-data', data.value)

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