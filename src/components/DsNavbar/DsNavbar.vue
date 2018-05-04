<style lang="stylus">
@require '../../styles/disney/var/color.styl';

.ds-navbar {
  background-color: #FFF;
  display: flex;
  text-align: center;
  position: relative;

  &.is-fixed {
    top: 0;
    right: 0;
    left: 0;
    position: fixed;
    z-index: 1;
  }

  &.is-default {
    .ds-tab__item {
      padding: 16px;
      border-bottom: 3px solid $color-light-grey-s;
      color: $color-primary;

      &:last-child {
        border-right: 0;
      }

      &.is-selected {
        border-color: $color-primary;
        font-weight: 600;
        color: $color-primary-dark;
      }
    }
  }

  &.is-wheel {
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);

    .ds-tab__item {
      padding: 20px 12px;
      // padding-bottom 30px;
      color: $color-primary-dark;
      font-size: 20px;

      &.is-selected {
        font-weight: 600;
        color: $color-primary-dark;
      }
    }
  }

  .scroll-mark-bg {
    width: 60px;
    height: 30px;
    position: absolute;
    left: 50%;
    bottom: -30px;
    margin-left: -30px;
    overflow: hidden;

    .mark {
      background: #FFF;
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
      width: 40px;
      height: 40px;
      margin: -20px auto 0px auto;
      border-radius: 100%;
    }
  }

  .scroll-mark-icon {
    position: absolute;
    z-index: 1;
    left: 50%;
    bottom: -20px;
    width: 40px;
    height: 40px;
    margin-left: -20px;
    font-size: 25px;
    line-height: 40px;
    color: $color-primary-dark;
  }
}
</style>

<template>
  <div class="ds-navbar" :class="{ 'is-fixed': fixed,'is-default': !wheel,'is-wheel':wheel }">
    <slot></slot>

    <div class="scroll-mark-icon" v-if="wheel">
      <slot name="focus-icon"></slot>
    </div>

    <div v-if="wheel" class="scroll-mark-bg">
      <div class="mark"></div>
    </div>
  </div>
</template>

<script>
const COMPONENT_NAME = 'ds-navbar'

export default {
  name: COMPONENT_NAME,

  props: {
    fixed: Boolean,
    wheel: {
      type: Boolean,
      default: false
    },
    value: {}
  }
}
</script>

