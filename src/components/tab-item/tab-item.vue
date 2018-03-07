<template>
  <a class="ds-tab-item"
    @click="$parent.$emit('input', id)"
    :class="{ 'is-selected': $parent.value === id }">
    <div class="ds-tab-item-icon"><slot name="icon"></slot></div>
    <div class="ds-tab-item-label"><slot></slot></div>
  </a>
</template>

<script>
/**
 * ds-tab-item
 * @module components/tab-item
 * @desc 搭配 tabbar 或 navbar 使用
 * @param {*} id - 选中后的返回值，任意类型
 * @param {slot} [icon] - icon 图标
 * @param {slot} - 文字
 *
 * @example
 * <ds-tab-item>
 *   <img slot="icon" src="http://placehold.it/100x100">
 *   订单
 * </ds-tab-item>
 */
export default {
  name: 'ds-tab-item',

  props: ['id']
};
</script>

