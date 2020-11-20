<template>
    <div class="sleep container" id="sleep">
        <title-element
                titleElementText="sleep"
                titleElementTextTransparent="sleep"
        />
        <vue-slick-carousel>
            <template #prevArrow="arrowOption">
                <div class="custom-arrow">
                    <img :src="ARROWS.arrowLeft">
                </div>
            </template>
            <template #nextArrow="arrowOption">
                <div class="custom-arrow">
                    <img :src="ARROWS.arrowRight">
                </div>
            </template>

            <travel-sleep-slider-item
                    v-for="(item, index) in SURF_BEACHES" :key="item.title"

                    :headerImage="item.resorts.resortImage"
                    sliderRightUpText="Resorts"
                    :sliderRightUpTitle="item.resorts.resortName"
                    :sliderRightUpTitleAfterLine="item.location"
                    underImageText="Rating"
                    :underImageTitle="item.resorts.resortRating"
                    :areStarsActive="true"
                    :starsCount="item.resorts.resortStars"

                    rightImage="assets/img/sleep-section/hammock.svg"

                    getSliderName="sleep"
                    :getIndexBtn="index"

                    btnText="Book - Stay"
                    rightBottomImage="assets/img/sleep-section/flower.svg"

                    :block1Title="item.resorts.resortName"
                    block1Text="resort"
                    :block1Increment="false"
                    :block1ActiveSmallText="false"

                    block2Title=" nights"
                    block2Text="# of nights"
                    :block2Increment="true"
                    :block2ActiveSmallText="true"
                    :block2SmallText="item.resorts.resortMaxNights + ' Max Nights'"
                    :block2MaxIncrementer="item.resorts.resortMaxNights"

                    block3Title=" guests"
                    block3Text="# of guests"
                    :block3Increment="true"
                    :block3ActiveSmallText="true"
                    :block3SmallText="item.resorts.resortMaxGuests + ' Max Guests'"
                    :block3MaxIncrementer="item.resorts.resortMaxGuests"

                    :block4Title="item.resorts.resortPricePerNight + ' USD'"
                    block4Text="pricing"
                    :block4Increment="false"
                    :block4ActiveSmallText="true"
                    block4SmallText="per night"

            >
            </travel-sleep-slider-item>
        </vue-slick-carousel>
    </div>
</template>

<script>

    import VueSlickCarousel from 'vue-slick-carousel';
    import 'vue-slick-carousel/dist/vue-slick-carousel.css';

    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "sleep-section",
        components: {
            VueSlickCarousel,
        },
        created(){
            this.GET_RESORTS_RATING();

        },
        computed:{
            ...mapGetters([
                'ARROWS',
                'SURF_BEACHES',
            ])
        },
        methods: {
            ...mapActions ([
                'TOGGLE_DROPDOWN',
                'TOGGLE_INFO_INCREMENT',
                'GET_RESORTS_RATING'
            ])
        }
    }

</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/global';

    .sleep::v-deep{
        @extend %paddingRightContainer;
        background-color: $default-bg-color;

        .custom-arrow{
            top: 0;
            right: 0;
        }
        .slick-prev{
            right: rem(65);
        }

        .slider__right-bottom-image{
            bottom: -100px !important;
            right: 0 !important;
        }

        .v-slider-item{
            .v-info-block{
                .block__name{
                    text-align: right;
                }
            }
        }
    }

</style>