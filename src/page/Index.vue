<style lang="less">
.map-navbar {
  z-index: 1;
  left: 0px;
  width: 100%;
  position: absolute;
}
</style>

<template>
  <div>
    <mt-navbar v-show="!hideTools" class="map-navbar" v-model="attTypeTab.selectedId">
      <mt-tab-item v-for="item in attTypeTab.list" :key="item.name" :id="item.id">{{item.name}}</mt-tab-item>
    </mt-navbar>
    <div class="map-btn-float">
      <a class="btn">
        <icon name="refresh"></icon>
      </a>
      <a @click="showMode = 'list'" class="btn" v-if="showMode=='map'">
        <icon name="lists"></icon>
      </a>
      <a @click="showMode = 'map'" class="btn" v-if="showMode=='list'">
        <icon name="maps"></icon>
      </a>
    </div>
    <div v-show="showMode == 'map'" class="map-warp">
      <v-map :crs="crsBaidu" ref="map" :zoom="18" :min-zoom=5 :max-zoom=18 :center="center">
        <v-marker  v-for="item in list" :icon="icon" :key="item.id" :lat-lng="item.coordinates">
          <v-popup @click="attClick(item.id)" :options="popupOption" :content="`
            <div class='inner'>
              <div class='att-popup__avatar'>
                <img src='${item.finderListMobileSquare.url}' >
              </div>
              <div class='att-popup__body'>
                <h3 class='att-popup__title'>${item.name}</h3>
                <p class='att-popup__desc'>${item.landName}</p>
              </div>
            </div>
            `"></v-popup>
        </v-marker>
      </v-map>
    </div>
    <div v-show="showMode == 'list'" class="att-list-warp">
      <att-list :waits="waits" :list="list" :schedules="schedules"></att-list>
    </div>
  </div>
</template>

<script>
import { attTypeTab, attTypeIcon } from '@/common/park-arr'
import icon from '@/components/icon'
import attList from '@/components/att-list'
import { mapActions, mapState } from 'vuex'
import crsBaidu from '@/lib/crs.baidu'
import webdogTileLayer from '@/lib/webdogTileLayer'
import { handleId } from '@/utils/tool'

export default {
  name: 'Index',
  components: {
    icon, attList
  },
  computed: {
    ...mapState({
      list: state => state.park.list,
      waits: state => state.park.waits,
      schedules: state => state.park.schedules,
    }),
    icon() {
      return L.divIcon({
        className: 'marker-att icon--pep icon__' + attTypeIcon[this.attTypeTab.selectedId],
        popupAnchor: [12, 42],
        // iconSize: [40, 40],
        // iconAnchor: [20, 20]
      })
    }
  },
  data() {
    return {
      attTypeTab,
      crsBaidu,
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
    }
  },
  methods: {
    ...mapActions([
      'getDestinationsList'
    ]),
    attClick(id) {
      let [__id__, entityType, destination] = handleId(id)
      let url = `att?id=${__id__}&entityType=${entityType}&destination=${destination}`
      console.log(url)
      wx.miniProgram.navigateTo({url})
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
    this.$store.dispatch('getAttractionsWait')
    this.$store.dispatch('getSchedules')
  }
}
</script>

