<style lang="stylus">
.map-navbar {
  z-index: 11;
  position: fixed;
  background: #FFF;
}

.att-list-wrapper {
  position: absolute;
  z-index: 1;
  left: 0px;
  top: 60px;
  right: 0px;
  bottom: 0px;
  // overflow-y: auto;
  background: #fff;

  .att-list {
    padding-top: 25px;
    padding-bottom: 50px;
  }
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
        <v-marker v-for="(item, index) in activeList" :icon="item.icon" :key="index" :lat-lng="item.coordinates">
          <v-popup :options="popupOption">
            <div class="inner" @click="handleClickAtt(item.id)">
              <div class="att-popup__avatar">
                <att-media :medias="item.medias"></att-media>
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
    <div v-show="showMode == 'list'">
      <div class="att-list-wrapper">
        <att-list class="content" :list="activeList" :waits="waits" :schedules="schedules"></att-list>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
import { mapActions, mapState } from 'vuex'
import { handleId } from '@/utils/tool'
import crsBaidu from '@/lib/crs.baidu'
import webdogTileLayer from '@/lib/webdogTileLayer'
import BScroll from '@/lib/better-scroll';

import AttWaittime from '@/components/Att/AttWaittime'
import AttMedia from '@/components/Att/AttMedia'
import AttList from '@/components/AttList/AttList'
import DsNavbar from '@/components/DsNavbar/DsNavbar'
import DsTabScroll from '@/components/DsTab/DsTabScroll'
import DsTabItem from '@/components/DsTab/DsTabItem'
import DsIcon from '@/components/DsIcon/DsIcon'

import { ATT_TYPE } from '@/common/const'

export default {
  name: 'Index',
  components: {
    AttWaittime, AttMedia, AttList, DsNavbar, DsTabScroll, DsTabItem, DsIcon
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
    },
    activeList() {
      return this.list.filter(_ => _.type === this.type)
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
      },
      tilelayerOptions: {
        tms: true
      }
    }
  },

  methods: {
    ...mapActions([
      'getDestinationsList'
    ]),
    getWaits() {
      Toast({
        message: '已更新',
        position: 'bottom',
        duration: 3000
      });
      this.$store.dispatch('getAttractionsWait')
    },
    change(val) {
      this.type = this.attTypeTab[val]['id']
    }
  },
  mounted() {
    const map = this.$refs.map.mapObject
    const url = 'https://secure.parksandresorts.wdpromedia.com/media/maps/prod/shdr-baidu/13/{z}/{x}/{y}.jpg'
    const options = {
      getUrlArgs: (tilePoint) => {
        return {
          z: tilePoint.z,
          x: tilePoint.x + Math.pow(2, tilePoint.z - 1),
          y: tilePoint.y + Math.pow(2, tilePoint.z - 1)
        }
      }
    }
    webdogTileLayer(url, options).addTo(map)

    this.$nextTick(() => {
      const wrapper = document.querySelector('.att-list-wrapper')
      const scroll = new BScroll(wrapper)
    })
  },
  created() {
    this.$store.dispatch('getDestinationsList')
    this.$store.dispatch('getSchedules')

    setTimeout(() => {
      this.$store.dispatch('getAttractionsWait')
    }, 2000)
  }
}
</script>

