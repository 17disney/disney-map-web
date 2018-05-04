<template>
  <div>
    <div v-for="item in list" @click="clickAtt(item.id)" class="attlist-box">
      <div class="attlist-box__hd">
        <img class="attlist-box__thumb radius" :src="item.finderListMobileSquare.url">
      </div>
      <div class="attlist-box__bd">
        <div class="attlist-box__title">{{item.name}}</div>
        <div class="attlist-box__desc">{{item.landName}}</div>
        <div v-if="schedules[item.aid]">
          <div v-if="item.type == 'entertainment'">
            <div class="attlist-box__desc" key="schedules">
              <div class="attlist-box__desc--time" key="schedules" v-for="item in schedules[item.aid]" v-if="item.date === today && item.startTime !== '00:00:00'">{{item.startTime}}</div>
            </div>
          </div>
          <div v-else>
            <div class="attlist-box__desc"  v-for="item in schedules[item.aid]" v-if="item.date === today">
              {{item.startTime}} 至 {{item.endTime}}
            </div>
          </div>
        </div>
        <att-waittime :item="item" :wait="waits[item.aid]"></att-waittime>
      </div>
    </div>
  </div>

</template>

<script>
import moment from 'moment'
import { handleId } from '@/utils/tool'
import AttWaittime from '@/components/Att/AttWaittime'

export default {
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

  components: {
    AttWaittime
  },

  computed: {},

  methods: {
    clickAtt(id) {
      let [__id__, entityType, destination] = handleId(id)
      let url = `att?id=${__id__}&entityType=${entityType}&destination=${destination}`
      wx.miniProgram.navigateTo({url})
    }
  }
}

</script>
<style lang='less'>

</style>
