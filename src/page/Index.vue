<style lang='stylus'>
.ds-map {
  position: absolute !important;
  left: 0px;
  top: 56px;
  right: 0px;
  bottom: 0px;
  z-index: 1;
}

.att-list-wrapper {
  position: fixed !important;
  z-index: 1;
  left: 0px;
  top: 56px;
  right: 0px;
  bottom: 0px;
  background: #fff;
  overflow: auto;

  .att-list {
    padding-top: 25px;
    padding-bottom: 50px;
  }
}
</style>
<template>
  <div>
    <ds-header :wheel="true" :line="false">
      <ds-tab @change="change" :wheel="true" v-model="type">
        <ds-tab-item type="wheel" v-if="item.showTab" :key="item.id" :id="item.id" v-for="item in ATT_TYPE">{{item.name}}</ds-tab-item>
      </ds-tab>
      <div slot="focus-icon">
        <att-icon :name="selectedIcon"></att-icon>
      </div>
    </ds-header>
    <ds-map local="shanghai" :center="[31.1492, 121.6667]">
      <att-marker @click="handleAttClick" v-for="(item, index) in activeList" :icon="item.icon" :key="index" :coordinates="item.coordinates" :data="item"></att-marker>
    </ds-map>
    <ds-map-float :mode="mode" @click="hanldeMapClick"></ds-map-float>

    <div v-show="mode == 'list'">
      <div class="att-list-wrapper">
        <att-list>
          <att-list-item @click="handleAttClick" v-for="(item, index) in activeList" :data="item" :wait="waits[item.aid]" :key="index"></att-list-item>
        </att-list>
      </div>
      <!-- <ds-scroll class="att-list-wrapper"> -->
      <!-- </ds-scroll> -->
    </div>
  </div>
</template>

<script>
import base from '@/service/mixins/base'
import { mapState } from 'vuex'
import moment from 'moment'
import ATT_TYPE from 'package/17disney-common/const/att-type'
import AttList from '@/components/AttList/AttList'
import AttListItem from '@/components/AttList/AttListItem'
import { Toast } from 'mint-ui'
import { handleId } from '@/utils/tool'

export default {
  mixins: [base],

  components: {
    AttList, AttListItem
  },

  props: {
  },

  data() {
    return {
      ATT_TYPE,
      type: 'attraction',
      date: moment().format('YYYY-MM-DD'),
      mode: 'map'
    }
  },

  computed: {
    ...mapState({
      waits: state => state.explorer.waits
    }),
    selectedIcon() {
      return ATT_TYPE.find(_ => _.id === this.type)['icon']
    },
    // 显示项目
    activeList() {
      return this.attListFilter(this.type)
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.clusterOptions = { disableClusteringAtZoom: 11 }
      this.$store.dispatch('getAttractionsWait', this.date)
    })
  },

  methods: {
    change(val) {
      console.log(val)
      console.log(ATT_TYPE[val]['id'])
      this.type = ATT_TYPE[val]['id']
    },
    handleAttClick(id) {
      const [__id__, entityType, destination] = handleId(id)
      const url = `att?id=${__id__}&entityType=${entityType}&destination=${destination}`
      console.log(url)
      wx.miniProgram.navigateTo({ url })
    },
    hanldeMapClick(val) {
      if (val === 'refresh') {

        Toast({
          message: '已更新',
          position: 'bottom',
          duration: 3000
        });

        this.$store.dispatch('getAttractionsWait', this.date)
      } else {
        this.mode = val
      }
    }
  }
}
</script>
