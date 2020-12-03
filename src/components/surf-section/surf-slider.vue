<template>
    <div class="v-surf__slider">
        <div style="display: none">{{this.WINDOW_WIDTH}}</div>
        <vue-slick-carousel v-bind="settings"
                            ref="carousel"
                            @afterChange="setCurrentSlide"
                            @reInit="setCurrentSlide"
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
            <surf-slider-item v-for="(item, index) in SURF_BEACHES"
                              :key="index"
                              :slider-image="item.surfImage"
                              :slider-title="item.title"
                              :slider-location="item.location"
                              :slider-button="item.buttonText"
                              :slider-item-index="index"
            >
            </surf-slider-item>
        </vue-slick-carousel>
    </div>

</template>

<script>
    import surfSliderItem from './surf-slider-item.vue'
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    // optional style for arrows & dots
    // import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "surf-slider",
        components: {
            surfSliderItem,
            VueSlickCarousel
        },
        data(){
            return{
                settings:{
                    arrows: true,
                    dots: false,
                    focusOnSelect: true,
                    centerMode: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    // fade: false,
                    // lazyLoad: "ondemand",
                    variableWidth: true,
                },
            }
        },
        created(){
            this.GET_TRAVEL();
            this.updateSliderView();

        },
        updated() {
            this.updateSliderView();
        },

        computed:{
            ...mapGetters([
                'SURF_BEACHES',
                'SURF_SLIDER',
                'ARROWS',
                'WINDOW_WIDTH'
            ])
        },
        methods: {
            ...mapActions([
                'GET_CURRENT_SLIDE',
                'GET_TRAVEL',
            ]),
            setCurrentSlide(){
                let value = this.$refs.carousel.$refs.innerSlider.currentSlide;
                this.GET_CURRENT_SLIDE(value);
            },
            updateSliderView(){
                if(!this.WINDOW_WIDTH.isSmallDesktop && !this.WINDOW_WIDTH.isDesktop){
                    this.settings.slidesToShow = 1;
                    this.settings.centerMode = false;
                    this.settings.focusOnSelect = false;
                    this.settings.variableWidth = false;
                } else {
                    this.settings.slidesToShow = 4;
                    this.settings.centerMode = true;
                    this.settings.focusOnSelect = true;
                    this.settings.variableWidth = true;
                }
                // console.log('sliderView change')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/global';

    .v-surf__slider{
        .slick-slider::v-deep{
            .slick-list{
                max-width: 1440px;
                margin: 0 auto;
                height: 790px;
            }
            .slick-track{
                height: 100%;
                padding-top: 40px;
                position: relative;
            }
            .slick-slide:first-child{
                margin-left: 0;
            }
            .slick-slide:nth-child(even){
                margin-top: -40px;
            }
            .slick-slide{
                position: relative;
                width: 400px;
                margin-left: -40px;
                /*background-color: red;*/
                z-index: 1;
                transition: 0.35s;
                &:hover{
                    .slider__bgc{
                        transition: .35s;
                        background-color: rgba(0, 0, 0, 0.2);
                    }
                }
            }
            .slick-current{
                .slider__bgc{
                    transition: .35s;
                    background-color: rgba(0, 0, 0, 0);
                }
            }
            .custom-arrow{
                /*<!--@include padding-right(80px);-->*/
                display: inline-block;
                position: absolute;
                top: -50px;
            }
            .slick-prev{
                left: unset;
                right: rem(140);
                z-index: 10;
                content: '';
            }
            .slick-next{
                content: '';
                z-index: 10;
            }
        }

    }

    @media(max-width: 1080px){
        .v-surf__slider{
            .slick-slider::v-deep{
                .slick-slide{
                    margin-left: 0;
                }
            }
        }
    }
</style>