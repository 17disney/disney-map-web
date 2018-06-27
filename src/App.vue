<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import base from '@/service/mixins/base'

export default {
  name: 'App',

  mixins: [base],

  mounted() {
    this.$store.dispatch('setLocal', 'shanghai')
    this.getDestinationsList()
  }
}
</script>

<style lang="stylus">
@require './styles/disney/var/color.styl';

#app {
  max-width: 1024px;
  min-height: 1000px;
  margin: 0 auto;
  color: $color-dark-grey;
}

html {
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  font-family: 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei';
}

* {
  margin: 0;
  padding: 0;
  border: none;
  box-sizing: border-box;
}
</style>
