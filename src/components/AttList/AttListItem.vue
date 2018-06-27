<style lang='stylus'>
@require '../../styles/disney/var/color.styl';
@require '../../styles/disney/mixin/index.styl';

.att-list-item {
  position: relative;
  padding: 16px;
  display: flex;
  align-items: start;

  .att-wait-time, .att-sechedules {
    margin-top: 5px;
  }

  &:active {
    background: #d9d9d9;
  }

  &:hover {
    background: #d9d9d9;
  }

  &:before {
    setBottomLine();
    left: 16px;
    right: 16px;
  }

  &__hd {
    margin-right: 16px;
    text-align: center;
  }

  &__bd {
    flex: 1;
    min-width: 0;
  }

  &__title {
    font-weight: 400;
    font-size: 18px;
    line-height: 1.3;
    font-weight: 600;
    word-wrap: break-word;
    word-break: break-all;
    margin-bottom: 2px;
  }

  &__desc {
    font-size: 15px;
    line-height: 1.25;
  }
}
</style>
<template>
  <div @click="handleClick(data.id)" class="att-list-item">
    <div class="att-list-item__hd">
      <att-media :medias="data.medias"></att-media>
    </div>
    <div class="att-list-item__bd">
      <div class="att-list-item__title">{{data.name}}</div>
      <div class="att-list-item__desc">{{data.landName}}</div>
      <att-wait-time v-if="data.type === 'attraction'" :text="true" :wait="wait"></att-wait-time>
      <att-schedules v-else :type="data.type" :schedules="schedules"></att-schedules>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  props: {
    data: Object,
    wait: Object,
    schedules: Array,
  },

  data() {
    return {
    }
  },

  computed: {},

  mounted() { },

  methods: {
    handleClick(id) {
      this.$emit('click', id)
    }
  }
}
</script>
