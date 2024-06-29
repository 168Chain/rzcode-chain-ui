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
                :value="aGpu"
                :options="computers"
                @change="(value:string) => handleChange('aGpu', value)"
            />
          </a-form-item>
        </a-col>
        <a-col :span="7">
          <a-form-item label="电脑B">
            <a-select
                :value="bGpu"
                :options="computers"
                @change="(value:string) => handleChange('bGpu', value)"
            />
          </a-form-item>
        </a-col>
        <a-col :span="7">
          <a-form-item label="电脑C">
            <a-select
                :value="cGpu"
                :options="computers"
                @change="(value:string) => handleChange('cGpu', value)"
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
import {defineProps, ref} from "vue";

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
const {aGpu, bGpu, cGpu} = defineProps<{
  aGpu: String,
  bGpu: String,
  cGpu: String
}>();

const data = ref(null)
const reset = () => {
  data.value = null
}
const emit = defineEmits()
const handleChange = (gpu: 'aGpu' | 'bGpu' | 'cGpu', value: string) => {
  emit('fetch-data', {
    machine: gpu,
    gpu: value
  })
}

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