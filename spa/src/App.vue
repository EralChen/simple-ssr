<script lang="js" setup>
import { VaMapView } from '@vuesri/core'
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'

const defaultOptions =  {
  map: new Map({
    basemap: 'streets-navigation-vector'
  }),
}

const onLoad = (e) => {
   console.log(e.view instanceof MapView) // true
}
</script>
<template>
  <VaMapView
    :default-options="defaultOptions"
    @load="onLoad"
  ></VaMapView>
</template>

<style>
html{
  height: 100%;
}
body, #app {
  height: 100%;
  overflow: hidden;
}
</style>