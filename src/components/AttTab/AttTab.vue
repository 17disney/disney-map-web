<style lang="stylus">
@require '../../styles/disney/var/color.styl';

.ds-tab-scroll {
  position: relative;
  width: 100%;

  .scroll-wrapper {
    overflow: hidden;
    position: relative;
  }

  &.is-wheel {
    .scroll-content {
      // margin-left: 50%;
    }
  }

  .scroll-content {
    .ds-tab__item {
      float: left;
      display: inline-block;
    }
  }

  .scroll-mark {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    position: absolute;
    left: 50%;
    bottom: -20px;
    margin-left: -20px;
    background: #FFF;
    // box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
  }
}
</style>

<template>
  <div class="ds-tab-scroll" :class="{'is-wheel': wheel}">
    <div class="scroll-wrapper" ref="scroll">
      <div class="scroll-content" ref="tabList">
        <slot></slot>
      </div>
    </div>
    <slot name="focus"></slot>
  </div>
</template>
<script>
import BScroll from '@/lib/better-scroll'

const EVENT_CHANGE = 'change'

export default {
  name: 'att-tab',
  props: {

    list: {
      type: Array
    },
    wheel: {
      type: Boolean
    }
  },

  mounted() {
    this.$nextTick(() => {
      this._initTabListWidth()
      this.initScroll()
    })
  },

  data() {
    return {
      viewWidth: 0,
      tabWidth: 0,
      tabListX: [],
      tabListK: []
    }
  },

  methods: {
    initScroll() {
      if (!this.$refs.scroll) {
        return
      }
      let options = {
        scrollX: true,
        scrollY: false
      }
      if (this.wheel) {
        // options.probeType = 3
        options.horWheel = {
          tabListPosition: this.tabListX
        }
        // options.startX = -this.viewWidth / 2
      } else {
        options.initScrollWidth = true
      }
      Object.assign(options, this.options)
      this.scroll = new BScroll(this.$refs.scroll,
        options
      )

      this.scroll.on('scrollEnd', (con) => {
        // this._activeItem(x)
        // this.$emit(EVENT_CHANGE, index)
        this.$emit(EVENT_CHANGE, this.scroll.getSelectedIndex())
      })
      this.scroll.on('scroll', () => {
        this.$emit(EVENT_CHANGE, this.scroll.getSelectedIndex())
      })
    },

    _initTabListWidth() {
      // const tabList = this.$refs.tabList
      // const items = tabList.children
      // let width = 0
      // let tabListX = []
      // let tabListK = []
      // let startK = 0
      // for (let i = 0; i < items.length; i++) {
      //   width += items[i].clientWidth
      //   if (i === 0) startK = -(width / 2)
      //   tabListX[i] = width
      //   tabListK[i] = startK + width
      // }

      // let viewWidth = this.$refs.scroll.clientWidth
      // tabList.style.width = (width + 1) + viewWidth + 'px'
      // this.viewWidth = viewWidth
      // this.tabWidth = width
      // this.tabListX = tabListX
      // this.tabListK = tabListK
    }
  }
}
</script>
