<style lang="stylus">
</style>

<template>
  <div class="att-list">
    <att-list-item v-for="(item, index) in list" :key="index" :data="item" @click="clickAtt(item.id)"></att-list-item>
  </div>
</template>

<script>
import moment from 'moment'
import { handleId } from '@/utils/tool'
import AttWaittime from '@/components/Att/AttWaittime'
import AttMedia from '@/components/Att/AttMedia'
import AttListItem from '@/components/AttList/AttListItem'

export default {
  components: {
    AttWaittime, AttMedia, AttListItem
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

  computed: {},

  methods: {
    clickAtt(id) {
      let [__id__, entityType, destination] = handleId(id)
      let url = `att?id=${__id__}&entityType=${entityType}&destination=${destination}`
      wx.miniProgram.navigateTo({ url })
    }
  }
}

</script>
