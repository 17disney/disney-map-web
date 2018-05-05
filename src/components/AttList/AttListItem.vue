<style lang='stylus'>
@require '../../styles/disney/var/color.styl';
@require '../../styles/disney/mixin/index.styl';

.att-list-item {
  position: relative;
  padding: 16px;
  display: flex;
  align-items: start;

  .att-media {
    width: 58px;
    height: 58px;
  }

  .att-waittime, .att-sechedules {
    margin-top: 5px;
  }

  &:active {
    background: #d9d9d9;
  }

  &:before {
    setBottomLine($color-light-grey-ss);
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
}

.att-list-item__title {
  font-weight: 400;
  font-size: 18px;
  line-height: 1.3;
  font-weight: 600;
  color: $color-grey;
  word-wrap: break-word;
  word-break: break-all;
  margin-bottom: 2px;
}

.att-list-item__desc {
  color: $color-grey;
  font-size: 14px;
  line-height: 1.25;
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
      <att-waittime v-if="data.type === 'attraction'" :wait="wait"></att-waittime>
      <att-schedules v-else :type="data.type" :schedules="schedules"></att-schedules>
    </div>
  </div>
</template>

<script>
import AttWaittime from '@/components/Att/AttWaittime'
import AttMedia from '@/components/Att/AttMedia'
import AttSchedules from '@/components/Att/AttSchedules'
export default {
  components: { AttMedia, AttWaittime, AttSchedules },

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
