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
          <a-form-item label="矿机A">
            <a-select/>
          </a-form-item>
        </a-col>
        <a-col :span="7">
          <a-form-item label="矿机B">
            <a-select/>
          </a-form-item>
        </a-col>
        <a-col :span="7">
          <a-form-item label="矿机C">
            <a-select/>
          </a-form-item>
        </a-col>
      </a-row>
      <a-form-item label="数据" style="margin-top: 10px">
        <a-textarea :rows="7" v-model:value="data" @change="change"/>
      </a-form-item>
    </a-form>
  </a-card>
</template>
<script setup lang="ts">
import {ref} from "vue";

const data = ref('')

const reset = () => data.value = ""

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