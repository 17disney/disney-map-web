<template>
  <a class="ds-tab__item" @click="$parent.$emit('input', id)" :class="{ 'is-selected': $parent.value === id }">
    <div class="ds-tab__item--icon">
      <slot name="icon"></slot>
    </div>
    <div class="ds-tab__item--label">
      <slot></slot>
    </div>
  </a>
</template>

<script>

export default {
  name: 'ds-tab-item',
  props: ['id']
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.ds-tab__item {
  display: block;
  padding: 7px 0;
  flex: 1;
  text-decoration: none;

  &--icon {
    size: 24px;
    margin: 0 auto 5px;

    &:empty {
      display: none;
    }

    & > * {
      display: block;
      size: 100%;
    }
  }

  &--label {
    color: inherit;
    font-weight: inherit;
    font-size: 1ypx;
    line-height: 1;
  }
}
</style>
