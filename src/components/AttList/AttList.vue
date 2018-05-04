<template>
  <div>
    <div v-for="item in list" @click="clickAtt(item.id)" class="attlist-box">
      <div class="attlist-box__hd">
        <!-- <img class="attlist-box__thumb radius" :src="item.finderListMobileSquare.url"> -->
      </div>
      <div class="attlist-box__bd">
        <div class="attlist-box__title">{{item.name}}</div>
        <div class="attlist-box__desc">{{item.landName}}</div>

        <att-waittime :item="item" :wait="waits[item.aid]"></att-waittime>
      </div>
    </div>
  </div>

</template>

<script>
import moment from 'moment'
import { handleId } from '@/utils/tool'
import AttWaittime from '@/components/Att/AttWaittime'
import AttMedia from '@/components/Att/AttMedia'

export default {
  components: {
    AttWaittime, AttMedia
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
<style lang='less'>

</style>
