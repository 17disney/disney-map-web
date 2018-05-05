<style lang="stylus">
</style>

<template>
  <div class="att-list">
    <att-list-item :data="item" :wait="waits[item.aid]" :schedules="schedules[item.aid]" v-for="(item, index) in list" :key="index" @click="handleClick"></att-list-item>
  </div>
</template>

<script>

import moment from 'moment'
import { handleId } from '@/utils/tool'
import AttListItem from '@/components/AttList/AttListItem'

export default {
  components: {
    AttListItem
  },

  props: {
    list: {
      type: Array
    },
    waits: {
      type: Object
    },
    schedules: {
      type: Object
    }
  },
  data() {
    return {
      today: moment().format('YYYY-MM-DD')
    }
  },

  mounted() {


  },


  methods: {
    handleClick(id) {
      this.$emit('click', id)

    }
  }
}

</script>
