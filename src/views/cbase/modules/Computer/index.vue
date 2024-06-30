<template>
  <a-card class="workflow-card">
    <template #title>
      <span style="font-size: 18px;color: #f14545;">电脑</span>
    </template>
    <a-list class="list">
      <a-list-item v-for="(item,index) in items" :key="index" style="min-height: 87px">
        <a-list-item-meta>
          <template #avatar>
            <span class="meta">{{ item.title }}</span>
          </template>
        </a-list-item-meta>
        <a-steps :items="item.steps" class="steps" :key="index"/>
      </a-list-item>
    </a-list>
  </a-card>
</template>
<script setup lang="ts">
import {defineProps} from "vue";

const {items} = defineProps<{ items: any[] }>();

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
      width: 93%;
      padding: 15px 0;
    }

  }
}


</style>