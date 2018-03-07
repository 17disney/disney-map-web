<template>
  <div class="ds-navbar" :class="{ 'is-fixed': fixed }">
    <slot></slot>
  </div>
</template>

<script>
/**
 * ds-navbar
 * @module components/navbar
 * @desc 顶部 tab，依赖 tab-item
 *
 * @param {boolean} [fixed=false] - 固定底部
 * @param {*} selected - 返回 item component 传入的 value
 *
 * @example
 * <ds-navbar :selected.sync="selected">
 *   <ds-tab-item value="订单">
 *     <span slot="label">订单</span>
 *   </ds-tab-item>
 * </ds-navbar>
 *
 * <ds-navbar :selected.sync="selected" fixed>
 *   <ds-tab-item :value="['传入数组', '也是可以的']">
 *     <span slot="label">订单</span>
 *   </ds-tab-item>
 * </ds-navbar>
 *
 */
export default {
  name: 'ds-navbar',

  props: {
    fixed: Boolean,
    value: {}
  }
};
</script>


