<style lang="stylus">
@require '../../styles/disney/var/color.styl';

.att-waittime {
  color: $color-grey;
}
</style>


<template>
  <div v-if="wait && wait['waitList']">
    <div class="att-waittime" v-if="wait.status === 'Operating'">等候
      <strong class="strong">{{wait.waitList[0][1] || 0}} </strong>分钟</div>
    <att-status :status="wait.status" v-else></att-status>
  </div>
</template>

<script>
import AttStatus from './AttStatus'

export default {
  props: {
    wait: {
      type: Object
    }
  },
  data() {
    return {
    }
  },

  components: { AttStatus },

  computed: {},

  mounted() { }
}

</script>
