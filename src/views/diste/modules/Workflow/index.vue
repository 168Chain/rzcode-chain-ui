<template>
  <a-card class="workflow-card">
    <template #title>
      <span style="font-size: 18px;color: #f14545;">挖矿流程</span>
    </template>
    <a-list class="list">
      <a-list-item>
        <a-list-item-meta>
          <template #avatar>
            <span class="meta">A</span>
          </template>
        </a-list-item-meta>
        <a-steps :items="aItems" class="steps" ref="stepA"/>
      </a-list-item>
      <a-list-item>
        <a-list-item-meta>
          <template #avatar>
            <span class="meta">B</span>
          </template>
        </a-list-item-meta>
        <a-steps :items="bItems" class="steps" ref="stepB"/>
      </a-list-item>
      <a-list-item>
        <a-list-item-meta>
          <template #avatar>
            <span class="meta">C</span>
          </template>
        </a-list-item-meta>
        <a-steps :items="cItems" class="steps" ref="stepC"/>
      </a-list-item>
    </a-list>
  </a-card>
</template>
<script setup lang="ts">
import {ref} from "vue";
import {StepProps} from "ant-design-vue";

const data = ref('')

const reset = () => data.value = ""

const emit = defineEmits()
const aItems = [
  {
    title: '开始',
    status: 'wait',
  },
  {
    title: '结束',
    status: 'wait',
  },
] as StepProps[];
const bItems = [
  {
    title: '开始',
    status: 'wait',
  },
  {
    title: '结束',
    status: 'wait',
  },
] as StepProps[];

const cItems = [
  {
    title: '开始',
    status: 'wait',
  },
  {
    title: '结束',
    status: 'wait',
  },
] as StepProps[];

const change = async () => emit('fetch-data', data.value)
defineExpose({
  reset
})
</script>

<style lang="scss">
.workflow-card {
  min-height: 370px;

  .list {
    border: solid 1px #fed60b;

    .meta {
      font-weight: bold
    }

    .steps {
      padding: 15px 0;
    }

  }
}


</style>