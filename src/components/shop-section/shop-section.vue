<template>
    <div class="v-shop container" id="shop">
<!--        <div class="container">-->
            <title-element
                    titleElementText="Shop"
                    titleElementTextTransparent="Shop"
            />
<!--        </div>-->

        <div class="shop__img-bg">
            <img :src="local.images.waveBg" :alt="local.images.waveBg">
        </div>

       <div class="v-shop-slider">
           <vue-slick-carousel>

               <template #prevArrow>
                   <div class="custom-arrow">
                       <img :src="ARROWS.arrowLeft">
                   </div>
               </template>
               <template #nextArrow>
                   <div class="custom-arrow">
                       <img :src="ARROWS.arrowRight">
                   </div>
               </template>

               <shop-slider-item
                       v-for="(item, index) in GET_SURFBOARDS"
                       :key="index"
                       :board-index="index"
                       :boardName="item.name"
                       :board-rating="item.rating"
                       :board-price="item.price"
                       :board-image="item.boardImage"

                       :board-point-info="item.descriptions"

                       :right-block-title="item.addons.name"
                       :additional-image="item.addons.firstAddon.image"
                       :additional-image2="item.addons.secondAddon.image"
                       :additional-text="item.addons.firstAddon.name"
                       :additional-text2="item.addons.secondAddon.name"
                       :additional-price="item.addons.firstAddon.price"
                       :additional-price2="item.addons.secondAddon.price"
               />
           </vue-slick-carousel>
       </div>

       <div class="v-shop__footer">
           <div class="v-shop__button">
               <btn-element btnText="Go - Surf" btnLink="#header"/>
           </div>
           <div class="v-shop__copy">
               BeNic Develop 2020. All rights CopyLeft.
           </div>
       </div>

    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

import shopSliderItem from '../slider/shop-slider-item.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'shop-section',
  components: {
    VueSlickCarousel,
    shopSliderItem
  },
  data () {
    return {
      local: {
        images: {
          waveBg: require('@/assets/img/shop-section/wavebg.jpg')
        }
      }
    }
  },
  created () {
    return this.GET_SURFBOARDS
    // console.log(this.GET_SURFBOARDS[0].descriptions)
  },
  computed: {
    ...mapGetters([
      'GET_SURFBOARDS',
      'ARROWS'
    ])
  }
}
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/global';
    .v-shop{
        @extend %paddingContainer;
        position: relative;
        background-color: $default-bg-color;
        .shop__img-bg{
            position: absolute;
            display: flex;
            align-items: center;
            width: 80%;
            height: 41%;
            top: 50%;
            transform: translateY(-50%);
            right: 0;
            z-index: 0;

            &::after{
                @extend %imageShadowRight;
                background-color: rgba(0, 0, 0, 0.6);
            }

            img{
                width: 100%;
                height: 90%;
            }
        }

        &__footer{
            @include margin-top(280px);
            display: flex;
            flex-direction: column;
            align-items: center;

        }
        &__copy{
            @extend %lightText;
            @include margin(34px 0);
        }
    }
</style>
