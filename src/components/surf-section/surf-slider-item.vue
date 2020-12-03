<template>
    <div class="v-slider__item">
        <div class="slider__item"
             :style="[
                 {backgroundImage:'url(' + sliderImage +')'},
                 !this.WINDOW_WIDTH.isDesktop && !this.WINDOW_WIDTH.isSmallDesktop ? {margin: '0 auto'} : ''
                 ]"
        >
            <div class="slider__title">
                {{sliderTitle}}
            </div>
            <div class="slider__location">
                <div class="slider__location-text">
                    {{sliderLocation}}
                </div>
            </div>
            <div class="slider__btn"
                 v-on:click="btnSlideClicked()"
            >
                <btn-element :btn-text="sliderButton"
                             :btn-link="'#travel'"
                />
            </div>
            <div class="slider__bgc"></div>
        </div>
    </div>
</template>

<script>
import btnElement from '../btn-element.vue'
import { eventBus } from '../../main'
import { mapGetters } from 'vuex'

export default {
  name: 'surf-slider-item',
  components: {
    btnElement
  },
  props: {
    sliderImage: String,
    sliderTitle: String,
    sliderLocation: String,
    sliderButton: {
      type: String,
      default: 'View-surf'
    },
    sliderItemIndex: Number
  },
  data () {
    return {
      local: {
        btnClicked: false,
        sliderItemIndex: Number
      }
    }
  },
  created () {
    this.local.sliderItemIndex = this.sliderItemIndex
  },
  computed: {
    ...mapGetters([
      'SURF_BEACHES',
      'SURF_SLIDER',
      'WINDOW_WIDTH'
    ])
  },
  methods: {
    btnSlideClicked () {
      this.local.btnClicked = true
      eventBus.$emit('btnSliderClicked', {
        dataClicked: this.local.btnClicked,
        dataIndex: this.local.sliderItemIndex
      })
    }
  }
}
</script>

<style lang="scss" scoped>
    @import './src/assets/scss/global';

    .v-slider__item{
        .slider__item{
            /*background-image: url('../../assets/img/surf-section/surfers/2.jpg');*/
            background-size: cover;
            background-position: center;
            max-width: 400px;
            height: 750px;
            padding: rem(72) rem(40) 0;
            display: flex;
            flex-direction: column;
            position: relative;
            justify-content: space-between;

            .slider{
                &__title{
                    @extend %title;
                    /*font-size: rem(40);*/
                    @include font-size(40px);
                    line-height: rem(36);
                    max-width: 250px;
                    z-index: 1;
                }
                &__location{
                    display: inline-block;
                    /*<!--position: absolute;-->*/
                    /*<!--left: -120px;-->*/
                    /*<!--bottom: 240px;-->*/
                    margin-left: -300px;
                    margin-bottom: 150px;
                    transform: rotate(-90deg);
                    z-index: 1;

                    &-text{
                        display: inline-block;
                        @extend %subText;
                        color: $default-text-color;
                        /*font-size: rem(18);*/
                        @include font-size(18px !important);
                        line-height: rem(28);
                        letter-spacing: 8px;
                        text-shadow: 0 0 15px black, 0 0 20px black, 0 0 30px black, 0 0 40px black, 0 0 55px black, 2px 2px 20px rgba(0,0,0,0);
                        z-index: 1;
                    }
                }
                &__btn{
                    z-index: 1;
                }
                &__bgc{
                    position: absolute;
                    background-color: $secondary-bg-color;
                    height: 100%;
                    width: 100%;
                    top: 0;
                    left: 0;
                    transition: 0.35s;
                }
            }
        }
    }
</style>
