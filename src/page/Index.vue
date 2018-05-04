<style lang="stylus">
.map-navbar {
  z-index: 11;
  position: fixed;
  background: #FFF;
}
</style>

<template>
  <div class="page">
    <ds-navbar :fixed="true" :wheel="true">
      <ds-tab-scroll :list="attTypeTab" :wheel="true" @change="change" ref="scroll" v-model="type">
        <ds-tab-item v-if="item.showTab" :key="item.id" :id="item.id" v-for="item in attTypeTab">{{item.name}}</ds-tab-item>
      </ds-tab-scroll>
      <div slot="focus-icon">
        <ds-icon :name="selectedIcon"></ds-icon>
      </div>
    </ds-navbar>
    <div class="map-btn-float">
      <a @click="getWaits" class="btn">
        <ds-icon name="refresh"></ds-icon>
      </a>
      <a @click="showMode = 'list'" class="btn" v-if="showMode=='map'">
        <ds-icon name="lists"></ds-icon>
      </a>
      <a @click="showMode = 'map'" class="btn" v-if="showMode=='list'">
        <ds-icon name="maps"></ds-icon>
      </a>
    </div>
    <div class="map-warp">
      <v-map :crs="crsBaidu" ref="map" :zoom="18" :min-zoom="10" :max-zoom="18" :center="center">
        <v-marker v-for="item in list" :icon="item.icon" :key="item.id" :lat-lng="item.coordinates">
          <v-popup :options="popupOption">
            <div class="inner" @click="handleClickAtt(item.id)">
              <div class="att-popup__avatar">
                <img :src="item.finderListMobileSquare.url">
              </div>
              <div class="att-popup__body">
                <h3 class="att-popup__title">{{item.name}}</h3>
                <p class="att-popup__desc">{{item.landName}}</p>
                <attWaittime :item="item" :wait="waits[item.aid]"></attWaittime>
              </div>
            </div>
          </v-popup>
        </v-marker>
      </v-map>
    </div>
    <div v-show="showMode == 'list'" class="attlist-warp">
      <att-list :waits="waits" :list="list" :schedules="schedules"></att-list>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { handleId } from '@/utils/tool'
import { Toast } from 'mint-ui';
import crsBaidu from '@/lib/crs.baidu'
import webdogTileLayer from '@/lib/webdogTileLayer'

import AttWaittime from '@/components/Att/AttWaittime'
import AttList from '@/components/AttList/AttList'
import AttListItem from '@/components/AttList/AttListItem'
import DsNavbar from '@/components/DsNavbar/DsNavbar'
import DsTabScroll from '@/components/DsTab/DsTabScroll'
import AttTab from '@/components/AttTab/AttTab'
import DsTabItem from '@/components/DsTab/DsTabItem'
import DsIcon from '@/components/DsIcon/DsIcon'

import { ATT_TYPE } from '@/common/const'

export default {
  name: 'Index',
  components: {
    AttWaittime, AttList, AttListItem, DsNavbar, DsTabScroll, DsTabItem, DsIcon
  },
  computed: {
    ...mapState({
      list: state => state.park.list,
      waits: state => state.park.waits,
      schedules: state => state.park.schedules,
    }),
    attTypeTab() {
      return ATT_TYPE.filter(_ => _.showTab)
    },
    selectedIcon() {
      return ATT_TYPE.find(_ => _.id === this.type)['icon']
    }
  },
  data() {
    return {
      crsBaidu,
      type: 'attraction',
      hideTools: false,
      showMode: 'map',
      center: [31.1492, 121.6667],
      popupOption: {
        autoClose: false,
        closeButton: false,
        minWidth: 300,
        className: 'att-popup'
        // closeOnClick: false
      },
      tilelayerOptions: {
        tms: true
      }
    }
  },
  watch: {
    'attTypeTab.selectedId': function (nVal, oVal) {
      this.$store.dispatch('getDestinationsList', nVal)
    },
    list: function (nVal, oVal) {
      this.$store.dispatch('getAttractionsWait')
    }
  },
  methods: {
    ...mapActions([
      'getDestinationsList'
    ]),
    // 跳转小程序
    handleClickAtt(id) {
      let [__id__, entityType, destination] = handleId(id)
      let url = `att?id=${__id__}&entityType=${entityType}&destination=${destination}`
      console.log(url)
      wx.miniProgram.navigateTo({ url })
    },
    getWaits() {
      // this.$createToast({
      //   txt: '已更新'
      // }).show()
      this.$store.dispatch('getAttractionsWait')
    },
    change(val) {
      this.type = this.attTypeTab[val]['id']
    }

  },
  mounted() {
    // let map = L.map('mapid', {
    //   center: [31.1492, 121.6667],
    //   zoom: 17,
    //   maxZoom: 18,
    //   minZoom: 13,
    //   crs: crsBaidu
    // })
    let map = this.$refs.map.mapObject
    let url = 'https://secure.parksandresorts.wdpromedia.com/media/maps/prod/shdr-baidu/13/{z}/{x}/{y}.jpg'
    let options = {
      getUrlArgs: (tilePoint) => {
        return {
          z: tilePoint.z,
          x: tilePoint.x + Math.pow(2, tilePoint.z - 1),
          y: tilePoint.y + Math.pow(2, tilePoint.z - 1)
        }
      }
    }
    webdogTileLayer(url, options).addTo(map)
  },
  created() {
    this.$store.dispatch('getDestinationsList', 'attraction')
    // this.$store.dispatch('getSchedules')
  }
}
</script>

