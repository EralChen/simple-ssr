<template>
  <PageX>
    <ClientOnly>
      <MyMapView></MyMapView>
    </ClientOnly>
  </PageX>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
import PageX from '#/components/PageX/index.vue'
import ClientOnly from '#/components/ClientOnly'
const MyMapView = defineAsyncComponent(() => import('#/components/MyMapView/index.vue'))

// import MyMapView from '#/components/MyMapView/index.vue'




// [Error] SyntaxError: Named export 'getAssetPath' not found.
// import MapView from '@arcgis/core/views/MapView'
// console.log('MapView', MapView)
// [Error] failed to import "@vuesri/core"  nexpected token 'export
// import { VaMapView } from '@vuesri/core'
// console.log('VaMapView', VaMapView)

</script>
