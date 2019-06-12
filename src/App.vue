<template>
  <div id="app">
    <template v-if="$route.meta.hiddenLayout">
      <router-view />
    </template>
    <template v-else>
      <base-layout />
    </template>
  </div>
</template>

<script>
import { BaseLayout } from '@/components'

export default {
  components: {
    BaseLayout
  }
}
</script>


<style lang="less">
</style>
