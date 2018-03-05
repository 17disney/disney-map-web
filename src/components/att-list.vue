<template>
  <div class="attlist-warp">
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

        <div v-if="waits[item.aid] && waits[item.aid]['waitList']">
          <div class="attlist-box__wait" v-if="waits[item.aid].status == 'Operating'">
            等候
            <text class="strong">{{waits[item.aid].waitList[0][1] || 0}}</text>分钟
          </div>
          <div class="attlist-box__wait color_warn" v-else>
            已关闭
          </div>
          <div v-if="waits[item.aid].fpList">
            <div class="attlist-box__fp" v-if="waits[item.aid].fpStatus">
              FP 使用时间： {{waits[item.aid].fpStartTime}} 至 {{waits[item.aid].fpEndTime}}
            </div>
            <div class="attlist-box__fp color_warn" v-else>
              FP 已领完
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import moment from 'moment'
import { handleId } from '@/utils/tool'

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
  },

  computed: {},

  methods: {
    clickAtt(id) {
      let [__id__, entityType, destination] = handleId(id)
      let url = `att?id=${__id__}&entityType=${entityType}&destination=${destination}`
      console.log(url)
      wx.miniProgram.navigateTo({url})
    }
  }
}

</script>
<style lang='less'>

</style>
