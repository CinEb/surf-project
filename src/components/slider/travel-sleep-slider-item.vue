<template>
    <div class="v-slider-item">
        <div class="slider__image">
            <img :src="headerImage" :alt="headerImage">
            <div class="slider__left-bottom-text">
                <text-box
                        :text="underImageText"
                        :title="underImageTitle"
                        v-bind:line="false"
                        v-bind:alignLeft="true"
                />
                <stars-block
                        v-if="areStarsActive"
                        :starsCount="starsCount"
                />
            </div>
        </div>
        <div class="slider__right-image">
            <img :src="rightImage"
                 data-aos="fade-up-left"
            >
        </div>
        <div class="slider__place">
            <text-box
                    :text="sliderRightUpText"
                    :title="sliderRightUpTitle"
                    v-bind:line="true"
                    :titleAfterLine="sliderRightUpTitleAfterLine"
            />
        </div>
        <div class="slider__info-block">
            <info-block
                    :blockName="block1Title"
                    :blockText="block1Text"
                    :activeIncrement="block1Increment"
                    :activeSmallText="block1ActiveSmallText"
                    :blockSmallText="block1SmallText"
            />
            <info-block
                    :blockName="block2Title"
                    :blockText="block2Text"
                    :activeIncrement="block2Increment"
                    :activeSmallText="block2ActiveSmallText"
                    :blockSmallText="block2SmallText"
                    :maxIncrementer="block2MaxIncrementer"
                    :incrementer="local.incrementerFromBlock2"
                    @sendIncrementer="getIncrementerFromBlock2($event)"
            />
            <info-block
                    :blockName="block3Title"
                    :blockText="block3Text"
                    :activeIncrement="block3Increment"
                    :activeSmallText="block3ActiveSmallText"
                    :blockSmallText="block3SmallText"
                    :maxIncrementer="block3MaxIncrementer"
                    :incrementer="local.incrementerFromBlock3"
                    @sendIncrementer="getIncrementerFromBlock3($event)"
            />
            <info-block
                    :blockName="block4Title"
                    :blockText="block4Text"
                    :activeIncrement="block4Increment"
                    :activeSmallText="block4ActiveSmallText"
                    :blockSmallText="block4SmallText"
            />
        </div>
        <div class="slider__btn">
            <div class="slider__btn-wrapper"
                 @click="addToCart()"
            >
                <btn-element
                        :btnText="btnText"
                />
            </div>
        </div>
        <div class="slider__right-bottom-image"
             data-aos="fade-up"
        >
            <img :src="rightBottomImage" :alt="rightBottomImage">
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'travel-sleep-slider-item',
  props: {
    headerImage: {
      type: String,
      default: ''
    },
    underImageText: {
      type: String,
      default: ''
    },
    underImageTitle: {
      type: String,
      default: ''
    },
    areStarsActive: {
      type: Boolean,
      default: false
    },
    starsCount: null,
    rightImage: {
      type: String,
      default: ''
    },
    sliderRightUpText: {
      type: String,
      default: ''
    },
    sliderRightUpTitle: {
      type: String,
      default: ''
    },
    sliderRightUpTitleAfterLine: {
      type: String,
      default: ''
    },
    btnText: {
      type: String,
      default: ''
    },
    getIndexBtn: Number,
    getSliderName: {
      type: String,
      default: ''
    },
    rightBottomImage: {
      type: String,
      default: ''
    },

    block1Title: {
      type: String,
      default: ''
    },
    block1Text: {
      type: String,
      default: ''
    },
    block1Increment: {
      type: Boolean,
      default: false
    },
    block1ActiveSmallText: {
      type: Boolean,
      default: false
    },
    block1SmallText: {
      type: String,
      default: ''
    },

    block2Title: {
      type: String,
      default: ''
    },
    block2Text: {
      type: String,
      default: ''
    },
    block2Increment: {
      type: Boolean,
      default: false
    },
    block2ActiveSmallText: {
      type: Boolean,
      default: false
    },
    block2SmallText: {
      type: String,
      default: ''
    },
    block2MaxIncrementer: null,

    block3Title: {
      type: String,
      default: ''
    },
    block3Text: {
      type: String,
      default: ''
    },
    block3Increment: {
      type: Boolean,
      default: false
    },
    block3ActiveSmallText: {
      type: Boolean,
      default: false
    },
    block3SmallText: {
      type: String,
      default: ''
    },
    block3MaxIncrementer: null,

    block4Title: {
      type: String,
      default: ''
    },
    block4Text: {
      type: String,
      default: ''
    },
    block4Increment: {
      type: Boolean,
      default: false
    },
    block4ActiveSmallText: {
      type: Boolean,
      default: false
    },
    block4SmallText: {
      type: String,
      default: ''
    }

  },
  data () {
    return {
      local: {
        incrementerFromBlock2: 0,
        incrementerFromBlock3: 0
      }
    }
  },
  computed: {
    ...mapGetters([
      'SURF_BEACHES',
      'CART'
    ])
  },
  methods: {
    ...mapActions([
      'GET_RESORTS_INFO',
      'GET_CART',
      'GET_RESORT_NIGHTS',
      'GET_RESORT_GUESTS'
    ]),
    addToCart () {
      const index = this.getIndexBtn
      const name = this.getSliderName
      const val = { index, name }
      this.GET_CART(val)
      // console.log(index, name +' addToCart');

      if (name === 'sleep') {
        if (this.SURF_BEACHES[index].resorts.nights === 0) {
          const nights = 1
          this.GET_RESORT_NIGHTS({ index, nights })
          this.local.incrementerFromBlock2 = nights
          // console.log(index, nights, "nights set by default")
        }
        if (this.SURF_BEACHES[index].resorts.guests === 0) {
          const guests = 1
          this.GET_RESORT_GUESTS({ index, guests })
          this.local.incrementerFromBlock3 = guests
          // console.log(index, guests, "guests set by default")
        }
      }
    },
    getIncrementerFromBlock2 (val) {
      this.local.incrementerFromBlock2 = val

      const index = this.getIndexBtn
      const nights = val

      this.GET_RESORT_NIGHTS({ index, nights })
      // console.log(val +' block2')
    },
    getIncrementerFromBlock3 (val) {
      this.local.incrementerFromBlock3 = val

      const index = this.getIndexBtn
      const guests = val

      this.GET_RESORT_GUESTS({ index, guests })
      // console.log(val +' block3')
    }
  }
}
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/global';

    .v-slider-item{
        position: relative;
        @include margin-bottom(340px);
        .slider{
            &__image{
                width: 1115px;
                height: rem(710);
                position: relative;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                &::after{
                    position: absolute;
                    display: block;
                    top: 0;
                    height: 100%;
                    width: 100%;
                    content: '';
                    box-shadow: inset -40px 0px 70px 80px rgba(23, 25, 25, 1),inset -15px 0 15px 15px rgba(23, 25, 25, 1);

                }
            }
            &__right-image{
                position: absolute;
                right: 0;
                bottom: 50%;
                transform: translateY(50%);
            }
            &__place{
                @include margin-top(50px);
                position: absolute;
                top: 0;
                right: 0;
            }
            &__left-bottom-text{
                @extend %paddingLeftContainer;
                // @include margin-bottom(-50px);
                display: flex;
                width: 100%;
                position: absolute;
                bottom: 0;
                z-index: 1;
            }
            &__info-block{
                @extend %paddingLeftContainer;
                @include padding-top(180px);
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
            }
            &__btn{
                display: flex;
                justify-content: center;
            }
            &__right-bottom-image{
                position: absolute;
                right: -150px;
                bottom: -250px;
            }
        }
    }

    @media (max-width: 670px){
        .v-slider-item{
            .slider__left-bottom-text{
                flex-direction: column;
            }
            .slider__info-block{
                padding-left: 10px;
            }
        }
    }

</style>
