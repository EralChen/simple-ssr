<script lang="ts" setup>
import { VkDuplex } from '@vunk/core'

</script>
<template>
  <VkDuplex class="layout-default">
    <template #one>
      <div class="layout-default-header"></div>
    </template>

    <div
      sk-flex
      class="h-100%"
    >
      <div class="layout-default-aside-x">
        <div class="layout-default-aside"></div>
      </div>

      <VkDuplex 
        class="flex-1 overflow-hidden"
      >
        <template #one>
          TagsView
          BreadcrumbVue
        </template>

        <slot></slot>
      </VkDuplex>
    </div>
  </VkDuplex>
</template>

<style>
html{
  height: 100%;
}
body, #app {
  height: inherit;
}
</style>

<style>
.layout-default {
  --layout-aside-width: 250px;
}

.layout-default > .vk-duplex-2 {
  background-color: var(--el-fill-color);
}
.layout-default-header{
  min-height: 60px;
}
.layout-default-aside{
  min-width: var(--layout-aside-width);
  height: 100%;
  background: darkseagreen;
}


</style>


<style>
.layout-default-aside-x,
.layout-default {
  height: 100%;

}

.layout-default-main {
  width: 100%;
}
</style>