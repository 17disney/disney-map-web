<style lang="stylus">
</style>

<template>
  <div class="att-list">
    <slot></slot>
  </div>
</template>

<script>
import moment from 'moment'
import { handleId } from '@/utils/tool'
import AttListItem from './AttListItem'

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
