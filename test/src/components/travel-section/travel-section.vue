<template>
    <div class="travel container" id="travel">
        <title-element
                titleElementText="Travel"
                titleElementTextTransparent="Travel"
        />
        <div class="travel__carousel-box">

            <vue-slick-carousel v-if="components.sliderReadyToShow"
                                v-bind="settings"
                                ref="carousel"
            >
                <template #prevArrow="arrowOption">
                    <div class="custom-arrow">
                        <img :src="ARROWS.arrowLeft" :alt="ARROWS.arrowLeft">
                    </div>
                </template>
                <template #nextArrow="arrowOption">
                    <div class="custom-arrow">
                        <img :src="ARROWS.arrowRight" :alt="ARROWS.arrowRight">
                    </div>
                </template>
                <travel-sleep-slider-item
                        v-for="(item, index) in SURF_BEACHES" :key="index"
                        :header-image="item.travel.beachImage"
                        under-image-text="Airline"
                        :under-image-title="item.travel.airline"
                        :right-image="item.travel.airplaneImage"
                        slider-right-up-text="Shore"
                        :slider-right-up-title="item.travel.beachName"
                        :slider-right-up-title-after-line="item.travel.beachDestination"
                        btn-text="Book - Flight"
                        :get-index-btn="index"
                        get-slider-name="travel"
                        right-bottom-image="assets/img/travel-section/cocktail.svg"

                        :block1-title="item.travel.beachDestination"
                        block1-text="destination"

                        :block2-title="item.travel.distance"
                        block2-text="distance"

                        :block3-title="item.travel.travelTime"
                        block3-text="travel time"

                        :block4-title="'$ ' + item.travel.pricing + ' USD'"
                        block4-text="pricing"

                />
            </vue-slick-carousel>
            <div v-bind:style="'display: none;'">
                {{local.slider.getIndex}}
            </div>
        </div>
    </div>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel';
    import 'vue-slick-carousel/dist/vue-slick-carousel.css';
    // optional style for arrows & dots
    // import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

    import { eventBus } from '../../index';
    import {mapActions, mapGetters} from 'vuex'
    import BtnElement from "../btn-element.vue";

    //AOS
    import AOS from 'aos';
    import 'aos/dist/aos.css';
    AOS.init();
    AOS.init({
        duration: "1000",
        delay: "500",
    });

    export default {
        name: "travel-section",
        components:{
            BtnElement,
            VueSlickCarousel,
        },
        data(){
            return{
                local:{
                    slider:{
                        getIndex: Number,
                        btnClicked: false,
                    }
                },
                components: {
                    sliderReadyToShow: false,
                },
                settings:{
                    arrows: true,
                    dots: false,
                    // focusOnSelect: true,
                    // edgeFriction: 0.35,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // variableWidth: true,
                },
            }
        },
        mounted(){
            this.sliderReadyToShow();
        },
        updated() {
            this.btnSlideClicked();
            this.goToSlideAfterUpdateCurrentSlide();
        },
        computed:{
            ...mapGetters([
                'ARROWS',
                'SURF_TRAVEL',
                'SURF_BEACHES',
                'SURF_SLIDER'
            ])
        },
        methods:{
            ...mapActions([
                'GET_TRAVEL'
            ]),
            sliderReadyToShow(){
                this.components.sliderReadyToShow = true;
            },
            btnSlideClicked(){
                eventBus.$on('btnSliderClicked', data =>{
                    this.local.slider.btnClicked = data.dataClicked;
                    this.local.slider.getIndex = data.dataIndex;
                });
            },
            goToSlideAfterUpdateCurrentSlide(){
                let i = this.local.slider.getIndex;
                if(this.local.slider.btnClicked === true){
                    this.$refs.carousel.goTo(i);
                }
                this.local.slider.btnClicked = false;
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/global';

    .travel{
        //@include padding-top(215px);
        @extend %paddingRightContainer;
        background-color: $default-bg-color;

        &__carousel-box{
            .slick-arrow{
                top: rem(200);
            }
            .slick-next{
                right: 0;
            }
            .slick-prev{
                right: rem(65);
            }
        }
        &__slider{
            position: relative;
            @include margin-bottom(340px);
            .slider{
                &__image{
                    max-width: 1115px;
                    max-height: 780px;
                    position: relative;
                    &::after{
                        @extend %imageShadowLeft;
                    }
                }
                &__airplane-image{
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
                &__airline{
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
                    @include padding-top(100px);
                    display: flex;
                    justify-content: space-between;
                }
                &__btn{
                    display: flex;
                    justify-content: center;
                }
                &__cocktail-image{
                    position: absolute;
                    right: -150px;
                    bottom: -250px;
                }
            }
        }
    }
</style>