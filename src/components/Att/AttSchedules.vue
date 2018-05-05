<style lang='stylus'>
.att-sechedules {
  display: flex;
  flex-wrap: wrap;

  &-time {
    margin-right: 5px;
  }
}
</style>
<template>
  <div class="att-sechedules">
    <div v-if="type==='entertainment'" class="att-sechedules-time" v-for="(item, index) in schedule" :key="index">
      {{item.startTime | timeFormat('H:mm', 'H:mm:ss') }}
    </div>
    <div class="att-sechedules-time" v-else>
      {{schedule[0].startTime | timeFormat('H:mm', 'H:mm:ss')}} 至 {{schedule[0 ].endTime | timeFormat('H:mm', 'H:mm:ss')}}
    </div>
  </div>
</template>

<script>
import AttStatus from './AttStatus'
import moment from 'moment'

export default {
  components: { AttStatus },

  props: {
    schedules: {
      type: Array,
      default: () => {
        return []
      }
    },
    type: String
  },

  data() {
    return {
      today: moment().format('YYYY-MM-DD')
    }
  },

  computed: {
    schedule() {
      return this.schedules.filter(_ => _.date === this.today)
    }
  },

  mounted() { },

  methods: {}
}
</script>
