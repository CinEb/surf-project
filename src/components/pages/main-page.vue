<template>
    <div class="v-main-page">
        <nav-block
                v-if="!this.WINDOW_WIDTH.isDesktop"
        ></nav-block>
        <header-section>
        </header-section>
        <surf-section>
        </surf-section>
        <travel-section>
        </travel-section>
        <sleep-section>
        </sleep-section>
        <shop-section/>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'main-page',
  created () {
    this.GET_WINDOW_WIDTH()
  },
  mounted () {
    this.GET_WINDOW_WIDTH()
  },
  computed: {
    ...mapGetters([
      'WINDOW_WIDTH'
    ])
  },
  methods: {
    ...mapActions([
      'GET_WINDOW_WIDTH'
    ])
  }
}
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/global';

</style>
