<style lang="less">
@import '@/style/disney/ui/color.less';
.ds-tab {
  &__bd {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    width: 750rpx;
    display: block;
    white-space: nowrap;
  }
  &__title {
    font-size: 19px;
    display: inline-block;
    line-height: 45px;
    box-sizing: border-box;
    word-break: keep-all;
  }
  &__item {
    text-align: center;
    color: @dsColorPrimary;
    padding-bottom: 5px;
    padding: 0 16px;
    border-bottom: 3px solid @dsLineColorLight;
    box-sizing: border-box;
    flex: 1;
    display: inline-block;
    min-width: 80px;
    &--selected {
      font-weight: 600;
      color: @dsTextColorTitle;
      border-color: @dsColorPrimary;
    }
  }
}
</style>

<template>
  <div class="ds-tab">
    <block>
      <div class="ds-tab__bd">
        <div v-for="item in tab.list" class="ds-tab__item" :class="'ds-tab__item--selected' : tab.selectedId === item.id}" :id="item.id">
          <div class="ds-tab__title">{{item.name}}</div>
        </div>
      </div>
    </block>
  </div>
</template>

<script>
export default {
  props = {
    tab: {
      type: Object
    }
  },

  components: {},

  computed: {},

  mounted() { },

  methods: {
    handleTabChange() {

    }
  }
}

</script>
