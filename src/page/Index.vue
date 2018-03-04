<template>
  <div>
    <mt-navbar class="map-navbar" v-model="attTypeTab.selectedId">
      <mt-tab-item v-for="item in attTypeTab.list" :key="item.name" :id="item.id">{{item.name}}</mt-tab-item>
    </mt-navbar>
    <div class="map-warp">
      <v-map :crs="crs" ref="map" :zoom="18" :min-zoom=5 :max-zoom=18 :center="center">
        <v-marker v-for="item in list" :icon="icon" :key="item.id" :lat-lng="item.coordinates">
          <v-popup :options="popupOption" :content="item.name"></v-popup>
        </v-marker>
      </v-map>
    </div>
  </div>
</template>

<script>
import { attTypeTab } from '@/common/park-arr'
import { mapActions, mapState } from 'vuex'
import crsBaidu from '@/lib/crs.baidu'
import L from 'leaflet'

L.TileLayer.WebDogTileLayer = L.TileLayer.extend({
  getTileUrl: function (tilePoint) {
    var urlArgs,
      getUrlArgs = this.options.getUrlArgs

    if (getUrlArgs) {
      var urlArgs = getUrlArgs(tilePoint)
    } else {
      urlArgs = {
        z: tilePoint.z,
        x: tilePoint.x,
        y: tilePoint.y
      }
    }
    return L.Util.template(this._url, L.extend(urlArgs, this.options, { s: this._getSubdomain(tilePoint) }))
  }
})

L.tileLayer.webdogTileLayer = function (url, options) {
  return new L.TileLayer.WebDogTileLayer(url, options)
}

export default {
  name: 'Index',
  computed: {
    ...mapState({
      list: state => {
        let list = state.park.list
        return list
      }
    }),
    icon() {
      return L.icon({
        iconUrl: '../images/marker-icon.png'
        // iconSize: [40, 40],
        // iconAnchor: [20, 20]
      })
    }
  },
  data() {
    return {
      center: [31.1492, 121.6667],
      attTypeTab,
      crs: crsBaidu,
      map: {},
      popupOption: {
        autoClose: false,
        closeButton: false,
        closeOnClick: false
      },
      tilelayerOptions: {
        tms: true
      }
    }
  },
  watch: {
    'attTypeTab.selectedId': function (nVal, oVal)  {
      console.log(this)
      this.$store.dispatch('getDestinationsList', nVal)
    }
  },
  methods: {
    ...mapActions([
      'getDestinationsList'
    ])
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
    L.tileLayer.webdogTileLayer(url, options).addTo(map)
  },
  created() {
    this.$store.dispatch('getDestinationsList', 'attraction')
  }
}
</script>

<style lang="less">
.map-warp {
  position: absolute;
  top: 50px;
  left: 0px;
  right: 0px;
  bottom: 0px;
}
</style>
