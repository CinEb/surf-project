<template>
  <div class="surf container" id="surf">
      <div class="surf__header">
          <title-element
                  :titleElementText="SURF_SECTION.title"
                  :titleElementTextTransparent="SURF_SECTION.title"
          ></title-element>
          <div class="text-box">
              <text-box
                      :text="SURF_SECTION.currentLocation.text"
                      :title="SURF_SECTION.currentLocation.title"
                      v-bind:line="true"
                      :titleAfterLine="SURF_SECTION.currentLocation.titleAfterLine"
              ></text-box>
              <img :src="SURF_SECTION.poi" :alt="SURF_SECTION.poi">
          </div>
      </div>
      <div class="surf__map">
          <surf-map>
          </surf-map>
      </div>
  </div>
</template>

<script>
// import surfSlider from './surf-slider.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'surf-section',
  // components: {
  // surfSlider
  // },
  computed: {
    ...mapGetters([
      'SURF_SECTION'
    ])
  }
}
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/global";

    .surf{
        padding-top: rem(160);
        padding-bottom: rem(280);
        /*padding-right: rem(80);*/
        overflow: hidden;
        display: flex;
        flex-direction: column;
        background-color: $default-bg-color;
        .surf{
            &__header{
                padding-right: rem(80);

                .text-box{
                    margin-top: rem(-40);
                    position: relative;
                    img{
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);
                        right: rem(-240);
                    }
                }
            }
            &__map{
                display: flex;
                flex-direction: column;
                justify-content: center;
                /*padding-left: rem(80);*/
            }
        }
    }
</style>
