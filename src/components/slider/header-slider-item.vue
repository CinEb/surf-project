<template>
    <div class="slider__item">
        <div class="slider__item-wrapper">
            <div class="slider__item-info">
                <div class="slider__titles">
                    <text-box
                            :text="sliderSubtitle"
                            :title="sliderTitle"
                    >
                    </text-box>
                </div>
                <div class="slider__texts">
                    <text-box
                            :text="sliderSubtext"
                            :title="sliderText"
                    >
                    </text-box>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'slider-item',
  props: {
    sliderSubtitle: String,
    sliderTitle: String,
    sliderSubtext: String,
    sliderText: String
  }
}
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/global';

    .slider__item{
        @extend %paddingRightContainer;
        @extend %paddingLeftContainer;
        &-wrapper{
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            height: 100%;
            padding-bottom: rem(160);
        }
        &-info{
            text-align: right;
        }
        .slider{
            &__titles::v-deep{
                .text__box{
                    .text{
                        @extend %subTitle;
                    }
                    .title{
                        @extend %title;
                    }
                }
            }
        }
    }

    @media(max-width: 570px){
        .slider__item{
            padding: 0;
            &-wrapper{
                justify-content: center;
                align-items: center;
            }
            &-info{
                background-color: $secondary-bg-color;
                @include padding(40px 0);
                width: 100%;
            }
        }
    }
</style>
