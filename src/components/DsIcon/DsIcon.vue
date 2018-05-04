<template>
  <div class="icon--pep" :class="'icon__' + name"></div>
</template>

<script>
export default {
  name: 'ds-icon',
  props: {
    name: {
      type: String
    }
  },
  data() {
    return {
    }
  },

  components: {},

  computed: {},

  mounted() { },

  methods: {}
}

</script>
