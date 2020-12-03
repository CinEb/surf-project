<template>
    <div class="v-popup">
        <div class="pop__inner">
            <div class="text__box">
                <h4 class="box__title">
                    {{beach}}
<!--                    airlie beach-->
                </h4>
                <div class="box__line"></div>
                <div class="box__text">
                    {{country}}
<!--                    Australia-->
                </div>
            </div>
            <div class="icon__box">
                <div class="wave">
                    <img :src="SURF_SECTION.wave">
                    <div class="icon__title">
                        {{wave}}
<!--                        9 - 13-->
                    </div>
                    <div class="icon__text">
                        surf (ft)
                    </div>
                </div>
                <div class="water">
                    <img :src="SURF_SECTION.water">
                    <div class="icon__title">
                        {{water}}
<!--                        +2.3-->
                    </div>
                    <div class="icon__text">
                        tide (ft)
                    </div>
                </div>
                <div class="wind">
                    <img :src="SURF_SECTION.wind">
                    <div class="icon__title">
                        {{wind}}
<!--                        4 SE-->
                    </div>
                    <div class="icon__text">
                        wind (kts)
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        name: "popup-element",
        props:['beach','country','wave','water','wind'],
        computed:{
            ...mapGetters([
                'SURF_SECTION'
            ])
        }
    }
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/global';

    .v-popup{
        display: inline-block;
        width: 283px;
        cursor: default;
        .pop__inner{
            @include padding(28px 32px);
            /*max-width: 283px;*/
            background-color: $secondary-bg-color;
            border-radius: 6px;
        }
        .text__box{
            .box{
                &__title{
                    @extend %text;
                    /*<!--@include font-size(18px);-->*/
                    @include font-size(18px !important);
                    /*font-size: rem(18) !important;*/
                    /*line-height: 26px;*/
                }
                &__line{
                    @include margin(8px 0);
                    width: 80px;
                    height: 1px;
                    background-color: $primary-color;
                }
                &__text{
                    @extend %text;
                    @include font-size(16px !important);
                    line-height: 19px;
                    font-weight: 500;
                    text-transform: capitalize;
                }
            }
        }
        .icon__box{
            @include margin-top(30px);
            display: flex;
            justify-content: space-between;
            .wave, .water, .wind{
                text-align: center;
            }
            .icon__title{
                @include margin(8px 0);
                @extend %text;
                @include font-size(16px !important);
                line-height: 23px;
            }
            .icon__text{
                @extend %lightText;
                @include font-size(10px !important);
                text-transform: uppercase;
            }
        }
    }
</style>