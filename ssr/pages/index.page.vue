<template>
  <PageX>
    <h1>About</h1>
    <p>Example of using Vike.</p>
  </PageX>
</template>

<script lang="ts" setup>
import PageX from '#/components/PageX/index.vue'

// [Error] SyntaxError: Named export 'getAssetPath' not found.
// import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
console.log('MapView', MapView)

// [Error] failed to import "@vuesri/core"  nexpected token 'export
// import { VaMapView } from '@vuesri/core'
// console.log('VaMapView', VaMapView)


</script>
